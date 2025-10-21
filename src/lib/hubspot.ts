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

const guideNames = {
  'vendre-2025': 'Guide Vente Immobilière 2025',
  'diagnostics': 'Checklist Diagnostics Obligatoires',
  'estimation': 'Comment Estimer Son Bien',
  'fiscalite': 'Fiscalité Vente Immobilière',
  'preparer': 'Préparer Sa Maison Pour La Vente'
};

export async function createHubSpotContact(data: GuideLeadData) {
  // Si pas de token HubSpot, fallback vers sauvegarde locale
  if (!import.meta.env.HUBSPOT_ACCESS_TOKEN) {
    console.warn('⚠️ HubSpot non configuré - Sauvegarde locale uniquement');
    return saveLocalBackup(data);
  }

  try {
    const guideName = guideNames[data.guide] || data.guide;
    
    // Préparer les propriétés du contact
    const contactProperties = {
      email: data.email,
      firstname: data.prenom,
      phone: data.telephone || '',
      lifecyclestage: 'lead',
      
      // Propriétés personnalisées (à créer dans HubSpot)
      guide_telecharge: guideName,
      date_telechargement_guide: new Date().toISOString(),
      source_lead: 'Téléchargement Guide Website',
      interesse_par: 'Vente immobilière'
    };

    let contactId;
    let isNewContact = false;

    try {
      // Chercher si le contact existe par email
      const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
        filterGroups: [
          {
            filters: [
              {
                propertyName: 'email',
                operator: 'EQ',
                value: data.email
              }
            ]
          }
        ],
        properties: ['email', 'firstname'],
        limit: 1
      });

      if (searchResponse.results && searchResponse.results.length > 0) {
        // Contact existe, le mettre à jour
        contactId = searchResponse.results[0].id;
        
        await hubspotClient.crm.contacts.basicApi.update(contactId, {
          properties: contactProperties
        });
        
        console.log('✅ Contact HubSpot mis à jour:', contactId);
      } else {
        throw new Error('Contact non trouvé');
      }
      
    } catch (searchError) {
      // Contact n'existe pas, le créer
      const newContact = await hubspotClient.crm.contacts.basicApi.create({
        properties: contactProperties
      });
      
      contactId = newContact.id;
      isNewContact = true;
      console.log('✅ Nouveau contact HubSpot créé:', contactId);
    }

    // Créer une note sur le contact
    try {
      await hubspotClient.crm.objects.notes.basicApi.create({
        properties: {
          hs_timestamp: new Date().toISOString(),
          hs_note_body: `📚 Lead a téléchargé le guide: ${guideName}\n\n` +
                       `📧 Email: ${data.email}\n` +
                       `📱 Téléphone: ${data.telephone || 'Non fourni'}\n` +
                       `📅 Date: ${new Date().toLocaleString('fr-FR')}`
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
    } catch (noteError) {
      console.warn('⚠️ Note non créée:', noteError.message);
      // Pas bloquant, on continue
    }

    // Log success
    const logData = {
      ...data,
      contactId,
      isNewContact,
      timestamp: new Date().toISOString(),
      hubspotSuccess: true
    };
    
    await saveLocalBackup(logData);

    return {
      success: true,
      contactId,
      isNewContact,
      message: isNewContact ? 'Contact créé dans HubSpot' : 'Contact mis à jour dans HubSpot'
    };

  } catch (error) {
    console.error('❌ Erreur HubSpot:', error);
    
    // Fallback : sauvegarder localement
    const result = await saveLocalBackup({
      ...data,
      hubspotError: error.message,
      timestamp: new Date().toISOString()
    });
    
    return {
      success: false,
      error: error.message,
      message: 'Sauvegardé localement, HubSpot indisponible',
      ...result
    };
  }
}

async function saveLocalBackup(data: any) {
  try {
    // En environnement serveur (Node.js)
    if (typeof window === 'undefined') {
      const fs = await import('fs');
      const path = await import('path');
      
      const logPath = path.join(process.cwd(), 'leads-backup.json');
      
      let leads = [];
      if (fs.existsSync(logPath)) {
        const content = fs.readFileSync(logPath, 'utf-8');
        leads = JSON.parse(content);
      }
      
      leads.push({
        ...data,
        savedAt: new Date().toISOString()
      });
      
      fs.writeFileSync(logPath, JSON.stringify(leads, null, 2));
      
      console.log('💾 Lead sauvegardé localement');
    }
    
    return { localBackup: true };
  } catch (error) {
    console.error('❌ Erreur sauvegarde locale:', error);
    return { localBackup: false, backupError: error.message };
  }
}

// Fonction utilitaire pour tester la connexion HubSpot
export async function testHubSpotConnection() {
  try {
    if (!import.meta.env.HUBSPOT_ACCESS_TOKEN) {
      return {
        connected: false,
        error: 'Access token non configuré'
      };
    }

    // Test simple : récupérer les propriétés des contacts
    const properties = await hubspotClient.crm.properties.coreApi.getAll('contacts');
    
    return {
      connected: true,
      message: 'Connexion HubSpot OK',
      propertiesCount: properties.results.length
    };
  } catch (error) {
    return {
      connected: false,
      error: error.message
    };
  }
}
