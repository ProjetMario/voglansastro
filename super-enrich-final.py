#!/usr/bin/env python3
"""SUPER ENRICHISSEMENT FINAL - Maximiser articles petits"""
from pathlib import Path

MARK = "<!-- SUPER_ENRICHED -->"

def enrich(fp, content):
    text = fp.read_text(encoding='utf-8')
    if MARK in text:
        return False
    pos = text.rfind('</article>')
    if pos > 0:
        text = text[:pos] + '\n' + MARK + '\n' + content + '\n  </article>' + text[pos+10:]
        fp.write_text(text, encoding='utf-8')
        return True
    return False

blog = Path("src/pages/blog")

# Super enrichissement pour articles <20K
enrichments = {

"investir-voglans-savoie.astro": '''
<div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 my-12">
  <h2 class="text-3xl font-bold mb-6">🎓 Guide Débutant : 7 Étapes Investissement</h2>
  <div class="space-y-5">
    <div class="bg-white rounded-lg p-6 shadow-md">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
        <div>
          <h3 class="text-xl font-bold mb-2">Définir Budget & Objectifs</h3>
          <p class="text-sm text-gray-700">Capacité emprunt = Revenus × 33% × 300. Exemple : 3000€/mois → ~190k€ sur 20 ans.</p>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-lg p-6 shadow-md">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
        <div>
          <h3 class="text-xl font-bold mb-2">Étudier Marché Local</h3>
          <p class="text-sm text-gray-700">Analysez 30 annonces similaires. Prix/m² moyen, évolution 5 ans, demande locative.</p>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-lg p-6 shadow-md">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
        <div>
          <h3 class="text-xl font-bold mb-2">Sélectionner Le Bon Bien</h3>
          <p class="text-sm text-gray-700">Emplacement > État. Transports + commerces < 10 min = location facile.</p>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-lg p-6 shadow-md">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
        <div>
          <h3 class="text-xl font-bold mb-2">Négocier & Financer</h3>
          <p class="text-sm text-gray-700">Comparez 3 banques. Négociez taux -0,2% = -10k€ sur 20 ans.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 my-12 border-l-4 border-emerald-500">
  <h2 class="text-3xl font-bold mb-6">📊 Simulation Complète T2 Voglans</h2>
  <div class="bg-white rounded-lg p-6 shadow-md">
    <h3 class="text-xl font-bold text-emerald-700 mb-4">Investissement LMNP</h3>
    <div class="grid md:grid-cols-2 gap-6 text-sm">
      <div>
        <h4 class="font-bold mb-3">💰 Investissement Initial</h4>
        <div class="space-y-2">
          <div class="flex justify-between p-2 bg-gray-50 rounded"><span>Prix achat T2</span><strong>145 000 €</strong></div>
          <div class="flex justify-between p-2 bg-gray-50 rounded"><span>Frais notaire (7,5%)</span><strong>10 875 €</strong></div>
          <div class="flex justify-between p-2 bg-gray-50 rounded"><span>Meubles complet</span><strong>6 000 €</strong></div>
          <div class="flex justify-between p-2 bg-gray-50 rounded"><span>Travaux rafraîchissement</span><strong>3 000 €</strong></div>
          <div class="flex justify-between p-3 bg-emerald-50 rounded font-bold"><span>TOTAL</span><strong class="text-emerald-700">164 875 €</strong></div>
        </div>
      </div>
      <div>
        <h4 class="font-bold mb-3">📈 Revenus & Rentabilité</h4>
        <div class="space-y-2">
          <div class="flex justify-between p-2 bg-gray-50 rounded"><span>Loyer meublé/mois</span><strong>680 €</strong></div>
          <div class="flex justify-between p-2 bg-gray-50 rounded"><span>Loyers annuels</span><strong>8 160 €</strong></div>
          <div class="flex justify-between p-2 bg-gray-50 rounded"><span>Charges (28%)</span><strong>-2 285 €</strong></div>
          <div class="flex justify-between p-3 bg-green-50 rounded font-bold"><span>Revenus nets</span><strong class="text-green-700">5 875 €</strong></div>
          <div class="flex justify-between p-3 bg-emerald-50 rounded font-bold"><span>Rentabilité nette</span><strong class="text-emerald-700">3,6%</strong></div>
        </div>
      </div>
    </div>
    <div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r">
      <p class="text-sm text-gray-700"><strong>💡 Avec LMNP :</strong> Amortissement 85% bien → Revenus non imposés 15 ans → Rentabilité réelle 5,2% net d'impôts !</p>
    </div>
  </div>
</div>
''',

"quartiers-voglans-guide-complet.astro": '''
<div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 my-12">
  <h2 class="text-3xl font-bold mb-6">🏘️ Comparatif Détaillé 5 Meilleurs Quartiers</h2>
  <div class="overflow-x-auto">
    <table class="w-full bg-white rounded-lg overflow-hidden shadow-lg">
      <thead class="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <tr>
          <th class="px-4 py-3 text-left">Quartier</th>
          <th class="px-4 py-3 text-left">Prix/m²</th>
          <th class="px-4 py-3 text-left">Profil Idéal</th>
          <th class="px-4 py-3 text-left">Atouts Majeurs</th>
          <th class="px-4 py-3 text-center">Note</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 text-sm">
        <tr class="hover:bg-orange-50 transition-colors">
          <td class="px-4 py-3 font-bold">Centre Village</td>
          <td class="px-4 py-3">2 800-3 100 €</td>
          <td class="px-4 py-3">Familles, retraités</td>
          <td class="px-4 py-3">Tous commerces, école, transports</td>
          <td class="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
        </tr>
        <tr class="hover:bg-orange-50 transition-colors">
          <td class="px-4 py-3 font-bold">Proche Technopôle</td>
          <td class="px-4 py-3">2 600-2 900 €</td>
          <td class="px-4 py-3">Investisseurs, actifs</td>
          <td class="px-4 py-3">Demande locative forte, ROI 4,5%</td>
          <td class="px-4 py-3 text-center">⭐⭐⭐⭐⭐</td>
        </tr>
        <tr class="hover:bg-orange-50 transition-colors">
          <td class="px-4 py-3 font-bold">Proche Lac</td>
          <td class="px-4 py-3">3 000-3 400 €</td>
          <td class="px-4 py-3">Familles aisées</td>
          <td class="px-4 py-3">Cadre exceptionnel, valorisation</td>
          <td class="px-4 py-3 text-center">⭐⭐⭐⭐☆</td>
        </tr>
        <tr class="hover:bg-orange-50 transition-colors">
          <td class="px-4 py-3 font-bold">Zones Pavillonnaires</td>
          <td class="px-4 py-3">2 400-2 700 €</td>
          <td class="px-4 py-3">Primo-accédants</td>
          <td class="px-4 py-3">Calme, maisons récentes, prix doux</td>
          <td class="px-4 py-3 text-center">⭐⭐⭐⭐☆</td>
        </tr>
        <tr class="hover:bg-orange-50 transition-colors">
          <td class="px-4 py-3 font-bold">Périphérie Développement</td>
          <td class="px-4 py-3">2 200-2 500 €</td>
          <td class="px-4 py-3">Investisseurs long terme</td>
          <td class="px-4 py-3">Prix attractifs, potentiel +35%</td>
          <td class="px-4 py-3 text-center">⭐⭐⭐⭐☆</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 my-12 border-l-4 border-blue-500">
  <h2 class="text-3xl font-bold mb-6">🎯 Critères Sélection Quartier (10 Points)</h2>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h3 class="text-xl font-bold text-blue-700 mb-4">✅ Must-Have Absolus</h3>
      <ul class="space-y-3 text-sm text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-green-600 font-bold text-lg">1.</span>
          <span><strong>Transports en commun < 5 min</strong> à pied (bus, futur tram)</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-600 font-bold text-lg">2.</span>
          <span><strong>Commerces proximité < 10 min</strong> (boulangerie, supermarché)</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-600 font-bold text-lg">3.</span>
          <span><strong>Écoles primaires < 800m</strong> si enfants ou revente future</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-600 font-bold text-lg">4.</span>
          <span><strong>Sécurité</strong> : Taux criminalité faible (zones vertes/jaunes)</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-600 font-bold text-lg">5.</span>
          <span><strong>Nuisances sonores</strong> : Loin axes routiers principaux</span>
        </li>
      </ul>
    </div>
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h3 class="text-xl font-bold text-purple-700 mb-4">⭐ Nice-To-Have Bonus</h3>
      <ul class="space-y-3 text-sm text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-purple-600 font-bold text-lg">6.</span>
          <span><strong>Espaces verts < 5 min</strong> (parcs, promenades)</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-purple-600 font-bold text-lg">7.</span>
          <span><strong>Médecins/pharmacies < 10 min</strong></span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-purple-600 font-bold text-lg">8.</span>
          <span><strong>Vie associative active</strong> (centres loisirs, clubs)</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-purple-600 font-bold text-lg">9.</span>
          <span><strong>Évolution urbanisme positive</strong> (nouveaux commerces prévus)</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-purple-600 font-bold text-lg">10.</span>
          <span><strong>Fibre optique disponible</strong> (essentiel télétravail)</span>
        </li>
      </ul>
    </div>
  </div>
</div>
'''

}

count = 0
for filename, content in enrichments.items():
    filepath = blog / filename
    if filepath.exists():
        if enrich(filepath, content):
            count += 1
            print(f"✅ {filename}")
        else:
            print(f"⏭️  {filename} (déjà super-enrichi)")
    else:
        print(f"❌ {filename} (non trouvé)")

print(f"\n🎉 {count} articles SUPER-enrichis !")
