#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 3 derniers articles positionnement spécialiste

articles = [
    {
        "title": "Agence du lac & des villages perchés : votre spécialiste autour du lac du Bourget",
        "description": "Spécialiste biens lac du Bourget : expertise villages perchés, villas vue lac, maisons caractère. Connaissance territoriale unique, réseau acheteurs premium.",
        "href": "/blog/agence-specialiste-lac-bourget-villages-perches",
        "date": "6 juin 2026",
        "readingTime": "13 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["spécialiste lac du Bourget", "villages perchés", "expertise territoriale", "villas vue lac"]
    },
    {
        "title": "L'agence qui simplifie les ventes familiales : successions et indivisions",
        "description": "Spécialiste ventes succession/indivision : accompagnement juridique, gestion conflits familiaux, optimisation fiscale. Expertise situations complexes, médiation professionnelle.",
        "href": "/blog/agence-simplifie-ventes-familiales-successions-indivisions",
        "date": "9 juin 2026",
        "readingTime": "14 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["spécialiste succession indivision", "ventes familiales", "accompagnement juridique", "médiation"]
    },
    {
        "title": "Vendez votre bien DPE F/G avant les interdictions 2026",
        "description": "Urgence DPE F/G : interdictions location 2026, stratégies vente anticipée, solutions vendeurs. Accompagnement spécialisé passoires thermiques, timing optimal.",
        "href": "/blog/vendre-bien-dpe-f-g-avant-interdictions-2026",
        "date": "12 juin 2026",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["spécialiste DPE F/G", "interdictions 2026", "urgence vente", "passoires thermiques"]
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

print(f"✅ {len(articles)} articles POSITIONNEMENT SPÉCIALISTE ajoutés !")
print("\n3 Expertises de niche affirmées:")
print("🏔️ Spécialiste lac du Bourget & villages perchés")
print("👨‍👩‍👧 Spécialiste ventes familiales (succession/indivision)")
print("⚡ Spécialiste DPE F/G urgence 2026")
print(f"\n🎉🎉🎉 TOTAL: 198 ARTICLES - À 2 DU CAP DES 200 ! 🎉🎉🎉")
