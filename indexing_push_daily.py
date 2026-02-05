#!/usr/bin/env python3
"""Send a rotating batch of URLs to the Google Indexing API each time it runs.

- Reads the master list from urls.txt
- Persists progress in indexing_state.json so we never resend the same slice twice in a row
- Batch size defaults to 100 but can be overridden via INDEXING_BATCH_SIZE env var
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
STATE_FILE = Path("indexing_state.json")
DEFAULT_BATCH_SIZE = 100
DELAY_SECONDS = 1.2  # stay well below the 200 req/jour quota


def load_urls() -> List[str]:
    if not URLS_FILE.exists():
        raise FileNotFoundError(f"Fichier {URLS_FILE} introuvable.")
    urls = [line.strip() for line in URLS_FILE.read_text().splitlines() if line.strip()]
    if not urls:
        raise ValueError("La liste d'URLs est vide.")
    return urls


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
    batch_size = int(os.environ.get("INDEXING_BATCH_SIZE", DEFAULT_BATCH_SIZE))
    start_index = load_state(len(urls))
    batch, next_index = get_batch(urls, start_index, batch_size)

    creds = get_credentials()
    service = build("indexing", "v3", credentials=creds, cache_discovery=False)
    publisher = service.urlNotifications().publish

    for idx, url in enumerate(batch, start=1):
        body = {"url": url, "type": "URL_UPDATED"}
        response = publisher(body=body).execute()
        meta = response.get("urlNotificationMetadata", {})
        latest_update = meta.get("latestUpdate", {})
        print(
            f"[{idx}/{len(batch)}] {url} -> {latest_update.get('type', 'OK')} at {latest_update.get('notifyTime', 'N/A')}"
        )
        sleep(DELAY_SECONDS)

    save_state(next_index)
    print(f"Batch terminé. Prochain index: {next_index}")


if __name__ == "__main__":
    main()
