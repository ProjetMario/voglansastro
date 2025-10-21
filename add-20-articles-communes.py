#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 20 articles hyper-locaux par commune - SEO ultra-ciblé

articles = [
    {
        "title": "Estimation immobilière à Voglans (73420) : prix au m² et conseils de vente",
        "description": "Estimation immobilière Voglans 73420 : prix au m² 2025, quartiers valorisés, conseils vente. Évaluation gratuite votre maison à Voglans sous 48h.",
        "href": "/blog/estimation-immobiliere-voglans-73420-prix-conseils-vente",
        "date": "9 septembre 2025",
        "readingTime": "14 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Voglans", "prix immobilier Voglans", "73420", "vente maison Voglans"]
    },
    {
        "title": "Vendre votre maison à La Motte-Servolex : prix au m² 2025 et astuces locales",
        "description": "Guide complet vente maison La Motte-Servolex : prix m² 2025 par secteur, marché dynamique, astuces locales. Vendez au meilleur prix avec expert local.",
        "href": "/blog/vendre-maison-la-motte-servolex-prix-m2-2025-astuces",
        "date": "12 septembre 2025",
        "readingTime": "13 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison La Motte-Servolex", "prix m² 2025", "marché dynamique", "astuces locales"]
    },
    {
        "title": "Combien vaut votre maison à Sonnaz ? Estimation gratuite et marché 2025",
        "description": "Estimation maison Sonnaz 2025 : prix immobilier, évolution marché, valorisation. Petite commune recherchée, demande forte. Évaluation gratuite immédiate.",
        "href": "/blog/estimation-maison-sonnaz-gratuite-marche-2025",
        "date": "15 septembre 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Sonnaz", "prix immobilier Sonnaz", "marché 2025", "commune recherchée"]
    },
    {
        "title": "Estimation de maison à Méry : un marché familial très demandé",
        "description": "Marché immobilier familial Méry : estimation maison, demande forte familles, prix attractifs. Commune recherchée pour espace et qualité de vie.",
        "href": "/blog/estimation-maison-mery-marche-familial-demande",
        "date": "18 septembre 2025",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["prix immobilier Méry", "estimation Méry", "marché familial", "demande forte"]
    },
    {
        "title": "Vendre à Tresserve : un marché haut de gamme autour du lac du Bourget",
        "description": "Vente immobilier haut de gamme Tresserve : marché premium lac Bourget, villas vue lac, clientèle exigeante. Expertise luxe et discrétion garantie.",
        "href": "/blog/vendre-tresserve-marche-haut-gamme-lac-bourget",
        "date": "21 septembre 2025",
        "readingTime": "13 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente villa Tresserve", "marché haut de gamme", "lac du Bourget", "immobilier luxe"]
    },
    {
        "title": "Immobilier à Viviers-du-Lac : prix au m² et estimation de votre maison",
        "description": "Prix immobilier Viviers-du-Lac : estimation maison, prix m², localité stratégique Chambéry-Aix. Marché actif, forte demande locative et familiale.",
        "href": "/blog/immobilier-viviers-du-lac-prix-m2-estimation-maison",
        "date": "24 septembre 2025",
        "readingTime": "12 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Viviers-du-Lac", "prix m²", "Chambéry Aix", "position stratégique"]
    },
    {
        "title": "Prix de l'immobilier au Bourget-du-Lac : vendre au meilleur moment",
        "description": "Marché immobilier Bourget-du-Lac : prix biens vue lac, résidences secondaires, timing optimal vente. Expertise marché premium lac du Bourget.",
        "href": "/blog/prix-immobilier-bourget-du-lac-vendre-meilleur-moment",
        "date": "27 septembre 2025",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["prix immobilier Bourget-du-Lac", "vue lac", "résidence secondaire", "timing vente"]
    },
    {
        "title": "Estimation de maison à Drumettaz-Clarafond : un marché en plein essor",
        "description": "Marché immobilier Drumettaz-Clarafond : estimation maison, essor rapide, ventes accélérées. Commune attractive, prix compétitifs, demande croissante.",
        "href": "/blog/estimation-maison-drumettaz-clarafond-marche-essor",
        "date": "30 septembre 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Drumettaz-Clarafond", "marché essor", "ventes rapides", "commune attractive"]
    },
    {
        "title": "Vendre votre maison à Pugny-Chatenod : comment fixer le bon prix",
        "description": "Stratégie vente Pugny-Chatenod : fixer prix optimal, village résidentiel calme, analyse comparative marché. Valorisez votre bien correctement.",
        "href": "/blog/vendre-maison-pugny-chatenod-fixer-bon-prix",
        "date": "3 octobre 2025",
        "readingTime": "9 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vendre maison Pugny-Chatenod", "fixer prix", "village résidentiel", "stratégie vente"]
    },
    {
        "title": "Estimation de maison à Trévignin : un secteur recherché proche d'Aix-les-Bains",
        "description": "Estimation Trévignin : secteur recherché proximité Aix-les-Bains, commune calme résidentielle, prix attractifs. Demande forte acheteurs familles.",
        "href": "/blog/estimation-maison-trevignin-secteur-recherche-aix",
        "date": "6 octobre 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Trévignin", "proche Aix-les-Bains", "commune résidentielle", "secteur recherché"]
    },
    {
        "title": "Immobilier à Saint-Baldoph : les prix grimpent, profitez-en pour vendre",
        "description": "Marché immobilier Saint-Baldoph : hausse prix continue, opportunité vendeurs, biens familiaux recherchés. Profitez conjoncture favorable 2025.",
        "href": "/blog/immobilier-saint-baldoph-prix-grimpent-vendre",
        "date": "9 octobre 2025",
        "readingTime": "9 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["vente maison Saint-Baldoph", "prix grimpent", "marché actif", "opportunité vente"]
    },
    {
        "title": "Estimation à Chignin : maisons, vignes et charme savoyard",
        "description": "Estimation immobilière Chignin : maisons caractère savoyard, domaine viticole, charme authentique. Marché spécifique, acheteurs amateurs terroir.",
        "href": "/blog/estimation-chignin-maisons-vignes-charme-savoyard",
        "date": "12 octobre 2025",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Chignin", "prix immobilier Chignin", "vignes", "charme savoyard"]
    },
    {
        "title": "Vendre à Cognin : tout savoir sur le marché immobilier en 2025",
        "description": "Guide marché immobilier Cognin 2025 : prix, tendances, proximité Chambéry, biens familiaux. Tout savoir pour vendre au meilleur prix.",
        "href": "/blog/vendre-cognin-marche-immobilier-2025-guide",
        "date": "15 octobre 2025",
        "readingTime": "12 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["agence immobilière Cognin", "vente Cognin", "marché 2025", "proximité Chambéry"]
    },
    {
        "title": "Estimation de votre maison à Jacob-Bellecombette : un marché recherché",
        "description": "Estimation Jacob-Bellecombette : marché recherché, proximité centre Chambéry, biens familiaux prisés. Valorisation optimale grâce position stratégique.",
        "href": "/blog/estimation-maison-jacob-bellecombette-marche-recherche",
        "date": "18 octobre 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Jacob-Bellecombette", "marché recherché", "proche Chambéry", "biens familiaux"]
    },
    {
        "title": "Prix au m² à Barberaz et conseils pour vendre votre maison",
        "description": "Prix m² Barberaz 2025 : commune urbaine forte demande, conseils vente, marché dynamique. Optimisez vente avec expertise locale.",
        "href": "/blog/prix-m2-barberaz-conseils-vendre-maison",
        "date": "21 octobre 2025",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["prix immobilier Barberaz", "prix m²", "forte demande", "commune urbaine"]
    },
    {
        "title": "Estimation à Challes-les-Eaux : les prix continuent de monter en 2025",
        "description": "Marché immobilier Challes-les-Eaux : prix hausse continue 2025, station thermale, marché résidentiel actif. Opportunité vendeurs, demande soutenue.",
        "href": "/blog/estimation-challes-les-eaux-prix-montent-2025",
        "date": "24 octobre 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Challes-les-Eaux", "prix montent", "marché thermal", "opportunité 2025"]
    },
    {
        "title": "Vendre votre maison à Saint-Alban-Leysse : notre guide complet 2025",
        "description": "Guide complet vente Saint-Alban-Leysse 2025 : prix, stratégies, marché pavillons familiaux. Expertise locale pour vendeurs résidences principales.",
        "href": "/blog/vendre-maison-saint-alban-leysse-guide-complet-2025",
        "date": "27 octobre 2025",
        "readingTime": "13 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vendre maison Saint-Alban-Leysse", "guide 2025", "pavillons", "familles"]
    },
    {
        "title": "Estimation de maison aux Déserts : un marché calme mais porteur",
        "description": "Marché immobilier Les Déserts : estimation maison terrain, calme recherché, résidences secondaires. Potentiel fort, acheteurs qualité de vie.",
        "href": "/blog/estimation-maison-les-deserts-marche-calme-porteur",
        "date": "30 octobre 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Les Déserts", "maison terrain", "résidence secondaire", "marché calme"]
    },
    {
        "title": "Vendre votre chalet au Revard : prix, marché et saison idéale",
        "description": "Vente chalet Revard : marché montagne, prix chalets, saisonnalité vente, clientèle sportifs. Expertise biens montagne, valorisation altitude.",
        "href": "/blog/vendre-chalet-revard-prix-marche-saison",
        "date": "2 novembre 2025",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente chalet Le Revard", "marché montagne", "saison idéale", "biens altitude"]
    },
    {
        "title": "Estimation à Montagnole : comment vendre vite dans ce secteur prisé",
        "description": "Vente rapide Montagnole : estimation précise, secteur prisé, stratégies efficaces. Commune recherchée, marché actif, opportunités vendeurs.",
        "href": "/blog/estimation-montagnole-vendre-vite-secteur-prise",
        "date": "5 novembre 2025",
        "readingTime": "9 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Montagnole", "vendre vite", "secteur prisé", "marché actif"]
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

print(f"✅ {len(articles)} articles HYPER-LOCAUX par commune ajoutés !")
print("\nCommunes couvertes:")
communes = [
    "1️⃣ Voglans (73420)", "2️⃣ La Motte-Servolex", "3️⃣ Sonnaz", "4️⃣ Méry",
    "5️⃣ Tresserve", "6️⃣ Viviers-du-Lac", "7️⃣ Le Bourget-du-Lac", "8️⃣ Drumettaz-Clarafond",
    "9️⃣ Pugny-Chatenod", "🔟 Trévignin", "1️⃣1️⃣ Saint-Baldoph", "1️⃣2️⃣ Chignin",
    "1️⃣3️⃣ Cognin", "1️⃣4️⃣ Jacob-Bellecombette", "1️⃣5️⃣ Barberaz", "1️⃣6️⃣ Challes-les-Eaux",
    "1️⃣7️⃣ Saint-Alban-Leysse", "1️⃣8️⃣ Les Déserts", "1️⃣9️⃣ Le Revard", "2️⃣0️⃣ Montagnole"
]
for commune in communes:
    print(f"{commune}")
print(f"\n🎉🎉🎉 TOTAL: 125 ARTICLES - DOMINATION HYPER-LOCALE ! 🎉🎉🎉")
