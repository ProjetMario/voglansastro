# 🚀 Guide SEO Local - Stratégie pour Dominer Google

## 📊 Objectif : Top 3 sur "estimation immobilière [ville]"

Ce guide liste toutes les actions à mettre en place pour atteindre la **première position** sur Google pour vos 27 communes.

---

## ✅ **DÉJÀ IMPLÉMENTÉ (Technique)**

### 1. Structure SEO Technique
- ✅ 27 pages d'estimation générées automatiquement
- ✅ URLs propres : `/estimation/chambery`, `/estimation/aix-les-bains`, etc.
- ✅ Redirections 301 configurées
- ✅ Sitemap.xml dynamique
- ✅ Robots.txt optimisé
- ✅ Schema.org (LocalBusiness, Service, Breadcrumbs)
- ✅ Meta tags complets (title, description, keywords)
- ✅ Open Graph et Twitter Cards
- ✅ Canonical URLs
- ✅ Core Web Vitals optimisés (preconnect, dns-prefetch)

### 2. Contenu Enrichi
- ✅ Composant `CitySEOContent` créé
- ✅ Structure `seoContent` dans communes.ts :
  - Quartiers populaires
  - Prix moyen au m²
  - Tendances du marché 2025
  - Conseils d'expert

### 3. Maillage Interne
- ✅ Liens entre communes proches
- ✅ Page centrale "Zone d'intervention"
- ✅ Breadcrumbs sur toutes les pages
- ✅ Footer avec liens vers toutes les pages

---

## 🎯 **À FAIRE IMMÉDIATEMENT (Semaine 1)**

### 1. Google Business Profile ⭐ PRIORITÉ #1
**Impact** : Apparition dans le "Pack Local" Google Maps

**Actions** :
```
1. Créer un profil Google Business
   - Nom : "L'Agence de Voglans"
   - Catégorie : "Agence immobilière"
   - Adresse : 93 Chemin de la Combe, 73420 Voglans
   - Téléphone : 07 57 83 02 62
   - Site web : https://agencevoglans.fr

2. Définir la zone de service
   - Ajouter les 27 communes une par une
   - Rayon : 20 km autour de Voglans

3. Compléter le profil
   - Description : 500 caractères avec mots-clés
   - Horaires d'ouverture
   - Photos : bureaux, équipe, biens vendus (min 10 photos)
   - Logo de l'agence

4. Publier des posts hebdomadaires
   - Biens vendus
   - Conseils immobiliers
   - Actualités locales
   - Estimations réalisées
```

**Résultat attendu** : Apparition dans les 3 premiers résultats locaux sous 1-2 mois

---

### 2. Enrichir le Contenu des Pages ⭐ PRIORITÉ #2
**Impact** : Meilleur classement sur les requêtes longue traîne

**Actions** :
```
Pour CHAQUE commune, ajouter dans communes.ts :

seoContent: {
  quartiers: "Liste des quartiers avec détails",
  prixMoyen: "Fourchette de prix précise avec source",
  tendances: "Analyse du marché 2024-2025",
  conseils: "Conseil personnalisé pour cette commune"
}
```

**Exemple pour Chambéry** :
```typescript
seoContent: {
  quartiers: "Carré Curial (hyper-centre), Verney (résidentiel), Mérande (familial), Biollay (calme), Hauts de Chambéry (vue panoramique)",
  prixMoyen: "Entre 2 500 € et 4 000 € le m² selon le quartier. Centre-ville : 3 500-4 000 €/m². Périphérie : 2 500-3 000 €/m²",
  tendances: "Marché en croissance de +3% en 2024. Forte demande pour les appartements neufs près de la gare (TGV). Pénurie de maisons avec jardin. Délai de vente moyen : 45 jours",
  conseils: "Pour vendre rapidement : privilégier un prix attractif dès le départ. Pour acheter : cibler les quartiers Mérande ou Biollay pour le meilleur rapport qualité/prix. Investissement locatif : centre-ville pour la demande étudiante"
}
```

**Objectif** : 1500-2000 mots par page minimum

---

### 3. Backlinks Locaux ⭐ PRIORITÉ #3
**Impact** : Autorité de domaine et classement Google

**Actions immédiates** :
```
1. Annuaires locaux (Gratuits)
   ✅ PagesJaunes.fr
   ✅ Yelp.fr
   ✅ Foursquare
   ✅ Mappy
   ✅ Bing Places
   ✅ Apple Plans

2. Annuaires immobiliers
   ✅ SeLoger.com (profil agence)
   ✅ LeBonCoin (profil pro)
   ✅ PAP.fr
   ✅ Logic-Immo.com
   ✅ Bien'ici

3. Chambres de commerce
   ✅ CCI Savoie
   ✅ Réseau Entreprendre Savoie
   ✅ Medef Savoie

4. Partenariats locaux
   ✅ Notaires de Chambéry/Aix-les-Bains
   ✅ Architectes locaux
   ✅ Banques (Crédit Agricole, Banque Populaire)
   ✅ Constructeurs de maisons
   ✅ Agences de déménagement

5. Presse locale
   ✅ Le Dauphiné Libéré (article sponsorisé)
   ✅ Journaux communaux (gratuit)
   ✅ Savoie News
   ✅ Radio locale (interview)

6. Mairies
   ✅ Demander un lien depuis les sites des 27 communes
   ✅ Section "Professionnels locaux" ou "Immobilier"
```

**Objectif** : 20 backlinks locaux de qualité en 1 mois

---

## 📝 **À FAIRE (Semaine 2-4)**

### 4. Blog Local
**Impact** : Trafic organique et autorité thématique

**Articles à créer** (1 par semaine minimum) :
```
1. "Prix immobilier à Chambéry en 2025 : Analyse complète"
2. "Les 5 quartiers les plus recherchés à Aix-les-Bains"
3. "Vendre sa maison à Voglans : Guide complet 2025"
4. "Acheter au bord du lac du Bourget : Tout savoir"
5. "Investissement locatif en Savoie : Meilleures communes"
6. "Marché immobilier Savoie : Tendances 2025"
7. "Estimation immobilière : 7 erreurs à éviter"
8. "Technopôle Savoie Technolac : Impact sur l'immobilier"
```

**Structure d'un article** :
- 1500-2500 mots
- H1 avec mot-clé principal
- H2/H3 structurés
- Images optimisées (WebP, alt text)
- Liens internes vers pages estimation
- CTA vers formulaire
- Schema.org Article

---

### 5. Mots-Clés Longue Traîne
**Impact** : Trafic qualifié avec faible concurrence

**Ajouter dans les pages** :
```
- "estimation maison [ville]"
- "prix m2 [ville] 2025"
- "agence immobilière [ville]"
- "vendre appartement [ville]"
- "acheter maison [ville]"
- "immobilier [ville] prix"
- "estimation gratuite [ville]"
- "agent immobilier [ville]"
- "marché immobilier [ville]"
```

**Où les ajouter** :
- Balises H2/H3
- Premier paragraphe
- Alt text des images
- Meta description
- URL (déjà fait)

---

## 📊 **SUIVI & MESURE**

### Outils à installer
```
1. Google Search Console
   - Vérifier l'indexation des 27 pages
   - Suivre les positions par mot-clé
   - Détecter les erreurs

2. Google Analytics 4
   - Trafic par page ville
   - Taux de conversion formulaire
   - Parcours utilisateur

3. Google Business Insights
   - Vues du profil
   - Clics vers le site
   - Appels téléphoniques

4. Outils SEO
   - Ubersuggest (gratuit)
   - Google Keyword Planner
   - AnswerThePublic
```

### KPIs à suivre
```
- Position moyenne par ville (objectif : Top 3)
- Trafic organique par page
- Taux de conversion formulaire (objectif : 3-5%)
- Nombre de backlinks (objectif : 50 en 6 mois)
- Avis Google (objectif : 20 avis 5★ en 6 mois)
```

---

## 🎯 **CALENDRIER DE DÉPLOIEMENT**

### Semaine 1
- [ ] Créer Google Business Profile
- [ ] Enrichir 10 premières communes (seoContent)
- [ ] S'inscrire sur 10 annuaires

### Semaine 2
- [ ] Enrichir 10 communes suivantes
- [ ] Publier 1er article de blog
- [ ] Contacter 5 partenaires locaux

### Semaine 3
- [ ] Enrichir 7 dernières communes
- [ ] Publier 2e article de blog
- [ ] Demander liens aux mairies

### Semaine 4
- [ ] Publier 3e article de blog
- [ ] Optimiser Google Business (photos, posts)
- [ ] Analyser premiers résultats

### Mois 2-3
- [ ] 1 article de blog/semaine
- [ ] Obtenir 20 backlinks
- [ ] Optimiser pages selon Search Console

### Mois 4-6
- [ ] Maintenir le rythme blog
- [ ] Atteindre 50 backlinks
- [ ] Objectif : Top 3 sur petites villes

### Mois 7-12
- [ ] Dominer les petites villes
- [ ] Attaquer Chambéry et Aix-les-Bains
- [ ] Objectif : Top 3 partout

---

## 💡 **ASTUCES BONUS**

### 1. Contenu Vidéo
```
- Créer des vidéos YouTube par ville
- "Visite guidée de [ville]"
- "Marché immobilier à [ville]"
- Intégrer les vidéos dans les pages
```

### 2. Photos Locales
```
- Photographier les 27 communes
- Ajouter dans les pages estimation
- Optimiser les alt text avec mots-clés
```

### 3. Témoignages Clients
```
- Demander après chaque transaction
- Publier sur Google Business
- Intégrer dans les pages
```

### 4. Réseaux Sociaux
```
- Facebook : Groupe "Immobilier Savoie"
- LinkedIn : Partager les articles
- Instagram : Photos des communes
```

---

## 📞 **SUPPORT**

Pour toute question sur l'implémentation :
1. Consultez `README-ESTIMATION.md` pour la structure technique
2. Vérifiez `communes.ts` pour ajouter du contenu
3. Testez avec `npm run dev`

**Bon courage pour dominer Google ! 🚀**
