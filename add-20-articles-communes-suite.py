#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 20 articles hyper-locaux supplémentaires - Extension couverture territoriale

articles = [
    {
        "title": "Vendre votre maison à Brison-Saint-Innocent : un marché très recherché au bord du lac",
        "description": "Marché immobilier Brison-Saint-Innocent : vente maison bord lac Bourget, secteur très recherché, clientèle premium. Valorisez position exceptionnelle.",
        "href": "/blog/vendre-maison-brison-saint-innocent-marche-recherche-lac",
        "date": "8 novembre 2025",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["estimation Brison-Saint-Innocent", "vente bord lac", "marché recherché", "lac du Bourget"]
    },
    {
        "title": "Estimation immobilière à Mouxy : les prix montent encore en 2025",
        "description": "Prix immobilier Mouxy 2025 : estimation maison lotissement, hausse continue, marché résidentiel actif. Profitez dynamique favorable vendeurs.",
        "href": "/blog/estimation-immobiliere-mouxy-prix-montent-2025",
        "date": "11 novembre 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Mouxy", "prix montent 2025", "maisons lotissement", "marché résidentiel"]
    },
    {
        "title": "Immobilier à Grésy-sur-Aix : combien vaut votre maison aujourd'hui ?",
        "description": "Estimation Grésy-sur-Aix : commune expansion rapide, prix immobilier 2025, valorisation croissante. Marché dynamique, opportunités vendeurs.",
        "href": "/blog/immobilier-gresy-sur-aix-valeur-maison-2025",
        "date": "14 novembre 2025",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["prix immobilier Grésy-sur-Aix", "estimation", "expansion rapide", "commune dynamique"]
    },
    {
        "title": "Vendre votre maison à Alby-sur-Chéran : entre Annecy et Aix, un marché dynamique",
        "description": "Marché immobilier Alby-sur-Chéran : position stratégique Annecy-Aix, vente résidence principale, dynamisme local. Valorisez emplacement privilégié.",
        "href": "/blog/vendre-maison-alby-sur-cheran-entre-annecy-aix-dynamique",
        "date": "17 novembre 2025",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison Alby-sur-Chéran", "entre Annecy Aix", "marché dynamique", "position stratégique"]
    },
    {
        "title": "Estimation de maison à Saint-Offenge : les atouts d'un village recherché",
        "description": "Village Saint-Offenge : estimation maison campagne, calme recherché, cadre préservé. Atouts qualité de vie, marché stable acheteurs familles.",
        "href": "/blog/estimation-maison-saint-offenge-atouts-village-recherche",
        "date": "20 novembre 2025",
        "readingTime": "9 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Saint-Offenge", "village recherché", "maison campagne", "calme"]
    },
    {
        "title": "Vendre à Saint-Jean-d'Arvey : les maisons avec terrain ont la cote",
        "description": "Marché Saint-Jean-d'Arvey : vente maison terrain, demande forte biens familiaux jardin. Valorisez espace extérieur, cadre verdoyant recherché.",
        "href": "/blog/vendre-saint-jean-arvey-maisons-terrain-cote",
        "date": "23 novembre 2025",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison Saint-Jean-d'Arvey", "maison terrain", "biens familiaux", "jardin"]
    },
    {
        "title": "Estimation immobilière à Lescheraines : un marché nature entre lacs et montagnes",
        "description": "Marché Lescheraines : estimation chalet, biens secondaires, cadre nature lacs-montagnes. Clientèle amateurs authenticité, potentiel fort.",
        "href": "/blog/estimation-immobiliere-lescheraines-marche-nature-lacs-montagnes",
        "date": "26 novembre 2025",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Lescheraines", "biens secondaires", "chalets", "nature lacs montagnes"]
    },
    {
        "title": "Vendre à La Ravoire : profitez de la proximité immédiate de Chambéry",
        "description": "Zone périurbaine La Ravoire : vente maison, proximité Chambéry, marché très actif. Position stratégique, demande soutenue acheteurs urbains.",
        "href": "/blog/vendre-la-ravoire-proximite-immediate-chambery",
        "date": "29 novembre 2025",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vendre maison La Ravoire", "proximité Chambéry", "périurbain", "marché actif"]
    },
    {
        "title": "Immobilier à Barby : combien vaut votre bien en 2025 ?",
        "description": "Estimation Barby 2025 : commune résidentielle croissance, prix immobilier, marché stable. Développement attractif, opportunités vendeurs.",
        "href": "/blog/immobilier-barby-valeur-bien-2025",
        "date": "2 décembre 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Barby", "prix immobilier Barby", "commune croissance", "résidentiel"]
    },
    {
        "title": "Vendre une maison à Saint-Cassin : marché en plein essor à 10 min de Chambéry",
        "description": "Marché essor Saint-Cassin : vente petite maison, terrains, calme, 10 min Chambéry. Commune attractive, prix compétitifs, demande croissante.",
        "href": "/blog/vendre-maison-saint-cassin-marche-essor-10min-chambery",
        "date": "5 décembre 2025",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison Saint-Cassin", "marché essor", "10 min Chambéry", "terrains"]
    },
    {
        "title": "Estimation de maison à Saint-Sulpice : la campagne prisée près du lac du Bourget",
        "description": "Saint-Sulpice Savoie : estimation maison campagne, proche lac Bourget, résidences secondaires. Cadre prisé, tranquillité, proximité lac.",
        "href": "/blog/estimation-maison-saint-sulpice-campagne-prisee-lac-bourget",
        "date": "8 décembre 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Saint-Sulpice Savoie", "proche lac Bourget", "campagne prisée", "résidence secondaire"]
    },
    {
        "title": "Immobilier aux Échelles : vendre rapidement dans un secteur en reconversion",
        "description": "Marché Les Échelles : vente rapide maison familiale, secteur reconversion, prix attractifs. Opportunités acquéreurs budget maîtrisé.",
        "href": "/blog/immobilier-les-echelles-vendre-rapidement-reconversion",
        "date": "11 décembre 2025",
        "readingTime": "9 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison Les Échelles", "vendre rapidement", "reconversion", "prix attractifs"]
    },
    {
        "title": "Vendre à Saint-Pierre-de-Curtille : le charme du lac et du patrimoine",
        "description": "Saint-Pierre-de-Curtille : vente charme patrimoine, proximité lac Bourget, cadre exceptionnel. Valorisez authenticité, position privilégiée.",
        "href": "/blog/vendre-saint-pierre-curtille-charme-lac-patrimoine",
        "date": "14 décembre 2025",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["estimation Saint-Pierre-de-Curtille", "patrimoine", "lac Bourget", "charme"]
    },
    {
        "title": "Estimation immobilière à Saint-Ours : profitez d'un marché en hausse",
        "description": "Marché Saint-Ours : estimation hausse prix, petit village expansion, opportunité vendeurs. Profitez dynamique favorable, demande croissante.",
        "href": "/blog/estimation-immobiliere-saint-ours-marche-hausse",
        "date": "17 décembre 2025",
        "readingTime": "9 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Saint-Ours", "marché hausse", "village expansion", "opportunité"]
    },
    {
        "title": "Vendre autour de Hautecombe : un cadre exceptionnel pour des biens rares",
        "description": "Secteur Hautecombe : vente biens premium, villa vue lac, cadre exceptionnel abbaye. Marché luxe, clientèle exigeante, discrétion assurée.",
        "href": "/blog/vendre-hautecombe-cadre-exceptionnel-biens-rares",
        "date": "20 décembre 2025",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison Hautecombe", "biens premium", "villa vue lac", "cadre exceptionnel"]
    },
    {
        "title": "Prix immobilier à Cusy : une valeur sûre entre Aix et Annecy",
        "description": "Marché Cusy : prix immobilier, position Aix-Annecy, maison familiale, bon rapport qualité-prix. Valeur sûre investissement, stabilité marché.",
        "href": "/blog/prix-immobilier-cusy-valeur-sure-aix-annecy",
        "date": "23 décembre 2025",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["prix immobilier Cusy", "entre Aix Annecy", "maison familiale", "valeur sûre"]
    },
    {
        "title": "Vendre à Drumettaz : l'équilibre parfait entre campagne et ville",
        "description": "Drumettaz détail : vente équilibre campagne-ville, sous-secteur Aix, forte demande. Position stratégique, cadre vie optimal, marché actif.",
        "href": "/blog/vendre-drumettaz-equilibre-campagne-ville",
        "date": "26 décembre 2025",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["estimation Drumettaz", "campagne ville", "forte demande", "équilibre vie"]
    },
    {
        "title": "Immobilier à Albens : le nouveau pôle attractif entre Chambéry et Annecy",
        "description": "Albens Entrelacs : vente zone stratégique Chambéry-Annecy, nouveau pôle attractif, développement rapide. Opportunité investissement, marché porteur.",
        "href": "/blog/immobilier-albens-pole-attractif-chambery-annecy",
        "date": "29 décembre 2025",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison Albens", "pôle attractif", "Chambéry Annecy", "zone stratégique"]
    },
    {
        "title": "Estimation de maison à La Biolle : marché actif aux portes d'Aix-les-Bains",
        "description": "La Biolle : estimation marché intermédiaire stable, portes Aix-les-Bains, résidentiel équilibré. Demande régulière, prix stables, sécurité vente.",
        "href": "/blog/estimation-maison-la-biolle-marche-actif-aix",
        "date": "1 janvier 2026",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation La Biolle", "marché actif", "portes Aix", "stable"]
    },
    {
        "title": "Vendre votre bien à Grésy-sur-Isère : un secteur en devenir dans la Combe de Savoie",
        "description": "Grésy-sur-Isère : vente secteur devenir, Combe de Savoie, potentiel développement. Marché émergent, prix attractifs, opportunités précoces.",
        "href": "/blog/vendre-bien-gresy-sur-isere-secteur-devenir-combe-savoie",
        "date": "4 janvier 2026",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente Grésy-sur-Isère", "Combe de Savoie", "secteur devenir", "potentiel"]
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

print(f"✅ {len(articles)} articles HYPER-LOCAUX supplémentaires ajoutés !")
print("\n20 communes supplémentaires couvertes:")
communes = [
    "1️⃣ Brison-Saint-Innocent", "2️⃣ Mouxy", "3️⃣ Grésy-sur-Aix", "4️⃣ Alby-sur-Chéran",
    "5️⃣ Saint-Offenge", "6️⃣ Saint-Jean-d'Arvey", "7️⃣ Lescheraines", "8️⃣ La Ravoire",
    "9️⃣ Barby", "🔟 Saint-Cassin", "1️⃣1️⃣ Saint-Sulpice", "1️⃣2️⃣ Les Échelles",
    "1️⃣3️⃣ Saint-Pierre-de-Curtille", "1️⃣4️⃣ Saint-Ours", "1️⃣5️⃣ Hautecombe", "1️⃣6️⃣ Cusy",
    "1️⃣7️⃣ Drumettaz (détail)", "1️⃣8️⃣ Albens (Entrelacs)", "1️⃣9️⃣ La Biolle", "2️⃣0️⃣ Grésy-sur-Isère"
]
for commune in communes:
    print(f"{commune}")
print(f"\n🎉🎉🎉 TOTAL: 145 ARTICLES - COUVERTURE TERRITORIALE ABSOLUE ! 🎉🎉🎉")
print(f"🏔️ 40 COMMUNES avec articles dédiés + 31 mairies = 71 COMMUNES TOTALES !")
