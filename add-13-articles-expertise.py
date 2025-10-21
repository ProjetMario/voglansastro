#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 13 articles expertise marché et conversion premium

articles = [
    {
        "title": "Immobilier à Chambéry en 2025 : les vendeurs reprennent la main",
        "description": "Analyse marché immobilier Chambéry 2025 : inversion de tendance, rééquilibrage offre/demande, opportunités vendeurs. Les cycles du marché décryptés.",
        "href": "/blog/immobilier-chambery-2025-vendeurs-reprennent-main",
        "date": "11 juin 2025",
        "readingTime": "12 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["marché immobilier Chambéry", "tendance 2025", "cycles marché", "opportunités vendeurs"]
    },
    {
        "title": "Combien vaut votre maison entre Sonnaz et La Motte-Servolex ?",
        "description": "Estimation immobilière secteur Sonnaz - La Motte-Servolex : prix par commune, critères valorisation, différentiels marché. Évaluation gratuite précise.",
        "href": "/blog/estimation-maison-sonnaz-la-motte-servolex",
        "date": "14 juin 2025",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation maison Sonnaz", "La Motte-Servolex", "prix comparatif", "évaluation secteur"]
    },
    {
        "title": "Comment préparer la mise en vente d'une maison à Viviers-du-Lac",
        "description": "Checklist complète préparation vente Viviers-du-Lac : travaux valorisants, mise en scène, timing optimal. Guide pratique étape par étape.",
        "href": "/blog/preparer-mise-en-vente-maison-viviers-du-lac",
        "date": "17 juin 2025",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vendre maison Viviers-du-Lac", "préparation vente", "mise en vente", "checklist vendeur"]
    },
    {
        "title": "Vendre à Tresserve : un marché exclusif autour du lac du Bourget",
        "description": "Marché immobilier premium Tresserve : clientèle haut de gamme, critères valorisation, positionnement prix. Stratégie vente biens d'exception.",
        "href": "/blog/vendre-tresserve-marche-exclusif-lac-bourget",
        "date": "20 juin 2025",
        "readingTime": "13 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["vente maison Tresserve", "marché premium", "lac du Bourget", "immobilier haut de gamme"]
    },
    {
        "title": "Prix du m² à Aix-les-Bains et communes voisines : ce qu'il faut savoir",
        "description": "Panorama prix m² Grand Aix-les-Bains 2025 : comparatif communes, évolutions, quartiers valorisés. Données actualisées, analyse détaillée.",
        "href": "/blog/prix-m2-aix-les-bains-communes-voisines",
        "date": "23 juin 2025",
        "readingTime": "12 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["prix immobilier Aix-les-Bains", "prix m²", "communes voisines", "analyse marché"]
    },
    {
        "title": "Estimation de maison à Méry : les critères que les acheteurs regardent en 2025",
        "description": "Critères valorisation maison Méry 2025 : attentes acheteurs, points clés, facteurs prix. Optimisez votre estimation selon demande réelle.",
        "href": "/blog/estimation-maison-mery-criteres-acheteurs-2025",
        "date": "26 juin 2025",
        "readingTime": "9 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation Méry", "critères acheteurs", "valorisation 2025", "attentes marché"]
    },
    {
        "title": "Vendre à Chambéry ou à Drumettaz : où les biens partent le plus vite ?",
        "description": "Comparatif délais vente Chambéry vs Drumettaz : statistiques marché, typologie acheteurs, facteurs rapidité. Analyse pour optimiser votre choix.",
        "href": "/blog/vendre-chambery-ou-drumettaz-biens-partent-vite",
        "date": "29 juin 2025",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["vente maison Chambéry", "Drumettaz", "comparatif vente", "rapidité vente"]
    },
    {
        "title": "Pourquoi les vendeurs d'Aix-les-Bains choisissent une agence 100 % locale",
        "description": "Avantages agence locale Aix-les-Bains : réseau proximité, connaissance marché, réactivité, accompagnement personnalisé. Témoignages vendeurs.",
        "href": "/blog/vendeurs-aix-les-bains-choisissent-agence-locale",
        "date": "2 juillet 2025",
        "readingTime": "9 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["agence immobilière Aix-les-Bains", "agence locale", "avantages proximité", "service personnalisé"]
    },
    {
        "title": "Les erreurs qui font fuir les acheteurs à Chambéry",
        "description": "Erreurs vente courantes Chambéry : prix inadapté, présentation négligée, disponibilité limitée. Comment éviter de faire fuir les acheteurs potentiels.",
        "href": "/blog/erreurs-font-fuir-acheteurs-chambery",
        "date": "5 juillet 2025",
        "readingTime": "8 min",
        "category": "Vente",
        "featured": True,
        "tags": ["erreurs vente maison Chambéry", "faire fuir acheteurs", "conseils vendeur", "optimisation vente"]
    },
    {
        "title": "Combien vaut votre villa avec vue lac à Le Bourget-du-Lac ?",
        "description": "Estimation villa premium Bourget-du-Lac : valorisation vue lac, critères luxe, marché haut de gamme. Évaluation biens d'exception lac du Bourget.",
        "href": "/blog/estimation-villa-vue-lac-bourget-du-lac",
        "date": "8 juillet 2025",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation villa Bourget-du-Lac", "vue lac", "immobilier premium", "valorisation luxe"]
    },
    {
        "title": "Comment cette maison à Trévignin s'est vendue en 15 jours",
        "description": "Cas réel vente rapide Trévignin : stratégie pricing, mise en valeur, marketing ciblé. Retour d'expérience détaillé, leçons à retenir.",
        "href": "/blog/maison-trevignin-vendue-15-jours-cas-concret",
        "date": "11 juillet 2025",
        "readingTime": "10 min",
        "category": "Témoignage",
        "featured": True,
        "tags": ["vente rapide Trévignin", "cas concret", "storytelling", "preuve résultats"]
    },
    {
        "title": "Taxe foncière, DPE, diagnostics : vendre sans stress en Savoie",
        "description": "Guide complet obligations vendeur Savoie 2025 : diagnostics obligatoires, DPE, taxes, démarches administratives. Vendez sereinement, en conformité.",
        "href": "/blog/taxe-fonciere-dpe-diagnostics-vendre-sans-stress-savoie",
        "date": "14 juillet 2025",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["vendre maison Savoie 2025", "diagnostics obligatoires", "DPE", "fiscalité vente"]
    },
    {
        "title": "Pourquoi 2025 est une année idéale pour vendre dans le bassin aixois",
        "description": "Conjoncture favorable vente Aix-les-Bains 2025 : taux attractifs, demande forte, stock limité. Analyse opportunités, timing optimal vendeurs.",
        "href": "/blog/2025-annee-ideale-vendre-bassin-aixois",
        "date": "17 juillet 2025",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["vente maison Aix-les-Bains 2025", "opportunité marché", "timing optimal", "conjoncture favorable"]
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

print(f"✅ {len(articles)} articles expertise et premium ajoutés avec succès!")
print("\nArticles ajoutés:")
for i, article in enumerate(articles, 1):
    emoji = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "1️⃣1️⃣", "1️⃣2️⃣", "1️⃣3️⃣"][i-1]
    print(f"{emoji} {article['title']}")
