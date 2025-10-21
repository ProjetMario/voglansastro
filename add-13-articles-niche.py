#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 13 articles de niche ultra-ciblés - segments spécifiques

articles = [
    {
        "title": "Vendre sa résidence secondaire autour du lac du Bourget : comment attirer les acheteurs lyonnais et genevois",
        "description": "Stratégie vente résidence secondaire lac du Bourget : cibler clientèle lyonnaise et genevoise, valorisation usage loisirs, fiscalité. Guide complet vendeurs.",
        "href": "/blog/vendre-residence-secondaire-lac-bourget-acheteurs-lyon-geneve",
        "date": "1 août 2025",
        "readingTime": "13 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente résidence secondaire Savoie", "lac du Bourget", "acheteurs Lyon Genève", "maison vacances"]
    },
    {
        "title": "Combien vaut un appartement avec vue lac à Aix-les-Bains en 2025 ?",
        "description": "Valorisation appartement vue lac Aix-les-Bains : critères premium, surcote vue directe, étages, orientation. Estimation biens d'exception lac du Bourget.",
        "href": "/blog/valeur-appartement-vue-lac-aix-les-bains-2025",
        "date": "4 août 2025",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation appartement vue lac", "Aix-les-Bains premium", "valorisation vue", "immobilier haut de gamme"]
    },
    {
        "title": "Vendre une maison de caractère à Chambéry : comment valoriser le charme de l'ancien",
        "description": "Stratégie vente maison ancienne caractère Chambéry : mise en valeur cachet, rénovations valorisantes, ciblage acheteurs. Transformer l'ancien en atout.",
        "href": "/blog/vendre-maison-caractere-chambery-valoriser-ancien",
        "date": "7 août 2025",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vendre maison ancienne Chambéry", "maison caractère", "valorisation cachet", "charme ancien"]
    },
    {
        "title": "Pourquoi les investisseurs cherchent des biens à La Motte-Servolex et Drumettaz en 2025",
        "description": "Analyse opportunités investissement La Motte-Servolex et Drumettaz : rendements locatifs, demande locative, prix attractifs. Pourquoi vendre aux investisseurs.",
        "href": "/blog/investisseurs-cherchent-biens-la-motte-servolex-drumettaz-2025",
        "date": "10 août 2025",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["investissement immobilier Savoie", "La Motte-Servolex", "Drumettaz", "rendement locatif"]
    },
    {
        "title": "Comment vendre un bien hérité à Voglans sans blocage familial ni perte de valeur",
        "description": "Vente succession Voglans : gestion aspects juridiques, familiaux, émotionnels. Accompagnement indivision, optimisation fiscale, valorisation maximale.",
        "href": "/blog/vendre-bien-herite-voglans-sans-blocage-familial",
        "date": "13 août 2025",
        "readingTime": "14 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["vente succession Savoie", "bien hérité", "indivision", "accompagnement familial"]
    },
    {
        "title": "Terrains constructibles autour de Chambéry : les prix explosent, faut-il vendre maintenant ?",
        "description": "Marché terrains constructibles Chambéry 2025 : explosion prix, rareté, opportunités vendeurs. Analyse conjoncture, timing optimal vente parcelles.",
        "href": "/blog/terrains-constructibles-chambery-prix-explosent-vendre-maintenant",
        "date": "16 août 2025",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["vente terrain Chambéry", "terrain constructible", "explosion prix", "opportunité vente"]
    },
    {
        "title": "Vendre un logement classé F ou G à Aix-les-Bains : quelles solutions avant 2026 ?",
        "description": "Vente DPE F/G Aix-les-Bains : nouvelles réglementations 2026, solutions travaux, stratégies prix, ciblage acheteurs. Transformer contrainte en opportunité.",
        "href": "/blog/vendre-logement-dpe-f-g-aix-les-bains-solutions-2026",
        "date": "19 août 2025",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["vente DPE F G Aix-les-Bains", "passoire thermique", "réglementation 2026", "solutions vente"]
    },
    {
        "title": "Comment vendre une maison à rénover à Tresserve ou Méry sans la brader",
        "description": "Stratégie vente maison à rénover Tresserve/Méry : valorisation potentiel, ciblage acheteurs travaux, pricing intelligent. Éviter bradage, maximiser prix.",
        "href": "/blog/vendre-maison-renover-tresserve-mery-sans-brader",
        "date": "22 août 2025",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison à rénover Savoie", "Tresserve", "Méry", "éviter bradage"]
    },
    {
        "title": "Studio, T2 ou T3 : les biens les plus demandés à Chambéry centre",
        "description": "Marché petites surfaces Chambéry centre : demande locative étudiante/jeunes actifs, prix m², rentabilité. Opportunités vendeurs appartements compacts.",
        "href": "/blog/studio-t2-t3-biens-demandes-chambery-centre",
        "date": "25 août 2025",
        "readingTime": "9 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["vente appartement Chambéry centre", "petites surfaces", "studio T2 T3", "demande locative"]
    },
    {
        "title": "Les maisons avec piscine autour du lac du Bourget se vendent jusqu'à 20 % plus cher",
        "description": "Valorisation maisons piscine lac du Bourget : surcote chiffrée, critères qualité piscine, ciblage acheteurs luxe. Optimisez votre vente bien d'exception.",
        "href": "/blog/maisons-piscine-lac-bourget-vendent-20-pourcent-plus-cher",
        "date": "28 août 2025",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["vente maison piscine Bourget", "valorisation piscine", "surcote 20%", "premium lac"]
    },
    {
        "title": "Comment vendre vite une maison mitoyenne à La Motte-Servolex",
        "description": "Stratégie vente rapide maison mitoyenne La Motte-Servolex : valoriser atouts, rassurer acheteurs, pricing compétitif. Dépasser objections mitoyenneté.",
        "href": "/blog/vendre-vite-maison-mitoyenne-la-motte-servolex",
        "date": "31 août 2025",
        "readingTime": "9 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente maison mitoyenne", "La Motte-Servolex", "vente rapide", "copropriété"]
    },
    {
        "title": "Vendre une villa de prestige à Tresserve : stratégie et discrétion",
        "description": "Vente villa luxe Tresserve : approche confidentielle, ciblage acheteurs haut de gamme, valorisation prestige. Expertise marché premium lac du Bourget.",
        "href": "/blog/vendre-villa-prestige-tresserve-strategie-discretion",
        "date": "3 septembre 2025",
        "readingTime": "13 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente villa prestige Tresserve", "immobilier luxe", "confidentialité", "haut de gamme"]
    },
    {
        "title": "Vendre un bien atypique en Savoie : grange, loft ou ancien commerce",
        "description": "Stratégie vente biens atypiques Savoie : grange rénovée, loft, local commercial reconverti. Valoriser l'originalité, cibler acquéreurs créatifs.",
        "href": "/blog/vendre-bien-atypique-savoie-grange-loft-commerce",
        "date": "6 septembre 2025",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["vente bien atypique Savoie", "grange rénovée", "loft", "reconversion"]
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

print(f"✅ {len(articles)} articles de NICHE ultra-ciblés ajoutés avec succès!")
print("\nArticles segments spécifiques:")
for i, article in enumerate(articles, 1):
    emoji = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "1️⃣1️⃣", "1️⃣2️⃣", "1️⃣3️⃣"][i-1]
    print(f"{emoji} {article['title'][:80]}...")
print(f"\n🎉🎉🎉 TOTAL: 105 ARTICLES - CAP DES 100 DÉPASSÉ ! 🎉🎉🎉")
