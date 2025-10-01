# 📍 Système d'Estimation par Ville - Documentation

## Vue d'ensemble

Ce système génère automatiquement **30 pages d'estimation immobilière** optimisées pour le SEO, une pour chaque commune de la zone d'intervention de L'Agence de Voglans (Chambéry, Aix-les-Bains, Voglans et environs).

## 🎯 Objectifs

- **SEO local** : Capturer le trafic de recherche "estimation immobilière [ville]"
- **Lead generation** : Formulaire d'estimation sur chaque page
- **Maillage interne** : Liens entre communes proches + page centrale "Zone d'intervention"
- **Performance** : Pages pré-rendues (SSG) pour un chargement ultra-rapide

## 📁 Structure des fichiers

```
src/
├── data/
│   └── communes.ts              # Base de données des 30 communes
├── components/
│   └── city/
│       ├── CityHero.astro       # Hero avec H1 et CTAs
│       ├── CityBenefits.astro   # 3 piliers (Local, Humain, Transparent)
│       ├── CitySteps.astro      # Méthodologie en 4 étapes
│       ├── CityLocalContext.astro # Contexte local SEO
│       ├── CityFAQ.astro        # 5 questions/réponses
│       ├── EstimationForm.tsx   # Formulaire React avec validation
│       └── CityNearby.astro     # Communes proches (interliens)
└── pages/
    ├── estimation/
    │   └── [slug].astro         # Route dynamique (30 pages générées)
    └── zone-intervention.astro  # Page liste avec recherche
```

## 🚀 Pages générées

Le système génère automatiquement **30 pages** :

### Pôle Chambéry (13 communes)
- `/estimation/chambery`
- `/estimation/la-ravoire`
- `/estimation/barberaz`
- `/estimation/bassens`
- `/estimation/cognin`
- `/estimation/jacob-bellecombette`
- `/estimation/saint-alban-leysse`
- `/estimation/la-motte-servolex`
- `/estimation/sonnaz`
- `/estimation/challes-les-eaux`
- `/estimation/saint-baldoph`
- `/estimation/vimines`
- `/estimation/montagnole`

### Pôle Aix-les-Bains (11 communes)
- `/estimation/aix-les-bains`
- `/estimation/gresy-sur-aix`
- `/estimation/tresserve`
- `/estimation/mouxy`
- `/estimation/brison-saint-innocent`
- `/estimation/drumettaz-clarafond`
- `/estimation/le-bourget-du-lac`
- `/estimation/viviers-du-lac`
- `/estimation/mery`
- `/estimation/bourdeau`

### Pôle Voglans (3 communes)
- `/estimation/voglans`
- `/estimation/la-chapelle-du-mont-du-chat`
- `/estimation/le-viviers`

### Page centrale
- `/zone-intervention` - Liste complète avec recherche

## ➕ Ajouter une nouvelle commune

### 1. Modifier `src/data/communes.ts`

Ajoutez un nouvel objet dans le tableau `COMMUNES` :

```typescript
{
  name: "Nouvelle Commune",
  slug: "nouvelle-commune",
  dept: "Savoie",
  zone: "Chambéry", // ou "Aix-les-Bains" ou "Voglans"
  meta: {
    title: "Estimation immobilière à Nouvelle Commune | Agence de Voglans",
    description: "Estimez gratuitement votre bien à Nouvelle Commune (Savoie) avec notre agence 100% locale & Humaine.",
    keywords: ["estimation immobilière Nouvelle Commune", "estimer maison Nouvelle Commune"]
  },
  localContext: {
    atouts: "Description des atouts de la commune (cadre de vie, transports, emploi...)",
    biens: "Description des types de biens présents sur le marché local"
  },
  communesProches: ["slug-commune-1", "slug-commune-2", "slug-commune-3"]
}
```

### 2. Ajouter les redirections (optionnel)

Dans `astro.config.mjs`, ajoutez les redirections 301 :

```javascript
redirects: {
  '/estimationnouvelle-commune': '/estimation/nouvelle-commune',
  '/estimation-nouvelle-commune': '/estimation/nouvelle-commune',
}
```

### 3. Rebuild le site

```bash
npm run build
```

La nouvelle page sera automatiquement générée à `/estimation/nouvelle-commune` !

## 🔧 Personnalisation

### Modifier les coordonnées de contact

Les coordonnées sont centralisées dans `src/lib/utils.ts` (siteConfig) :

```typescript
export const siteConfig = {
  contact: {
    phone: '07 57 83 02 62',
    email: 'contact@agencevoglans.fr',
    address: '93 Chemin de la Combe, 73420 Voglans'
  }
}
```

### Modifier le formulaire d'estimation

Le formulaire est dans `src/components/city/EstimationForm.tsx`.

**⚠️ Important** : Actuellement, le formulaire simule l'envoi. Pour le connecter à votre backend :

```typescript
// Remplacer dans handleSubmit() :
const response = await fetch('/api/estimation', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ ...formData, city: cityName })
});
```

### Personnaliser les textes

Les textes sont dans les composants `src/components/city/*.astro`. Modifiez directement les fichiers pour adapter le contenu.

## 🔍 SEO & Référencement

### Métadonnées générées automatiquement

Chaque page inclut :
- ✅ **Title** : "Estimation immobilière à [Ville] | Agence de Voglans"
- ✅ **Meta description** : Personnalisée par ville
- ✅ **Keywords** : Liste de mots-clés pertinents
- ✅ **Canonical URL** : `/estimation/[slug]`
- ✅ **Open Graph** : Pour le partage social
- ✅ **JSON-LD** : Breadcrumbs + Service + LocalBusiness

### Redirections 301

Les redirections gèrent les variantes d'URL :
- `/estimationchambery` → `/estimation/chambery`
- `/estimation-chambery` → `/estimation/chambery`

Cela évite le duplicate content et améliore le SEO.

### Interliens

- Chaque page ville lie vers 6 communes proches max
- Toutes les pages lient vers `/zone-intervention`
- Le footer inclut le lien "Zone d'intervention"

## 🎨 Design

Le design respecte la charte graphique de L'Agence de Voglans :
- **Couleur primaire** : Vert foncé sophistiqué (#1E6B4F)
- **Typographie** : Playfair Display
- **Style** : Minimaliste, épuré, Apple-like
- **Responsive** : Mobile-first

## 📊 Performance

- ✅ **SSG** : Toutes les pages pré-rendues au build
- ✅ **React Islands** : Formulaire chargé uniquement quand visible (`client:visible`)
- ✅ **Lighthouse** : Score ≥ 95 attendu
- ✅ **Bundle minimal** : Pas de JavaScript inutile

## 🔗 Liens utiles

- **Page centrale** : `/zone-intervention`
- **Exemple page ville** : `/estimation/chambery`
- **Footer** : Lien "Zone d'intervention" ajouté

## 🐛 Dépannage

### La page ne se génère pas

Vérifiez que :
1. Le slug est bien ajouté dans `COMMUNES`
2. Le slug ne contient pas d'accents (utiliser `chambery` pas `chambéry`)
3. Vous avez rebuild le site (`npm run build`)

### Le formulaire ne s'envoie pas

Le formulaire simule actuellement l'envoi. Connectez-le à votre backend en modifiant `EstimationForm.tsx`.

### Les redirections ne fonctionnent pas

Les redirections Astro fonctionnent uniquement en production. Testez avec :

```bash
npm run build
npm run preview
```

## 📝 Checklist de déploiement

- [ ] Toutes les communes sont ajoutées dans `communes.ts`
- [ ] Les textes sont personnalisés (atouts, biens)
- [ ] Les redirections sont configurées
- [ ] Le formulaire est connecté au backend
- [ ] Les coordonnées de contact sont à jour
- [ ] Le site est testé en local (`npm run dev`)
- [ ] Le build passe sans erreur (`npm run build`)
- [ ] Les pages sont accessibles en preview (`npm run preview`)

## 🎉 Résultat

Vous disposez maintenant de **30 landing pages SEO** optimisées pour capter le trafic local et générer des leads qualifiés pour vos estimations immobilières !

---

**Questions ?** Contactez l'équipe technique ou consultez la documentation Astro : https://docs.astro.build
