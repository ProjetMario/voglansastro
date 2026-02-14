#!/usr/bin/env python3
"""Send a rotating batch of URLs to the Google Indexing API each time it runs.

- Reads the master list from urls.txt
- Optionally processes priority queue from urls_to_push.txt (new/updated URLs)
- Persists progress in indexing_state.json so we never resend the same slice twice in a row
- Batch size defaults to 40 (safe for 200 req/day quota) - override via INDEXING_BATCH_SIZE env var
- Run once daily via cron to stay within quota
"""
from __future__ import annotations

import json
import os
from pathlib import Path
from time import sleep
from typing import List

from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/indexing"]
URLS_FILE = Path("urls.txt")
QUEUE_FILE = Path("urls_to_push.txt")  # Priority queue for new/updated URLs
STATE_FILE = Path("indexing_state.json")
DEFAULT_BATCH_SIZE = 40  # Safe default: 40 URLs/day leaves margin for manual requests
DELAY_SECONDS = 1.2  # stay well below the 200 req/jour quota
MAX_DAILY_REQUESTS = 200  # Google Indexing API hard limit


def load_urls() -> List[str]:
    if not URLS_FILE.exists():
        raise FileNotFoundError(f"Fichier {URLS_FILE} introuvable.")
    urls = [line.strip() for line in URLS_FILE.read_text().splitlines() if line.strip()]
    if not urls:
        raise ValueError("La liste d'URLs est vide.")
    return urls


def load_queue() -> List[str]:
    """Load priority queue of new/updated URLs to push first."""
    if not QUEUE_FILE.exists():
        return []
    urls = [line.strip() for line in QUEUE_FILE.read_text().splitlines() if line.strip()]
    return urls


def clear_queue(processed_count: int) -> None:
    """Remove processed URLs from the queue file."""
    if not QUEUE_FILE.exists():
        return
    lines = QUEUE_FILE.read_text().splitlines()
    remaining = lines[processed_count:]
    if remaining:
        QUEUE_FILE.write_text("\n".join(remaining) + "\n")
    else:
        QUEUE_FILE.unlink()  # Delete empty queue file


def load_state(total_urls: int) -> int:
    if STATE_FILE.exists():
        try:
            data = json.loads(STATE_FILE.read_text())
            idx = int(data.get("next_index", 0))
            return idx % total_urls
        except (ValueError, json.JSONDecodeError):
            return 0
    return 0


def save_state(next_index: int) -> None:
    STATE_FILE.write_text(json.dumps({"next_index": next_index}, indent=2))


def get_batch(urls: List[str], start: int, batch_size: int) -> (List[str], int):
    total = len(urls)
    batch_size = min(batch_size, total)
    end = start + batch_size
    if end <= total:
        batch = urls[start:end]
        new_index = end % total
    else:
        wrap = end % total
        batch = urls[start:] + urls[:wrap]
        new_index = wrap
    return batch, new_index


def get_credentials():
    creds_path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    if not creds_path:
        raise EnvironmentError("GOOGLE_APPLICATION_CREDENTIALS non défini.")
    return service_account.Credentials.from_service_account_file(creds_path, scopes=SCOPES)


def main() -> None:
    urls = load_urls()
    queue = load_queue()
    batch_size = int(os.environ.get("INDEXING_BATCH_SIZE", DEFAULT_BATCH_SIZE))
    
    # Safety check: never exceed daily limit
    if batch_size > MAX_DAILY_REQUESTS:
        print(f"⚠️  Batch size {batch_size} exceeds daily limit {MAX_DAILY_REQUESTS}, capping.")
        batch_size = MAX_DAILY_REQUESTS
    
    creds = get_credentials()
    service = build("indexing", "v3", credentials=creds, cache_discovery=False)
    publisher = service.urlNotifications().publish
    
    total_sent = 0
    queue_processed = 0
    
    # 1. Process priority queue first (new/updated URLs)
    if queue:
        queue_batch = queue[:batch_size]
        print(f"📋 Processing {len(queue_batch)} URLs from priority queue...")
        for idx, url in enumerate(queue_batch, start=1):
            body = {"url": url, "type": "URL_UPDATED"}
            response = publisher(body=body).execute()
            meta = response.get("urlNotificationMetadata", {})
            latest_update = meta.get("latestUpdate", {})
            print(
                f"[Q {idx}/{len(queue_batch)}] {url} -> {latest_update.get('type', 'OK')} at {latest_update.get('notifyTime', 'N/A')}"
            )
            sleep(DELAY_SECONDS)
            total_sent += 1
            queue_processed += 1
        clear_queue(queue_processed)
    
    # 2. Fill remaining quota with rotating batch from master list
    remaining_quota = batch_size - total_sent
    if remaining_quota > 0:
        start_index = load_state(len(urls))
        batch, next_index = get_batch(urls, start_index, remaining_quota)
        print(f"🔄 Processing {len(batch)} URLs from master list (index {start_index})...")
        for idx, url in enumerate(batch, start=1):
            body = {"url": url, "type": "URL_UPDATED"}
            response = publisher(body=body).execute()
            meta = response.get("urlNotificationMetadata", {})
            latest_update = meta.get("latestUpdate", {})
            print(
                f"[M {idx}/{len(batch)}] {url} -> {latest_update.get('type', 'OK')} at {latest_update.get('notifyTime', 'N/A')}"
            )
            sleep(DELAY_SECONDS)
            total_sent += 1
        save_state(next_index)
        print(f"Prochain index master: {next_index}")
    
    print(f"\n✅ Total envoyé: {total_sent} URLs (quota restant estimé: {MAX_DAILY_REQUESTS - total_sent})")


if __name__ == "__main__":
    main()
