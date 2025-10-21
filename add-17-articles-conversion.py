#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 17 articles ultra-conversion mandats (sans témoignages clients)

articles = [
    # URGENCE & TIMING (5)
    {
        "title": "Les 3 mois de l'année où votre maison se vendra le plus cher en Savoie",
        "description": "Saisonnalité vente immobilière Savoie : mois optimaux, timing maximisation prix, stratégie calendaire. Vendez au meilleur moment 2025-2026.",
        "href": "/blog/3-mois-annee-maison-vendra-plus-cher-savoie",
        "date": "12 novembre 2026",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["timing vente", "saisonnalité", "maximisation prix", "meilleur moment"]
    },
    {
        "title": "Pourquoi vendre AVANT le printemps 2026 pourrait vous rapporter 10% de plus",
        "description": "Anticipation marché 2026 : tendances prévues, fenêtre opportunité, stratégie timing. Profitez conjoncture favorable avant changement.",
        "href": "/blog/vendre-avant-printemps-2026-rapporter-10-pourcent-plus",
        "date": "15 novembre 2026",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["anticipation marché", "printemps 2026", "opportunité", "gain 10%"]
    },
    {
        "title": "Combien de temps faut-il vraiment pour vendre une maison à Chambéry en 2025 ?",
        "description": "Délais réels vente Chambéry 2025 : statistiques marché, facteurs accélération, timing moyen. Optimisez votre calendrier vente.",
        "href": "/blog/temps-vendre-maison-chambery-2025-delais-reels",
        "date": "18 novembre 2026",
        "readingTime": "9 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["délais vente", "Chambéry 2025", "timing", "statistiques"]
    },
    {
        "title": "Votre maison perd 500€/mois si vous attendez : voici pourquoi",
        "description": "Coût attente vente immobilière : opportunité ratée, charges continues, baisse marché potentielle. Calcul perte financière mensuelle.",
        "href": "/blog/maison-perd-500-euros-mois-attendre-pourquoi",
        "date": "21 novembre 2026",
        "readingTime": "8 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["coût attente", "urgence financière", "perte mensuelle", "opportunité"]
    },
    {
        "title": "Le bon moment pour vendre est-il déjà passé ? (Test rapide)",
        "description": "Test timing vente : auto-évaluation situation, indicateurs marché, signaux action. Déterminez si vous devez vendre maintenant.",
        "href": "/blog/bon-moment-vendre-deja-passe-test-rapide",
        "date": "24 novembre 2026",
        "readingTime": "7 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["test timing", "auto-évaluation", "signaux", "déclencheur action"]
    },
    
    # VALORISATION MAXIMALE (4 - sans cas clients)
    {
        "title": "Les 5 choses à faire AVANT de mettre en vente pour gagner 20,000€",
        "description": "Préparation vente rentable : investissement minimal, ROI maximal, actions valorisantes. Optimisation pré-vente haute rentabilité.",
        "href": "/blog/5-choses-faire-avant-vente-gagner-20000-euros",
        "date": "27 novembre 2026",
        "readingTime": "11 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["préparation vente", "ROI", "gagner 20000€", "valorisation"]
    },
    {
        "title": "Pourquoi 90% des vendeurs sous-évaluent leur bien (et comment l'éviter)",
        "description": "Erreur sous-évaluation courante : causes psychologiques, manque expertise, solution estimation professionnelle. Maximisez valeur réelle.",
        "href": "/blog/90-pourcent-vendeurs-sous-evaluent-bien-eviter",
        "date": "30 novembre 2026",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["sous-évaluation", "erreur courante", "expertise estimation", "valorisation"]
    },
    {
        "title": "La méthode des 7 jours pour préparer une vente au meilleur prix",
        "description": "Plan action rapide vente : préparation 7 jours, optimisation express, checklist efficace. Vente optimale semaine chrono.",
        "href": "/blog/methode-7-jours-preparer-vente-meilleur-prix",
        "date": "3 décembre 2026",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["méthode 7 jours", "préparation rapide", "plan action", "optimisation"]
    },
    {
        "title": "Comment transformer les défauts de votre maison en arguments de vente",
        "description": "Reframing défauts immobilier : valorisation intelligente, arguments positifs, présentation optimale. Transformez faiblesses en forces.",
        "href": "/blog/transformer-defauts-maison-arguments-vente",
        "date": "6 décembre 2026",
        "readingTime": "9 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["reframing", "défauts en atouts", "valorisation", "arguments vente"]
    },
    
    # OBJECTIONS & RASSURANCE (3 - sans témoignages)
    {
        "title": "Combien coûte VRAIMENT une vente avec notre agence (détail complet)",
        "description": "Transparence tarifs agence : détail honoraires, services inclus, valeur apportée. Comparez coût réel vs bénéfice obtenu.",
        "href": "/blog/cout-vente-agence-detail-complet-transparent",
        "date": "9 décembre 2026",
        "readingTime": "11 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["transparence prix", "honoraires", "valeur agence", "coût réel"]
    },
    {
        "title": "Peut-on vendre une maison avec un crédit en cours ? (Guide complet)",
        "description": "Vente avec crédit en cours : procédure légale, remboursement anticipé, solutions bancaires. Objection levée, faisabilité démontrée.",
        "href": "/blog/vendre-maison-credit-en-cours-guide-complet",
        "date": "12 décembre 2026",
        "readingTime": "12 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["crédit en cours", "remboursement anticipé", "objection levée", "solution"]
    },
    {
        "title": "Vendre pendant les travaux : est-ce possible et comment s'y prendre ?",
        "description": "Vente pendant travaux : faisabilité, stratégies communication, ciblage acheteurs. Situation complexe maîtrisée, solutions pratiques.",
        "href": "/blog/vendre-pendant-travaux-possible-comment",
        "date": "15 décembre 2026",
        "readingTime": "10 min",
        "category": "Expertise",
        "featured": True,
        "tags": ["vente pendant travaux", "situation complexe", "faisabilité", "stratégie"]
    },
    
    # LOCAL HYPER-CIBLÉ (5)
    {
        "title": "Vendre à Challes-les-Eaux en 2025 : prix, délais et conseils d'expert",
        "description": "Guide vente Challes-les-Eaux 2025 : prix m², délais moyens, spécificités marché local. Expertise commune thermale complète.",
        "href": "/blog/vendre-challes-les-eaux-2025-prix-delais-conseils",
        "date": "18 décembre 2026",
        "readingTime": "12 min",
        "category": "Vente",
        "featured": True,
        "tags": ["Challes-les-Eaux", "prix délais", "conseils expert", "guide 2025"]
    },
    {
        "title": "Estimation gratuite à domicile dans les Bauges : comment ça se passe ?",
        "description": "Service estimation Bauges : processus détaillé, visite gratuite, zone géographique couverte. Transparence totale estimation montagne.",
        "href": "/blog/estimation-gratuite-domicile-bauges-comment",
        "date": "21 décembre 2026",
        "readingTime": "9 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["estimation gratuite", "Bauges", "visite domicile", "transparence"]
    },
    {
        "title": "Les 10 rues les plus recherchées de Chambéry pour vendre rapidement",
        "description": "Hyper-local Chambéry : rues premium, micro-zones valorisées, rapidité vente. Expertise quartiers, valorisation adresse.",
        "href": "/blog/10-rues-plus-recherchees-chambery-vendre-rapidement",
        "date": "24 décembre 2026",
        "readingTime": "11 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["rues recherchées", "Chambéry", "hyper-local", "vente rapide"]
    },
    {
        "title": "Vendre une maison près d'une école à Aix : la surcote cachée",
        "description": "Valorisation proximité école Aix-les-Bains : surcote famille, critère recherché, argument vente. Optimisez position établissements scolaires.",
        "href": "/blog/vendre-maison-pres-ecole-aix-surcote-cachee",
        "date": "27 décembre 2026",
        "readingTime": "10 min",
        "category": "Estimation",
        "featured": True,
        "tags": ["proximité école", "surcote", "Aix-les-Bains", "famille"]
    },
    {
        "title": "Chambéry Nord vs Chambéry Sud : où votre maison se vendra-t-elle mieux ?",
        "description": "Comparatif micro-marchés Chambéry : Nord vs Sud, spécificités quartiers, délais prix. Orientation vendeurs expertise locale.",
        "href": "/blog/chambery-nord-vs-sud-ou-maison-vendra-mieux",
        "date": "30 décembre 2026",
        "readingTime": "12 min",
        "category": "Marché immobilier",
        "featured": True,
        "tags": ["Chambéry Nord Sud", "comparatif", "micro-marché", "expertise quartiers"]
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

print(f"✅ {len(articles)} articles CONVERSION MANDATS ajoutés !")
print("\n5 catégories stratégiques:")
print("⏰ URGENCE & TIMING (5 articles)")
print("   - Saisonnalité vente optimale")
print("   - Anticipation marché 2026")
print("   - Délais réels Chambéry")
print("   - Coût attente mensuel")
print("   - Test timing vente")
print("\n💰 VALORISATION (4 articles)")
print("   - 5 actions gagner 20K€")
print("   - Éviter sous-évaluation")
print("   - Méthode 7 jours")
print("   - Défauts en atouts")
print("\n🛡️ OBJECTIONS (3 articles)")
print("   - Transparence coûts")
print("   - Vente avec crédit")
print("   - Vente pendant travaux")
print("\n🏔️ LOCAL HYPER-CIBLÉ (5 articles)")
print("   - Challes-les-Eaux guide")
print("   - Estimation Bauges")
print("   - 10 rues Chambéry")
print("   - Proximité école Aix")
print("   - Chambéry Nord vs Sud")
print(f"\n🎉🎉🎉 TOTAL: 265 ARTICLES - MACHINE À MANDATS ! 🎉🎉🎉")
