# 🚀 Plan d'Action SEO Complet - 6 Mois

## 📊 **État Actuel vs Objectifs**

### **Situation Actuelle**
- ❌ Site non indexé sur Google (ou très peu)
- ❌ 0 backlinks
- ❌ Domain Authority : 0
- ❌ Trafic organique : 0-10 visiteurs/mois
- ❌ Aucune position sur Google
- ✅ Contenu SEO : 27 communes enrichies
- ✅ Structure technique : bonne

### **Objectifs 6 Mois**
- ✅ 100+ pages indexées
- ✅ 50+ backlinks de qualité
- ✅ Domain Authority : 20-25
- ✅ Trafic organique : 500-1000 visiteurs/mois
- ✅ Top 5 sur "estimation immobilière [ville]" (27 communes)
- ✅ 20-30 demandes d'estimation/mois

---

## 🎯 **Stratégie SEO en 5 Axes**

### **Axe 1 : SEO Technique** (Fondations)
- Priorité : ⭐⭐⭐⭐⭐ CRITIQUE
- Impact : ⭐⭐⭐⭐⭐ Très élevé
- Temps : 1 semaine

### **Axe 2 : SEO On-Page** (Contenu)
- Priorité : ⭐⭐⭐⭐⭐ CRITIQUE
- Impact : ⭐⭐⭐⭐⭐ Très élevé
- Temps : 2-4 semaines

### **Axe 3 : SEO Off-Page** (Backlinks)
- Priorité : ⭐⭐⭐⭐ Haute
- Impact : ⭐⭐⭐⭐⭐ Très élevé
- Temps : 3-6 mois (continu)

### **Axe 4 : SEO Local** (Google Business)
- Priorité : ⭐⭐⭐⭐⭐ CRITIQUE
- Impact : ⭐⭐⭐⭐⭐ Très élevé
- Temps : 1 semaine

### **Axe 5 : Content Marketing** (Blog)
- Priorité : ⭐⭐⭐⭐ Haute
- Impact : ⭐⭐⭐⭐ Élevé
- Temps : 3-6 mois (continu)

---

## 📅 **MOIS 1 : Fondations SEO (Semaines 1-4)**

### **Semaine 1 : SEO Technique (URGENT)**

#### **Lundi : Sitemap et Robots.txt**
✅ **DÉJÀ FAIT !**
- [x] Sitemap.xml créé et optimisé
- [x] Robots.txt mis à jour
- [ ] **À FAIRE : Déployer les fichiers**
- [ ] **À FAIRE : Vérifier accessibilité**

**Actions :**
```bash
# 1. Vérifier que les fichiers sont déployés
https://agencevoglans.fr/sitemap.xml
https://agencevoglans.fr/robots.txt

# 2. Valider le sitemap
https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

#### **Mardi : Google Search Console**
- [ ] Créer compte Google Search Console
- [ ] Ajouter propriété `https://agencevoglans.fr`
- [ ] Vérifier propriété (balise meta dans `Base.astro`)
- [ ] Soumettre sitemap.xml
- [ ] Demander indexation pages principales

**Guide complet :** `GUIDE-SITEMAP-GOOGLE.md`

#### **Mercredi : Google Analytics 4**
- [ ] Créer compte Google Analytics 4
- [ ] Installer code tracking dans `Base.astro`
- [ ] Configurer objectifs (formulaire estimation)
- [ ] Tester tracking

**Code à ajouter dans `/src/layouts/Base.astro` :**
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### **Jeudi : Vitesse et Performance**
- [ ] Tester sur PageSpeed Insights
- [ ] Optimiser images (WebP, compression)
- [ ] Vérifier Core Web Vitals
- [ ] Corriger erreurs critiques

**Outils :**
- PageSpeed Insights : https://pagespeed.web.dev
- Objectif : Score >90 mobile et desktop

#### **Vendredi : Schema.org**
- [ ] Vérifier Schema Organization (déjà présent)
- [ ] Ajouter Schema LocalBusiness
- [ ] Ajouter Schema BreadcrumbList
- [ ] Tester avec Google Rich Results Test

**Code Schema LocalBusiness à ajouter dans `Base.astro` :**
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "L'Agence de Voglans",
  "image": "https://agencevoglans.fr/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "93 Chemin de la Combe",
    "addressLocality": "Voglans",
    "postalCode": "73420",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.6167,
    "longitude": 5.9000
  },
  "telephone": "+33479XXXXXX",
  "email": "contact@agencevoglans.fr",
  "url": "https://agencevoglans.fr",
  "priceRange": "€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "12:00"
    }
  ],
  "areaServed": [
    "Chambéry", "Aix-les-Bains", "Voglans", "La Ravoire", "Bassens"
  ]
}
```

### **Semaine 2 : SEO Local (CRITIQUE)**

#### **Lundi : Google Business Profile**
- [ ] Créer profil sur https://business.google.com
- [ ] Vérifier adresse : 93 Chemin de la Combe, 73420 Voglans
- [ ] Choisir catégorie : "Agence immobilière"
- [ ] Ajouter horaires : Lun-Ven 9h-18h, Sam 9h-12h
- [ ] Ajouter téléphone et site web

#### **Mardi : Optimiser Google Business**
- [ ] Ajouter 20+ photos (agence, équipe, bureaux, extérieur)
- [ ] Rédiger description 750 caractères (mots-clés)
- [ ] Ajouter services (estimation, vente, achat)
- [ ] Ajouter zone d'intervention (27 communes)

**Description optimisée :**
```
L'Agence de Voglans, votre agence immobilière 100% locale et humaine en Savoie. 
Spécialisée dans l'estimation gratuite, la vente et l'achat de biens immobiliers 
dans 27 communes : Chambéry, Aix-les-Bains, Voglans, La Ravoire, Bassens, Cognin, 
La Motte-Servolex, Le Bourget-du-Lac, Tresserve, et plus encore.

Notre expertise locale du marché savoyard vous garantit une estimation précise 
sous 48h et un accompagnement personnalisé de A à Z. Maisons, appartements, 
terrains, immeubles de rapport, propriétés de prestige : nous valorisons votre 
bien au meilleur prix.

Estimation immobilière gratuite • Vente optimisée • Accompagnement humain
📍 93 Chemin de la Combe, 73420 Voglans
📞 04 79 XX XX XX • 🌐 agencevoglans.fr
```

#### **Mercredi : Demander Avis Google**
- [ ] Créer lien court avis Google
- [ ] Envoyer email à 10 premiers clients/contacts
- [ ] Objectif : 5 avis 5 étoiles minimum

**Template Email Demande Avis :**
```
Objet : Votre avis nous aide ! ⭐⭐⭐⭐⭐

Bonjour [Prénom],

Nous espérons que notre accompagnement vous a satisfait.

Votre avis sur Google nous aiderait énormément à nous faire connaître 
localement. Cela ne prend que 2 minutes :

👉 [LIEN AVIS GOOGLE]

Merci infiniment pour votre soutien !

Cordialement,
L'équipe de L'Agence de Voglans
```

#### **Jeudi-Vendredi : Annuaires Locaux (10 backlinks)**
- [ ] Pages Jaunes
- [ ] Yelp
- [ ] Foursquare
- [ ] Mappy
- [ ] 118712
- [ ] Hoodspot
- [ ] Justacote
- [ ] Cylex
- [ ] Tuugo
- [ ] Hotfrog

**Guide complet :** `STRATEGIE-BACKLINKS.md` (Pilier 1)

### **Semaine 3 : SEO On-Page (Contenu)**

#### **Lundi-Mardi : Optimiser Pages Principales**

**Pages à optimiser :**
1. **Page d'accueil** (`/`)
2. **Estimation** (`/estimation`)
3. **Vendre** (`/vendre`)
4. **Acheter** (`/acheter`)
5. **Contact** (`/contact`)

**Checklist par page :**
- [ ] Title 60 caractères max, mot-clé au début
- [ ] Meta description 155 caractères, call-to-action
- [ ] H1 unique avec mot-clé principal
- [ ] H2/H3 avec mots-clés secondaires
- [ ] Images avec alt text descriptif
- [ ] Liens internes vers 27 communes
- [ ] CTA clair et visible

#### **Mercredi-Vendredi : Optimiser Pages Communes (27)**

**Exemple Chambéry (`/estimation/chambery`) :**
- [ ] Title : "Estimation Immobilière à Chambéry | Gratuite sous 48h"
- [ ] Meta : "Estimez gratuitement votre bien à Chambéry. Expertise locale, analyse marché, estimation précise. Agence 100% locale."
- [ ] H1 : "Estimation Immobilière à Chambéry"
- [ ] Contenu : 800-1000 mots (déjà fait ✅)
- [ ] Images : 2-3 photos Chambéry
- [ ] Liens internes : vers blog, vendre, acheter

**Répéter pour les 27 communes**

### **Semaine 4 : Content Marketing (Blog)**

#### **Lundi-Mercredi : Compléter Article "Prix Immobilier 2025"**
- [ ] Ouvrir `/src/pages/blog/prix-immobilier-savoie-2025.astro`
- [ ] Copier sections manquantes depuis `EXEMPLE-ARTICLE-COMPLET.md`
- [ ] Ajouter 3-5 images optimisées WebP
- [ ] Vérifier liens internes (27 communes)
- [ ] Publier

#### **Jeudi-Vendredi : Créer 2ème Article**
**Sujet :** "Vendre sa Maison à Chambéry : 10 Conseils d'Expert 2025"
- [ ] Utiliser template `BLOG-TEMPLATE.md`
- [ ] 1500-2000 mots
- [ ] 5 sections H2
- [ ] FAQ (5 questions)
- [ ] Liens internes
- [ ] Publier

---

## 📅 **MOIS 2 : Backlinks et Contenu (Semaines 5-8)**

### **Semaine 5 : Annuaires Immobiliers (10 backlinks)**

#### **Lundi-Mercredi : Annuaires Immobiliers (5)**
- [ ] SeLoger Pro
- [ ] LeBonCoin Pro
- [ ] Logic-Immo Pro
- [ ] PAP Pro
- [ ] Bien'ici Pro

#### **Jeudi-Vendredi : Annuaires Locaux Savoie (5)**
- [ ] CCI Savoie
- [ ] Annuaire Entreprises Savoie
- [ ] Savoie Mont Blanc
- [ ] Ville de Chambéry
- [ ] Ville d'Aix-les-Bains

### **Semaine 6 : Partenariats Notaires/Banques (5 backlinks)**

#### **Lundi-Mardi : Identifier et Contacter Notaires**
- [ ] Lister 10 notaires Chambéry, Aix, Voglans
- [ ] Envoyer email partenariat (template dans `STRATEGIE-BACKLINKS.md`)
- [ ] Relancer par téléphone après 3 jours
- [ ] Objectif : 3 partenariats

#### **Mercredi-Vendredi : Contacter Banques/Courtiers**
- [ ] Lister courtiers crédit (Cafpi, Meilleurtaux, indépendants)
- [ ] Contacter banques locales
- [ ] Proposer partenariat "Financement facilité"
- [ ] Objectif : 2 partenariats

### **Semaine 7 : Blog (2 articles)**

#### **Article 3 : "Investir à Aix-les-Bains : Opportunités et Rendements 2025"**
- [ ] 1500-2000 mots
- [ ] Mots-clés : "investir Aix-les-Bains", "rendement locatif Savoie"
- [ ] Publier

#### **Article 4 : "Comment Estimer la Valeur de son Bien Immobilier ?"**
- [ ] 1500-2000 mots
- [ ] Mots-clés : "estimer valeur bien", "estimation immobilière"
- [ ] Publier

### **Semaine 8 : Partenariats Artisans (5 backlinks)**

- [ ] Contacter 10 artisans (architectes, rénovation, diagnostiqueurs)
- [ ] Créer page "Professionnels Recommandés" sur site
- [ ] Proposer échange de liens
- [ ] Objectif : 5 partenariats

---

## 📅 **MOIS 3 : Médias et Contenu (Semaines 9-12)**

### **Semaine 9 : Communiqués de Presse (3 backlinks)**

#### **Lundi-Mardi : Rédiger Communiqué**
**Sujet :** "L'Agence de Voglans : Nouvelle agence immobilière 100% locale en Savoie"
- [ ] 400-600 mots
- [ ] Citations
- [ ] Coordonnées presse

#### **Mercredi-Vendredi : Diffuser**
- [ ] Envoyer à Dauphiné Libéré
- [ ] Envoyer à L'Essor Savoyard
- [ ] Envoyer à Savoie News
- [ ] Envoyer à France Bleu Pays de Savoie
- [ ] Envoyer à Chambéry Mag
- [ ] Relancer après 5 jours

### **Semaine 10 : Mairies (5 backlinks)**

- [ ] Contacter services économiques 27 mairies
- [ ] Proposer référencement page "Professionnels locaux"
- [ ] Offrir guide "S'installer à [Ville]"
- [ ] Objectif : 5 mairies acceptent

### **Semaine 11 : Blog (2 articles)**

#### **Article 5 : "Marché Immobilier Savoie : Bilan 2024 et Prévisions 2025"**
- [ ] 1500-2000 mots
- [ ] Données DVF
- [ ] Graphiques
- [ ] Publier

#### **Article 6 : "Acheter au Bord du Lac du Bourget : Guide Complet"**
- [ ] 1500-2000 mots
- [ ] Focus Aix, Tresserve, Bourget-du-Lac
- [ ] Publier

### **Semaine 12 : Bilan et Ajustements**

- [ ] Analyser Google Search Console (pages indexées, positions)
- [ ] Analyser Google Analytics (trafic, sources)
- [ ] Vérifier backlinks (Ahrefs/Semrush)
- [ ] Ajuster stratégie selon résultats

**KPIs attendus après 3 mois :**
- ✅ 50-80 pages indexées
- ✅ 30-40 backlinks
- ✅ Domain Authority : 10-15
- ✅ Trafic organique : 100-200 visiteurs/mois
- ✅ Premières positions Top 20-30

---

## 📅 **MOIS 4-6 : Accélération (Semaines 13-24)**

### **Mois 4 : Guest Blogging et Ressources**

#### **Semaines 13-14 : Créer Guide PDF**
**"S'installer en Savoie 2025 : Guide Complet"**
- [ ] 30-40 pages PDF
- [ ] Infographies prix immobilier
- [ ] Carte interactive communes
- [ ] Checklist déménagement
- [ ] Publier sur site + promouvoir

#### **Semaines 15-16 : Guest Posts (3 backlinks)**
- [ ] Identifier 20 blogs cibles (DA >30)
- [ ] Contacter avec proposition article invité
- [ ] Rédiger 3 articles 1500-2000 mots
- [ ] Publier sur blogs partenaires

### **Mois 5 : Intensifier Contenu**

#### **Objectif : 4 articles blog**
- [ ] Article 7 : "Quartiers de Chambéry : Où Investir en 2025 ?"
- [ ] Article 8 : "Frais de Notaire en Savoie : Calcul et Optimisation"
- [ ] Article 9 : "DPE et Rénovation Énergétique : Impact sur Valeur"
- [ ] Article 10 : "Technopôle Savoie Technolac : Investir près Emplois"

### **Mois 6 : Consolidation**

#### **Objectif : Atteindre 100 backlinks**
- [ ] Continuer partenariats locaux
- [ ] Participer événements (salons immobiliers)
- [ ] Interviews médias locaux
- [ ] Créer calculateur immobilier interactif

#### **Bilan 6 mois attendu :**
- ✅ 100+ pages indexées
- ✅ 50-80 backlinks
- ✅ Domain Authority : 20-25
- ✅ Trafic organique : 500-1000 visiteurs/mois
- ✅ Top 5 sur "estimation immobilière [ville]"
- ✅ 20-30 demandes estimation/mois

---

## 📊 **Tableau de Suivi Mensuel**

### **Mois 1**
| Métrique | Objectif | Réalisé |
|----------|----------|---------|
| Pages indexées | 30 | |
| Backlinks | 20 | |
| Domain Authority | 5 | |
| Trafic organique | 20 | |
| Demandes estimation | 2 | |

### **Mois 2**
| Métrique | Objectif | Réalisé |
|----------|----------|---------|
| Pages indexées | 50 | |
| Backlinks | 30 | |
| Domain Authority | 10 | |
| Trafic organique | 50 | |
| Demandes estimation | 5 | |

### **Mois 3**
| Métrique | Objectif | Réalisé |
|----------|----------|---------|
| Pages indexées | 80 | |
| Backlinks | 40 | |
| Domain Authority | 15 | |
| Trafic organique | 150 | |
| Demandes estimation | 10 | |

### **Mois 6**
| Métrique | Objectif | Réalisé |
|----------|----------|---------|
| Pages indexées | 100+ | |
| Backlinks | 50-80 | |
| Domain Authority | 20-25 | |
| Trafic organique | 500-1000 | |
| Demandes estimation | 20-30 | |

---

## 🎯 **Actions Prioritaires CETTE SEMAINE**

### **Lundi (URGENT)**
1. ✅ Déployer sitemap.xml et robots.txt
2. ✅ Créer compte Google Search Console
3. ✅ Soumettre sitemap

### **Mardi**
4. ✅ Créer compte Google Analytics 4
5. ✅ Installer code tracking
6. ✅ Tester PageSpeed Insights

### **Mercredi**
7. ✅ Créer Google Business Profile
8. ✅ Ajouter 10 photos
9. ✅ Rédiger description

### **Jeudi**
10. ✅ S'inscrire 5 annuaires (Pages Jaunes, Yelp, Foursquare, Mappy, 118712)

### **Vendredi**
11. ✅ S'inscrire 5 annuaires (Hoodspot, Justacote, Cylex, Tuugo, Hotfrog)
12. ✅ Demander 3 premiers avis Google

---

## 💰 **Budget 6 Mois**

### **Option Recommandée : Mixte**

| Poste | Coût Mensuel | Coût 6 Mois |
|-------|--------------|-------------|
| **Outils SEO** (Ahrefs ou Semrush) | 99€ | 594€ |
| **Communiqués presse** | 50€ | 300€ |
| **Photos professionnelles** | - | 200€ |
| **Divers** (événements, etc.) | 20€ | 120€ |
| **TOTAL** | ~170€ | **1 214€** |

**Temps requis :** 8-12h/semaine

**Alternative 100% Gratuite :**
- Coût : 0€
- Temps : 15-20h/semaine
- Résultats : 70% de l'option mixte

---

## 📚 **Ressources et Guides**

### **Guides Créés**
1. ✅ `BLOG-TEMPLATE.md` - Template articles blog
2. ✅ `GUIDE-SITEMAP-GOOGLE.md` - Soumission Google
3. ✅ `STRATEGIE-BACKLINKS.md` - 50 backlinks en 3 mois
4. ✅ `PLAN-ACTION-SEO-6-MOIS.md` - Ce document

### **Outils Essentiels**
- **Google Search Console** (gratuit) : https://search.google.com/search-console
- **Google Analytics 4** (gratuit) : https://analytics.google.com
- **PageSpeed Insights** (gratuit) : https://pagespeed.web.dev
- **Ahrefs** (99€/mois) : https://ahrefs.com
- **Semrush** (99€/mois) : https://www.semrush.com

---

## 🎉 **Vous Avez Tout Pour Réussir !**

**Votre arsenal SEO complet :**
✅ Contenu : 27 communes enrichies
✅ Sitemap : 100+ pages optimisées
✅ Blog : Template + 4 articles existants
✅ Backlinks : Stratégie 50 backlinks
✅ Plan d'action : 6 mois détaillés

**Commencez DÈS AUJOURD'HUI par les 3 actions critiques :**
1. 🚀 Déployer sitemap.xml
2. 🚀 Créer Google Search Console
3. 🚀 Créer Google Business Profile

**Dans 6 mois, vous dominerez Google en Savoie ! 🏆**
