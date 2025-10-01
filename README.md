# L'Agence de Voglans - Site Web Premium

Site web moderne et élégant pour L'Agence de Voglans, spécialisée dans l'immobilier en Savoie. Développé avec Astro, TypeScript, Tailwind CSS et une approche design inspirée d'Apple.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Build pour la production
npm run build

# Prévisualisation du build
npm run preview
```

## 🏗️ Stack technique

- **Framework** : Astro 4.x
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Composants** : React (pour l'interactivité)
- **Icônes** : Lucide React
- **Animations** : Framer Motion + CSS natif
- **SEO** : Sitemap automatique, métadonnées optimisées

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base
│   ├── Navigation.astro # Navigation principale
│   ├── Footer.astro    # Footer du site
│   └── PropertyCard.astro # Carte de bien immobilier
├── content/            # Content Collections
│   ├── properties/     # Biens immobiliers (Markdown)
│   ├── blog/          # Articles de blog (Markdown)
│   ├── testimonials/  # Témoignages clients (Markdown)
│   └── config.ts      # Configuration des collections
├── layouts/
│   └── Base.astro     # Layout principal
├── lib/
│   └── utils.ts       # Utilitaires et configuration
├── pages/             # Pages du site
├── styles/
│   └── global.css     # Styles globaux et design system
└── public/            # Assets statiques
```

## 🎨 Design System

### Couleurs
- **Primaire** : `#6DB33F` (Vert signature)
- **Background** : `#F9FAFB` (Blanc cassé Apple)
- **Texte** : `#0B0F14` (Noir profond)
- **Muted** : `#6B7280` (Gris neutre)

### Typographie
- **Famille** : Inter, SF Pro Display (fallback système)
- **Échelle** : Modulaire avec line-height optimisés
- **Poids** : 300, 400, 500, 600, 700

### Composants
- **Boutons** : Coins arrondis 2xl, effets de survol subtils
- **Cartes** : Ombres douces, transformations 3D au survol
- **Animations** : Courbes Apple (cubic-bezier), durées 200-300ms

## 📄 Pages du site

### Pages principales
- **`/`** - Accueil avec concept "100% Locale & Humaine"
- **`/acheter`** - Listing des biens avec filtres avancés
- **`/vendre`** - Méthodologie de vente en 6 étapes
- **`/estimation`** - Formulaire d'estimation multi-étapes
- **`/contact`** - Formulaire de contact et informations
- **`/a-propos`** - Présentation de l'agence et de l'équipe
- **`/avis-clients`** - Témoignages avec système de filtres

### Pages de contenu
- **`/blog`** - Liste des articles (à développer)
- **`/blog/[slug]`** - Article individuel (à développer)

## ✏️ Guide d'édition

### Modifier les informations de contact

Les coordonnées sont centralisées dans `src/lib/utils.ts` :

```typescript
export const siteConfig = {
  name: "L'Agence de Voglans",
  contact: {
    phone: "04 56 78 90 12",
    email: "contact@agence-voglans.fr",
    address: "93 chemin de la Combe, 73420 Voglans",
    hours: "Lun-Ven 9h-19h, Sam 9h-17h",
  },
  // ...
}
```

### Ajouter un bien immobilier

1. Créer un fichier `.md` dans `src/content/properties/`
2. Utiliser le frontmatter suivant :

```markdown
---
title: "Maison moderne avec vue lac"
slug: "maison-voglans-vue-lac"
type: "maison"
ville: "Voglans"
surface: 150
pieces: 5
prix: 485000
etat: "excellent"
images: 
  - "/images/properties/maison-1.jpg"
  - "/images/properties/maison-2.jpg"
energie: "B"
badges: ["nouveau", "exclusivite"]
featured: true
publishedAt: 2024-01-15
---

Description détaillée du bien...
```

### Ajouter un témoignage client

1. Créer un fichier `.md` dans `src/content/testimonials/`
2. Utiliser le frontmatter suivant :

```markdown
---
name: "Marie Dupont"
location: "Voglans"
rating: 5
date: 2024-01-15
type: "vente"
featured: true
---

Témoignage du client...
```

### Ajouter un article de blog

1. Créer un fichier `.md` dans `src/content/blog/`
2. Utiliser le frontmatter suivant :

```markdown
---
title: "Guide d'achat immobilier en Savoie"
description: "Tout savoir pour acheter un bien immobilier en Savoie"
publishedAt: 2024-01-15
author: "L'Agence de Voglans"
image: "/images/blog/guide-achat.jpg"
tags: ["achat", "conseil", "savoie"]
featured: true
---

Contenu de l'article...
```

## 🎯 Fonctionnalités

### Navigation intelligente
- Menu sticky avec effet de flou
- Masquage/affichage au scroll
- Menu mobile responsive

### Formulaires interactifs
- **Estimation** : Multi-étapes avec validation
- **Contact** : Validation temps réel
- **Filtres** : Recherche dynamique des biens

### Animations
- Révélation au scroll avec Intersection Observer
- Micro-interactions sur les boutons et cartes
- Transitions fluides entre les états

### SEO optimisé
- Métadonnées dynamiques par page
- Open Graph et Twitter Cards
- Sitemap automatique
- Schema.org pour l'entreprise locale

## 🔧 Personnalisation

### Couleurs
Modifier les couleurs dans `tailwind.config.mjs` :

```javascript
colors: {
  primary: {
    DEFAULT: '#6DB33F', // Votre couleur principale
    foreground: '#FFFFFF',
  },
  // ...
}
```

### Contenu
- **Slogan principal** : Modifier dans `src/pages/index.astro`
- **Services** : Ajuster les sections dans les pages correspondantes
- **Équipe** : Mettre à jour `src/pages/a-propos.astro`

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

## 🚀 Déploiement

### Netlify (recommandé)
1. Connecter le repository GitHub
2. Build command : `npm run build`
3. Publish directory : `dist`

### Vercel
1. Importer le projet
2. Framework preset : Astro
3. Déploiement automatique

### Build manuel
```bash
npm run build
# Les fichiers sont générés dans /dist
```

## 📊 Performance

Le site est optimisé pour :
- **Core Web Vitals** : Scores Lighthouse > 95
- **Images** : Format WebP/AVIF, lazy loading
- **CSS** : Purge automatique, critical CSS inline
- **JavaScript** : Code splitting, modules ES6

## 🛠️ Maintenance

### Mise à jour des dépendances
```bash
npm update
```

### Vérification des liens
```bash
# À implémenter selon vos besoins
npm run check-links
```

### Optimisation des images
- Utiliser le composant `<Image />` d'Astro
- Formats recommandés : WebP, AVIF
- Tailles multiples pour le responsive

## 📞 Support

Pour toute question technique ou modification :
- **Documentation Astro** : https://docs.astro.build
- **Tailwind CSS** : https://tailwindcss.com/docs
- **Lucide Icons** : https://lucide.dev

## 🎉 Fonctionnalités à venir

- [ ] Système de blog complet
- [ ] Intégration CRM
- [ ] Notifications push
- [ ] Mode sombre
- [ ] Multilingue (français/anglais)
- [ ] PWA (Progressive Web App)

---

**Développé avec ❤️ pour L'Agence de Voglans**  
*Site web premium, design Apple-like, 100% Locale & Humaine*
