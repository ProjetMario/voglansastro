#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 11 nouveaux articles SEO-optimisés pour le blog immobilier

articles = [
    {
        "title": "Combien vaut votre maison à Voglans en 2025 ?",
        "description": "Estimation immobilière gratuite à Voglans : découvrez les prix au m² 2025, les facteurs de valorisation et obtenez une estimation précise de votre maison en 48h.",
        "href": "/blog/estimation-maison-voglans-2025",
        "date": "20 février 2025",
        "readingTime": "9 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Voglans", "prix m² Voglans", "valorisation maison", "estimation gratuite"]
    },
    {
        "title": "Prix de l'immobilier à Aix-les-Bains et autour du lac du Bourget",
        "description": "Analyse complète des prix immobiliers 2025 à Aix-les-Bains et autour du lac du Bourget : tendances du marché, quartiers recherchés, évolution des prix.",
        "href": "/blog/prix-immobilier-aix-les-bains-lac-bourget-2025",
        "date": "23 février 2025",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["prix immobilier Aix-les-Bains", "lac du Bourget", "marché immobilier 2025", "tendances prix"]
    },
    {
        "title": "Vendre sa maison à Méry : 5 conseils pour réussir rapidement",
        "description": "Guide complet pour vendre rapidement votre maison à Méry : stratégies de prix, home staging, meilleures périodes, marketing immobilier. Conseils d'expert.",
        "href": "/blog/vendre-maison-mery-conseils-rapides",
        "date": "26 février 2025",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison Méry", "vendre rapidement", "conseils vente immobilier", "home staging"]
    },
    {
        "title": "Les 5 erreurs à éviter quand on vend sa maison à Chambéry",
        "description": "Évitez les pièges de la vente immobilière à Chambéry : erreurs de prix, mauvaise présentation, choix d'agence. Guide pour maximiser votre vente.",
        "href": "/blog/erreurs-vente-maison-chambery",
        "date": "1 mars 2025",
        "readingTime": "8 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vendre maison Chambéry", "erreurs vente immobilier", "conseils vendeur", "optimiser vente"]
    },
    {
        "title": "Estimation immobilière à La Motte-Servolex : ce qu'il faut savoir en 2025",
        "description": "Tout savoir sur l'estimation immobilière à La Motte-Servolex : prix au m² par quartier, critères de valorisation, outils d'estimation. Évaluation gratuite.",
        "href": "/blog/estimation-immobiliere-la-motte-servolex-2025",
        "date": "4 mars 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation La Motte-Servolex", "prix immobilier", "évaluation maison", "estimation 2025"]
    },
    {
        "title": "Pourquoi confier votre vente à une agence locale plutôt qu'à une plateforme en ligne ?",
        "description": "Agence immobilière locale vs plateformes en ligne : comparatif complet, avantages de l'expertise locale, accompagnement personnalisé, taux de réussite.",
        "href": "/blog/agence-locale-vs-plateforme-en-ligne",
        "date": "7 mars 2025",
        "readingTime": "9 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["agence immobilière locale", "vs plateforme en ligne", "expertise locale", "accompagnement vente"]
    },
    {
        "title": "Immobilier à Viviers-du-Lac et Tresserve : un marché recherché autour du lac",
        "description": "Analyse du marché immobilier prisé de Viviers-du-Lac et Tresserve : prix, demande locative, qualité de vie au bord du lac du Bourget. Opportunités 2025.",
        "href": "/blog/immobilier-viviers-du-lac-tresserve-marche-lac",
        "date": "10 mars 2025",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["prix Viviers-du-Lac", "Tresserve immobilier", "lac du Bourget", "marché immobilier"]
    },
    {
        "title": "Combien vaut votre appartement à Aix-les-Bains centre ou Marlioz ?",
        "description": "Estimation appartement Aix-les-Bains : prix au m² quartier centre-ville et Marlioz, critères de valorisation, comparatif quartiers. Évaluation gratuite.",
        "href": "/blog/estimation-appartement-aix-les-bains-centre-marlioz",
        "date": "13 mars 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation appartement Aix-les-Bains", "quartier Marlioz", "centre-ville", "prix m²"]
    },
    {
        "title": "Comment vendre rapidement à Drumettaz ou Pugny-Chatenod malgré la concurrence ?",
        "description": "Stratégies pour vendre rapidement votre maison à Drumettaz-Clarafond ou Pugny-Chatenod : se démarquer de la concurrence, prix attractif, marketing ciblé.",
        "href": "/blog/vendre-rapidement-drumettaz-pugny-chatenod",
        "date": "16 mars 2025",
        "readingTime": "9 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison Drumettaz", "Pugny-Chatenod", "vendre rapidement", "démarquage concurrence"]
    },
    {
        "title": "Le mandat exclusif expliqué simplement (et pourquoi il accélère la vente)",
        "description": "Mandat exclusif immobilier : définition, avantages, différences avec mandat simple. Pourquoi le mandat exclusif accélère votre vente et maximise le prix.",
        "href": "/blog/mandat-exclusif-immobilier-explique",
        "date": "19 mars 2025",
        "readingTime": "8 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["mandat exclusif immobilier", "mandat simple vs exclusif", "accélérer vente", "conseils mandat"]
    },
    {
        "title": "Immobilier à Chignin, Trévignin et Saint-Baldoph : les communes qui montent en Savoie",
        "description": "Découvrez Chignin, Trévignin et Saint-Baldoph : communes en plein essor en Savoie, prix attractifs, cadre de vie, opportunités d'investissement 2025.",
        "href": "/blog/immobilier-chignin-trevignin-saint-baldoph-communes-montantes",
        "date": "22 mars 2025",
        "readingTime": "12 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Chignin immobilier", "Trévignin", "Saint-Baldoph", "communes en essor Savoie"]
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

print(f"✅ {len(articles)} articles SEO ajoutés avec succès!")
print("\nArticles ajoutés:")
for i, article in enumerate(articles, 1):
    print(f"{i}. {article['title']}")
