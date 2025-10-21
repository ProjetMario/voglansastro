#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 25 articles niches ultra-spécifiques - Différenciation maximale

articles = [
    {
        "title": "Comment vendre un appartement déjà loué à Chambéry",
        "description": "Vente appartement locatif Chambéry : droits locataire, stratégies ciblage investisseurs, valorisation rendement. Guide complet propriétaires bailleurs.",
        "href": "/blog/vendre-appartement-deja-loue-chambery",
        "date": "23 mars 2026",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["biens loués", "appartement locatif", "investisseurs", "Chambéry"]
    },
    {
        "title": "Vendre une maison héritée à Aix-les-Bains : étapes et pièges à éviter",
        "description": "Succession immobilière Aix-les-Bains : démarches légales, gestion émotionnelle, optimisation fiscale. Accompagnement complet héritiers.",
        "href": "/blog/vendre-maison-heritee-aix-les-bains-etapes-pieges",
        "date": "26 mars 2026",
        "readingTime": "14 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["héritage succession", "maison héritée", "Aix-les-Bains", "démarches légales"]
    },
    {
        "title": "Vendre un bien à rénover sans le sous-évaluer à Viviers-du-Lac",
        "description": "Valorisation bien à rénover Viviers-du-Lac : estimer potentiel, cibler acheteurs travaux, éviter décote excessive. Stratégie pricing optimale.",
        "href": "/blog/vendre-bien-renover-sans-sous-evaluer-viviers-du-lac",
        "date": "29 mars 2026",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["maisons à rénover", "Viviers-du-Lac", "valorisation", "éviter sous-évaluation"]
    },
    {
        "title": "Faut-il vendre sa résidence secondaire au Bourget-du-Lac en 2025 ?",
        "description": "Arbitrage résidence secondaire Bourget-du-Lac : analyse rentabilité, fiscalité, tendances marché. Décision éclairée vendre ou conserver.",
        "href": "/blog/faut-il-vendre-residence-secondaire-bourget-du-lac-2025",
        "date": "1 avril 2026",
        "readingTime": "13 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["résidences secondaires", "Bourget-du-Lac", "arbitrage", "fiscalité"]
    },
    {
        "title": "Vendre une villa vue lac à Tresserve : comment valoriser le prestige",
        "description": "Vente villa prestige Tresserve : valorisation vue lac exceptionnelle, ciblage clientèle haut de gamme, marketing luxe. Expertise premium.",
        "href": "/blog/vendre-villa-vue-lac-tresserve-valoriser-prestige",
        "date": "4 avril 2026",
        "readingTime": "13 min",
        "category": "Vente",
        "featured": True,
        "tags": ["biens haut de gamme", "villa vue lac", "Tresserve", "prestige"]
    },
    {
        "title": "Comment vendre un bien atypique (grange, loft, ancienne école) en Savoie",
        "description": "Vente biens atypiques Savoie : grange rénovée, loft industriel, reconversion. Valoriser originalité, cibler acquéreurs créatifs.",
        "href": "/blog/vendre-bien-atypique-grange-loft-ecole-savoie",
        "date": "7 avril 2026",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["biens atypiques", "grange loft", "reconversion", "Savoie"]
    },
    {
        "title": "Vendre un logement énergivore avant 2026 à La Motte-Servolex",
        "description": "Urgence DPE F/G La Motte-Servolex : échéances réglementaires 2026, solutions vendeurs, ciblage acheteurs rénovateurs. Stratégie pré-interdiction.",
        "href": "/blog/vendre-logement-energivore-avant-2026-la-motte-servolex",
        "date": "10 avril 2026",
        "readingTime": "11 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["maisons énergivores DPE F/G", "réglementation 2026", "La Motte-Servolex", "urgence"]
    },
    {
        "title": "Vendre une maison ancienne à Chignin ou Saint-Baldoph : valoriser l'authenticité",
        "description": "Maisons patrimoine Chignin/Saint-Baldoph : valoriser charme savoyard, cachet ancien, authenticité. Cibler amateurs tradition locale.",
        "href": "/blog/vendre-maison-ancienne-chignin-saint-baldoph-valoriser-authenticite",
        "date": "13 avril 2026",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["maisons anciennes patrimoine", "Chignin Saint-Baldoph", "authenticité", "tradition"]
    },
    {
        "title": "Vendre un terrain à bâtir autour de Chambéry : prix et démarches 2025",
        "description": "Marché terrains constructibles Chambéry : prix m², démarches administratives, PLU, valorisation. Guide complet propriétaires parcelles.",
        "href": "/blog/vendre-terrain-batir-chambery-prix-demarches-2025",
        "date": "16 avril 2026",
        "readingTime": "13 min",
        "category": "Vente",
        "featured": True,
        "tags": ["terrains constructibles", "Chambéry", "prix démarches", "parcelles"]
    },
    {
        "title": "Comment bien vendre une maison mitoyenne à La Motte-Servolex",
        "description": "Stratégie vente maison mitoyenne La Motte : dépasser objections mitoyenneté, valoriser avantages, pricing adapté. Marché spécifique maîtrisé.",
        "href": "/blog/bien-vendre-maison-mitoyenne-la-motte-servolex",
        "date": "19 avril 2026",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["maisons mitoyennes copropriétés", "La Motte-Servolex", "objections", "stratégie"]
    },
    {
        "title": "Vendre un immeuble de rapport à Chambéry : un marché d'investisseurs actifs",
        "description": "Vente immeuble rendement Chambéry : valorisation rentabilité, ciblage investisseurs professionnels, analyse financière. Marché pro.",
        "href": "/blog/vendre-immeuble-rapport-chambery-marche-investisseurs",
        "date": "22 avril 2026",
        "readingTime": "14 min",
        "category": "Vente",
        "featured": True,
        "tags": ["biens locatifs rendement", "immeuble rapport", "Chambéry", "investisseurs"]
    },
    {
        "title": "Estimation d'un chalet au Revard : le marché des résidences d'altitude",
        "description": "Marché chalets Revard : spécificités montagne, résidences altitude, valorisation emplacement ski. Expertise biens alpins.",
        "href": "/blog/estimation-chalet-revard-marche-residences-altitude",
        "date": "25 avril 2026",
        "readingTime": "12 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["chalets biens montagne", "Le Revard", "altitude", "résidences secondaires"]
    },
    {
        "title": "Les maisons avec piscine autour du Bourget-du-Lac se vendent 20 % plus cher",
        "description": "Surcote piscine Bourget-du-Lac : analyse chiffrée valorisation, critères qualité, ciblage clientèle. Premium aquatique démontré.",
        "href": "/blog/maisons-piscine-bourget-du-lac-20-pourcent-plus-cher",
        "date": "28 avril 2026",
        "readingTime": "11 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["maisons piscine vue lac", "Bourget-du-Lac", "surcote 20%", "premium"]
    },
    {
        "title": "Comment vendre un bien en indivision à Chambéry sans blocage",
        "description": "Vente indivision Chambéry : gestion copropriétaires, accords légaux, déblocage situations complexes. Accompagnement juridique expert.",
        "href": "/blog/vendre-bien-indivision-chambery-sans-blocage",
        "date": "1 mai 2026",
        "readingTime": "13 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["biens indivision", "Chambéry", "blocage", "juridique"]
    },
    {
        "title": "Vendre un bien avec grand terrain : comment éviter la décote foncière",
        "description": "Valorisation grands terrains : éviter décote parcelle importante, segmentation possible, pricing optimal. Stratégie terrain constructible.",
        "href": "/blog/vendre-bien-grand-terrain-eviter-decote-fonciere",
        "date": "4 mai 2026",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["maisons grands terrains", "décote foncière", "valorisation", "parcelle"]
    },
    {
        "title": "Vendre un studio étudiant à Chambéry : forte demande, bonnes valorisations",
        "description": "Marché studios étudiants Chambéry : demande locative forte, rendement attractif, ciblage investisseurs. Segment performant.",
        "href": "/blog/vendre-studio-etudiant-chambery-forte-demande",
        "date": "7 mai 2026",
        "readingTime": "10 min",
        "category": "Vente",
        "featured": True,
        "tags": ["petits logements étudiants", "studio Chambéry", "investissement", "demande forte"]
    },
    {
        "title": "Comment vendre un bien en zone inondable à Viviers-du-Lac",
        "description": "Vente zone inondable Viviers : réglementation PPRI, contraintes assurance, stratégies transparence. Sujet sensible maîtrisé.",
        "href": "/blog/vendre-bien-zone-inondable-viviers-du-lac",
        "date": "10 mai 2026",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["zone inondable classée", "Viviers-du-Lac", "PPRI", "contraintes"]
    },
    {
        "title": "Vendre une maison isolée à Cusy ou Les Déserts : les points clés",
        "description": "Vente maisons isolées Cusy/Déserts : valoriser calme, autonomie, cadre naturel. Cibler acheteurs qualité vie, marché spécifique.",
        "href": "/blog/vendre-maison-isolee-cusy-les-deserts-points-cles",
        "date": "13 mai 2026",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["maisons isolées rurales", "Cusy Les Déserts", "calme", "nature"]
    },
    {
        "title": "Peut-on vendre une maison sans raccordement au tout-à-l'égout ?",
        "description": "Vente maison assainissement autonome : réglementation, diagnostics obligatoires, impact prix. Solution fosse septique expliquée.",
        "href": "/blog/vendre-maison-sans-raccordement-tout-egout",
        "date": "16 mai 2026",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["sans tout-à-l'égout", "assainissement autonome", "fosse septique", "campagne"]
    },
    {
        "title": "Vendre en viager à Aix-les-Bains : pour qui, comment, pourquoi",
        "description": "Viager Aix-les-Bains : fonctionnement, calcul bouquet/rente, profils vendeurs/acquéreurs. Solution seniors propriétaires.",
        "href": "/blog/vendre-viager-aix-les-bains-qui-comment-pourquoi",
        "date": "19 mai 2026",
        "readingTime": "13 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["biens viager", "Aix-les-Bains", "seniors", "bouquet rente"]
    },
    {
        "title": "Vendre une maison éco-rénovée à Chambéry : une valeur qui monte",
        "description": "Valorisation éco-rénovation Chambéry : surcote performance énergétique, ciblage acheteurs sensibles écologie. Tendance verte payante.",
        "href": "/blog/vendre-maison-eco-renovee-chambery-valeur-monte",
        "date": "22 mai 2026",
        "readingTime": "11 min",
        "category": "Vente",
        "featured": True,
        "tags": ["maisons écologiques rénovées", "éco-rénovation", "Chambéry", "performance énergétique"]
    },
    {
        "title": "Comment vendre un bien divisible ou à lotir autour d'Aix-les-Bains",
        "description": "Valorisation potentiel division Aix : parcelles divisibles, lotissement, optimisation PLU. Expertise foncière maximale.",
        "href": "/blog/vendre-bien-divisible-lotir-aix-les-bains",
        "date": "25 mai 2026",
        "readingTime": "13 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["maisons divisibles", "lotissement", "Aix-les-Bains", "division parcelle"]
    },
    {
        "title": "Vendre une maison avec servitude de passage : mode d'emploi",
        "description": "Vente avec servitude : impact prix, transparence légale, gestion objections acheteurs. Contrainte juridique maîtrisée.",
        "href": "/blog/vendre-maison-servitude-passage-mode-emploi",
        "date": "28 mai 2026",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["servitudes contraintes légales", "servitude passage", "juridique", "transparence"]
    },
    {
        "title": "Faut-il vendre ou louer sa maison au bord du lac ?",
        "description": "Arbitrage vendre/louer lac Bourget : rentabilité Airbnb, fiscalité location saisonnière vs vente. Analyse financière complète.",
        "href": "/blog/vendre-ou-louer-maison-bord-lac-arbitrage",
        "date": "31 mai 2026",
        "readingTime": "13 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["Airbnb potentiel", "vendre ou louer", "lac", "arbitrage financier"]
    },
    {
        "title": "Vendre après une séparation à Chambéry : les bons réflexes",
        "description": "Vente post-séparation Chambéry : aspects juridiques divorce, gestion émotionnelle, partage équitable. Accompagnement humain situations délicates.",
        "href": "/blog/vendre-apres-separation-chambery-bons-reflexes",
        "date": "3 juin 2026",
        "readingTime": "13 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["divorce séparation", "Chambéry", "accompagnement", "dimension humaine"]
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

print(f"✅ {len(articles)} articles NICHES ULTRA-SPÉCIFIQUES ajoutés !")
print("\n25 niches différenciantes couvertes:")
print("💼 Biens loués, Héritage, À rénover")
print("🏖️ Résidences secondaires, Villas prestige")
print("🏚️ Atypiques (grange/loft), DPE F/G")
print("🏡 Patrimoine ancien, Terrains constructibles")
print("🏘️ Mitoyens, Immeubles rapport, Chalets")
print("🏊 Piscine/vue lac, Indivision, Grands terrains")
print("🎓 Studios étudiants, Zone inondable")
print("🌾 Maisons isolées, Sans tout-à-l'égout")
print("👴 Viager, Éco-rénovées, Divisibles")
print("⚖️ Servitudes, Airbnb, Divorce/séparation")
print(f"\n🎉🎉🎉 TOTAL: 195 ARTICLES - COUVERTURE EXHAUSTIVE ! 🎉🎉🎉")
print("💎 TOUTES situations, TOUS profils, TOUS cas de figure !")
