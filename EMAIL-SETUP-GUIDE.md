# 📧 Guide Configuration Envoi Email Automatique

## 🎯 Système de Guides avec Envoi Email

Vous avez **3 options** pour envoyer automatiquement les PDFs par email.

---

## ✅ OPTION #1 : RESEND (Recommandé - Le plus simple)

### Pourquoi Resend ?
- ✅ **Gratuit** : 3000 emails/mois
- ✅ **Simple** : 5 min de setup
- ✅ **Moderne** : API propre
- ✅ **Fiable** : Utilisé par Vercel, Linear

### Installation

```bash
npm install resend
```

### Configuration

**1. Créez un compte :** https://resend.com/signup

**2. Créez une API Key :**
- Dashboard → API Keys → Create API Key
- Copiez la clé (commencez par `re_`)

**3. Ajoutez dans `.env` :**

```bash
RESEND_API_KEY=re_votre_clé_ici
```

**4. Configurez le domaine (optionnel mais recommandé) :**
- Dashboard → Domains → Add Domain
- Ajoutez `agencevoglans.fr`
- Configurez les DNS (MX, TXT, CNAME)
- Une fois vérifié, emails envoyés depuis `contact@agencevoglans.fr`

### Code d'envoi email

**Fichier : `src/lib/email.ts`**

```typescript
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendGuideEmail(
  to: string,
  prenom: string,
  guide: string
) {
  const guides = {
    'vendre-2025': {
      title: 'Guide Complet de la Vente Immobilière 2025',
      pdf: 'vendre-2025.pdf'
    },
    'diagnostics': {
      title: 'Checklist des Diagnostics Obligatoires',
      pdf: 'diagnostics-obligatoires.pdf'
    },
    'estimation': {
      title: 'Comment Estimer Son Bien',
      pdf: 'estimation-bien.pdf'
    },
    'fiscalite': {
      title: 'Fiscalité de la Vente Immobilière',
      pdf: 'fiscalite-vente.pdf'
    },
    'preparer': {
      title: 'Préparer Sa Maison Pour la Vente',
      pdf: 'preparer-maison.pdf'
    }
  };

  const currentGuide = guides[guide] || guides['vendre-2025'];

  try {
    const data = await resend.emails.send({
      from: 'L\'Agence de Voglans <contact@agencevoglans.fr>',
      to: [to],
      subject: `Votre guide "${currentGuide.title}"`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2F5D3E 0%, #1a3d2a 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: white; padding: 30px; border: 1px solid #e0e0e0; }
            .button { display: inline-block; background: #2F5D3E; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: bold; }
            .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 10px 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏠 L'Agence de Voglans</h1>
              <p>Votre partenaire immobilier en Savoie</p>
            </div>
            <div class="content">
              <h2>Bonjour ${prenom},</h2>
              <p>Merci de votre intérêt pour notre guide <strong>"${currentGuide.title}"</strong> !</p>
              <p>📄 <strong>Votre guide est en pièce jointe</strong> de cet email au format PDF.</p>
              <p>Vous pouvez également le télécharger directement :</p>
              <center>
                <a href="https://agencevoglans.fr/guides/${currentGuide.pdf}" class="button">
                  📥 Télécharger le guide
                </a>
              </center>
              <h3>📚 Nos autres guides gratuits :</h3>
              <ul>
                <li>Guide Complet de la Vente Immobilière 2025</li>
                <li>Checklist des Diagnostics Obligatoires</li>
                <li>Comment Estimer Son Bien</li>
                <li>Fiscalité de la Vente Immobilière</li>
                <li>Préparer Sa Maison Pour la Vente</li>
              </ul>
              <p><a href="https://agencevoglans.fr/guides">👉 Voir tous nos guides</a></p>
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
              <h3>💬 Besoin d'aide ?</h3>
              <p>Notre équipe est à votre disposition pour répondre à toutes vos questions :</p>
              <ul>
                <li>📞 <strong>07 57 83 02 62</strong></li>
                <li>📧 <strong>contact@agencevoglans.fr</strong></li>
                <li>📍 <strong>93 Chemin de la Combe, 73420 Voglans</strong></li>
              </ul>
              <center>
                <a href="https://agencevoglans.fr/contact" class="button">
                  📅 Prendre rendez-vous
                </a>
              </center>
            </div>
            <div class="footer">
              <p><strong>L'Agence de Voglans</strong><br>
              Votre partenaire immobilier 100% local en Savoie</p>
              <p>
                <a href="https://agencevoglans.fr">Site web</a> • 
                <a href="https://agencevoglans.fr/blog">Blog</a> • 
                <a href="https://agencevoglans.fr/contact">Contact</a>
              </p>
              <p style="font-size: 11px; margin-top: 20px;">
                Vous recevez cet email car vous avez téléchargé un guide sur agencevoglans.fr.<br>
                <a href="#">Se désabonner</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: currentGuide.pdf,
          path: `./public/guides/${currentGuide.pdf}`
        }
      ]
    });

    console.log('✅ Email envoyé:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Erreur envoi email:', error);
    return { success: false, error };
  }
}
```

### Mise à jour de l'API

**Fichier : `src/pages/api/guides/subscribe.ts`**

```typescript
import type { APIRoute } from 'astro';
import { sendGuideEmail } from '../../../lib/email';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const prenom = formData.get('prenom')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const telephone = formData.get('telephone')?.toString() || '';
    const guide = formData.get('guide')?.toString() || 'vendre-2025';

    if (!prenom || !email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Données invalides' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Envoyer l'email avec le PDF
    const result = await sendGuideEmail(email, prenom, guide);

    if (!result.success) {
      console.error('Erreur envoi email:', result.error);
      // Continuer quand même vers merci
    }

    // TODO: Sauvegarder dans CRM/DB
    console.log('📧 Lead capturé:', { prenom, email, telephone, guide });

    return redirect(`/guides/merci?guide=${guide}&email=${encodeURIComponent(email)}`);
    
  } catch (error) {
    console.error('Erreur API guides:', error);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

---

## 🟢 OPTION #2 : BREVO (ex-Sendinblue)

### Avantages
- ✅ Gratuit : 300 emails/jour
- ✅ CRM intégré
- ✅ Interface française

### Installation

```bash
npm install @getbrevo/brevo
```

### Configuration

```typescript
import * as brevo from '@getbrevo/brevo';

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  import.meta.env.BREVO_API_KEY
);

export async function sendGuideEmailBrevo(to: string, prenom: string, guide: string) {
  const sendSmtpEmail = new brevo.SendSmtpEmail();
  
  sendSmtpEmail.subject = "Votre guide immobilier";
  sendSmtpEmail.htmlContent = "..."; // HTML email
  sendSmtpEmail.sender = { name: "L'Agence de Voglans", email: "contact@agencevoglans.fr" };
  sendSmtpEmail.to = [{ email: to, name: prenom }];
  sendSmtpEmail.attachment = [{
    name: "guide.pdf",
    content: Buffer.from('...').toString('base64')
  }];

  return await apiInstance.sendTransacEmail(sendSmtpEmail);
}
```

---

## 🔵 OPTION #3 : MAILGUN

### Avantages
- ✅ Gratuit : 5000 emails/mois (3 mois)
- ✅ Très fiable
- ✅ API complète

### Installation

```bash
npm install mailgun.js form-data
```

### Configuration

```typescript
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: import.meta.env.MAILGUN_API_KEY
});

export async function sendGuideEmailMailgun(to: string, prenom: string, guide: string) {
  return await mg.messages.create('agencevoglans.fr', {
    from: "L'Agence de Voglans <contact@agencevoglans.fr>",
    to: [to],
    subject: "Votre guide immobilier",
    html: "...", // HTML email
    attachment: {
      filename: 'guide.pdf',
      data: Buffer.from('...')
    }
  });
}
```

---

## 📊 TRACKING & ANALYTICS

### Ajouter dans l'email (tracking)

```html
<img src="https://agencevoglans.fr/api/track?email={{email}}&guide={{guide}}" width="1" height="1" />
```

### API tracking

**Fichier : `src/pages/api/track.ts`**

```typescript
export const GET: APIRoute = async ({ url }) => {
  const email = url.searchParams.get('email');
  const guide = url.searchParams.get('guide');
  
  // Log ouverture email
  console.log('📧 Email ouvert:', { email, guide, date: new Date() });
  
  // Retour pixel transparent
  const pixel = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    'base64'
  );
  
  return new Response(pixel, {
    headers: {
      'Content-Type': 'image/gif',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}
```

---

## ✅ CHECKLIST INSTALLATION

- [ ] Installer package email (Resend/Brevo/Mailgun)
- [ ] Créer compte sur plateforme choisie
- [ ] Obtenir API Key
- [ ] Ajouter clé dans `.env`
- [ ] Créer `src/lib/email.ts`
- [ ] Mettre à jour `src/pages/api/guides/subscribe.ts`
- [ ] Tester avec un email
- [ ] Vérifier réception + pièce jointe
- [ ] Configurer domaine (DNS)
- [ ] Déployer sur Netlify avec variables d'environnement

---

## 🚀 DÉPLOIEMENT NETLIFY

### Variables d'environnement

Netlify Dashboard → Site Settings → Environment Variables

```
RESEND_API_KEY=re_votre_clé
```

### Build settings

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

---

## 🎯 RÉSULTAT ATTENDU

**Parcours utilisateur :**

1. Visiteur remplit formulaire sur `/guides/vendre-2025`
2. API capture les données
3. **Email envoyé automatiquement avec PDF en pièce jointe**
4. Redirection vers `/guides/merci`
5. Possibilité de télécharger aussi sur la page merci

**Taux de conversion attendu : 15-25%**  
**Leads mensuels : 100-300**

---

## 📞 SUPPORT

**Besoin d'aide pour configurer ?**

- 📧 contact@agencevoglans.fr
- 📞 07 57 83 02 62

---

**Système prêt à générer des leads qualifiés ! 🚀**
