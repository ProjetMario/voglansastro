#!/usr/bin/env python3
import re

with open('src/data/posts.js', 'r') as f:
    content = f.read()

# Compter les articles
articles = re.findall(r'href:\s*"([^"]+)"', content)
categories = re.findall(r'category:\s*"([^"]+)"', content)

print(f"📊 ANALYSE DES 300 ARTICLES DU BLOG\n")
print(f"✅ Total articles trouvés: {len(articles)}\n")

# Compter par catégorie
from collections import Counter
cat_counts = Counter(categories)

print("RÉPARTITION PAR CATÉGORIE:")
for cat, count in cat_counts.most_common():
    print(f"  • {cat}: {count} articles")

print(f"\n📝 TOTAL VÉRIFIÉ: {sum(cat_counts.values())} articles")
