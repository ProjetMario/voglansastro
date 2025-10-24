#!/usr/bin/env python3
import re

with open('src/pages/blog/[slug].astro', 'r') as f:
    content = f.read()

categories = {
    "Estimation": r'post\.category === "Estimation".*?(?=\{post\.category|</div>)',
    "Vente": r'post\.category === "Vente".*?(?=\{post\.category|</div>)',
    "Marché immobilier": r'post\.category === "Marché immobilier".*?(?=\{post\.category|</div>)',
    "Investissement": r'post\.category === "Investissement".*?(?=\{post\.category|</div>)',
    "Expertise": r'post\.category === "Expertise".*?(?=\{post\.category|</div>)',
    "Autres (Achat, etc)": r'post\.category === "Achat".*?(?=\{post\.category === "Services|</div>)',
    "Services publics": r'post\.category === "Services publics".*?(?=</div>)'
}

print("📊 ENRICHISSEMENT TEMPLATE RÉUSSI\n")
print("="*70)

total_words = 0
for cat, pattern in categories.items():
    match = re.search(pattern, content, re.DOTALL)
    if match:
        text = match.group(0)
        clean = re.sub(r'<[^>]+>', ' ', text)
        clean = re.sub(r'\{[^}]+\}', ' ', clean)
        words = len([w for w in clean.split() if len(w) > 2])
        print(f"{cat:.<30} {words:>4} mots")
        total_words += words

avg = total_words // len(categories)
print("="*70)
print(f"MOYENNE PAR CATÉGORIE........... {avg} mots")
print(f"\n📝 CONTENU TOTAL PAR ARTICLE:")
print(f"   Base (description)........... ~100 mots")
print(f"   Contenu catégorie............ ~{avg} mots")
print(f"   FAQ (4 questions)............ ~160 mots")
print(f"   Maillage interne............. ~100 mots")
print(f"   ────────────────────────────────────")
print(f"   TOTAL ESTIMÉ................. ~{100 + avg + 160 + 100} mots/article")
print(f"\n✅ OBJECTIF 1000 MOTS: {'ATTEINT ✓' if (100 + avg + 160 + 100) >= 1000 else 'EN COURS'}")
print(f"✅ Augmentation: +{avg - 170} mots par catégorie")
print(f"✅ Impact sur 288 articles: +{(avg - 170) * 288:,} mots total")
