# Images Open Graph - Guide de Création

## 📐 Spécifications Techniques

### Dimensions Requises
- **Taille recommandée** : 1200 x 630 pixels
- **Ratio** : 1.91:1
- **Format** : JPG ou PNG
- **Poids max** : 8 MB (idéalement < 300 KB)

## 🎨 Images à Créer

### 1. Image par défaut
**Fichier** : `og-default.jpg`
**Contenu** :
- Logo L'Agence de Voglans
- Texte : "Immobilier d'Exception en Savoie"
- Couleur dominante : Vert émeraude (#10b981)
- Fond : Dégradé ou photo de la Savoie

### 2. Image page Estimation
**Fichier** : `og-estimation.jpg`
**Contenu** :
- Logo + icône calculatrice
- Texte : "Estimation Gratuite - Réponse sous 48h"
- Call-to-action visuel

### 3. Image page Vendre
**Fichier** : `og-vendre.jpg`
**Contenu** :
- Logo + icône maison
- Texte : "Vendez votre bien avec L'Agence de Voglans"

### 4. Image page Acheter
**Fichier** : `og-acheter.jpg`
**Contenu** :
- Logo + icône clé
- Texte : "Trouvez votre bien idéal en Savoie"

### 5. Images par ville (optionnel)
**Fichier** : `og-{slug}.jpg` (ex: `og-voglans.jpg`, `og-chambery.jpg`)
**Contenu** :
- Logo
- Texte : "Estimation immobilière à {Ville}"
- Photo ou illustration de la ville

## 🛠️ Outils Recommandés

### En ligne (gratuit)
- **Canva** : https://www.canva.com/
  - Template "Facebook Post" (1200x630)
  - Facile à utiliser, nombreux templates
  
- **Figma** : https://www.figma.com/
  - Plus professionnel
  - Collaboration en équipe

### Logiciels
- **Photoshop** : Outil professionnel
- **GIMP** : Alternative gratuite à Photoshop
- **Affinity Photo** : Alternative payante abordable

## ✅ Checklist Qualité

- [ ] Dimensions exactes : 1200 x 630 px
- [ ] Logo visible et lisible
- [ ] Texte court et impactant (max 60 caractères)
- [ ] Contraste suffisant pour la lisibilité
- [ ] Couleurs de la charte graphique (#10b981)
- [ ] Poids optimisé (< 300 KB)
- [ ] Format JPG (meilleure compression) ou PNG (si transparence)
- [ ] Test sur Facebook Debugger : https://developers.facebook.com/tools/debug/
- [ ] Test sur Twitter Card Validator : https://cards-dev.twitter.com/validator

## 🎯 Bonnes Pratiques

1. **Texte lisible** : Police minimum 60px
2. **Zone de sécurité** : Éviter les éléments importants sur les bords (marge de 40px)
3. **Cohérence visuelle** : Utiliser les mêmes couleurs/polices que le site
4. **Mobile-friendly** : Vérifier que l'image est lisible en petit format
5. **Pas de texte trop long** : Maximum 1-2 lignes de texte principal

## 📝 Template Texte Suggéré

### Page d'accueil
```
L'Agence de Voglans
Immobilier 100% Local & Humain
Voglans • Chambéry • Savoie
```

### Page Estimation
```
Estimation Gratuite
Réponse sous 48h
L'Agence de Voglans
```

### Pages Villes
```
Estimation Immobilière
à {Nom de la Ville}
Gratuit • Sans engagement
```

## 🔗 Ressources

- **Charte graphique** : Voir `AUDIT-CHARTE-GRAPHIQUE-FINAL.md`
- **Couleur principale** : #10b981 (Vert émeraude)
- **Logo** : `/public/images/logo-agence-voglans.png`
- **Police** : Utiliser une police moderne et lisible (Inter, Poppins, Montserrat)

## 🚀 Après Création

1. Placer les images dans `/public/images/`
2. Optimiser avec TinyPNG : https://tinypng.com/
3. Tester avec les outils de validation Facebook/Twitter
4. Mettre à jour les références dans le code si nécessaire
