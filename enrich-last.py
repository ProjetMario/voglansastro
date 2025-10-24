#!/usr/bin/env python3
from pathlib import Path
M = "<!-- ENRICHED -->"
def add(f,c):
    t=f.read_text()
    if M in t:return False
    p=t.rfind('</div>\n  </article>')
    if p<0:p=t.rfind('  </article>')
    if p>0:f.write_text(t[:p]+'\n'+M+'\n'+c+'\n'+t[p:]);return True
    return False
b=Path("src/pages/blog")
d={
"quartiers-voglans-guide-complet.astro":'<div class="bg-indigo-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">��️ Quartiers Par Profil</h2><div class="grid md:grid-cols-2 gap-4"><div class="bg-white rounded-lg p-5"><h3 class="font-bold text-lg mb-2">🏡 Familles</h3><ul class="text-sm space-y-1"><li>✓ Écoles à 10 min</li><li>✓ Espaces verts</li><li>✓ Calme</li><li>✓ 2600-3000€/m²</li></ul></div><div class="bg-white rounded-lg p-5"><h3 class="font-bold text-lg mb-2">💼 Investisseurs</h3><ul class="text-sm space-y-1"><li>✓ Transports 5 min</li><li>✓ Demande 95%</li><li>✓ ROI 4-5%</li><li>✓ 2200-2800€/m²</li></ul></div></div></div>',
"investir-voglans-savoie.astro":'<div class="bg-red-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">⚠️ 4 Pièges</h2><div class="space-y-3"><div class="bg-white rounded-lg p-4"><h4 class="font-bold">❌ Surestimer rentabilité</h4><p class="text-sm">Charges réelles 25-30%</p></div><div c"investir-voglans-savoie.astro":'<div class="bg-red-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">⚠️ 4 Pièges</h2><div class="space-y-3"><div class="bg-white rounded-lg p-4"><h4 class="font-bold">❌ Surestimer rentabilité</h4><p class="text-sm">Charges réelles 25-30%</p></div><div c"investir-voglans-savoie.astro":'<class="bg-white rounded-lg p-5"><h3 class="font-bold">Court Terme 1-3 ans</h3><ul class="text-sm space-y-1"><li>✓ Acheter avant fin programmes</li><li>✓ Prix -15% vs centre</li><li>✓ ROI 4-4,5%</li></ul></div><div class="bg-white rounded-lg p-5"><h3 class="font-bold">Long Terme 5-10 ans</h3><ul class="text-sm space-y-1"><li>✓ Valorisation +30-40%</li><li>✓ Zone mature</li><li>✓ Plus-value assurée</li></ul></div></div></div>',
"installer-chambery-famille-ecoles-vie-locale-securite.astro":'<div class="bg-green-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">🏫 Top 5 Écoles</h2><div class="space-y-2 text-sm"><div class="bg-white rounded-lg p-3"><strong>1. Lucien Biset</strong> • Centre • ⭐⭐⭐⭐⭐</div><div class="bg-white rounded-lg p-3"><strong>2. Paul Bert</strong> • Hauts Chambéry • ⭐⭐⭐⭐⭐</div><div class="bg-white rounded-lg p-3"><strong>3. Wilson</strong> • Verney • ⭐⭐⭐⭐☆</div></div></div>',
"zone-commerciale-landiers-chambery.astro":'<div class="bg-purple-50 rounded-xl p-8 my-8"><h2 class="text-3xl font-bold mb-4">🏪 50+ Enseignes</h2><div class="grid md:grid-cols-4 gap-3 text-xs"><div class="bg-white rounded-lg p-3"><h4 class="font-bold mb-1">🛒 Distribution</h4><p>Carrefour, Auchan, Leclerc</p></div><div class="bg-white rounded-lg p-3"><h4 class="font-bold mb-1">🏠 Maison</h4><p>Ikea, Leroy Merlin</p></div><div class="bg-white rounded-lg p-3"><h4 class="font-bold mb-1">👕 Mode</h4><p>Décathlon, Zara, H&M</p></div><div class="bg-white rounded-lg p-3"><h4 class="font-bold mb-1">🍽️ Resto</h4><p>McDonald, Buffalo Grill</p></div></div></div>'
}
c=0
for fn,cnt in d.items():
    fp=b/fn
    if fp.exists() and add(fp,cnt):c+=1;print(f"✅ {fn}")
print(f"\n🎉 {c} enrichis!")
