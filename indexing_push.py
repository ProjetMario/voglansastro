#!/usr/bin/env python3
"""Pushes URLs listed in urls.txt to Google Indexing API."""
from pathlib import Path
from time import sleep
import os

from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/indexing"]
URLS_FILE = Path("urls.txt")
DELAY_SECONDS = 1.2


def main():
    if "GOOGLE_APPLICATION_CREDENTIALS" not in os.environ:
        raise EnvironmentError("GOOGLE_APPLICATION_CREDENTIALS non défini.")

    if not URLS_FILE.exists():
        raise FileNotFoundError(f"Fichier {URLS_FILE} introuvable.")

    urls = [line.strip() for line in URLS_FILE.read_text().splitlines() if line.strip()]
    if not urls:
        raise ValueError("La liste d'URLs est vide.")

    creds = service_account.Credentials.from_service_account_file(
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"], scopes=SCOPES
    )
    service = build("indexing", "v3", credentials=creds, cache_discovery=False)
    publisher = service.urlNotifications().publish

    for idx, url in enumerate(urls, start=1):
        body = {"url": url, "type": "URL_UPDATED"}
        response = publisher(body=body).execute()
        meta = response.get("urlNotificationMetadata", {})
        latest_update = meta.get("latestUpdate", {})
        print(
            f"[{idx}/{len(urls)}] {url} -> {latest_update.get('type', 'OK')} at {latest_update.get('notifyTime', 'N/A')}"
        )
        sleep(DELAY_SECONDS)


if __name__ == "__main__":
    main()
