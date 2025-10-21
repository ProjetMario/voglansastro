# ⚡ HUBSPOT - QUICK START (15 min)

## 🎯 INSTALLATION COMPLÈTE

### 1️⃣ Installer le package (2 min)

```bash
npm install @hubspot/api-client
```

### 2️⃣ Configuration HubSpot (5 min)

**A. Créer compte HubSpot (gratuit)**
- https://www.hubspot.com/products/get-started
- Plan gratuit : 1000 contacts + CRM

**B. Créer une Private App**
1. HubSpot → Paramètres ⚙️
2. Intégrations → Private Apps
3. "Create a private app"
4. Nom : "Guides Voglans"
5. **Scopes requis** (cochez) :
   - ✅ `crm.objects.contacts.write`
   - ✅ `crm.objects.contacts.read`
   - ✅ `crm.schemas.contacts.read`
   - ✅ `crm.objects.notes.write`
6. "Create app"
7. **Copiez le token** (commence par `pat-na1-`)

**C. Configurer les variables**

```bash
# Créer le fichier .env
cp .env.example .env

# Éditer .env et remplacer le token
# HUBSPOT_ACCESS_TOKEN=pat-na1-VOTRE-VRAI-TOKEN-ICI
```

### 3️⃣ Créer les propriétés personnalisées (3 min)

**Dans HubSpot : Paramètres → Propriétés → Contacts**

Créez ces 4 propriétés :

| Nom interne | Label | Type |
|-------------|-------|------|
| `guide_telecharge` | Guide téléchargé | Texte court |
| `date_telechargement_guide` | Date téléchargement | Date |
| `source_lead` | Source du lead | Texte court |
| `interesse_par` | Intéressé par | Select |

**Options pour "Intéressé par" :**
- Vente immobilière
- Estimation
- Diagnostics
- Conseil fiscal

### 4️⃣ Créer le workflow email (5 min)

**A. Template email**

HubSpot → Marketing → Email → Create email

```
Objet : Votre guide {{contact.guide_telecharge}}

Bonjour {{contact.firstname}},

Merci de votre intérêt pour notre guide !

📄 Téléchargez-le ici : [LIEN VERS PDF]

Besoin d'aide ?
📞 07 57 83 02 62

L'Agence de Voglans
```

**B. Workflow**

HubSpot → Automation → Workflows → Create workflow

1. **Type** : Contact-based
2. **Déclencheur** : "Guide téléchargé" is known
3. **Action** : Send email (choisir template créé)
4. **Activer** le workflow

---

## ✅ TEST (2 min)

```bash
# Démarrer le serveur
npm run dev

# Ouvrir
open http://localhost:4321/guides/vendre-2025

# Remplir formulaire
# ✅ Vérifier que contact apparaît dans HubSpot
# ✅ Vérifier que email est reçu
```

---

## 🎯 FICHIERS CRÉÉS

- ✅ `src/lib/hubspot.ts` - Client HubSpot
- ✅ `src/pages/api/guides/subscribe.ts` - API mise à jour
- ✅ `.env.example` - Template configuration
- ✅ `HUBSPOT-GUIDES-INTEGRATION.md` - Doc complète
- ✅ `HUBSPOT-QUICK-START.md` - Ce fichier

---

## 🆘 TROUBLESHOOTING

### Erreur : "Invalid access token"
```bash
# Vérifier que le token est dans .env
cat .env

# Vérifier qu'il commence par "pat-na1-"
```

### Contact pas créé
```bash
# Vérifier les logs du serveur
npm run dev

# Chercher les lignes :
# ✅ "Contact HubSpot créé"
# ❌ "Erreur HubSpot"
```

### Email pas reçu
1. Vérifier que workflow est **activé** dans HubSpot
2. Vérifier que l'email template est **publié**
3. Vérifier les spams

---

## 📊 APRÈS INSTALLATION

**Dans HubSpot, vous aurez :**

✅ Tous vos leads dans le CRM  
✅ Emails envoyés automatiquement  
✅ Historique des interactions  
✅ Analytics complets  
✅ Lead scoring automatique  

**Prochaines étapes :**
1. Créer séquence nurturing (Jour 3, 7, 14...)
2. Ajouter lead scoring
3. Connecter Google Ads / Facebook Ads
4. Setup rapports personnalisés

---

## 🎉 SYSTÈME PRÊT !

```bash
npm run dev
```

Visitez : http://localhost:4321/guides/vendre-2025

**Remplissez le formulaire et voyez le lead apparaître dans HubSpot ! 🚀**

---

## 📞 SUPPORT

**Documentation complète :** `HUBSPOT-GUIDES-INTEGRATION.md`

**Questions :**
- 📧 contact@agencevoglans.fr
- 📞 07 57 83 02 62
