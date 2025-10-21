#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

# Liste complète des articles de mairies
articles = [
    {
        "title": "Mairie d'Aix-les-Bains : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie d'Aix-les-Bains : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-aix-les-bains-guide-complet",
        "date": "20 janvier 2025",
        "readingTime": "15 min",
        "tags": "mairie Aix-les-Bains"
    },
    {
        "title": "Mairie de La Motte-Servolex : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de La Motte-Servolex : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-la-motte-servolex-guide-complet",
        "date": "29 janvier 2025",
        "readingTime": "13 min",
        "tags": "mairie La Motte-Servolex"
    },
    {
        "title": "Mairie de Cognin : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Cognin : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-cognin-guide-complet",
        "date": "27 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Cognin"
    },
    {
        "title": "Mairie de Montmélian : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Montmélian : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-montmelian-guide-complet",
        "date": "30 janvier 2025",
        "readingTime": "13 min",
        "tags": "mairie Montmélian"
    },
    {
        "title": "Mairie de Bassens : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Bassens : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-bassens-guide-complet",
        "date": "26 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Bassens"
    },
    {
        "title": "Mairie de Jacob-Bellecombette : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Jacob-Bellecombette : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-jacob-bellecombette-guide-complet",
        "date": "28 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Jacob-Bellecombette"
    },
    {
        "title": "Mairie de Saint-Alban-Leysse : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Saint-Alban-Leysse : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-saint-alban-leysse-guide-complet",
        "date": "31 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Saint-Alban-Leysse"
    },
    {
        "title": "Mairie de Saint-Baldoph : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Saint-Baldoph : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-saint-baldoph-guide-complet",
        "date": "1 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Saint-Baldoph"
    },
    {
        "title": "Mairie de Viviers-du-Lac : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Viviers-du-Lac : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-viviers-du-lac-guide-complet",
        "date": "17 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Viviers-du-Lac"
    },
    {
        "title": "Mairie du Bourget-du-Lac : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie du Bourget-du-Lac : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-bourget-du-lac-guide-complet",
        "date": "21 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Bourget-du-Lac"
    },
    {
        "title": "Mairie de Drumettaz : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Drumettaz : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-drumettaz-guide-complet",
        "date": "22 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Drumettaz"
    },
    {
        "title": "Mairie de Méry : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Méry : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-mery-guide-complet",
        "date": "16 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Méry"
    },
    {
        "title": "Mairie de Sonnaz : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Sonnaz : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-sonnaz-guide-complet",
        "date": "18 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Sonnaz"
    },
    {
        "title": "Mairie d'Aiguebelette-le-Lac : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie d'Aiguebelette-le-Lac : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-aiguebelette-le-lac-guide-complet",
        "date": "24 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Aiguebelette-le-Lac"
    },
    {
        "title": "Mairie d'Albens : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie d'Albens : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-albens-guide-complet",
        "date": "25 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Albens"
    },
    {
        "title": "Mairie d'Aillon-le-Jeune : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie d'Aillon-le-Jeune : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-aillon-le-jeune-guide-complet",
        "date": "3 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Aillon-le-Jeune"
    },
    {
        "title": "Mairie d'Aillon-le-Vieux : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie d'Aillon-le-Vieux : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-aillon-le-vieux-guide-complet",
        "date": "4 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Aillon-le-Vieux"
    },
    {
        "title": "Mairie d'Arith : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie d'Arith : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-arith-guide-complet",
        "date": "5 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Arith"
    },
    {
        "title": "Mairie d'Attignat-Oncin : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie d'Attignat-Oncin : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-attignat-oncin-guide-complet",
        "date": "6 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Attignat-Oncin"
    },
    {
        "title": "Mairie d'Avressieux : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie d'Avressieux : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-avressieux-guide-complet",
        "date": "7 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Avressieux"
    },
    {
        "title": "Mairie de Barraux : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Barraux : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-barraux-guide-complet",
        "date": "8 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Barraux"
    },
    {
        "title": "Mairie de Bellecombe-en-Bauges : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Bellecombe-en-Bauges : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-bellecombe-en-bauges-guide-complet",
        "date": "9 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Bellecombe-en-Bauges"
    },
    {
        "title": "Mairie de Belmont-Tramonet : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Belmont-Tramonet : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-belmont-tramonet-guide-complet",
        "date": "10 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Belmont-Tramonet"
    },
    {
        "title": "Mairie de La Bauche : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de La Bauche : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-la-bauche-guide-complet",
        "date": "11 février 2025",
        "readingTime": "12 min",
        "tags": "mairie La Bauche"
    },
    {
        "title": "Mairie de Chignin : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Chignin : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-chignin-guide-complet",
        "date": "12 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Chignin"
    },
    {
        "title": "Mairie de Corbel : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Corbel : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-corbel-guide-complet",
        "date": "13 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Corbel"
    },
    {
        "title": "Mairie de Cruet : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Cruet : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-cruet-guide-complet",
        "date": "14 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Cruet"
    },
    {
        "title": "Mairie de Curienne : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Curienne : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-curienne-guide-complet",
        "date": "15 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Curienne"
    },
    {
        "title": "Mairie de Saint-Cassin : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Saint-Cassin : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-saint-cassin-guide-complet",
        "date": "2 février 2025",
        "readingTime": "12 min",
        "tags": "mairie Saint-Cassin"
    },
    {
        "title": "Mairie de Voglans : Guide Complet 2025 - Services et Démarches",
        "description": "Tout savoir sur la mairie de Voglans : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.",
        "href": "/blog/mairie-voglans-guide-complet",
        "date": "23 janvier 2025",
        "readingTime": "12 min",
        "tags": "mairie Voglans"
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
    articles_code += f'''  {{
    title: "{article['title']}",
    description: "{article['description']}",
    href: "{article['href']}",
    date: "{article['date']}",
    readingTime: "{article['readingTime']}",
    category: "Services publics",
    featured: true,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&q=80",
    tags: ["{article['tags']}", "services administratifs", "démarches en ligne", "état civil", "urbanisme"]
  }},
'''

# Insérer les articles avant ];
new_content = content[:insert_position] + articles_code + content[insert_position:]

# Écrire le fichier modifié
with open('src/pages/blog/index.astro', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"✅ {len(articles)} articles ajoutés avec succès dans index.astro!")
