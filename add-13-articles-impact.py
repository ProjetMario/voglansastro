#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 13 articles à fort impact marketing et psychologique

articles = [
    {
        "title": "Vendre sans agence à Aix-les-Bains : bonne ou mauvaise idée en 2025 ?",
        "description": "Vente sans agence à Aix-les-Bains : avantages réels vs pièges cachés. Comparatif coûts, délais, résultats. Ce que les particuliers ne vous disent pas.",
        "href": "/blog/vendre-sans-agence-aix-les-bains-bonne-ou-mauvaise-idee",
        "date": "3 mai 2025",
        "readingTime": "11 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["vendre sans agence", "Aix-les-Bains", "comparatif agence particulier", "valeur agence immobilière"]
    },
    {
        "title": "Comment éviter de sous-évaluer votre bien à Voglans (et perdre des milliers d'euros) ?",
        "description": "Erreurs d'estimation à Voglans : comment éviter de perdre 10-20% de la valeur de votre bien. Méthodes pro d'évaluation, pièges à éviter.",
        "href": "/blog/eviter-sous-evaluer-bien-voglans-perdre-argent",
        "date": "6 mai 2025",
        "readingTime": "9 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["sous-évaluation bien", "Voglans", "expertise estimation", "éviter perte argent"]
    },
    {
        "title": "Mandat exclusif ou simple : ce que les propriétaires à Chambéry devraient vraiment savoir",
        "description": "Mandat exclusif vs simple à Chambéry : vérités cachées, impact sur délai et prix de vente. Analyse comparative objective, conseils stratégiques.",
        "href": "/blog/mandat-exclusif-ou-simple-chambery-verite",
        "date": "9 mai 2025",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["mandat exclusif", "mandat simple", "Chambéry", "efficacité vente"]
    },
    {
        "title": "Ils ont vendu à Viviers-du-Lac en 15 jours : le témoignage qui change tout",
        "description": "Témoignage vente rapide Viviers-du-Lac : stratégie gagnante, accompagnement agence, résultats concrets. Cas réel, preuves chiffrées.",
        "href": "/blog/temoignage-vente-rapide-viviers-du-lac-15-jours",
        "date": "12 mai 2025",
        "readingTime": "8 min",
        "category": "Témoignage",
        "featured": True,
        "tags": ["témoignage client", "vente rapide", "Viviers-du-Lac", "preuve sociale"]
    },
    {
        "title": "Pourquoi les maisons se vendent vite autour du lac du Bourget (et comment en profiter)",
        "description": "Marché tendu lac du Bourget : demande forte, stock faible, opportunités vendeurs. Comment maximiser votre vente en profitant de la dynamique actuelle.",
        "href": "/blog/maisons-vendent-vite-lac-bourget-comment-profiter",
        "date": "15 mai 2025",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["marché tendu", "lac du Bourget", "vente rapide", "urgence marché"]
    },
    {
        "title": "Comment fixer le juste prix à La Motte-Servolex pour vendre sans brader",
        "description": "Stratégie pricing La Motte-Servolex : éviter survente et bradage. Méthode d'estimation optimale, analyse comparative marché, maximisation prix.",
        "href": "/blog/fixer-juste-prix-la-motte-servolex-sans-brader",
        "date": "18 mai 2025",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["juste prix", "La Motte-Servolex", "optimisation prix", "éviter bradage"]
    },
    {
        "title": "Estimation en ligne ou agence locale : ce que Google ne vous dit pas",
        "description": "Outils estimation en ligne vs expertise agence locale : précision réelle, limites algorithmes, valeur conseil humain. Comparatif sans filtre.",
        "href": "/blog/estimation-en-ligne-vs-agence-locale-verite",
        "date": "21 mai 2025",
        "readingTime": "9 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["estimation en ligne", "agence locale", "IA vs expert", "précision estimation"]
    },
    {
        "title": "Les 7 étapes d'une vente réussie à Chambéry (selon les pros de terrain)",
        "description": "Processus complet vente immobilière à Chambéry : étapes clés, timing, pièges à éviter. Méthodologie professionnelle éprouvée, résultats garantis.",
        "href": "/blog/7-etapes-vente-reussie-chambery-pros",
        "date": "24 mai 2025",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["étapes vente", "Chambéry", "méthodologie pro", "processus vente"]
    },
    {
        "title": "Pourquoi 80 % des vendeurs regrettent d'avoir fixé le prix eux-mêmes",
        "description": "Erreurs pricing vendeurs : statistiques alarmantes, conséquences financières, regrets courants. Comment éviter les pièges d'auto-évaluation.",
        "href": "/blog/vendeurs-regrettent-fixer-prix-eux-memes",
        "date": "27 mai 2025",
        "readingTime": "8 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["erreurs prix", "auto-évaluation", "regrets vendeurs", "psychologie vendeur"]
    },
    {
        "title": "Impôt sur la plus-value : comment vendre malin à Aix-les-Bains en 2025",
        "description": "Optimisation fiscale vente immobilière Aix-les-Bains 2025 : calcul plus-value, exonérations, stratégies légales. Guide complet vendeurs-investisseurs.",
        "href": "/blog/impot-plus-value-vendre-malin-aix-les-bains-2025",
        "date": "30 mai 2025",
        "readingTime": "13 min",
        "category": "Fiscalité",
        "featured": True,
        "tags": ["impôt plus-value", "fiscalité immobilière", "Aix-les-Bains", "optimisation fiscale"]
    },
    {
        "title": "Vendre au printemps à Voglans : le moment idéal pour maximiser votre prix",
        "description": "Saisonnalité vente Voglans : pourquoi le printemps maximise votre prix. Analyse marché, demande saisonnière, timing optimal. Profitez de la fenêtre 2025.",
        "href": "/blog/vendre-printemps-voglans-moment-ideal-prix",
        "date": "2 juin 2025",
        "readingTime": "9 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["vente printemps", "Voglans", "saisonnalité", "maximiser prix"]
    },
    {
        "title": "Comment une agence 100 % locale vend mieux qu'une grande franchise",
        "description": "Avantage agence locale vs franchise nationale : réseau proximité, connaissance terrain, réactivité, résultats. Pourquoi le local gagne toujours.",
        "href": "/blog/agence-locale-vend-mieux-que-grande-franchise",
        "date": "5 juin 2025",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["agence locale", "vs franchise", "proximité", "réseau local"]
    },
    {
        "title": "Votre maison à Tresserve vaut plus que vous ne pensez (mais pas pour longtemps)",
        "description": "Marché Tresserve 2025 : fenêtre d'opportunité limitée, valorisation exceptionnelle actuelle, risque retournement. Agissez maintenant avant le changement.",
        "href": "/blog/maison-tresserve-vaut-plus-urgence-marche",
        "date": "8 juin 2025",
        "readingTime": "8 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Tresserve", "valorisation", "urgence", "FOMO"]
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

print(f"✅ {len(articles)} articles à fort impact ajoutés avec succès!")
print("\nArticles psychologiques et marketing ajoutés:")
for i, article in enumerate(articles, 1):
    emoji = ["🧱", "⚖️", "🔒", "⭐", "📈", "💰", "🧮", "🎯", "🧠", "📜", "🌸", "🏡", "⏰"][i-1]
    print(f"{emoji} {article['title']}")
