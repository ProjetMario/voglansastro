#!/usr/bin/env python3
"""Compte les mots dans le template [slug].astro par catégorie"""
import re

with open('src/pages/blog/[slug].astro', 'r') as f:
    content = f.read()

# Extraire le contenu entre les balises de catégorie
categories = {}

patterns = {
    "Estimation": r'post\.category === "Estimation".*?</>',
    "Vente": r'post\.category === "Vente".*?</>',
    "Marché immobilier": r'post\.category === "Marché immobilier".*?</>',
    "Investissement": r'post\.category === "Investissement".*?</>',
    "Expertise": r'post\.category === "Expertise".*?</>',
}

for cat, pattern in patterns.items():
    match = re.search(pattern, content, re.DOTALL)
    if match:
        text = match.group(0)
        # Enlever les balises HTML et JSX
        text = re.sub(r'<[^>]+>', '', text)
        text = re.sub(r'{[^}]+}', '', text)
        # Compter les mots
        words = len(text.split())
        categories[cat] = words

print("📊 CONTENU PAR CATÉGORIE DANS LE TEMPLATE\n")
for cat, words in sorted(categories.items(), key=lambda x: x[1], reverse=True):
    print(f"  {cat:.<25} {words:>4} mots")

print(f"\n✅ Moyenne: {sum(categories.values())//len(categories)} mots par catégorie")

# FAQ : 4 questions × ~40 mots = 160 mots
# Maillage interne : 5 articles × 20 mots = 100 mots  
# Base (description + structure) : ~100 mots

total_moyen = sum(categories.values())//len(categories) + 160 + 100 + 100
print(f"📝 Total estimé par article: {total_moyen} mots")
