# Instructions pour ajouter votre logo

## Étapes pour intégrer votre vrai logo :

### 1. Préparer l'image du logo
- Sauvegardez votre logo (l'image verte avec le cercle, la maison et la personne) sous le nom `logo-agence-voglans.png`
- Format recommandé : PNG avec fond transparent
- Taille recommandée : 512x512 pixels minimum pour une qualité optimale

### 2. Ajouter l'image au projet
- Placez le fichier `logo-agence-voglans.png` dans le dossier `public/images/`
- Le chemin final doit être : `public/images/logo-agence-voglans.png`

### 3. Activer l'image dans le code
Une fois l'image ajoutée, modifiez le fichier `src/components/Logo.astro` :

**Commentez le SVG (lignes 12-24) :**
```html
<!-- Fallback SVG en attendant l'image -->
<!-- <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  ... (tout le contenu SVG)
</svg> -->
```

**Décommentez l'image (lignes 26-30) :**
```html
<!-- Image réelle -->
<img 
  src="/images/logo-agence-voglans.png" 
  alt="L'Agence de Voglans - Logo" 
  class="w-full h-full object-contain"
/>
```

### 4. Résultat
Votre vrai logo apparaîtra alors :
- Dans la navigation en haut à gauche (petit format)
- Dans le hero de la page d'accueil (grand format dans le cercle)

### 5. Alternative : Utiliser une URL externe
Si vous préférez héberger l'image ailleurs, remplacez simplement le chemin :
```html
<img 
  src="https://votre-site.com/logo.png" 
  alt="L'Agence de Voglans - Logo" 
  class="w-full h-full object-contain"
/>
```

## Note importante
Le SVG actuel est un placeholder qui ressemble à votre logo. Une fois votre vraie image ajoutée, elle remplacera automatiquement le SVG sur tout le site.
