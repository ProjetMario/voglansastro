#!/usr/bin/env python3
"""Enrichissement final articles MAIRIES"""
from pathlib import Path

MARK = "<!-- ENRICHED_MAIRIES -->"

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

MAIRIE_ENRICHMENT = '''
<div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 my-12 border-l-4 border-green-500">
  <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
    <span class="text-4xl">💡</span>
    Astuces & Conseils Pratiques
  </h2>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h3 class="text-xl font-bold text-green-700 mb-4">🕐 Éviter Files d'Attente</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2"><span class="text-green-600">✓</span><span><strong>Meilleurs horaires</strong> : 9h-10h ou 14h-15h en semaine</span></li>
        <li class="flex gap-2"><span class="text-green-600">✓</span><span><strong>À éviter</strong> : Lundis matin et veilles de vacances</span></li>
        <li class="flex gap-2"><span class="text-green-600">✓</span><span><strong>Prise RDV en ligne</strong> : Privilégiez toujours pour état civil</span></li>
        <li class="flex gap-2"><span class="text-green-600">✓</span><span><strong>Documents complets</strong> : Vérifiez liste avant déplacement</span></li>
      </ul>
    </div>
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h3 class="text-xl font-bold text-blue-700 mb-4">📱 Services Numériques</h3>
      <ul class="space-y-2 text-sm text-gray-700">
        <li class="flex gap-2"><span class="text-blue-600">✓</span><span><strong>Portail citoyen 24/7</strong> : Demandes actes en ligne</span></li>
        <li class="flex gap-2"><span class="text-blue-600">✓</span><span><strong>Application mobile</strong> : Signalements voirie instantanés</span></li>
        <li class="flex gap-2"><span class="text-blue-600">✓</span><span><strong>Paiements en ligne</strong> : Cantine, crèche, activités</span></li>
        <li class="flex gap-2"><span class="text-blue-600">✓</span><span><strong>Newsletters</strong> : Actualités hebdomadaires par mail</span></li>
      </ul>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 my-12">
  <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
    <span class="text-4xl">❓</span>
    Questions Fréquentes Habitants
  </h2>
  <div class="space-y-4">
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h4 class="font-bold text-lg text-gray-900 mb-2">Comment obtenir une attestation d'accueil ?</h4>
      <p class="text-sm text-gray-700">Déposez demande au service population avec : justificatif domicile, pièce identité, engagement hébergement. Délai : 3-5 jours ouvrés. Coût : timbre fiscal 30€.</p>
    </div>
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h4 class="font-bold text-lg text-gray-900 mb-2">Délais pour un passeport biométrique ?</h4>
      <p class="text-sm text-gray-700">Pré-demande en ligne obligatoire. RDV mairie avec pièces justificatives. Délai fabrication : 2-4 semaines période normale, 6-8 semaines en haute saison (mai-août). Tarif : 86€ adulte, 42€ mineur.</p>
    </div>
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h4 class="font-bold text-lg text-gray-900 mb-2">Comment signaler un problème voirie ?</h4>
      <p class="text-sm text-gray-700">3 options : Application mobile officielle (plus rapide), portail en ligne rubrique "Signalements", ou appel standard mairie. Précisez localisation exacte + photo. Traitement sous 48-72h selon urgence.</p>
    </div>
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h4 class="font-bold text-lg text-gray-900 mb-2">Inscription liste électorale : quand et comment ?</h4>
      <p class="text-sm text-gray-700">Toute l'année jusqu'à 6 semaines avant scrutin. En ligne sur service-public.fr (instantané) ou mairie avec justificatif domicile + identité. Automatique à 18 ans si recensement fait.</p>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 my-12 border-l-4 border-yellow-500">
  <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
    <span class="text-4xl">📞</span>
    Contacts Urgence & Services Essentiels
  </h2>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="bg-white rounded-lg p-5 shadow-md text-center">
      <div class="text-3xl mb-2">🚨</div>
      <h4 class="font-bold text-lg mb-2">Urgences</h4>
      <p class="text-sm text-gray-700 mb-2"><strong>Police/Gendarmerie :</strong> 17</p>
      <p class="text-sm text-gray-700 mb-2"><strong>Pompiers :</strong> 18</p>
      <p class="text-sm text-gray-700"><strong>SAMU :</strong> 15</p>
    </div>
    <div class="bg-white rounded-lg p-5 shadow-md text-center">
      <div class="text-3xl mb-2">🏥</div>
      <h4 class="font-bold text-lg mb-2">Santé</h4>
      <p class="text-sm text-gray-700 mb-2"><strong>Médecin de garde :</strong> 116 117</p>
      <p class="text-sm text-gray-700 mb-2"><strong>Pharmacie garde :</strong> 3237</p>
      <p class="text-sm text-gray-700"><strong>SOS Médecins :</strong> disponible</p>
    </div>
    <div class="bg-white rounded-lg p-5 shadow-md text-center">
      <div class="text-3xl mb-2">⚡</div>
      <h4 class="font-bold text-lg mb-2">Dépannages</h4>
      <p class="text-sm text-gray-700 mb-2"><strong>Électricité :</strong> 09 726 750 XX</p>
      <p class="text-sm text-gray-700 mb-2"><strong>Gaz :</strong> 0 800 473 333</p>
      <p class="text-sm text-gray-700"><strong>Eau :</strong> Numéro local mairie</p>
    </div>
  </div>
</div>
'''

mairies = [
    "mairie-aix-les-bains-guide-complet.astro",
    "mairie-chambery-guide-complet.astro",
    "mairie-cognin-guide-complet.astro",
    "mairie-la-motte-servolex-guide-complet.astro",
    "mairie-montmelian-guide-complet.astro"
]

count = 0
for filename in mairies:
    filepath = blog / filename
    if filepath.exists():
        if enrich(filepath, MAIRIE_ENRICHMENT):
            count += 1
            print(f"✅ {filename}")
        else:
            print(f"⏭️  {filename} (déjà enrichi)")

print(f"\n🎉 {count} mairies enrichies !")
