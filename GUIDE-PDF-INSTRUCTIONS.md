# �� Convertir vos guides en PDF - 3 méthodes

## ✅ MÉTHODE 1 : Navigateur (LA PLUS SIMPLE - 30 secondes)

**Votre guide HTML est prêt :** `public/guides/vendre-2025.html`

### Étapes :

1. **Ouvrez le fichier dans votre navigateur**
   - Double-cliquez sur `public/guides/vendre-2025.html`
   - OU faites `open public/guides/vendre-2025.html` dans le terminal

2. **Imprimez en PDF**
   - **Mac :** Cmd+P → "Save as PDF" → Enregistrer dans `public/guides/`
   - **Windows :** Ctrl+P → "Save as PDF"

3. **Renommez :** `vendre-2025.pdf`

**✅ Résultat : PDF professionnel avec table des matières !**

---

## 🚀 MÉTHODE 2 : Chrome Headless (automatique)

```bash
# Installer si pas déjà fait
brew install --cask google-chrome

# Convertir automatiquement
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless \
  --disable-gpu \
  --print-to-pdf=public/guides/vendre-2025.pdf \
  public/guides/vendre-2025.html
```

---

## 💎 MÉTHODE 3 : Online (0 installation)

1. **Allez sur :** https://www.sejda.com/html-to-pdf
2. **Upload** `vendre-2025.html`
3. **Téléchargez** le PDF

---

## 📋 POUR LES 5 GUIDES

Une fois que vous avez créé les 5 fichiers Markdown complets :

```bash
# Convertir tous en HTML
for file in guide-*.md; do
  pandoc "$file" -o "public/guides/${file%.md}.html" --standalone --toc
done

# Puis ouvrir chacun dans Chrome et Save as PDF
# OU utiliser le script Chrome headless
```

---

**Le HTML est déjà généré et prêt !**
Ouvrez `public/guides/vendre-2025.html` dans votre navigateur maintenant.

