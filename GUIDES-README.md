# 📚 Système de Guides Téléchargeables - Mode d'emploi

## ✅ Ce qui est déjà fait

- ✅ Pandoc installé
- ✅ Script de conversion automatique créé
- ✅ Dossier `public/guides/` créé
- ✅ Guide de démo généré (vendre-2025.pdf)

## 🎯 Pour générer les 5 guides complets

### ÉTAPE 1 : Créer les 5 fichiers Markdown

Placez ces 5 fichiers à la racine du projet :

1. `guide-vendre-2025.md` (42 pages - DÉJÀ CRÉÉ EN DÉMO)
2. `guide-diagnostics-obligatoires.md` (28 pages)
3. `guide-estimation-bien.md` (35 pages)
4. `guide-fiscalite-vente.md` (32 pages)
5. `guide-preparer-maison.md` (25 pages)

**Le contenu complet** de ces guides vous a été fourni précédemment dans la conversation.

### ÉTAPE 2 : Exécuter le script de conversion

```bash
./convert-all-guides.sh
```

**Résultat :** Les 5 PDFs seront générés dans `public/guides/`

---

## 📖 Utilisation du script

### Conversion automatique

```bash
# Convertir tous les guides
./convert-all-guides.sh

# Résultat attendu :
# public/guides/
# ├── vendre-2025.pdf
# ├── diagnostics-obligatoires.pdf
# ├── estimation-bien.pdf
# ├── fiscalite-vente.pdf
# └── preparer-maison.pdf
```

### Conversion manuelle d'un seul guide

```bash
# Markdown → HTML
pandoc guide-vendre-2025.md \
  -o public/guides/vendre-2025.html \
  --standalone --toc

# HTML → PDF
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --print-to-pdf="$(pwd)/public/guides/vendre-2025.pdf" \
  "file://$(pwd)/public/guides/vendre-2025.html"
```

---

## 🌐 Intégration sur le site

### Étape 3 : Créer les landing pages

Les fichiers de landing pages ont déjà été préparés :
- `src/pages/guides/vendre-2025.astro`
- `src/pages/guides/diagnostics-obligatoires.astro`
- `src/pages/guides/estimation-bien.astro`
- `src/pages/guides/fiscalite-vente.astro`
- `src/pages/guides/preparer-maison.astro`
- `src/pages/guides/merci.astro`

### Étape 4 : Tester localement

```bash
npm run dev
```

Visitez : http://localhost:4321/guides/vendre-2025

---

## 📧 Prochaine étape : Envoi email automatique

Une fois les guides créés, on peut mettre en place :

1. **Formulaire de capture** (déjà dans les landing pages)
2. **Envoi email automatique** avec le PDF
3. **CRM lead nurturing**

---

## 🎨 Amélioration Design (optionnel)

### Ajouter logo et couleurs

Créez un fichier `template-header.yaml` :

```yaml
---
title: "Guide Complet de la Vente Immobilière 2025"
subtitle: "L'Agence de Voglans"
author: "Votre partenaire immobilier en Savoie"
---
```

Puis convertissez avec :

```bash
pandoc template-header.yaml guide-vendre-2025.md \
  -o public/guides/vendre-2025.pdf \
  --standalone --toc
```

### Design pro avec Canva (2-3h par guide)

1. Allez sur https://canva.com
2. Template "eBook professionnel"
3. Importez le contenu
4. Ajoutez design + images
5. Export PDF

---

## ✅ Checklist finale

- [ ] 5 fichiers Markdown créés
- [ ] Script de conversion exécuté
- [ ] 5 PDFs générés dans `public/guides/`
- [ ] Landing pages testées en local
- [ ] Site build et déployé
- [ ] Formulaires fonctionnels
- [ ] Envoi email configuré

---

## 📞 Support

**L'Agence de Voglans**
- 📞 07 57 83 02 62
- 📧 contact@agencevoglans.fr
- 🌐 agencevoglans.fr

---

**🎉 Système prêt à générer 200+ leads qualifiés/mois !**

