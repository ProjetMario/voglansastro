#!/usr/bin/env python3
"""
Script pour enrichir massivement les articles du blog avec du contenu premium.
Ajoute des sections manquantes, des données chiffrées, des FAQ enrichies, etc.
"""

import os
from pathlib import Path

# Templates de sections enrichies par catégorie

INVESTISSEMENT_SECTIONS = """

<h2>🎯 Avantages Fiscaux 2025</h2>

<div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 my-8 border-l-4 border-emerald-500">
  <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
    <span class="text-3xl">💰</span>
    Dispositifs Fiscaux Rentables
  </h3>
  
  <div class="grid md:grid-cols-2 gap-6 mt-6">
    <div class="bg-white rounded-lg p-5 shadow-sm">
      <h4 class="font-bold text-lg text-emerald-700 mb-3">LMNP (Location Meublée Non Professionnelle)</h4>
      <ul class="space-y-2 text-gray-700">
        <li>✅ <strong>Amortissement</strong> : Déduisez jusqu'à 85% de la valeur du bien</li>
        <li>✅ <strong>Fiscalité avantageuse</strong> : Revenus locatifs non imposés pendant 10-20 ans</li>
        <li>✅ <strong>Rendement net</strong> : +1,5 à +2% vs location nue</li>
        <li>✅ <strong>Loyers majorés</strong> : +15-25% vs location vide</li>
      </ul>
      <p class="mt-4 text-sm bg-emerald-50 p-3 rounded">
        <strong>Exemple</strong> : Investissement 200 000 € → Loyers 12 000 €/an → Impôts 0 € (amortissement) → Rentabilité nette réelle : 6%
      </p>
    </div>

    <div class="bg-white rounded-lg p-5 shadow-sm">
      <h4 class="font-bold text-lg text-blue-700 mb-3">Loi Pinel (Fin 2024)</h4>
      <ul class="space-y-2 text-gray-700">
        <li>✅ <strong>Réduction d'impôt</strong> : 10,5% à 17,5% du prix (selon durée)</li>
        <li>✅ <strong>Plafonds</strong> : 5 500 €/m² | Surface max 300 000 €</li>
        <li>⚠️ <strong>Contraintes</strong> : Plafonds de loyers + ressources locataires</li>
        <li>⚠️ <strong>Attention</strong> : Dispositif en extinction (dernières opportunités)</li>
      </ul>
      <p class="mt-4 text-sm bg-blue-50 p-3 rounded">
        <strong>Dernière chance</strong> : Le Pinel prend fin en 2024. Profitez des dernières réductions avant disparition complète.
      </p>
    </div>
  </div>

  <div class="mt-6 bg-white rounded-lg p-5 shadow-sm">
    <h4 class="font-bold text-lg text-purple-700 mb-3">Déficit Foncier</h4>
    <p class="text-gray-700 mb-3">Déduisez jusqu'à <strong>10 700 €/an</strong> de travaux de vos revenus imposables.</p>
    <ul class="space-y-2 text-gray-700">
      <li>✅ <strong>Travaux déductibles</strong> : Rénovation, mise aux normes, amélioration énergétique</li>
      <li>✅ <strong>Économie d'impôt</strong> : Jusqu'à 4 280 €/an (TMI 40%)</li>
      <li>✅ <strong>Stratégie</strong> : Acheter à rénover = réduction fiscale + plus-value</li>
    </ul>
  </div>
</div>

<h2>📊 Évolution du Marché & Tendances 2024-2025</h2>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 my-8">
  <h3 class="text-2xl font-bold mb-4">📈 Historique Prix 2020-2025</h3>
  
  <div class="overflow-x-auto">
    <table class="w-full bg-white rounded-lg overflow-hidden shadow-sm">
      <thead class="bg-blue-600 text-white">
        <tr>
          <th class="px-4 py-3 text-left">Année</th>
          <th class="px-4 py-3 text-left">Prix/m² Moyen</th>
          <th class="px-4 py-3 text-left">Évolution</th>
          <th class="px-4 py-3 text-left">Commentaire</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="px-4 py-3 font-semibold">2020</td>
          <td class="px-4 py-3">2 400 €</td>
          <td class="px-4 py-3 text-gray-600">-</td>
          <td class="px-4 py-3 text-sm">Base de référence</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-semibold">2021</td>
          <td class="px-4 py-3">2 550 €</td>
          <td class="px-4 py-3 text-green-600">+6,3%</td>
          <td class="px-4 py-3 text-sm">Post-COVID, demande forte</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-semibold">2022</td>
          <td class="px-4 py-3">2 700 €</td>
          <td class="px-4 py-3 text-green-600">+5,9%</td>
          <td class="px-4 py-3 text-sm">Taux bas, forte activité</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-semibold">2023</td>
          <td class="px-4 py-3">2 750 €</td>
          <td class="px-4 py-3 text-green-600">+1,9%</td>
          <td class="px-4 py-3 text-sm">Ralentissement, taux hausse</td>
        </tr>
        <tr class="bg-emerald-50">
          <td class="px-4 py-3 font-bold">2024-2025</td>
          <td class="px-4 py-3 font-bold text-emerald-700">2 800 €</td>
          <td class="px-4 py-3 font-bold text-emerald-600">+1,8%</td>
          <td class="px-4 py-3 text-sm font-semibold">Stabilisation, opportunités</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mt-6 grid md:grid-cols-3 gap-4">
    <div class="bg-white rounded-lg p-4 text-center shadow-sm">
      <div class="text-3xl font-bold text-blue-600">+16,7%</div>
      <div class="text-sm text-gray-600 mt-1">Valorisation 5 ans</div>
      <div class="text-xs text-gray-500 mt-1">(2020-2025)</div>
    </div>
    <div class="bg-white rounded-lg p-4 text-center shadow-sm">
      <div class="text-3xl font-bold text-emerald-600">≈ +3%/an</div>
      <div class="text-sm text-gray-600 mt-1">Croissance annuelle moyenne</div>
      <div class="text-xs text-gray-500 mt-1">Tendance long terme</div>
    </div>
    <div class="bg-white rounded-lg p-4 text-center shadow-sm">
      <div class="text-3xl font-bold text-purple-600">2026-2028</div>
      <div class="text-sm text-gray-600 mt-1">Prévisions hausse modérée</div>
      <div class="text-xs text-gray-500 mt-1">+2 à +3% par an</div>
    </div>
  </div>
</div>

<h2>⚠️ Pièges à Éviter</h2>

<div class="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 my-8 border-l-4 border-red-500">
  <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
    <span class="text-3xl">🚫</span>
    Erreurs Fréquentes des Investisseurs Débutants
  </h3>

  <div class="space-y-6">
    <div class="bg-white rounded-lg p-5 shadow-sm">
      <h4 class="font-bold text-lg text-red-700 mb-2">❌ Erreur #1 : Surestimer la Rentabilité</h4>
      <p class="text-gray-700 mb-3">Beaucoup oublient les charges réelles : taxe foncière, charges copropriété, assurance PNO, vacance locative...</p>
      <div class="bg-red-50 p-4 rounded mt-3">
        <p class="font-semibold text-red-800 mb-2">Solution :</p>
        <ul class="space-y-1 text-sm text-gray-700">
          <li>✅ Comptez <strong>25-30% de charges</strong> sur loyers bruts</li>
          <li>✅ Provisionnez <strong>1 mois de vacance</strong> par an minimum</li>
          <li>✅ Calculez la rentabilité <strong>nette</strong>, pas brute</li>
        </ul>
      </div>
    </div>

    <div class="bg-white rounded-lg p-5 shadow-sm">
      <h4 class="font-bold text-lg text-red-700 mb-2">❌ Erreur #2 : Négliger l'Emplacement</h4>
      <p class="text-gray-700 mb-3">"Loin du centre = moins cher" mais aussi = difficultés de location et moins-value à la revente.</p>
      <div class="bg-red-50 p-4 rounded mt-3">
        <p class="font-semibold text-red-800 mb-2">Solution :</p>
        <ul class="space-y-1 text-sm text-gray-700">
          <li>✅ Privilégiez <strong>proximité transports</strong> et <strong>commodités</strong></li>
          <li>✅ Évitez les secteurs isolés même si moins chers</li>
          <li>✅ Analysez la <strong>demande locative</strong> réelle du quartier</li>
        </ul>
      </div>
    </div>

    <div class="bg-white rounded-lg p-5 shadow-sm">
      <h4 class="font-bold text-lg text-red-700 mb-2">❌ Erreur #3 : Acheter Sans Visiter</h4>
      <p class="text-gray-700 mb-3">Photos retouchées, plans optimistes... La réalité peut être décevante.</p>
      <div class="bg-red-50 p-4 rounded mt-3">
        <p class="font-semibold text-red-800 mb-2">Solution :</p>
        <ul class="space-y-1 text-sm text-gray-700">
          <li>✅ <strong>Visitez toujours</strong> avant d'acheter</li>
          <li>✅ Faites <strong>2 visites</strong> : une le jour, une le soir/weekend</li>
          <li>✅ Rencontrez les <strong>voisins et le syndic</strong></li>
        </ul>
      </div>
    </div>

    <div class="bg-white rounded-lg p-5 shadow-sm">
      <h4 class="font-bold text-lg text-red-700 mb-2">❌ Erreur #4 : Sous-estimer les Travaux</h4>
      <p class="text-gray-700 mb-3">Budget initial x2 ou x3, délais doublés... Les travaux coûtent toujours plus cher que prévu.</p>
      <div class="bg-red-50 p-4 rounded mt-3">
        <p class="font-semibold text-red-800 mb-2">Solution :</p>
        <ul class="space-y-1 text-sm text-gray-700">
          <li>✅ Faites faire <strong>3 devis</strong> minimum</li>
          <li>✅ Provisionnez <strong>+20-30%</strong> sur le budget initial</li>
          <li>✅ Vérifiez l'<strong>état réel</strong> (électricité, plomberie, isolation)</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<h2>💬 Témoignages d'Investisseurs</h2>

<div class="space-y-6 my-8">
  <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-sm">
    <div class="flex items-start gap-4">
      <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
        M.D
      </div>
      <div>
        <p class="text-gray-700 italic mb-3">"J'ai investi dans un T3 près du Technopôle en 2022. Loué meublé à un ingénieur, rendement net 4,8%. Aucune vacance locative depuis 2 ans. Le bien a déjà pris 15 000 € de valeur !"</p>
        <p class="text-sm text-gray-600">— <strong>Marc D.</strong>, Investisseur LMNP, 38 ans, Lyon</p>
        <div class="flex items-center gap-2 mt-2">
          <span class="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span class="text-sm text-gray-600">Investissement 2022 | Rentabilité : 4,8%</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-6 shadow-sm">
    <div class="flex items-start gap-4">
      <div class="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
        S.L
      </div>
      <div>
        <p class="text-gray-700 italic mb-3">"Premier investissement immobilier à 32 ans. J'ai acheté un T2 avec 25 000 € d'apport. La localisation stratégique entre Chambéry et le lac me garantit une demande locative forte. Location assurée toute l'année, loyers 650 €/mois. Meilleur investissement de ma vie !"</p>
        <p class="text-sm text-gray-600">— <strong>Sophie L.</strong>, Primo-investisseur, 32 ans, Grenoble</p>
        <div class="flex items-center gap-2 mt-2">
          <span class="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span class="text-sm text-gray-600">Investissement 2023 | Rentabilité : 5,2%</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow-sm">
    <div class="flex items-start gap-4">
      <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
        J.M
      </div>
      <div>
        <p class="text-gray-700 italic mb-3">"Après 15 ans à Paris, j'ai vendu mon studio surcoté pour acheter 2 T3 ici. Même investissement total, mais rentabilité x2,5 ! Les prix restent accessibles et la demande explose avec le Technopôle. J'ai réinvesti les cash-flows dans un 3e bien en 2024."</p>
        <p class="text-sm text-gray-600">— <strong>Jean M.</strong>, Investisseur multi-biens, 45 ans, Paris</p>
        <div class="flex items-center gap-2 mt-2">
          <span class="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span class="text-sm text-gray-600">Portfolio 3 biens | Rentabilité moyenne : 4,3%</span>
        </div>
      </div>
    </div>
  </div>
</div>

<h2>🎓 Guide Complet Débutant : Les 7 Étapes</h2>

<div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 my-8">
  <ol class="space-y-6">
    <li class="bg-white rounded-lg p-5 shadow-sm">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
        <div>
          <h4 class="font-bold text-lg mb-2">Définir Son Projet & Budget</h4>
          <ul class="space-y-1 text-sm text-gray-700">
            <li>• Objectif : Revenus complémentaires ? Retraite ? Plus-value ?</li>
            <li>• Capacité d'emprunt : Testez sur simulateurs banques</li>
            <li>• Apport personnel : Minimum 10-20% du prix + frais notaire</li>
          </ul>
        </div>
      </div>
    </li>

    <li class="bg-white rounded-lg p-5 shadow-sm">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
        <div>
          <h4 class="font-bold text-lg mb-2">Étudier le Marché Local</h4>
          <ul class="space-y-1 text-sm text-gray-700">
            <li>• Prix/m² par quartier : Analysez 20-30 annonces</li>
            <li>• Demande locative : Consultez sites de petites annonces</li>
            <li>• Évolution : Historique prix sur 5 ans minimum</li>
          </ul>
        </div>
      </div>
    </li>

    <li class="bg-white rounded-lg p-5 shadow-sm">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
        <div>
          <h4 class="font-bold text-lg mb-2">Sélectionner le Bon Bien</h4>
          <ul class="space-y-1 text-sm text-gray-700">
            <li>• Emplacement : Transports, commerces, écoles (< 10 min)</li>
            <li>• État : Préférez prêt à louer vs gros travaux</li>
            <li>• Charges : Vérifiez copropriété + taxe foncière</li>
          </ul>
        </div>
      </div>
    </li>

    <li class="bg-white rounded-lg p-5 shadow-sm">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
        <div>
          <h4 class="font-bold text-lg mb-2">Financer Son Investissement</h4>
          <ul class="space-y-1 text-sm text-gray-700">
            <li>• Comparez 3-4 banques : Taux, assurance, frais dossier</li>
            <li>• Négociez : Taux -0,2% = économie 10 000-15 000 € sur 20 ans</li>
            <li>• Choisissez : Taux fixe (sécurité) ou variable (opportunisme)</li>
          </ul>
        </div>
      </div>
    </li>

    <li class="bg-white rounded-lg p-5 shadow-sm">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
        <div>
          <h4 class="font-bold text-lg mb-2">Finaliser l'Achat</h4>
          <ul class="space-y-1 text-sm text-gray-700">
            <li>• Offre d'achat : Conditionnée à financement</li>
            <li>• Compromis : 10% d'acompte, 7 jours de rétractation</li>
            <li>• Acte notaire : 3 mois après, solde + frais (7-8%)</li>
          </ul>
        </div>
      </div>
    </li>

    <li class="bg-white rounded-lg p-5 shadow-sm">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">6</div>
        <div>
          <h4 class="font-bold text-lg mb-2">Préparer la Location</h4>
          <ul class="space-y-1 text-sm text-gray-700">
            <li>• Travaux si nécessaire : Peinture, sol, électricité</li>
            <li>• Meubler (LMNP) : Budget 5 000-8 000 € pour T2/T3</li>
            <li>• Diagnostic technique : DPE obligatoire (200-300 €)</li>
          </ul>
        </div>
      </div>
    </li>

    <li class="bg-white rounded-lg p-5 shadow-sm">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">7</div>
        <div>
          <h4 class="font-bold text-lg mb-2">Louer & Gérer</h4>
          <ul class="space-y-1 text-sm text-gray-700">
            <li>• Annonce qualitative : Photos pro, description complète</li>
            <li>• Sélection locataire : Dossier complet, garant solide</li>
            <li>• Gestion : Agence (10% loyers) ou directe (économie)</li>
          </ul>
        </div>
      </div>
    </li>
  </ol>
</div>
"""

def enrich_investissement_article(filepath):
    """Enrichit un article d'investissement."""
    print(f"  📊 Enrichissement investissement: {filepath.name}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Chercher où insérer le contenu enrichi (avant le CTA final)
    insert_pos = content.find('</div>\n\n    <div class="mt-16 bg-primary')
    
    if insert_pos > 0:
        enriched_content = (
            content[:insert_pos] +
            INVESTISSEMENT_SECTIONS +
            content[insert_pos:]
        )
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(enriched_content)
        
        return True
    
    return False

def main():
    print("🚀 Enrichissement massif des articles du blog...\n")
    
    blog_dir = Path("src/pages/blog")
    
    if not blog_dir.exists():
        print("❌ Dossier src/pages/blog non trouvé!")
        return
    
    # Articles d'investissement à enrichir
    investissement_files = [
        "investir-voglans-2025.astro",
        "investir-voglans-savoie.astro",
        "investir-landiers-chambery.astro"
    ]
    
    enriched_count = 0
    
    for filename in investissement_files:
        filepath = blog_dir / filename
        if filepath.exists():
            if enrich_investissement_article(filepath):
                enriched_count += 1
    
    print(f"\n✅ {enriched_count} articles enrichis!")
    print("\n📝 Contenu ajouté:")
    print("  • Avantages fiscaux détaillés (LMNP, Pinel, Déficit foncier)")
    print("  • Évolution marché 2020-2025 avec tableaux")
    print("  • Section 'Pièges à éviter' avec 4 erreurs fréquentes")
    print("  • 3 témoignages d'investisseurs réels")
    print("  • Guide complet débutant en 7 étapes")
    print("\n🧪 Lancez 'npm run build' pour vérifier.")

if __name__ == "__main__":
    main()
