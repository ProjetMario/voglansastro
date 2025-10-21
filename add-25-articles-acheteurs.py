#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 25 articles orientés ACHETEURS - Compléter l'écosystème

articles = [
    {
        "title": "Pourquoi les Genevois s'installent de plus en plus autour du lac du Bourget",
        "description": "Migration Genève vers lac Bourget : raisons installation, profils acheteurs suisses, opportunités marché. Fiscalité, qualité vie, proximité frontalière.",
        "href": "/blog/pourquoi-genevois-installent-lac-bourget",
        "date": "15 juin 2026",
        "readingTime": "12 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["acheteurs Genève", "lac du Bourget", "frontaliers", "migration"]
    },
    {
        "title": "Acheter à Chambéry en 2025 : le bon plan des investisseurs lyonnais",
        "description": "Investissement Chambéry pour Lyonnais : rendement locatif, prix attractifs, proximité, dynamisme local. Stratégie investisseurs métropole.",
        "href": "/blog/acheter-chambery-2025-bon-plan-investisseurs-lyonnais",
        "date": "18 juin 2026",
        "readingTime": "13 min",
        "category": "Investissement",
        "featured": True,
        "tags": ["investissement Chambéry", "investisseurs Lyon", "rendement", "opportunité"]
    },
    {
        "title": "Quitter Lyon pour Aix-les-Bains : un choix de vie gagnant",
        "description": "Migration Lyon-Aix : qualité vie, cadre naturel, proximité conservée, coût vie inférieur. Témoignages familles, analyse comparative.",
        "href": "/blog/quitter-lyon-aix-les-bains-choix-vie-gagnant",
        "date": "21 juin 2026",
        "readingTime": "11 min",
        "category": "Lifestyle",
        "featured": True,
        "tags": ["quitter Lyon", "Aix-les-Bains", "qualité vie", "choix vie"]
    },
    {
        "title": "Travailler à distance depuis la Savoie : les meilleurs villages où s'installer",
        "description": "Télétravail Savoie : villages idéaux, connexion internet, cadre inspirant, communauté digitale. Guide télétravailleurs parisiens.",
        "href": "/blog/travailler-distance-savoie-meilleurs-villages",
        "date": "24 juin 2026",
        "readingTime": "12 min",
        "category": "Lifestyle",
        "featured": True,
        "tags": ["télétravail Savoie", "villages", "Parisiens", "travail distance"]
    },
    {
        "title": "Les 7 lieux avec la plus belle vue sur le lac du Bourget",
        "description": "Top 7 vues exceptionnelles lac Bourget : panoramas spectaculaires, villages perchés, maisons vue imprenable. Rêve immobilier premium.",
        "href": "/blog/7-lieux-plus-belle-vue-lac-bourget",
        "date": "27 juin 2026",
        "readingTime": "10 min",
        "category": "Découverte",
        "featured": True,
        "tags": ["vue lac Bourget", "panorama", "lieux exceptionnels", "premium"]
    },
    {
        "title": "Acheter à Aix-les-Bains coûte 2 fois moins cher qu'à Lyon ou Genève",
        "description": "Comparatif prix Aix vs Lyon/Genève : économie substantielle, même qualité vie, accessibilité conservée. Opportunité financière acheteurs.",
        "href": "/blog/acheter-aix-les-bains-2-fois-moins-cher-lyon-geneve",
        "date": "30 juin 2026",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["prix comparatif", "Aix Lyon Genève", "économie", "opportunité"]
    },
    {
        "title": "S'installer à Chambéry en famille : écoles, vie locale, sécurité",
        "description": "Chambéry famille : qualité écoles, activités enfants, sécurité, cadre vie. Guide complet familles urbaines cherchant équilibre.",
        "href": "/blog/installer-chambery-famille-ecoles-vie-locale-securite",
        "date": "3 juillet 2026",
        "readingTime": "13 min",
        "category": "Lifestyle",
        "featured": True,
        "tags": ["Chambéry famille", "écoles", "vie locale", "sécurité"]
    },
    {
        "title": "Pourquoi Aix-les-Bains est devenue la destination préférée des jeunes retraités parisiens",
        "description": "Retraite Aix-les-Bains : attractivité CSP+ seniors, thermalisme, culture, douceur vie. Migration retraités parisiens analysée.",
        "href": "/blog/aix-les-bains-destination-preferee-jeunes-retraites-parisiens",
        "date": "6 juillet 2026",
        "readingTime": "12 min",
        "category": "Lifestyle",
        "featured": True,
        "tags": ["retraite Aix", "seniors Parisiens", "thermalisme", "seconde vie"]
    },
    {
        "title": "Acheter une résidence secondaire autour du lac du Bourget : un choix stratégique",
        "description": "Résidence secondaire lac Bourget : investissement plaisir, valorisation patrimoine, location saisonnière. Stratégie achat malin.",
        "href": "/blog/acheter-residence-secondaire-lac-bourget-choix-strategique",
        "date": "9 juillet 2026",
        "readingTime": "13 min",
        "category": "Investissement",
        "featured": True,
        "tags": ["résidence secondaire", "lac Bourget", "investissement", "stratégie"]
    },
    {
        "title": "1h20 de Lyon, 3h de Paris : Aix-les-Bains, le secret bien gardé des investisseurs",
        "description": "Accessibilité Aix-les-Bains : TGV Paris 3h, Lyon 1h20, autoroute, aéroports. Secret investisseurs, connexion métropoles préservée.",
        "href": "/blog/aix-les-bains-secret-bien-garde-investisseurs-accessibilite",
        "date": "12 juillet 2026",
        "readingTime": "11 min",
        "category": "Investissement",
        "featured": True,
        "tags": ["proximité transport", "Aix TGV", "accessibilité", "investisseurs"]
    },
    {
        "title": "Où investir en locatif autour de Chambéry : nos 5 communes favorites",
        "description": "Top 5 communes investissement locatif Chambéry : rendement, demande, prix, potentiel. Analyse expert agence locale.",
        "href": "/blog/ou-investir-locatif-chambery-5-communes-favorites",
        "date": "15 juillet 2026",
        "readingTime": "12 min",
        "category": "Investissement",
        "featured": True,
        "tags": ["investissement locatif", "Chambéry", "communes", "rendement"]
    },
    {
        "title": "Quel rendement locatif espérer à Aix-les-Bains ou La Motte-Servolex ?",
        "description": "Rendement locatif Aix/La Motte : taux moyens, typologie biens, demande locative. Analyse chiffrée investisseurs rationnels.",
        "href": "/blog/rendement-locatif-aix-les-bains-la-motte-servolex",
        "date": "18 juillet 2026",
        "readingTime": "11 min",
        "category": "Investissement",
        "featured": True,
        "tags": ["rendement locatif", "Aix La Motte", "rentabilité", "investissement"]
    },
    {
        "title": "Villas vue lac et chalets d'exception : le marché haut de gamme en Savoie",
        "description": "Immobilier luxe Savoie : villas vue lac Bourget, chalets exception, marché premium. Offre haut de gamme, acquéreurs exigeants.",
        "href": "/blog/villas-vue-lac-chalets-exception-marche-haut-gamme-savoie",
        "date": "21 juillet 2026",
        "readingTime": "13 min",
        "category": "Prestige",
        "featured": True,
        "tags": ["luxe prestige", "villas vue lac", "chalets exception", "haut de gamme"]
    },
    {
        "title": "Vivre à Tresserve ou Brison-Saint-Innocent : les perles du lac du Bourget",
        "description": "Tresserve & Brison : villages d'exception bord lac, authenticité préservée, cadre idyllique. Perles Bourget pour amoureux nature.",
        "href": "/blog/vivre-tresserve-brison-saint-innocent-perles-lac-bourget",
        "date": "24 juillet 2026",
        "readingTime": "11 min",
        "category": "Découverte",
        "featured": True,
        "tags": ["vie locale", "Tresserve Brison", "perles lac", "authenticité"]
    },
    {
        "title": "Pourquoi de plus en plus de Parisiens choisissent la Savoie pour se reconnecter à la nature",
        "description": "Évasion urbaine Savoie : Parisiens quête nature, authenticité, qualité vie. Tendance reconnexion, lifestyle montagne.",
        "href": "/blog/parisiens-choisissent-savoie-reconnecter-nature",
        "date": "27 juillet 2026",
        "readingTime": "12 min",
        "category": "Lifestyle",
        "featured": True,
        "tags": ["évasion urbaine", "Parisiens", "nature Savoie", "reconnexion"]
    },
    {
        "title": "Acheter en Savoie : les avantages fiscaux par rapport à la Suisse ou Paris",
        "description": "Avantages fiscaux Savoie : comparatif Suisse/Paris, optimisation imposition, coût vie. Arguments pragmatiques acheteurs frontaliers.",
        "href": "/blog/acheter-savoie-avantages-fiscaux-suisse-paris",
        "date": "30 juillet 2026",
        "readingTime": "12 min",
        "category": "Fiscalité",
        "featured": True,
        "tags": ["comparatif fiscal", "avantages Savoie", "Suisse Paris", "optimisation"]
    },
    {
        "title": "Les 5 maisons idéales pour télétravailler entre lac et montagne",
        "description": "Sélection maisons télétravail : bureaux vue, connexion optimale, cadre inspirant lac/montagne. Lifestyle moderne digital nomads.",
        "href": "/blog/5-maisons-ideales-teletravailler-lac-montagne",
        "date": "2 août 2026",
        "readingTime": "11 min",
        "category": "Lifestyle",
        "featured": True,
        "tags": ["télétravail haut de gamme", "maisons idéales", "lac montagne", "lifestyle"]
    },
    {
        "title": "Acheter une maison écologique en Savoie : le nouveau luxe vert",
        "description": "Immobilier durable Savoie : maisons éco-responsables, performance énergétique, luxe vert. Nouveau standard haut de gamme écologique.",
        "href": "/blog/acheter-maison-ecologique-savoie-nouveau-luxe-vert",
        "date": "5 août 2026",
        "readingTime": "12 min",
        "category": "Écologie",
        "featured": True,
        "tags": ["immobilier durable", "maison écologique", "luxe vert", "Savoie"]
    },
    {
        "title": "Les villages les plus recherchés autour de Chambéry pour s'installer",
        "description": "Top villages Chambéry : communes recherchées familles, cadre vie, prix attractifs. Guide installation périphérie urbaine.",
        "href": "/blog/villages-plus-recherches-chambery-installer",
        "date": "8 août 2026",
        "readingTime": "12 min",
        "category": "Découverte",
        "featured": True,
        "tags": ["bons plans villages", "Chambéry", "installation", "communes recherchées"]
    },
    {
        "title": "Aix-les-Bains vs Annecy : où investir en 2025 ?",
        "description": "Comparatif Aix vs Annecy : prix, rendement, potentiel, marché. Analyse complète investisseurs hésitants entre deux pôles.",
        "href": "/blog/aix-les-bains-vs-annecy-ou-investir-2025",
        "date": "11 août 2026",
        "readingTime": "13 min",
        "category": "Investissement",
        "featured": True,
        "tags": ["marché comparé", "Aix vs Annecy", "investissement 2025", "choix"]
    },
    {
        "title": "Les 10 maisons de rêve autour du lac du Bourget",
        "description": "Sélection maisons d'exception lac Bourget : architectures remarquables, vues spectaculaires, charme unique. Contenu émotionnel inspirant.",
        "href": "/blog/10-maisons-reve-lac-bourget",
        "date": "14 août 2026",
        "readingTime": "12 min",
        "category": "Découverte",
        "featured": True,
        "tags": ["coup de cœur", "maisons rêve", "lac Bourget", "exception"]
    },
    {
        "title": "Acheter une maison ancienne rénovée en Savoie : charme et authenticité",
        "description": "Patrimoine rénové Savoie : maisons caractère restaurées, charme authentique moderne, cachet préservé. Pour amoureux pierres.",
        "href": "/blog/acheter-maison-ancienne-renovee-savoie-charme-authenticite",
        "date": "17 août 2026",
        "readingTime": "11 min",
        "category": "Patrimoine",
        "featured": True,
        "tags": ["patrimoine charme", "maison ancienne rénovée", "authenticité", "Savoie"]
    },
    {
        "title": "Investir dans un bien saisonnier autour du lac : rentabilité et cadre idyllique",
        "description": "Location saisonnière lac Bourget : rentabilité Airbnb, cadre idyllique, gestion locative. Investissement plaisir + rendement.",
        "href": "/blog/investir-bien-saisonnier-lac-rentabilite-cadre",
        "date": "20 août 2026",
        "readingTime": "12 min",
        "category": "Investissement",
        "featured": True,
        "tags": ["résidences touristiques", "location saisonnière", "Airbnb", "rentabilité"]
    },
    {
        "title": "Acheter un chalet au Revard ou à Trévignin : calme, nature et rentabilité",
        "description": "Chalets montagne Revard/Trévignin : investissement altitude, location ski, calme nature. Marché haut de gamme saisonnier.",
        "href": "/blog/acheter-chalet-revard-trevignin-calme-nature-rentabilite",
        "date": "23 août 2026",
        "readingTime": "12 min",
        "category": "Montagne",
        "featured": True,
        "tags": ["chalets montagne", "Revard Trévignin", "rentabilité", "nature"]
    },
    {
        "title": "Pourquoi la Savoie attire de plus en plus les investisseurs métropolitains",
        "description": "Tendances 2025 Savoie : attractivité croissante investisseurs, raisons migration, opportunités marché. Analyse tendances lourdes.",
        "href": "/blog/savoie-attire-investisseurs-metropolitains-tendances-2025",
        "date": "26 août 2026",
        "readingTime": "13 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["tendances 2025", "investisseurs", "attractivité Savoie", "migration"]
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

print(f"✅ {len(articles)} articles ACHETEURS ajoutés - Écosystème complet !")
print("\nThèmes acheteurs couverts:")
print("🌍 Migration (Genève, Lyon, Paris)")
print("💼 Investissement (locatif, rendement)")
print("🏡 Lifestyle (télétravail, qualité vie)")
print("🏔️ Découverte (villages, vues, perles)")
print("💎 Prestige (luxe, villas, chalets)")
print("📊 Comparatifs (prix, fiscalité, villes)")
print("👨‍👩‍👧 Familles (écoles, sécurité, vie locale)")
print("👴 Retraite (seniors, thermalisme)")
print("🌱 Écologie (durable, vert, moderne)")
print("🏖️ Saisonnier (Airbnb, résidence secondaire)")
print(f"\n🎉🎉🎉 TOTAL: 223 ARTICLES - ÉCOSYSTÈME 360° COMPLET ! 🎉🎉🎉")
print("🏆 Vendeurs ET Acheteurs couverts !")
