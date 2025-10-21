import type { APIRoute } from 'astro';
import { createHubSpotContact } from '../../../lib/hubspot';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const prenom = formData.get('prenom')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const telephone = formData.get('telephone')?.toString() || '';
    const guide = formData.get('guide')?.toString() || 'vendre-2025';

    // Validation basique
    if (!prenom || !email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Données invalides' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('📧 Nouveau lead guide:', {
      prenom,
      email,
      telephone,
      guide,
      date: new Date().toISOString()
    });

    // Envoyer à HubSpot (avec fallback automatique si erreur)
    const hubspotResult = await createHubSpotContact({
      prenom,
      email,
      telephone,
      guide
    });

    if (hubspotResult.success) {
      console.log('✅ Lead envoyé à HubSpot:', hubspotResult.contactId);
    } else {
      console.warn('⚠️ HubSpot échoué (backup local actif):', hubspotResult.message);
    }

    // Redirection vers page de remerciement
    // (L'email avec le PDF sera envoyé par le workflow HubSpot automatiquement)
    return redirect(`/guides/merci?guide=${guide}&email=${encodeURIComponent(email)}`);
    
  } catch (error) {
    console.error('❌ Erreur API guides:', error);
    
    // Même en cas d'erreur, on redirige (meilleure UX)
    const guide = 'vendre-2025';
    return redirect(`/guides/merci?guide=${guide}`);
  }
}
