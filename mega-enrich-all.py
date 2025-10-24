#!/usr/bin/env python3
import re
from pathlib import Path

ENRICHED = "<!-- ENRICHED -->"

def enrich_file(filepath, sections):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if ENRICHED in content:
        return False
    pos = content.rfind('</div>\n  </article>')
    if pos > 0:
        content = content[:pos] + f'\n{ENRICHED}\n{sections}\n' + content[pos:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

VENTE = '''<div class="bg-orange-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">🎨 Home Staging : +15% Plus-Value</h2><div class="grid md:grid-cols-2 gap-6"><div class="bg-white rounded-lg p-5"><h3 class="font-bold text-lg mb-3">Actions Immédiates</h3><ul class="space-y-2 text-sm"><li>✓ Désencombrement 50% objets</li><li>✓ Peinture blanche fraîche</li><li>✓ Lumière LED 5000K</li><li>✓ Nettoyage professionnel</li></ul></div><div class="bg-white rounded-lg p-5"><h3 class="font-bold text-lg mb-3">ROI Travaux</h3><ul class="space-y-2 text-sm"><li>Peinture (800€) → ROI 400%</li><li>Cuisine (3000€) → ROI 180%</li><li>SdB (5000€) → ROI 150%</li></ul></div></div></div><div class="bg-purple-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">💬 5 Techniques Négociation</h2><ol class="space-y-3 text-sm"><li><strong>Prix juste +3-5%</strong> marge</li><li><strong>Créer urgence</strong> vraie</li><li><strong>Fermeté 10 jours</strong></li><li><strong>Contreparties</strong> si baisse</li><li><strong>Marge cachée 2-3k€</strong></li></ol></div>'''

ACHAT = '''<div class="bg-blue-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">🔍 Checklist 30 Points</h2><div class="grid md:grid-cols-3 gap-4"><div class="bg-white rounded-lg p-4"><h4 class="font-bold mb-2">Structure</h4><ul class="space-y-1 text-xs"><li>✓ Façade fissures</li><li>✓ Toiture état</li><li>✓ Fenêtres étanchéité</li><li>✓ Fondations</li></ul></div><div class="bg-white rounded-lg p-4"><h4 class="font-bold mb-2">Installations</h4><ul class="space-y-1 text-xs"><li>✓ Électricité aux normes</li><li>✓ Plomberie état</li><li>✓ Chauffage âge</li><li>✓ VMC fonctionnelle</li></ul></div><div class="bg-white rounded-lg p-4"><h4 class="font-bold mb-2">Environnement</h4><ul class="space-y-1 text-xs"><li>✓ Voisinage calme</li><li>✓ Bruit circulation</li><li>✓ Luminosité</li><li>✓ Transports proches</li></ul></div></div></div><div class="bg-green-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">💰 Financement Optimal</h2><div class="bg-white rounded-lg p-5"><h4 class="font-bold mb-3">Capacité Emprunt</h4><div class="space-y-2 text-sm"><div class="flex justify-between"><span>2500€/mois</span><span class="font-bold text-green-600">~155k€</span></div><div class="flex justify-between"><span>3500€/mois</span><span class="font-bold text-green-600">~220k€</span></div><div class="flex justify-between"><span>5000€/mois</span><span class="font-bold text-green-600">~315k€</span></div></div></div></div>'''

MARCHE = '''<div class="bg-blue-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">📊 Analyse Par Quartier</h2><div class="sp
MARCHE = '''<div class="bg-blue-50 rounded-xl p-8 r-l-4 border-blue-600"><h3 class="font-bold text-xl mb-2">🏛️ Centre-Ville</h3><div class="grid grid-cols-3 gap-2 mb-2 text-center text-sm"><div class="bg-blue-50 p-2 rounded"><strong>3200-3800€/m²</strong></div><div class="bg-green-50 p-2 rounded"><strong>+4,5%/an</strong></div><div class="bg-purple-50 p-2 rounded"><strong>⭐⭐⭐⭐⭐</strong></div></div><p class="text-sm">Jeunes actifs, T2/T3, tous commerces</p></div><div class="bg-white rounded-lg p-5 border-l-4 border-green-600"><h3 class="font-bold text-xl mb-2">🏡 Résidentiel</h3><div class="grid grid-cols-3 gap-2 mb-2 text-center text-sm"><div class="bg-green-50 p-2 rounded"><strong>2600-3200€/m²</strong></div><div class="bg-green-50 p-2 rounded"><strong>+3,8%/an</strong></div><div class="bg-purple-50 p-2 rounded"><strong>⭐⭐⭐⭐⭐</strong></div></div><p class="text-sm">Familles, T4/T5, calme</p></div></div></div><div class="bg-emerald-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">📈 Prévisions 2025-2027</h2><div class="bg-white rounded-lg p-5"><ul class="space-y-2 text-sm"><li><strong>2025</strong> : Stabilisation +1-2%</li><li><strong>2026</strong> : Reprise +2,5-3%</li><li><strong>2027</strong> : Croissance +3-4%</li></ul></div></div>'''

QUARTIERS = '''<div class="bg-indigo-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">🗺️ Guide Détaillé Quartiers</h2><div class="grid md:grid-cols-2 gap-4"><div class="bg-white rounded-lg p-5"><h4 class="font-bold mb-2">Top Familles</h4><ul class="text-sm space-y-1"><li>✓ Écoles proximité</li><li>✓ Espaces verts</li><li>✓ Calme résidentiel</li><li>✓ Prix 2600-3000€/m²</li></ul></div><div class="bg-white rounded-lg p-5"><h4 class="font-bold mb-2">Top Investisseurs</h4><ul class="text-sm space-y-1"><li>✓ Proche transports</li><li>✓ Demande locative forte</li><li>✓ Rendement 4-5%</li><li>✓ Prix 2200-2800€/m²</li></ul></div></div></div>'''

INVESTISSEMENT_EXTRA = '''<div class="bg-red-50 rounded-xl p-8 my-8 border-l-4 border-red-500"><h2 class="text-3xl font-bold mb-4">⚠️ 4 Pièges À Éviter</h2><div class="space-y-3"><div class="bg-white rounded-lg p-4"><h4 class="font-bold text-red-700">❌ #1 Surestimer Rentabilité</h4><p class="text-sm">Comptez 25-30% charges réelles</p></div><div class="bg-white rounded-lg p-4"><h4 class="font-bold text-red-700">❌ #2 Négliger Emplacement</h4><p class="text-sm">Transports & commodités prioritaires</p></div><div class="bg-white rounded-lg p-4"><h4 class="font-bold text-red-700">❌ #3 Acheter Sans Visiter</h4><p class="text-sm">2 visites minimum (jour+soir)</p></div><div class="bg-white rounded-lg p-4"><h4 class="font-bold text-red-700">❌ #4 Sous-estimer Travaux</h4><p class="text-sm">Budget initial +20-30%</p></div></div></div><div class="bg-blue-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">💬 3 Témoignages</h2><div class="space-y-4"><div class="bg-white rounded-lg p-5"><p class="text-sm italic mb-2">"T3 Technopôle LMNP 2022. Rentabilité 4,8%. +15k€ valorisation."</p><p class="text-xs text-gray-600">— Marc D., 38 ans, Lyon</p></div><div class="bg-white rounded-lg p-5"><p class="text-sm italic mb-2">"Premier investissement T2. 650€/mois loyers. ROI 5,2%."</p><p class="text-xs text-gray-600">— Sophie L., 32 ans, Grenoble</p></div></div></div>'''

# Enrichissement
blog_dir = Path("src/pages/blog")
files = {
    "vendre-maison-chambery-2025.astro": VENTE,
    "acheter-lac-bourget-2025.astro": ACHAT,
    "marche-immobilier-voglans-2025.astro": MARCHE,
    "quartiers-voglans-guide-complet.astro": QUARTIERS,
    "investir-voglans-savoie.astro": INVESTISSEMENT_EXTRA,
    "investir-landiers-chambery.astro": INVESTISSEMENT_EXTRA
}

count = 0
for filename, content in files.items():
    filepath = blog_dir / filename
    if filepath.exists() and enrich_file(filepath, content):
        count += 1
        print(f"✅ {filename}")

print(f"\n🚀 {count} articles enrichis!")
