# Guide de Soumission du Sitemap à Google

## 📄 Fichiers Générés

**sitemap-complet.xml** (93KB) - Version compressée pour la production
**sitemap-complet-formate.xml** (107KB) - Version formatée pour consultation

## 🚀 Comment Soumettre à Google Search Console

### Méthode 1: Upload Direct (Recommandée)
1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Sélectionnez votre propriété `agencevoglans.fr`
3. Cliquez sur "Sitemaps" dans le menu de gauche
4. Cliquez sur "AJOUTER UN SITEMAP"
5. Entrez le nom du fichier: `sitemap-complet.xml`
6. Cliquez sur "Soumettre"

### Méthode 2: Via URL (Alternative)
Si vous hébergez le sitemap sur votre domaine:
1. Upload le fichier `sitemap-complet.xml` dans le dossier `public/`
2. Soumettez l'URL: `https://agencevoglans.fr/sitemap-complet.xml`

## 📊 Statistiques du Sitemap

- **555 URLs** indexables
- **26 communes** couvertes pour estimation
- **301 articles blog** complets
- **Priorités optimisées** (0.5 à 1.0)
- **Fréquences de mise à jour** adaptées

## 🎯 URLs Prioritaires Incluses

### Homepage & Services (Priorité 1.0-0.95)
- https://agencevoglans.fr/
- /estimation, /vendre, /acheter, /contact

### Pages Estimation par Ville (Priorité 0.85)
- /estimation/chambery, /estimation/aix-les-bains, etc. (26 villes)

### Articles Blog Conversion (Priorité 0.8)
- Articles contenant "vendre", "estimation", "prix"

### Contenu Blog (Priorité 0.7-0.75)
- 301 articles sur l'immobilier Savoie

## ✅ Validation

Après soumission:
1. Attendez 24-48h pour l'indexation
2. Vérifiez le statut dans "Couverture > Sitemaps"
3. Corrigez les erreurs éventuelles

## 🔄 Maintenance

**Mise à jour recommandée:**
- Toutes les 2-4 semaines pour le contenu frais
- Immédiatement après ajout de nouveaux articles

**Commande de régénération:**
```bash
python3 generate-complete-sitemap-urls.py
python3 -c "import xml.etree.ElementTree as ET; [code de génération XML]"
```
