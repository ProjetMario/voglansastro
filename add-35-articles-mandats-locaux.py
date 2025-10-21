#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 35 articles hyper-locaux génération mandats - Atteindre 300 articles !

articles = [
    # QUARTIERS CHAMBÉRY (8)
    {
        "title": "Vendre dans le quartier des Hauts de Chambéry : prix et stratégies 2025",
        "description": "Quartier Hauts de Chambéry : prix m², typologie biens, demande spécifique. Stratégies vente secteur recherché vue panoramique.",
        "href": "/blog/vendre-quartier-hauts-chambery-prix-strategies-2025",
        "date": "2 janvier 2027",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Hauts de Chambéry", "quartier", "prix", "stratégies vente"]
    },
    {
        "title": "Estimation immobilière quartier Préfecture à Chambéry : le centre historique",
        "description": "Quartier Préfecture Chambéry : estimation centre historique, charme ancien, prix m² premium. Valorisation patrimoine urbain.",
        "href": "/blog/estimation-quartier-prefecture-chambery-centre-historique",
        "date": "5 janvier 2027",
        "readingTime": "12 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Préfecture Chambéry", "centre historique", "estimation", "patrimoine"]
    },
    {
        "title": "Vendre à Chambéry-le-Vieux : un secteur familial très demandé",
        "description": "Chambéry-le-Vieux : secteur familial, maisons pavillons, forte demande. Marché résidentiel actif, proximité écoles commerces.",
        "href": "/blog/vendre-chambery-le-vieux-secteur-familial-demande",
        "date": "8 janvier 2027",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Chambéry-le-Vieux", "familial", "pavillons", "demande forte"]
    },
    {
        "title": "Prix de l'immobilier quartier Bissy à Chambéry : analyse 2025",
        "description": "Quartier Bissy Chambéry : analyse prix 2025, évolution marché, typologies biens. Secteur résidentiel établi, valorisation stable.",
        "href": "/blog/prix-immobilier-quartier-bissy-chambery-analyse-2025",
        "date": "11 janvier 2027",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Bissy Chambéry", "prix", "analyse 2025", "résidentiel"]
    },
    {
        "title": "Vendre près de la gare de Chambéry : les atouts de la proximité TGV",
        "description": "Proximité gare Chambéry : valorisation accès TGV, profils acheteurs, surcote transport. Argument vente connexion Lyon Paris Genève.",
        "href": "/blog/vendre-pres-gare-chambery-atouts-proximite-tgv",
        "date": "14 janvier 2027",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["gare Chambéry", "proximité TGV", "valorisation", "transport"]
    },
    {
        "title": "Estimation immobilière quartier Madeleine à Chambéry",
        "description": "Quartier Madeleine Chambéry : estimation résidentiel, biens familiaux, prix stables. Secteur apprécié, demande régulière.",
        "href": "/blog/estimation-immobiliere-quartier-madeleine-chambery",
        "date": "17 janvier 2027",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Madeleine Chambéry", "estimation", "résidentiel", "familial"]
    },
    {
        "title": "Vendre dans le quartier Chantemerle-Montagny à Chambéry",
        "description": "Chantemerle-Montagny : quartier recherché, maisons caractère, cadre calme. Valorisation espace verdure, demande familles.",
        "href": "/blog/vendre-quartier-chantemerle-montagny-chambery",
        "date": "20 janvier 2027",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Chantemerle Montagny", "quartier recherché", "maisons", "calme"]
    },
    {
        "title": "Prix immobilier quartier Verney à Chambéry : opportunités 2025",
        "description": "Quartier Verney Chambéry : prix compétitifs, opportunités investissement, développement. Secteur évolution, potentiel valorisation.",
        "href": "/blog/prix-immobilier-quartier-verney-chambery-opportunites-2025",
        "date": "23 janvier 2027",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Verney Chambéry", "prix", "opportunités", "développement"]
    },
    
    # QUARTIERS AIX-LES-BAINS (6)
    {
        "title": "Vendre à Aix-les-Bains quartier Marlioz : le secteur thermal premium",
        "description": "Quartier Marlioz Aix : secteur thermal premium, villas caractère, clientèle aisée. Valorisation prestige, proximité thermes casino.",
        "href": "/blog/vendre-aix-les-bains-quartier-marlioz-thermal-premium",
        "date": "26 janvier 2027",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Marlioz Aix", "thermal", "premium", "villas"]
    },
    {
        "title": "Estimation immobilière centre-ville Aix-les-Bains : les prix 2025",
        "description": "Centre-ville Aix estimation : prix m² 2025, appartements commerces, dynamisme urbain. Localisation prime, valorisation centralité.",
        "href": "/blog/estimation-immobiliere-centre-ville-aix-les-bains-prix-2025",
        "date": "29 janvier 2027",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["centre-ville Aix", "estimation", "prix 2025", "centralité"]
    },
    {
        "title": "Vendre quartier Sierroz à Aix-les-Bains : vue lac et tranquillité",
        "description": "Quartier Sierroz Aix : vue lac recherchée, tranquillité résidentielle, maisons familiales. Position dominante, cadre préservé.",
        "href": "/blog/vendre-quartier-sierroz-aix-les-bains-vue-lac-tranquillite",
        "date": "1 février 2027",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Sierroz Aix", "vue lac", "tranquillité", "résidentiel"]
    },
    {
        "title": "Prix immobilier quartier Lafin à Aix-les-Bains : analyse détaillée",
        "description": "Quartier Lafin Aix : analyse prix détaillée, secteur résidentiel, typologies biens. Marché équilibré, demande stable.",
        "href": "/blog/prix-immobilier-quartier-lafin-aix-les-bains-analyse",
        "date": "4 février 2027",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Lafin Aix", "prix", "analyse", "résidentiel"]
    },
    {
        "title": "Vendre près du port d'Aix-les-Bains : la proximité lac valorisée",
        "description": "Proximité port Aix : valorisation bord lac, lifestyle nautique, surcote localisation. Arguments vente qualité vie exceptionnelle.",
        "href": "/blog/vendre-pres-port-aix-les-bains-proximite-lac-valorisee",
        "date": "7 février 2027",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["port Aix", "bord lac", "valorisation", "lifestyle"]
    },
    {
        "title": "Estimation quartier Puer à Aix-les-Bains : secteur familial recherché",
        "description": "Quartier Puer Aix : secteur familial, écoles proximité, maisons pavillons. Demande forte familles, cadre résidentiel apprécié.",
        "href": "/blog/estimation-quartier-puer-aix-les-bains-familial-recherche",
        "date": "10 février 2027",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Puer Aix", "familial", "écoles", "recherché"]
    },
    
    # MICRO-MARCHÉS SPÉCIFIQUES (8)
    {
        "title": "Vendre une maison avec vue sur le Mont Revard : la surcote montagne",
        "description": "Vue Mont Revard : surcote panorama montagne, valorisation paysage, critère recherché. Optimisez argument visuel exceptionnel.",
        "href": "/blog/vendre-maison-vue-mont-revard-surcote-montagne",
        "date": "13 février 2027",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vue Mont Revard", "surcote", "montagne", "panorama"]
    },
    {
        "title": "Prix des maisons anciennes rénovées dans les villages du lac du Bourget",
        "description": "Maisons rénovées villages lac : prix patrimoine restauré, charme authenticité, clientèle haut de gamme. Marché niche valorisé.",
        "href": "/blog/prix-maisons-anciennes-renovees-villages-lac-bourget",
        "date": "16 février 2027",
        "readingTime": "12 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["maisons rénovées", "villages lac", "patrimoine", "charme"]
    },
    {
        "title": "Vendre un appartement avec terrasse à Chambéry : valorisation espace extérieur",
        "description": "Appartement terrasse Chambéry : valorisation espace extérieur urbain, surcote, demande forte. Argument différenciant post-COVID.",
        "href": "/blog/vendre-appartement-terrasse-chambery-valorisation-exterieur",
        "date": "19 février 2027",
        "readingTime": "9 min",
        "category": "Vente",
        "featured": True,
        "tags": ["appartement terrasse", "espace extérieur", "valorisation", "urbain"]
    },
    {
        "title": "Estimation maison avec cave à vin en Savoie : un atout sous-estimé",
        "description": "Cave à vin Savoie : atout sous-estimé, valorisation amateurs vins, argument différenciant. Optimisez présentation caractéristique unique.",
        "href": "/blog/estimation-maison-cave-vin-savoie-atout-sous-estime",
        "date": "22 février 2027",
        "readingTime": "9 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["cave à vin", "atout", "Savoie", "valorisation"]
    },
    {
        "title": "Vendre une maison avec dépendance à Aix-les-Bains : double valorisation",
        "description": "Maison dépendance Aix : double valorisation habitation + annexe, potentiel location, flexibilité. Argument familles multi-générations.",
        "href": "/blog/vendre-maison-dependance-aix-les-bains-double-valorisation",
        "date": "25 février 2027",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["dépendance", "double valorisation", "potentiel", "flexibilité"]
    },
    {
        "title": "Prix des maisons neuves autour de Chambéry : comparatif avec l'ancien",
        "description": "Maisons neuves Chambéry : comparatif neuf/ancien, prix, avantages, garanties. Analyse marché, choix vendeurs maisons récentes.",
        "href": "/blog/prix-maisons-neuves-chambery-comparatif-ancien",
        "date": "28 février 2027",
        "readingTime": "12 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["maisons neuves", "comparatif", "neuf ancien", "Chambéry"]
    },
    {
        "title": "Vendre une maison de village en pierre en Savoie : valoriser l'authenticité",
        "description": "Maison pierre Savoie : valorisation authenticité, charme traditionnel, matériaux nobles. Cibler amateurs patrimoine, caractère régional.",
        "href": "/blog/vendre-maison-village-pierre-savoie-valoriser-authenticite",
        "date": "3 mars 2027",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["maison pierre", "authenticité", "village", "Savoie"]
    },
    {
        "title": "Estimation appartement dernier étage avec ascenseur à Aix-les-Bains",
        "description": "Dernier étage ascenseur Aix : surcote vue, luminosité, accessibilité. Critères valorisation appartements urbains premium.",
        "href": "/blog/estimation-appartement-dernier-etage-ascenseur-aix",
        "date": "6 mars 2027",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["dernier étage", "ascenseur", "vue", "luminosité"]
    },
    
    # ZONES PÉRIPHÉRIQUES & OPPORTUNITÉS (8)
    {
        "title": "Vendre à La Ravoire : profitez de la proximité immédiate Chambéry",
        "description": "La Ravoire vente : proximité Chambéry, prix attractifs, demande jeunes familles. Opportunité marché périurbain dynamique.",
        "href": "/blog/vendre-la-ravoire-proximite-immediate-chambery-opportunite",
        "date": "9 mars 2027",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["La Ravoire", "proximité Chambéry", "périurbain", "jeunes familles"]
    },
    {
        "title": "Prix immobilier à Sonnaz : une commune en pleine expansion",
        "description": "Sonnaz prix : commune expansion, développement résidentiel, prix compétitifs. Opportunité vendeurs marché évolution.",
        "href": "/blog/prix-immobilier-sonnaz-commune-pleine-expansion",
        "date": "12 mars 2027",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Sonnaz", "expansion", "développement", "opportunité"]
    },
    {
        "title": "Vendre à Mouxy : un secteur résidentiel prisé proche d'Aix-les-Bains",
        "description": "Mouxy vente : secteur résidentiel prisé, proximité Aix, cadre calme. Valorisation position stratégique, demande familles.",
        "href": "/blog/vendre-mouxy-secteur-residentiel-prise-proche-aix",
        "date": "15 mars 2027",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Mouxy", "résidentiel prisé", "proche Aix", "familles"]
    },
    {
        "title": "Estimation à Challes-les-Eaux : la commune thermale en croissance",
        "description": "Challes-les-Eaux estimation : commune thermale, croissance démographique, prix attractifs. Marché porteur, développement continu.",
        "href": "/blog/estimation-challes-les-eaux-commune-thermale-croissance",
        "date": "18 mars 2027",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Challes-les-Eaux", "thermale", "croissance", "développement"]
    },
    {
        "title": "Vendre à Vimines : le charme de la campagne à 15 min de Chambéry",
        "description": "Vimines vente : charme campagne, 15 min Chambéry, maisons terrain. Équilibre nature/proximité urbaine recherché.",
        "href": "/blog/vendre-vimines-charme-campagne-15min-chambery",
        "date": "21 mars 2027",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Vimines", "campagne", "15 min Chambéry", "nature"]
    },
    {
        "title": "Prix immobilier à Bourdeau : un village lacustre confidentiel",
        "description": "Bourdeau prix : village lacustre confidentiel, charme préservé, marché niche. Biens rares, clientèle amatrice authenticité.",
        "href": "/blog/prix-immobilier-bourdeau-village-lacustre-confidentiel",
        "date": "24 mars 2027",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Bourdeau", "lacustre", "confidentiel", "charme"]
    },
    {
        "title": "Vendre à Le Viviers-du-Lac : entre lac et autoroute A43",
        "description": "Le Viviers-du-Lac : position stratégique lac/A43, accessibilité, résidentiel. Valoriser double atout nature/transport.",
        "href": "/blog/vendre-le-viviers-du-lac-entre-lac-autoroute-a43",
        "date": "27 mars 2027",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Le Viviers", "lac A43", "accessibilité", "stratégique"]
    },
    {
        "title": "Estimation à La Chapelle-du-Mont-du-Chat : vue panoramique lac et montagne",
        "description": "La Chapelle Mont du Chat : estimation vue panoramique exceptionnelle, position unique, marché premium. Valorisation paysage grandiose.",
        "href": "/blog/estimation-la-chapelle-mont-chat-vue-panoramique-lac-montagne",
        "date": "30 mars 2027",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["La Chapelle", "vue panoramique", "lac montagne", "premium"]
    },
    
    # SITUATIONS & CONSEILS PRATIQUES (5)
    {
        "title": "Vendre rapidement à Chambéry : la checklist des 15 actions essentielles",
        "description": "Checklist vente rapide Chambéry : 15 actions essentielles, optimisation totale, timing réduit. Plan complet vendeurs pressés.",
        "href": "/blog/vendre-rapidement-chambery-checklist-15-actions-essentielles",
        "date": "2 avril 2027",
        "readingTime": "13 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["vente rapide", "checklist", "15 actions", "Chambéry"]
    },
    {
        "title": "Comment fixer le juste prix pour une maison familiale en Savoie",
        "description": "Pricing maison familiale Savoie : méthodologie juste prix, critères valorisation, analyse comparative. Éviter sur/sous-évaluation.",
        "href": "/blog/fixer-juste-prix-maison-familiale-savoie-methode",
        "date": "5 avril 2027",
        "readingTime": "12 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["juste prix", "maison familiale", "Savoie", "méthodologie"]
    },
    {
        "title": "Les diagnostics immobiliers obligatoires en 2025 : ne rien oublier",
        "description": "Diagnostics obligatoires 2025 : liste complète, coûts, délais, sanctions. Checklist vendeurs conformité réglementaire totale.",
        "href": "/blog/diagnostics-immobiliers-obligatoires-2025-ne-rien-oublier",
        "date": "8 avril 2027",
        "readingTime": "14 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["diagnostics obligatoires", "2025", "conformité", "réglementation"]
    },
    {
        "title": "Vendre en hiver vs vendre au printemps à Aix-les-Bains : que choisir ?",
        "description": "Saisonnalité Aix : comparatif hiver/printemps, avantages/inconvénients, timing optimal. Décision éclairée selon situation personnelle.",
        "href": "/blog/vendre-hiver-vs-printemps-aix-les-bains-choisir",
        "date": "11 avril 2027",
        "readingTime": "11 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["hiver printemps", "saisonnalité", "Aix-les-Bains", "timing"]
    },
    {
        "title": "L'importance des photos professionnelles pour vendre en Savoie",
        "description": "Photos professionnelles Savoie : impact vente, valorisation visuelle, ROI démontré. Investissement minimal, résultats maximaux.",
        "href": "/blog/importance-photos-professionnelles-vendre-savoie",
        "date": "14 avril 2027",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["photos professionnelles", "valorisation", "ROI", "marketing"]
    }
]

# Lire le fichier index.astro
with open('src/pages/blog/index.astro', 'r', encoding='utf-8') as f:
    content = f.read()

# Trouver la position avant "];
insert_position = content.find('];')

if insert_position == -1:
    print("❌ Erreur: marqueur ]; non trouvé")
    exit(1)

# Générer le code JavaScript pour tous les articles
articles_code = ""
for article in articles:
    featured_str = "true" if article['featured'] else "false"
    tags_str = '", "'.join(article['tags'])
    
    articles_code += f'''  {{
    title: "{article['title']}",
    description: "{article['description']}",
    href: "{article['href']}",
    date: "{article['date']}",
    readingTime: "{article['readingTime']}",
    category: "{article['category']}",
    featured: {featured_str},
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop&q=80",
    tags: ["{tags_str}"]
  }},
'''

# Insérer les articles avant ];
new_content = content[:insert_position] + articles_code + content[insert_position:]

# Écrire le fichier modifié
with open('src/pages/blog/index.astro', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"✅ {len(articles)} articles HYPER-LOCAUX MANDATS ajoutés !")
print("\n5 catégories hyper-ciblées:")
print("🏛️ QUARTIERS CHAMBÉRY (8):")
print("   Hauts, Préfecture, Chambéry-le-Vieux, Bissy")
print("   Gare TGV, Madeleine, Chantemerle-Montagny, Verney")
print("\n🏖️ QUARTIERS AIX (6):")
print("   Marlioz, Centre-ville, Sierroz, Lafin, Port, Puer")
print("\n💎 MICRO-MARCHÉS (8):")
print("   Vue Revard, Maisons rénovées, Terrasses, Caves à vin")
print("   Dépendances, Neuves, Pierre, Dernier étage")
print("\n🌍 ZONES PÉRIPHÉRIQUES (8):")
print("   La Ravoire, Sonnaz, Mouxy, Challes")
print("   Vimines, Bourdeau, Le Viviers, La Chapelle")
print("\n📋 CONSEILS PRATIQUES (5):")
print("   Checklist rapide, Juste prix, Diagnostics")
print("   Saisonnalité, Photos professionnelles")
print(f"\n🎉🎉🎉 TOTAL: 300 ARTICLES - CAP MYTHIQUE ATTEINT ! 🎉🎉🎉")
print("💯💯💯 TROIS CENTS ARTICLES ! 💯💯💯")
