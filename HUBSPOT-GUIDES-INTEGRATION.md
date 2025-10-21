# 🎯 INTÉGRATION HUBSPOT - Système Guides Téléchargeables

## ✅ POURQUOI HUBSPOT > RESEND

**HubSpot offre BEAUCOUP PLUS :**

| Feature | Resend | HubSpot |
|---------|--------|---------|
| Envoi email | ✅ | ✅ |
| CRM intégré | ❌ | ✅ |
| Lead scoring | ❌ | ✅ |
| Workflows automation | ❌ | ✅ |
| Segmentation | ❌ | ✅ |
| Analytics complets | ❌ | ✅ |
| Nurturing campaigns | ❌ | ✅ |
| **Prix gratuit** | 3000/mois | 1000/mois + CRM |

**Verdict : HubSpot est le choix parfait pour un système de leads immobiliers ! 🏆**

---

## 🚀 INSTALLATION (5 min)

### 1. Installer le package HubSpot

```bash
npm install @hubspot/api-client
```

### 2. Créer compte HubSpot (si pas déjà fait)

**Plan gratuit suffit !**
- Allez sur : https://www.hubspot.com/products/get-started
- Créez compte gratuit
- Activez le CRM

### 3. Obtenir l'API Key

**Dans HubSpot :**
1. Paramètres (engrenage) → Intégrations → API Key
2. Créer une clé privée (Private App)
3. Permissions requises :
   - ✅ `crm.objects.contacts.write`
   - ✅ `crm.objects.contacts.read`
   - ✅ `automation` (pour workflows)

### 4. Configurer variables environnement

**Créez `.env` à la racine :**

```bash
# HubSpot Configuration
HUBSPOT_ACCESS_TOKEN=pat-na1-votre-token-ici
```

---

## 📝 CODE D'INTÉGRATION

### Fichier : `src/lib/hubspot.ts`

```typescript
import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({
  accessToken: import.meta.env.HUBSPOT_ACCESS_TOKEN
});

export interface GuideLeadData {
  prenom: string;
  email: string;
  telephone?: string;
  guide: string;
}

export async function createHubSpotContact(data: GuideLeadData) {
  try {
    // Mapping des guides vers des propriétés HubSpot
    const guideNames = {
      'vendre-2025': 'Guide Vente Immobilière 2025',
      'diagnostics': 'Checklist Diagnostics Obligatoires',
      'estimation': 'Comment Estimer Son Bien',
      'fiscalite': 'Fiscalité Vente Immobilière',
      'preparer': 'Préparer Sa Maison Pour La Vente'
    };

    const guideName = guideNames[data.guide] || data.guide;

    // 1. Créer/Mettre à jour le contact dans HubSpot
    const contactObj = {
      properties: {
        email: data.email,
        firstname: data.prenom,
        phone: data.telephone || '',
        lifecyclestage: 'lead',
        lead_status: 'NEW',
        
        // Propriétés personnalisées (à créer dans HubSpot)
        guide_telecharge: guideName,
        date_telechargement_guide: new Date().toISOString(),
        source_lead: 'Téléchargement Guide Website',
        interesse_par: 'Vente immobilière'
      }
    };

    // Chercher si le contact existe déjà
    let contactId;
    try {
      const existingContact = await hubspotClient.crm.contacts.basicApi.getById(
        data.email,
        ['email']
      );
      contactId = existingContact.id;
      
      // Mettre à jour le contact existant
      await hubspotClient.crm.contacts.basicApi.update(contactId, contactObj);
      console.log('✅ Contact HubSpot mis à jour:', contactId);
      
    } catch (error) {
      // Contact n'existe pas, le créer
      const newContact = await hubspotClient.crm.contacts.basicApi.create(contactObj);
      contactId = newContact.id;
      console.log('✅ Nouveau contact HubSpot créé:', contactId);
    }

    // 2. Créer une note sur le contact
    await hubspotClient.crm.objects.notes.basicApi.create({
      properties: {
        hs_timestamp: new Date().toISOString(),
        hs_note_body: `Lead a téléchargé le guide: ${guideName}`,
        hubspot_owner_id: null
      },
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: 'HUBSPOT_DEFINED',
              associationTypeId: 202 // Note to Contact
            }
          ]
        }
      ]
    });

    // 3. Déclencher le workflow HubSpot (qui enverra l'email avec PDF)
    // Le workflow sera configuré dans HubSpot directement
    
    return {
      success: true,
      contactId,
      message: 'Contact créé/mis à jour dans HubSpot'
    };

  } catch (error) {
    console.error('❌ Erreur HubSpot:', error);
    
    // Fallback : sauvegarder localement
    const fs = require('fs');
    const logPath = './leads-backup.json';
    
    let leads = [];
    if (fs.existsSync(logPath)) {
      leads = JSON.parse(fs.readFileSync(logPath, 'utf-8'));
    }
    
    leads.push({
      ...data,
      date: new Date().toISOString(),
      hubspotError: error.message
    });
    
    fs.writeFileSync(logPath, JSON.stringify(leads, null, 2));
    
    return {
      success: false,
      error: error.message,
      message: 'Sauvegardé localement, HubSpot indisponible'
    };
  }
}
```

---

## 🔄 MISE À JOUR API

### Fichier : `src/pages/api/guides/subscribe.ts`

```typescript
import type { APIRoute } from 'astro';
import { createHubSpotContact } from '../../../lib/hubspot';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const prenom = formData.get('prenom')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const telephone = formData.get('telephone')?.toString() || '';
    const guide = formData.get('guide')?.toString() || 'vendre-2025';

    // Validation
    if (!prenom || !email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Données invalides' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Envoyer à HubSpot
    const result = await createHubSpotContact({
      prenom,
      email,
      telephone,
      guide
    });

    console.log('📧 Lead capturé:', result);

    // Redirection vers page de remerciement
    return redirect(`/guides/merci?guide=${guide}&email=${encodeURIComponent(email)}`);
    
  } catch (error) {
    console.error('❌ Erreur API guides:', error);
    
    // Même en cas d'erreur, on redirige (meilleure UX)
    const guide = 'vendre-2025';
    return redirect(`/guides/merci?guide=${guide}`);
  }
}
```

---

## 🎯 CONFIGURATION HUBSPOT

### Propriétés personnalisées à créer

**Dans HubSpot : Paramètres → Propriétés → Contacts**

Créez ces propriétés personnalisées :

| Nom interne | Nom affiché | Type | Description |
|-------------|--------------|------|-------------|
| `guide_telecharge` | Guide téléchargé | Texte | Nom du guide téléchargé |
| `date_telechargement_guide` | Date téléchargement | Date | Date de téléchargement |
| `source_lead` | Source du lead | Texte | D'où vient le lead |
| `interesse_par` | Intéressé par | Select | Type de service |

**Options pour "Intéressé par" :**
- Vente immobilière
- Estimation
- Diagnostics
- Conseil fiscal
- Home staging

---

## 📧 WORKFLOW HUBSPOT (Envoi Email avec PDF)

### Créer le workflow d'automation

**Dans HubSpot : Automation → Workflows**

**1. Créer nouveau workflow**
- Nom : "Envoi Guide Téléchargé"
- Type : Contact-based
- Déclencheur : "Guide téléchargé" is known

**2. Ajouter action : Envoyer email**

**Template email :**

```html
Bonjour {{contact.firstname}},

Merci de votre intérêt pour notre guide "{{contact.guide_telecharge}}" !

📄 Votre guide est disponible en téléchargement :
👉 [Télécharger le guide](https://agencevoglans.fr/guides/{{guide-slug}}.pdf)

📚 Découvrez nos autres guides gratuits :
- Guide Vente Immobilière 2025
- Checklist Diagnostics Obligatoires
- Comment Estimer Son Bien
- Fiscalité Vente Immobilière
- Préparer Sa Maison Pour La Vente

💬 Besoin d'aide ? Notre équipe est à votre disposition :
📞 07 57 83 02 62
📧 contact@agencevoglans.fr

À très bientôt,
L'équipe de L'Agence de Voglans
```

**3. Ajouter délai : 3 jours**

**4. Ajouter email de suivi**

```
Bonjour {{contact.firstname}},

Avez-vous eu le temps de consulter votre guide ?

Nous sommes là pour vous accompagner dans votre projet immobilier.

[Prendre rendez-vous] → lien vers calendrier
```

**5. Activer le workflow**

---

## 🎨 SÉQUENCE NURTURING COMPLÈTE

### Workflow avancé (optionnel)

**Jour 0 :** Email avec guide  
**Jour 3 :** Email de suivi + autres guides  
**Jour 7 :** Cas client + témoignage  
**Jour 14 :** Offre estimation gratuite  
**Jour 21 :** Invitation webinaire/événement  

**Avec branches conditionnelles :**
- Si ouvre email → Continuer séquence
- Si ne répond pas → Rappel
- Si clique sur lien → Hot lead (notification équipe)

---

## 📊 TRACKING & ANALYTICS

### Métriques automatiques dans HubSpot

**Disponibles immédiatement :**
- Nombre de leads par guide
- Taux d'ouverture emails
- Taux de clic
- Conversion lead → client
- ROI par guide
- Source de trafic
- Temps moyen de conversion

**Dashboard HubSpot :**
1. Rapports → Créer rapport
2. Type : Contacts
3. Filtres :
   - Source = "Téléchargement Guide Website"
   - Date création = 30 derniers jours
4. Visualisation : Graphique temporel

---

## 🔗 INTÉGRATION AVEC NETLIFY

### Variables environnement Netlify

**Netlify Dashboard → Site Settings → Environment Variables**

Ajoutez :
```
HUBSPOT_ACCESS_TOKEN = pat-na1-votre-token-ici
```

### Test après déploiement

```bash
# Build local
npm run build

# Preview
npm run preview

# Test formulaire
# Vérifier dans HubSpot que le contact apparaît
```

---

## ✅ CHECKLIST INSTALLATION

### Configuration HubSpot
- [ ] Compte HubSpot créé (gratuit)
- [ ] Private App créée
- [ ] Access Token copié
- [ ] Propriétés personnalisées créées
- [ ] Workflow email créé et activé

### Configuration Code
- [ ] Package `@hubspot/api-client` installé
- [ ] Fichier `src/lib/hubspot.ts` créé
- [ ] API `subscribe.ts` mise à jour
- [ ] Variable `HUBSPOT_ACCESS_TOKEN` dans `.env`

### Tests
- [ ] Test formulaire en local
- [ ] Contact apparaît dans HubSpot
- [ ] Email reçu avec PDF
- [ ] Workflow fonctionne
- [ ] Déployé sur Netlify

---

## 🎯 AVANTAGES HUBSPOT

### Ce que vous gagnez vs Resend

**1. CRM Intégré**
- Tous vos leads dans un seul endroit
- Historique complet des interactions
- Segmentation automatique

**2. Lead Scoring**
- Score automatique selon engagement
- Priorisation des leads chauds
- Alertes équipe commerciale

**3. Workflows Automation**
- Séquences email automatiques
- Nurturing intelligent
- A/B testing emails

**4. Analytics Puissants**
- ROI par canal
- Conversion funnel
- Attribution marketing

**5. Intégrations**
- Gmail / Outlook
- Google Ads
- Facebook Ads
- Calendly
- Slack

---

## 💰 COÛT

**Plan Gratuit HubSpot :**
- ✅ 1000 contacts
- ✅ 2000 emails/mois
- ✅ CRM complet
- ✅ Workflows simples
- ✅ Analytics de base

**Largement suffisant pour 40-75 leads/mois !**

---

## 🆘 TROUBLESHOOTING

### Erreur : "Invalid access token"
→ Vérifiez que le token est correct dans `.env`

### Erreur : "Missing required property"
→ Créez les propriétés personnalisées dans HubSpot

### Email pas reçu
→ Vérifiez que le workflow est activé

### Contact pas créé
→ Vérifiez les permissions de la Private App

---

## 📞 SUPPORT

**Documentation HubSpot :**
- API : https://developers.hubspot.com/docs/api/overview
- Workflows : https://knowledge.hubspot.com/workflows

**Notre support :**
- 📧 contact@agencevoglans.fr
- 📞 07 57 83 02 62

---

## 🎉 RÉSULTAT FINAL

**Avec HubSpot, vous obtenez :**

✅ Système de capture leads automatique  
✅ CRM pour gérer tous vos prospects  
✅ Emails automatiques avec guides  
✅ Nurturing intelligent  
✅ Analytics complets  
✅ Lead scoring  
✅ ROI tracking  

**Le tout pour 0€/mois ! 🚀**

---

**PROCHAINE ÉTAPE :** Créez votre compte HubSpot et suivez les instructions ci-dessus !
