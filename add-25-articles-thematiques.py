#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 25 articles thématiques ultra-stratégiques - Psychologie & Conversion

articles = [
    # PSYCHOLOGIE DU VENDEUR (5 articles)
    {
        "title": "Les 7 signes qui montrent qu'il est temps de vendre votre maison",
        "description": "7 indicateurs clés pour savoir quand vendre : marché, situation personnelle, opportunités. Identifiez le moment optimal pour votre projet immobilier.",
        "href": "/blog/7-signes-temps-vendre-maison",
        "date": "7 janvier 2026",
        "readingTime": "9 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["timing vente", "signes vendre", "moment optimal", "psychologie vendeur"]
    },
    {
        "title": "Pourquoi attendre peut vous faire perdre de l'argent sur votre vente",
        "description": "Risques financiers de l'attente : baisse marché, opportunités ratées, coûts cachés. Agissez maintenant pour maximiser votre prix de vente.",
        "href": "/blog/pourquoi-attendre-fait-perdre-argent-vente",
        "date": "10 janvier 2026",
        "readingTime": "8 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["urgence vente", "risques attente", "opportunité", "perte argent"]
    },
    {
        "title": "Les vendeurs qui ont attendu 6 mois de trop : retour d'expérience",
        "description": "Témoignages vendeurs ayant tardé : perte financière, regrets, leçons apprises. Évitez leurs erreurs, agissez au bon moment.",
        "href": "/blog/vendeurs-attendu-6-mois-trop-retour-experience",
        "date": "13 janvier 2026",
        "readingTime": "10 min",
        "category": "Témoignage",
        "featured": True,
        "tags": ["témoignage vendeurs", "attente excessive", "regrets", "leçons"]
    },
    {
        "title": "Vendre après un divorce : comment faire les bons choix immobiliers",
        "description": "Vente immobilière post-divorce : aspects juridiques, émotionnels, financiers. Accompagnement expert situation sensible, optimisation partage.",
        "href": "/blog/vendre-apres-divorce-bons-choix-immobiliers",
        "date": "16 janvier 2026",
        "readingTime": "13 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["vente divorce", "situation sensible", "partage bien", "accompagnement"]
    },
    {
        "title": "Vendre pour acheter plus grand : comment réussir votre double projet à Chambéry",
        "description": "Projet vendre-acheter Chambéry : synchronisation ventes, financement pont, stratégie double transaction. Parcours familial sécurisé.",
        "href": "/blog/vendre-acheter-plus-grand-double-projet-chambery",
        "date": "19 janvier 2026",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["vendre acheter", "double projet", "parcours familial", "Chambéry"]
    },
    
    # ARGENT & VALORISATION (5 articles)
    {
        "title": "Comment vendre 5 à 10 % plus cher sans travaux",
        "description": "Techniques valorisation sans rénovation : home staging, présentation optimale, timing marché. Maximisez prix sans investissement lourd.",
        "href": "/blog/vendre-5-10-pourcent-plus-cher-sans-travaux",
        "date": "22 janvier 2026",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["vendre plus cher", "sans travaux", "valorisation", "home staging"]
    },
    {
        "title": "Les petites rénovations qui font grimper la valeur d'une maison en Savoie",
        "description": "Rénovations rentables Savoie : travaux valorisants, ROI optimal, budget maîtrisé. Investissements stratégiques avant vente.",
        "href": "/blog/petites-renovations-grimper-valeur-maison-savoie",
        "date": "25 janvier 2026",
        "readingTime": "11 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["rénovations valorisantes", "travaux rentables", "augmenter valeur", "Savoie"]
    },
    {
        "title": "Comment savoir si votre maison est sous-évaluée",
        "description": "Indicateurs sous-évaluation : comparaison marché, analyse prix m², potentiel caché. Obtenez évaluation professionnelle précise.",
        "href": "/blog/savoir-si-maison-sous-evaluee",
        "date": "28 janvier 2026",
        "readingTime": "9 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["sous-évaluation", "estimation précise", "potentiel", "analyse marché"]
    },
    {
        "title": "Les critères qui font varier le prix d'un bien à Aix-les-Bains",
        "description": "Facteurs prix Aix-les-Bains : quartier, vue lac, état, superficie. Expertise marché local, valorisation optimale chaque critère.",
        "href": "/blog/criteres-varient-prix-bien-aix-les-bains",
        "date": "31 janvier 2026",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["critères prix", "Aix-les-Bains", "valorisation", "expertise locale"]
    },
    {
        "title": "Comment bien vendre une maison louée à un locataire",
        "description": "Vente bien occupé : droits locataire, préavis, visites, valorisation. Situation complexe maîtrisée, accompagnement juridique optimal.",
        "href": "/blog/bien-vendre-maison-louee-locataire",
        "date": "3 février 2026",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["vente bien loué", "avec locataire", "droits", "situation complexe"]
    },
    
    # OPPORTUNITÉS DE MARCHÉ (5 articles)
    {
        "title": "2025 : une année favorable aux vendeurs en Savoie ?",
        "description": "Conjoncture 2025 Savoie : analyse marché, opportunités vendeurs, fenêtre favorable. Profitez conditions optimales vente immobilière.",
        "href": "/blog/2025-annee-favorable-vendeurs-savoie",
        "date": "6 février 2026",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["marché 2025", "opportunité vendeurs", "Savoie", "conjoncture"]
    },
    {
        "title": "Pourquoi les acheteurs de Lyon et Genève s'installent autour du lac du Bourget",
        "description": "Migration Lyon-Genève vers lac Bourget : motivations, profils acheteurs, prix acceptés. Ciblez clientèle premium transfrontalière.",
        "href": "/blog/acheteurs-lyon-geneve-installent-lac-bourget",
        "date": "9 février 2026",
        "readingTime": "12 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["acheteurs Lyon Genève", "lac du Bourget", "résidence secondaire", "clientèle premium"]
    },
    {
        "title": "Les communes où les maisons se vendent le plus vite autour de Chambéry",
        "description": "Top communes vente rapide Chambéry : délais moyens, facteurs attractivité, marché actif. Identifiez zones forte demande.",
        "href": "/blog/communes-maisons-vendent-plus-vite-chambery",
        "date": "12 février 2026",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["vente rapide", "communes Chambéry", "marché actif", "délais"]
    },
    {
        "title": "Comment profiter de la demande forte sur les maisons avec jardin",
        "description": "Demande maisons jardin post-COVID : valorisation espace extérieur, ciblage acheteurs, pricing optimal. Tendance durable marché.",
        "href": "/blog/profiter-demande-forte-maisons-jardin",
        "date": "15 février 2026",
        "readingTime": "9 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["maison jardin", "demande forte", "post-COVID", "espace extérieur"]
    },
    {
        "title": "Le boom des maisons à la campagne autour d'Aix-les-Bains",
        "description": "Tendance campagne Aix-les-Bains : communes périphériques recherchées, qualité vie, prix attractifs. Opportunité vendeurs rural.",
        "href": "/blog/boom-maisons-campagne-aix-les-bains",
        "date": "18 février 2026",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["maisons campagne", "Aix-les-Bains", "communes périphériques", "boom"]
    },
    
    # VALEUR DE L'AGENCE (5 articles)
    {
        "title": "Agence locale vs site de mise en relation : ce que les vendeurs regrettent souvent",
        "description": "Comparatif agence vs plateformes : regrets vendeurs, écarts résultats, valeur accompagnement humain. Évitez mauvais choix.",
        "href": "/blog/agence-locale-vs-site-mise-relation-regrets-vendeurs",
        "date": "21 février 2026",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["agence vs plateforme", "regrets vendeurs", "valeur humain", "accompagnement"]
    },
    {
        "title": "Comment une agence locale peut faire la différence sur votre prix de vente",
        "description": "Expertise locale impact prix : connaissance marché, réseau acheteurs, négociation professionnelle. Valorisation maximale garantie.",
        "href": "/blog/agence-locale-difference-prix-vente",
        "date": "24 février 2026",
        "readingTime": "11 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["agence locale", "différence prix", "expertise", "valorisation"]
    },
    {
        "title": "Les étapes clés de la vente accompagnée par un professionnel",
        "description": "Processus vente professionnel : étapes détaillées, transparence totale, accompagnement chaque phase. Sérénité vendeur assurée.",
        "href": "/blog/etapes-cles-vente-accompagnee-professionnel",
        "date": "27 février 2026",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["étapes vente", "accompagnement pro", "transparence", "processus"]
    },
    {
        "title": "Comment choisir la bonne agence immobilière à Chambéry",
        "description": "Critères sélection agence Chambéry : expertise locale, résultats, services, honoraires. Guide décision vendeur éclairé.",
        "href": "/blog/choisir-bonne-agence-immobiliere-chambery",
        "date": "2 mars 2026",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["choisir agence", "Chambéry", "critères sélection", "guide"]
    },
    {
        "title": "Pourquoi une estimation gratuite ne suffit pas pour bien vendre",
        "description": "Au-delà estimation : diagnostic complet, stratégie vente, marketing, négociation. Approche globale nécessaire réussite.",
        "href": "/blog/pourquoi-estimation-gratuite-suffit-pas-bien-vendre",
        "date": "5 mars 2026",
        "readingTime": "9 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["estimation insuffisante", "diagnostic complet", "stratégie globale", "réussite vente"]
    },
    
    # CONTENU PREMIUM / ÉDUCATIF (5 articles)
    {
        "title": "Comment se déroule une estimation immobilière à domicile ?",
        "description": "Processus estimation domicile : étapes visite, critères analysés, rapport détaillé. Transparence totale, démystification service.",
        "href": "/blog/deroulement-estimation-immobiliere-domicile",
        "date": "8 mars 2026",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation domicile", "processus", "transparence", "visite expert"]
    },
    {
        "title": "Les frais à prévoir quand on vend sa maison (et comment les réduire)",
        "description": "Budget vente immobilière : frais détaillés, optimisations possibles, surprises évitées. Anticipation financière complète.",
        "href": "/blog/frais-prevoir-vendre-maison-reduire",
        "date": "11 mars 2026",
        "readingTime": "11 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["frais vente", "budget", "optimisation", "anticipation"]
    },
    {
        "title": "Les documents indispensables avant de mettre en vente",
        "description": "Checklist documents vente : diagnostics, titre propriété, règlements copropriété. Préparation administrative optimale.",
        "href": "/blog/documents-indispensables-avant-mise-vente",
        "date": "14 mars 2026",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["documents vente", "checklist", "préparation", "administratif"]
    },
    {
        "title": "Comment vendre rapidement grâce au mandat exclusif",
        "description": "Mandat exclusif accélérateur vente : engagement agence, visibilité maximale, résultats prouvés. Stratégie efficacité garantie.",
        "href": "/blog/vendre-rapidement-grace-mandat-exclusif",
        "date": "17 mars 2026",
        "readingTime": "9 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["mandat exclusif", "vente rapide", "efficacité", "résultats"]
    },
    {
        "title": "Les 10 conseils de notre équipe pour vendre vite et bien en Savoie",
        "description": "10 conseils experts vente Savoie : astuces terrain, erreurs éviter, bonnes pratiques. Synthèse expertise locale condensée.",
        "href": "/blog/10-conseils-equipe-vendre-vite-bien-savoie",
        "date": "20 mars 2026",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["10 conseils", "vendre vite", "Savoie", "expertise équipe"]
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

print(f"✅ {len(articles)} articles THÉMATIQUES ultra-stratégiques ajoutés !")
print("\n5 THÈMES de conversion maximale:")
print("🧠 Psychologie Vendeur (5 articles) - Projection & urgence")
print("💰 Argent & Valorisation (5 articles) - Maximiser prix")
print("📈 Opportunités Marché (5 articles) - FOMO & timing")
print("🤝 Valeur Agence (5 articles) - Confiance & différenciation")
print("📚 Contenu Premium (5 articles) - Éducation & rassurance")
print(f"\n🎉🎉🎉 TOTAL: 170 ARTICLES - STRATÉGIE COMPLÈTE 360° ! 🎉🎉🎉")
