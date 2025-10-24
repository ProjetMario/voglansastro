# 🔧 GUIDE: Résoudre "35 Pages avec Redirection" - Google Search Console

**Commit**: `dcf0011`  
**Date**: 25 Oct 2025  
**Problème**: 35 pages non-indexées à cause de redirections  

---

## ❌ PROBLÈME IDENTIFIÉ

Google crawle plusieurs variantes de tes URLs:
- `http://agencevoglans.fr/*` (sans HTTPS)
- `http://www.agencevoglans.fr/*` (avec www, sans HTTPS)
- `https://www.agencevoglans.fr/*` (avec www)

Ces variantes redirigent vers `https://agencevoglans.fr/*` mais Google les voit comme "pages avec redirection" et ne les indexe pas.

---

## ✅ SOLUTION IMPLÉMENTÉE

**Redirections 301 forcées dans `netlify.toml`:**

```toml
# Force HTTPS et non-www
[[redirects]]
  from = "http://agencevoglans.fr/*"
  to = "https://agencevoglans.fr/:splat"
  status = 301
  force = true

[[redirects]]
  from = "https://www.agencevoglans.fr/*"
  to = "https://agencevoglans.fr/:splat"
  status = 301
  force = true

[[redirects]]
  from = "http://www.agencevoglans.fr/*"
  to = "https://agencevoglans.fr/:splat"
  status = 301
  force = true
```

**Résultat**: Toutes les variantes → 1 URL canonique unique

---

## 📋 ACTIONS À FAIRE (PAR TOI)

### 1️⃣ Attendre le Déploiement Netlify (5 min)

Vérifie que Netlify a bien déployé:
- Va sur https://app.netlify.com
- Vérifie que le dernier deploy est "Published" (commit `dcf0011`)

### 2️⃣ Tester les Redirections (2 min)

Ouvre un terminal et teste les redirections:

```bash
# Test redirection HTTP → HTTPS
curl -I http://agencevoglans.fr/

# Doit montrer:
# HTTP/1.1 301 Moved Permanently
# Location: https://agencevoglans.fr/

# Test redirection WWW → non-WWW
curl -I https://www.agencevoglans.fr/

# Doit montrer:
# HTTP/1.1 301 Moved Permanently
# Location: https://agencevoglans.fr/
```

✅ Si tu vois "301 Moved Permanently", c'est bon !

### 3️⃣ Demander Ré-indexation dans Google Search Console (10 min)

**Option A - Demander indexation des bonnes URLs (RECOMMANDÉ):**

1. Va sur https://search.google.com/search-console
2. Sélectionne `agencevoglans.fr`
3. Clique sur "Inspection de l'URL" (barre de recherche en haut)
4. Entre l'URL canonique: `https://agencevoglans.fr/`
5. Clique "Demander une indexation"
6. Répète pour tes 10-15 pages les plus importantes:
   - `https://agencevoglans.fr/estimation`
   - `https://agencevoglans.fr/vendre`
   - `https://agencevoglans.fr/acheter`
   - `https://agencevoglans.fr/blog`
   - `https://agencevoglans.fr/estimation/voglans`
   - `https://agencevoglans.fr/estimation/chambery`
   - `https://agencevoglans.fr/estimation/aix-les-bains`
   - etc.

**Option B - Soumettre le Sitemap (FACILE):**

1. Va sur https://search.google.com/search-console
2. Menu "Sitemaps" (à gauche)
3. Ajoute: `https://agencevoglans.fr/sitemap-index.xml`
4. Clique "Envoyer"

### 4️⃣ Marquer les Redirections comme "Corrigées" (5 min)

1. Dans Google Search Console
2. Menu "Pages" → "Page avec redirection"
3. Clique sur "Afficher les détails"
4. Sélectionne toutes les URLs concernées
5. Clique sur "Valider la correction"

---

## ⏰ DÉLAIS ATTENDUS

| Action | Délai | Résultat |
|--------|-------|----------|
| **Déploiement Netlify** | 5 min | Redirections actives |
| **Re-crawl Google** | 3-7 jours | URLs re-scannées |
| **Validation GSC** | 7-14 jours | Statut "Corrigé" ✅ |
| **Indexation complète** | 2-4 semaines | 35 pages indexées |

---

## 🔍 SURVEILLER L'ÉVOLUTION

### Semaine 1 (J+1 à J+7):
- Google re-crawle progressivement
- Pages avec redirection: 35 → 25-30
- Nouvelles pages indexées: +5 à +10

### Semaine 2 (J+8 à J+14):
- Validation GSC terminée
- Pages avec redirection: 25-30 → 10-15
- Nouvelles pages indexées: +10 à +20

### Semaine 3-4 (J+15 à J+30):
- Toutes URLs corrigées
- Pages avec redirection: 10-15 → 0-5 ✅
- Nouvelles pages indexées: +25 à +35 ✅

---

## 📊 AVANT/APRÈS ATTENDU

### AVANT (maintenant):
```
Pages indexées: ~270 pages
Pages avec redirection: 35 pages ❌
Pages découvertes non indexées: 35 pages
Total pages site: 303 pages
```

### APRÈS (4 semaines):
```
Pages indexées: ~300-303 pages ✅
Pages avec redirection: 0-5 pages ✅
Pages découvertes non indexées: 0-3 pages
Total pages site: 303 pages
```

**Gain: +30 à +35 pages indexées**

---

## ❓ FAQ

**Q: Pourquoi ces redirections existaient ?**  
R: Par défaut, les sites sont accessibles en http://, https://, www et non-www. Sans configuration, toutes ces variantes existent et Google les voit comme pages séparées.

**Q: Les redirections 301 nuisent-elles au SEO ?**  
R: Non ! Les redirections 301 bien faites AMÉLIORENT le SEO. Elles concentrent le "jus SEO" sur 1 URL canonique au lieu de le diluer sur 4 variantes.

**Q: Dois-je supprimer les redirections internes d'Astro ?**  
R: Non, garde-les. Elles gèrent les variantes d'URLs avec tirets (ex: `/estimation-voglans` → `/estimation/voglans`). Elles sont utiles.

**Q: Que faire si le problème persiste après 30 jours ?**  
R: Crée un ticket dans GSC pour signaler le problème. Google analysera manuellement.

---

## ✅ CHECKLIST RAPIDE

- [ ] Attendre déploiement Netlify (5 min)
- [ ] Tester redirections avec curl (2 min)
- [ ] Soumettre sitemap dans GSC (2 min)
- [ ] Demander indexation 10-15 pages top (10 min)
- [ ] Valider correction dans GSC (2 min)
- [ ] Surveiller évolution J+7, J+14, J+30

**Temps total: ~20 minutes**  
**Résultat: +30-35 pages indexées en 30 jours**

---

## 🚀 BONUS: Optimiser le Crawl Budget

Pour accélérer l'indexation, demande indexation dans cet ordre:

**Priorité 1 (jour 1):**
1. https://agencevoglans.fr/
2. https://agencevoglans.fr/estimation
3. https://agencevoglans.fr/vendre
4. https://agencevoglans.fr/acheter
5. https://agencevoglans.fr/blog

**Priorité 2 (jour 3):**
6. https://agencevoglans.fr/estimation/voglans
7. https://agencevoglans.fr/estimation/chambery
8. https://agencevoglans.fr/estimation/aix-les-bains
9. https://agencevoglans.fr/blog/vendre-maison-chambery-2025
10. https://agencevoglans.fr/blog/investir-voglans-2025

**Priorité 3 (jour 7):**
Reste des pages estimation + articles blog importants

---

**RÉSUMÉ: Fix déployé ✅ | Actions GSC à faire par toi | Résultat attendu dans 30 jours**
