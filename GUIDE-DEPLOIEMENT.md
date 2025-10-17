# 🚀 Guide de Déploiement - Agence Voglans

## ✅ Configuration Actuelle

Votre site est configuré pour **Netlify** avec :
- ✅ `netlify.toml` configuré
- ✅ `@astrojs/netlify` installé
- ✅ Dépôt Git existant
- ✅ Modifications prêtes à déployer

---

## 📋 **Modifications à Déployer**

### **Fichiers Modifiés**
- ✅ `.env.local` - Variables d'environnement
- ✅ `public/robots.txt` - Robots.txt optimisé
- ✅ `src/layouts/Base.astro` - Schema.org ajouté
- ✅ `src/pages/acheter.astro` - Corrections TypeScript
- ✅ `src/pages/contact.astro` - Corrections TypeScript
- ✅ `src/pages/services.astro` - Améliorations
- ✅ `src/components/city/EstimationForm.tsx` - Formulaire
- ✅ `src/pages/api/estimation-requests.ts` - API

### **Nouveaux Fichiers (Guides SEO)**
- ✅ `ARTICLE-LANDIERS-CHAMBERY.md`
- ✅ `BLOG-TEMPLATE.md`
- ✅ `EXEMPLE-ARTICLE-COMPLET.md`
- ✅ `GUIDE-SCHEMA-ORG.md`
- ✅ `GUIDE-SITEMAP-GOOGLE.md`
- ✅ `HUBSPOT-INTEGRATION.md`
- ✅ `PLAN-ACTION-SEO-6-MOIS.md`
- ✅ `PLAN-AMELIORATION-SITE.md`
- ✅ `STRATEGIE-BACKLINKS.md`
- ✅ `public/sitemap.xml` - Sitemap optimisé

---

## 🎯 **Méthode 1 : Déploiement via Netlify (Recommandé)**

### **Étape 1 : Commiter les Modifications**

```bash
# Ajouter tous les fichiers modifiés et nouveaux
git add .

# Créer un commit avec un message descriptif
git commit -m "feat: ajout Schema.org, sitemap optimisé, robots.txt et guides SEO"

# Pousser vers GitHub/GitLab
git push origin main
```

### **Étape 2 : Connecter à Netlify**

**Si vous n'avez PAS encore de compte Netlify :**

1. **Créer compte Netlify**
   - Aller sur : https://www.netlify.com
   - Cliquer "Sign up"
   - Se connecter avec GitHub/GitLab

2. **Importer le projet**
   - Cliquer "Add new site" → "Import an existing project"
   - Choisir "GitHub" ou "GitLab"
   - Autoriser Netlify à accéder à vos repos
   - Sélectionner le repo `voglansastro-main`

3. **Configuration build**
   - Build command : `npm run build` (déjà configuré)
   - Publish directory : `dist` (déjà configuré)
   - Cliquer "Deploy site"

4. **Attendre le déploiement**
   - Durée : 2-5 minutes
   - URL temporaire : `random-name-123456.netlify.app`

**Si vous avez DÉJÀ un compte Netlify :**

1. **Aller sur Netlify Dashboard**
   - https://app.netlify.com

2. **Trouver votre site**
   - Chercher "agence-voglans" ou "voglansastro"

3. **Déclencher un nouveau déploiement**
   - Option A : Push automatique (si connecté à Git)
   - Option B : Cliquer "Trigger deploy" → "Deploy site"

### **Étape 3 : Configurer Domaine Personnalisé**

**Si vous avez `agencevoglans.fr` :**

1. **Dans Netlify Dashboard**
   - Aller dans "Domain settings"
   - Cliquer "Add custom domain"
   - Entrer : `agencevoglans.fr`

2. **Configurer DNS**
   - Chez votre registrar (OVH, Gandi, etc.)
   - Ajouter un enregistrement A :
     ```
     Type: A
     Name: @
     Value: 75.2.60.5 (IP Netlify)
     ```
   - Ajouter un enregistrement CNAME :
     ```
     Type: CNAME
     Name: www
     Value: votre-site.netlify.app
     ```

3. **Activer HTTPS**
   - Dans Netlify : "HTTPS" → "Verify DNS configuration"
   - Certificat SSL gratuit (Let's Encrypt)
   - Attendre 24-48h propagation DNS

---

## 🎯 **Méthode 2 : Déploiement CLI Netlify (Rapide)**

### **Installation Netlify CLI**

```bash
# Installer Netlify CLI globalement
npm install -g netlify-cli

# Se connecter à Netlify
netlify login
```

### **Déploiement**

```bash
# Build le site
npm run build

# Déployer en production
netlify deploy --prod

# Suivre les instructions :
# 1. Choisir "Create & configure a new site" ou sélectionner site existant
# 2. Publish directory : dist
# 3. Confirmer
```

**Résultat :** Site déployé en 2-3 minutes !

---

## 🎯 **Méthode 3 : Déploiement Vercel (Alternative)**

### **Installation Vercel CLI**

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

**Note :** Nécessite de modifier `astro.config.mjs` pour adapter à Vercel.

---

## ⚙️ **Variables d'Environnement**

### **Configurer dans Netlify**

1. **Aller dans Netlify Dashboard**
   - Site settings → Environment variables

2. **Ajouter les variables de `.env.local`**
   ```
   SUPABASE_URL=votre_url
   SUPABASE_ANON_KEY=votre_key
   JWT_SECRET=votre_secret
   HUBSPOT_API_KEY=votre_key (si utilisé)
   ```

3. **Redéployer le site**
   - Les variables seront prises en compte

---

## 🧪 **Tester le Déploiement**

### **Checklist Post-Déploiement**

```bash
✅ Site accessible : https://agencevoglans.fr
✅ Pages principales fonctionnent :
   - / (accueil)
   - /estimation
   - /vendre
   - /acheter
   - /contact
   - /estimation/chambery
✅ Formulaire estimation fonctionne
✅ Images chargent correctement
✅ Sitemap accessible : /sitemap.xml
✅ Robots.txt accessible : /robots.txt
✅ Schema.org présent (F12 → voir code source)
✅ HubSpot chat fonctionne
✅ Responsive mobile OK
```

### **Outils de Test**

1. **PageSpeed Insights**
   - https://pagespeed.web.dev
   - Tester : https://agencevoglans.fr
   - Objectif : Score >90

2. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Tester Schema.org

3. **Lighthouse (Chrome DevTools)**
   - F12 → Lighthouse → Generate report
   - Vérifier Performance, SEO, Accessibility

---

## 🔄 **Workflow de Déploiement Continu**

### **Déploiement Automatique**

Si connecté à Git, Netlify déploie automatiquement à chaque push :

```bash
# 1. Faire des modifications
# 2. Commiter
git add .
git commit -m "feat: nouvelle fonctionnalité"

# 3. Pousser
git push origin main

# 4. Netlify déploie automatiquement (2-5 min)
```

### **Branches de Déploiement**

**Production (main) :**
- Branch : `main`
- URL : https://agencevoglans.fr
- Déploiement : Automatique sur push

**Preview (develop) :**
- Branch : `develop`
- URL : https://develop--agencevoglans.netlify.app
- Déploiement : Automatique sur push

**Créer branch develop :**
```bash
git checkout -b develop
git push origin develop
```

---

## 🚨 **Résolution de Problèmes**

### **Erreur : Build Failed**

**Vérifier les logs Netlify :**
1. Netlify Dashboard → Deploys → Cliquer sur deploy failed
2. Lire les logs d'erreur

**Erreurs courantes :**

**1. Erreur TypeScript**
```bash
# Solution : Build en local d'abord
npm run build

# Si erreurs, corriger puis :
git add .
git commit -m "fix: corrections TypeScript"
git push
```

**2. Erreur dépendances**
```bash
# Solution : Vérifier package.json
npm install
npm run build

# Si OK, pusher
git push
```

**3. Erreur variables d'environnement**
```bash
# Solution : Ajouter dans Netlify Dashboard
# Site settings → Environment variables
```

### **Erreur : Site ne charge pas**

**Vérifier :**
1. DNS configuré correctement (24-48h propagation)
2. HTTPS activé dans Netlify
3. Pas d'erreurs dans Console (F12)

### **Erreur : Formulaire ne fonctionne pas**

**Vérifier :**
1. Variables d'environnement Supabase configurées
2. API routes fonctionnent : `/api/estimation-requests`
3. Logs Netlify Functions

---

## 📊 **Monitoring Post-Déploiement**

### **Netlify Analytics (Gratuit)**

- Dashboard → Analytics
- Métriques : Visiteurs, pages vues, bande passante

### **Google Analytics 4 (À configurer)**

1. Créer compte : https://analytics.google.com
2. Ajouter code tracking dans `Base.astro` (déjà préparé)
3. Décommenter lignes 245-258

### **Uptime Monitoring**

**UptimeRobot (Gratuit) :**
- https://uptimerobot.com
- Surveiller : https://agencevoglans.fr
- Alertes email si site down

---

## 🎉 **Félicitations !**

Votre site est maintenant en ligne ! 🚀

### **Prochaines Étapes**

1. ✅ **Vérifier le site** : https://agencevoglans.fr
2. ✅ **Tester toutes les pages**
3. ✅ **Configurer Google Search Console**
4. ✅ **Soumettre sitemap.xml**
5. ✅ **Créer Google Business Profile**
6. ✅ **Commencer stratégie backlinks**

### **Ressources**

- **Netlify Docs** : https://docs.netlify.com
- **Astro Docs** : https://docs.astro.build
- **Support Netlify** : https://answers.netlify.com

---

## 📞 **Besoin d'Aide ?**

Si vous rencontrez des problèmes :
1. Vérifier les logs Netlify
2. Tester en local : `npm run build && npm run preview`
3. Consulter la documentation Netlify
4. Vérifier les variables d'environnement

**Votre site va conquérir Google ! 🏆**
