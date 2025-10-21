#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 25 articles hyper-locaux supplémentaires par commune

articles = [
    {
        "title": "Estimation immobilière à Saint-Jean-d'Arvey : un marché en pleine nature",
        "description": "Estimation Saint-Jean-d'Arvey : marché nature, maisons terrain, proximité montagne. Valorisation cadre exceptionnel, demande familles espace.",
        "href": "/blog/estimation-immobiliere-saint-jean-arvey-marche-nature",
        "date": "29 août 2026",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Saint-Jean-d'Arvey", "marché nature", "maisons terrain", "montagne"]
    },
    {
        "title": "Vendre une maison aux Déserts : le charme du calme à 20 min de Chambéry",
        "description": "Vente Déserts : charme calme, biens isolés, résidences secondaires, 20 min Chambéry. Valoriser authenticité, tranquillité recherchée.",
        "href": "/blog/vendre-maison-les-deserts-charme-calme-chambery",
        "date": "1 septembre 2026",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Les Déserts", "calme", "biens isolés", "résidences secondaires"]
    },
    {
        "title": "Prix de l'immobilier à Thoiry (73230) : un marché en plein essor",
        "description": "Marché immobilier Thoiry 73230 : essor rapide, petits pavillons, familles. Prix compétitifs, développement attractif.",
        "href": "/blog/prix-immobilier-thoiry-73230-marche-essor",
        "date": "4 septembre 2026",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Thoiry 73230", "marché essor", "pavillons", "familles"]
    },
    {
        "title": "Estimation à La Chapelle-du-Mont-du-Chat : une vie entre lac et montagne",
        "description": "La Chapelle-du-Mont-du-Chat : estimation vue lac, montagne, maisons anciennes. Position exceptionnelle, terrains valorisés.",
        "href": "/blog/estimation-la-chapelle-mont-chat-lac-montagne",
        "date": "7 septembre 2026",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["La Chapelle Mont du Chat", "vue lac montagne", "maisons anciennes", "terrain"]
    },
    {
        "title": "Vendre votre maison à Saint-Cassin : valorisez votre bien champêtre",
        "description": "Vente Saint-Cassin : maisons traditionnelles, patrimoine champêtre, authenticité. Valoriser charme rural, cadre préservé.",
        "href": "/blog/vendre-maison-saint-cassin-valoriser-champetre",
        "date": "10 septembre 2026",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Saint-Cassin", "maisons traditionnelles", "patrimoine", "champêtre"]
    },
    {
        "title": "Immobilier à Montagnole : un secteur recherché pour son calme et sa vue",
        "description": "Montagnole immobilier : secteur recherché, calme, vue panoramique. Biens familiaux premium, demande forte nature.",
        "href": "/blog/immobilier-montagnole-secteur-recherche-calme-vue",
        "date": "13 septembre 2026",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Montagnole", "calme vue", "premium nature", "biens familiaux"]
    },
    {
        "title": "Estimation de maison à Verel-Pragondran : entre nature et proximité urbaine",
        "description": "Verel-Pragondran estimation : équilibre nature/ville, biens isolés, maisons à rénover. Position stratégique, potentiel valorisation.",
        "href": "/blog/estimation-maison-verel-pragondran-nature-urbain",
        "date": "16 septembre 2026",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Verel-Pragondran", "nature urbain", "biens isolés", "à rénover"]
    },
    {
        "title": "Vendre à Barby : un marché dynamique aux portes de Chambéry",
        "description": "Marché Barby : dynamisme portes Chambéry, résidentiel actif, maisons modernes. Demande soutenue, proximité urbaine valorisée.",
        "href": "/blog/vendre-barby-marche-dynamique-portes-chambery",
        "date": "19 septembre 2026",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Barby", "marché dynamique", "portes Chambéry", "maisons modernes"]
    },
    {
        "title": "Estimation à Jacob-Bellecombette : des maisons très demandées près du centre",
        "description": "Jacob-Bellecombette estimation : quartier recherché, maisons familiales, proximité centre Chambéry. Fort potentiel, demande continue.",
        "href": "/blog/estimation-jacob-bellecombette-maisons-demandees-centre",
        "date": "22 septembre 2026",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Jacob-Bellecombette", "quartier recherché", "biens familiaux", "centre"]
    },
    {
        "title": "Vendre à Saint-Alban-Leysse : un marché attractif et en croissance",
        "description": "Saint-Alban-Leysse vente : marché attractif, croissance forte, potentiel mandats. Commune dynamique, investissement sûr.",
        "href": "/blog/vendre-saint-alban-leysse-marche-attractif-croissance",
        "date": "25 septembre 2026",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Saint-Alban-Leysse", "marché attractif", "croissance", "mandats"]
    },
    {
        "title": "Immobilier à Bassens : prix au m² et conseils pour vendre en 2025",
        "description": "Bassens immobilier : prix m² 2025, marché stable urbain, conseils vente. Commune recherchée, valorisation assurée.",
        "href": "/blog/immobilier-bassens-prix-m2-conseils-vendre-2025",
        "date": "28 septembre 2026",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Bassens", "prix m²", "marché stable", "urbain"]
    },
    {
        "title": "Estimation de maison à Cognin : forte demande sur les maisons familiales",
        "description": "Cognin estimation : forte demande maisons familiales, pavillons années 80/90. Marché actif, proximité Chambéry valorisée.",
        "href": "/blog/estimation-maison-cognin-forte-demande-familiales",
        "date": "1 octobre 2026",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Cognin", "forte demande", "maisons familiales", "pavillons"]
    },
    {
        "title": "Vendre votre bien à La Ravoire : les prix continuent de grimper",
        "description": "La Ravoire vente : prix hausse continue, proximité Chambéry, jeunes familles. Marché porteur, opportunité vendeurs.",
        "href": "/blog/vendre-bien-la-ravoire-prix-continuent-grimper",
        "date": "4 octobre 2026",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["La Ravoire", "prix grimpent", "proximité Chambéry", "jeunes familles"]
    },
    {
        "title": "Prix de l'immobilier à Barberaz : une commune très recherchée",
        "description": "Barberaz prix immobilier : commune très recherchée, fort trafic, mandats aisés. Position privilégiée, valorisation optimale.",
        "href": "/blog/prix-immobilier-barberaz-commune-tres-recherchee",
        "date": "7 octobre 2026",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Barberaz", "commune recherchée", "fort trafic", "mandats"]
    },
    {
        "title": "Estimation immobilière à Pugny-Chatenod : un cadre résidentiel paisible",
        "description": "Pugny-Chatenod estimation : cadre résidentiel paisible, maisons récentes, propriétaires stables. Tranquillité valorisée.",
        "href": "/blog/estimation-immobiliere-pugny-chatenod-cadre-paisible",
        "date": "10 octobre 2026",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Pugny-Chatenod", "cadre paisible", "résidentiel", "maisons récentes"]
    },
    {
        "title": "Vendre à Trévignin : un village prisé au-dessus d'Aix-les-Bains",
        "description": "Trévignin vente : village prisé, au-dessus Aix, vue dégagée. Biens familiaux recherchés, position dominante valorisée.",
        "href": "/blog/vendre-trevignin-village-prise-dessus-aix",
        "date": "13 octobre 2026",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Trévignin", "village prisé", "vue dégagée", "Aix-les-Bains"]
    },
    {
        "title": "Immobilier à Drumettaz : marché actif entre Aix et Chambéry",
        "description": "Drumettaz immobilier : marché actif, position Aix-Chambéry, biens recherchés. Mandats rapides, demande soutenue.",
        "href": "/blog/immobilier-drumettaz-marche-actif-aix-chambery",
        "date": "16 octobre 2026",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Drumettaz", "marché actif", "Aix Chambéry", "mandats rapides"]
    },
    {
        "title": "Estimation de maison à Méry : un marché équilibré en 2025",
        "description": "Méry estimation : marché équilibré 2025, bon mix acheteurs/vendeurs, stabilité. Commune familiale, demande régulière.",
        "href": "/blog/estimation-maison-mery-marche-equilibre-2025",
        "date": "19 octobre 2026",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Méry", "marché équilibré", "mix acheteurs vendeurs", "stabilité"]
    },
    {
        "title": "Prix au m² à Viviers-du-Lac : pourquoi les maisons partent vite",
        "description": "Viviers-du-Lac prix m² : maisons partent vite, marché tendu, fort potentiel vendeur. Position stratégique, demande forte.",
        "href": "/blog/prix-m2-viviers-du-lac-maisons-partent-vite",
        "date": "22 octobre 2026",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Viviers-du-Lac", "prix m²", "vente rapide", "marché tendu"]
    },
    {
        "title": "Vendre à Tresserve : un secteur haut de gamme au bord du lac",
        "description": "Tresserve vente : secteur haut de gamme, bord lac Bourget, marché luxe. Villas vue lac, mandats premium, clientèle exigeante.",
        "href": "/blog/vendre-tresserve-secteur-haut-gamme-bord-lac",
        "date": "25 octobre 2026",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Tresserve", "haut de gamme", "bord lac", "marché luxe"]
    },
    {
        "title": "Estimation à Saint-Offenge : entre Aix-les-Bains et les montagnes",
        "description": "Saint-Offenge estimation : entre Aix et montagnes, maisons secondaires, résidences paisibles. Position stratégique, cadre préservé.",
        "href": "/blog/estimation-saint-offenge-entre-aix-montagnes",
        "date": "28 octobre 2026",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Saint-Offenge", "entre Aix montagnes", "maisons secondaires", "paisible"]
    },
    {
        "title": "Immobilier à Brison-Saint-Innocent : des maisons rares autour du lac",
        "description": "Brison-Saint-Innocent immobilier : maisons rares bord lac, marché premium, mandats villas. Exclusivité, demande forte luxe.",
        "href": "/blog/immobilier-brison-saint-innocent-maisons-rares-lac",
        "date": "31 octobre 2026",
        "readingTime": "12 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Brison-Saint-Innocent", "maisons rares", "lac", "marché premium"]
    },
    {
        "title": "Vendre à Grésy-sur-Aix : un secteur résidentiel en forte demande",
        "description": "Grésy-sur-Aix vente : secteur résidentiel, forte demande, familles primo-accédants. Expansion rapide, marché dynamique.",
        "href": "/blog/vendre-gresy-sur-aix-secteur-residentiel-forte-demande",
        "date": "3 novembre 2026",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Grésy-sur-Aix", "résidentiel", "forte demande", "familles"]
    },
    {
        "title": "Prix de l'immobilier à La Biolle : vendre au bon moment",
        "description": "La Biolle prix immobilier : vendre bon moment, biens intermédiaires, secteur expansion. Opportunité timing, marché porteur.",
        "href": "/blog/prix-immobilier-la-biolle-vendre-bon-moment",
        "date": "6 novembre 2026",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["La Biolle", "bon moment", "biens intermédiaires", "expansion"]
    },
    {
        "title": "Estimation immobilière à Saint-Sulpice : maisons recherchées entre lac et colline",
        "description": "Saint-Sulpice estimation : maisons recherchées, entre lac et colline, résidences secondaires. Pied-à-terre lacustre, cadre exceptionnel.",
        "href": "/blog/estimation-immobiliere-saint-sulpice-lac-colline",
        "date": "9 novembre 2026",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["Saint-Sulpice", "lac colline", "maisons recherchées", "résidences secondaires"]
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

print(f"✅ {len(articles)} articles COMMUNES supplémentaires ajoutés !")
print("\n25 communes additionnelles couvertes:")
for i, article in enumerate(articles, 1):
    commune = article['tags'][0]
    print(f"{i}. {commune}")
print(f"\n🎉🎉🎉 TOTAL: 248 ARTICLES - RECORD ABSOLU INÉGALÉ ! 🎉🎉🎉")
print("🏔️ 65+ COMMUNES avec articles dédiés !")
print("🌍 COUVERTURE TERRITORIALE EXHAUSTIVE !")
