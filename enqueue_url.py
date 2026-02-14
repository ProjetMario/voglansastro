#!/usr/bin/env python3
"""Add URLs to the priority queue for the next Indexing API push.

Usage:
    python enqueue_url.py https://agencevoglans.fr/estimation/chambery
    python enqueue_url.py url1 url2 url3
    echo "https://agencevoglans.fr/new-page" | python enqueue_url.py --stdin

The URLs will be processed first (before the rotating master list) on the next
run of indexing_push_daily.py.
"""
from __future__ import annotations

import sys
from pathlib import Path

QUEUE_FILE = Path("urls_to_push.txt")
BASE_URL = "https://agencevoglans.fr"


def normalize_url(url: str) -> str:
    """Ensure URL has proper format."""
    url = url.strip()
    if not url:
        return ""
    if not url.startswith("http"):
        # Assume relative path
        url = f"{BASE_URL}{url if url.startswith('/') else '/' + url}"
    return url


def enqueue(urls: list[str]) -> int:
    """Add URLs to the queue file. Returns count of URLs added."""
    existing = set()
    if QUEUE_FILE.exists():
        existing = set(line.strip() for line in QUEUE_FILE.read_text().splitlines() if line.strip())
    
    added = 0
    with QUEUE_FILE.open("a") as f:
        for url in urls:
            normalized = normalize_url(url)
            if normalized and normalized not in existing:
                f.write(normalized + "\n")
                existing.add(normalized)
                added += 1
                print(f"✅ Queued: {normalized}")
            elif normalized in existing:
                print(f"⏭️  Already queued: {normalized}")
    
    return added


def main() -> None:
    urls = []
    
    if "--stdin" in sys.argv:
        urls = [line.strip() for line in sys.stdin if line.strip()]
    else:
        urls = [arg for arg in sys.argv[1:] if not arg.startswith("-")]
    
    if not urls:
        print("Usage: python enqueue_url.py <url1> [url2] [url3] ...")
        print("       python enqueue_url.py --stdin  (read from stdin)")
        sys.exit(1)
    
    added = enqueue(urls)
    total = len(QUEUE_FILE.read_text().splitlines()) if QUEUE_FILE.exists() else 0
    print(f"\n📋 Queue: {total} URLs pending (added {added} new)")


if __name__ == "__main__":
    main()
