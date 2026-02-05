#!/usr/bin/env python3
"""Pushes a batch of URLs to Bing via the IndexNow API.

Usage:
    INDEXNOW_BATCH_SIZE=100 python3 scripts/indexnow_push.py

Requirements:
    pip install requests
"""
from __future__ import annotations

import json
import os
from pathlib import Path
from typing import List
from urllib.parse import urlparse

import requests

ROOT = Path(__file__).resolve().parents[1]
URLS_FILE = ROOT / "urls.txt"
KEY_FILE = ROOT / "public" / "indexnow-key.txt"
DEFAULT_BATCH_SIZE = 100
INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"


def load_urls(limit: int | None = None) -> List[str]:
    if not URLS_FILE.exists():
        raise FileNotFoundError(f"Fichier {URLS_FILE} introuvable.")
    urls = [line.strip() for line in URLS_FILE.read_text().splitlines() if line.strip()]
    if not urls:
        raise ValueError("La liste d'URLs est vide.")
    if limit:
        return urls[:limit]
    return urls


def load_key() -> str:
    env_key = os.environ.get("INDEXNOW_KEY")
    if env_key:
        return env_key.strip()
    if not KEY_FILE.exists():
        raise FileNotFoundError(
            "Clé IndexNow introuvable. Renseignez INDEXNOW_KEY ou créez public/indexnow-key.txt"
        )
    key = KEY_FILE.read_text().strip()
    if not key:
        raise ValueError("Le fichier de clé IndexNow est vide.")
    return key


def build_payload(urls: List[str], key: str) -> dict:
    host = urlparse(urls[0]).netloc
    scheme = urlparse(urls[0]).scheme or "https"
    key_location = f"{scheme}://{host}/{key}.txt"
    return {
        "host": host,
        "key": key,
        "keyLocation": key_location,
        "urlList": urls,
    }


def push_to_indexnow(urls: List[str]) -> None:
    key = load_key()
    payload = build_payload(urls, key)
    response = requests.post(INDEXNOW_ENDPOINT, json=payload, timeout=30)
    if response.status_code != 200:
        raise RuntimeError(
            f"IndexNow error {response.status_code}: {response.text[:500]}"
        )
    print(f"IndexNow OK: {len(urls)} URLs envoyées")


def main() -> None:
    batch_size = int(os.environ.get("INDEXNOW_BATCH_SIZE", DEFAULT_BATCH_SIZE))
    urls = load_urls(batch_size)
    push_to_indexnow(urls)


if __name__ == "__main__":
    main()
