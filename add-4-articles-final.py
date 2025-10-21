#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 4 derniers articles stratégiques

articles = [
    {
        "title": "Les 5 communes autour de Chambéry où les maisons se vendent le plus vite",
        "description": "Top 5 communes Grand Chambéry vente rapide : statistiques délais, facteurs attractivité, analyse marché. Où vendre rapidement autour de Chambéry ?",
        "href": "/blog/5-communes-chambery-maisons-vendent-plus-vite",
        "date": "20 juillet 2025",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["communes Chambéry", "vente rapide", "Grand Chambéry", "délais vente"]
    },
    {
        "title": "Les biens qui se vendent le mieux à Aix-les-Bains en 2025",
        "description": "Typologie biens recherchés Aix-les-Bains 2025 : appartements, maisons, standing, quartiers. Optimisez votre vente selon demande réelle marché.",
        "href": "/blog/biens-vendent-mieux-aix-les-bains-2025",
        "date": "23 juillet 2025",
        "readingTime": "10 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["biens recherchés Aix-les-Bains", "typologie vente", "demande 2025", "marché immobilier"]
    },
    {
        "title": "Comment se déroule une estimation à domicile à Voglans",
        "description": "Processus complet estimation à domicile Voglans : étapes visite, critères analysés, durée, rapport détaillé. Transparence totale sur notre méthode.",
        "href": "/blog/deroulement-estimation-domicile-voglans",
        "date": "26 juillet 2025",
        "readingTime": "9 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation domicile Voglans", "processus estimation", "visite expert", "méthode évaluation"]
    },
    {
        "title": "Que regardent vraiment les acheteurs avant de visiter votre maison ?",
        "description": "Critères décision acheteurs pré-visite : photos, description, prix, localisation, DPE. Optimisez votre annonce pour maximiser visites qualifiées.",
        "href": "/blog/acheteurs-regardent-avant-visiter-maison",
        "date": "29 juillet 2025",
        "readingTime": "8 min",
        "category": "Vente",
        "featured": True,
        "tags": ["critères acheteurs", "pré-visite", "annonce immobilière", "optimisation vente"]
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

print(f"✅ {len(articles)} articles finaux ajoutés avec succès!")
print("\nArticles ajoutés:")
for i, article in enumerate(articles, 1):
    emoji = ["🏠", "📈", "🧭", "🔍"][i-1]
    print(f"{emoji} {article['title']}")
print(f"\n🎉 TOTAL: 92 ARTICLES SUR VOTRE SITE !")
