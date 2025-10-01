import type { APIRoute } from 'astro';
import { writeFile, readFile, mkdir } from 'fs/promises';
import path from 'path';

interface EstimationRequest {
  id: string;
  timestamp: string;
  type: 'ia' | 'traditional';
  clientInfo: {
    nom: string;
    email: string;
    telephone: string;
    ville?: string;
    propertyType?: string;
    surface?: number;
    message?: string;
  };
  estimationData?: {
    estimatedValue?: number;
    confidenceRange?: { min: number; max: number };
    marketTrend?: string;
  };
  status: 'pending' | 'contacted' | 'completed';
  lastContact?: string;
}

// Création du répertoire data et fichier initial s'ils n'existent pas
try {
  await mkdir(path.join(process.cwd(), 'src', 'data'), { recursive: true });
} catch (error) {
  // Le répertoire existe déjà ou erreur non critique
}

// Créer le fichier de demandes d'estimation s'il n'existe pas
try {
  const filePath = path.join(process.cwd(), 'src', 'data', 'estimation-requests.json');
  await writeFile(filePath, '[]', 'utf-8');
  console.log('Fichier estimation-requests.json créé');
} catch (error) {
  // Le fichier existe déjà ou erreur non critique
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { action, id, status, ...updateData } = body;

    // Si c'est une demande d'estimation classique
    if (!action) {
      return await handleEstimationRequest(body);
    }

    // Gestion des actions d'administration
    if (action === 'update_status' && id && status) {
      return await updateRequestStatus(id, status);
    }

    return new Response(JSON.stringify({ error: 'Action non reconnue' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erreur lors du traitement de la requête:', error);
    return new Response(JSON.stringify({
      error: 'Erreur serveur',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Gestion des demandes d'estimation classiques
async function handleEstimationRequest(body: any) {
  const { type, clientInfo, estimationData, source } = body;

  console.log('Nouvelle demande d\'estimation reçue:', { type, source, clientInfo: clientInfo.email });

  // Générer un ID unique
  const id = `EST_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Créer la demande d'estimation
  const estimationRequest: EstimationRequest = {
    id,
    timestamp: new Date().toISOString(),
    type: type || 'traditional',
    clientInfo,
    estimationData,
    status: 'pending'
  };

  // Stocker la demande
  await storeEstimationRequest(estimationRequest);

  // Envoyer la notification par email (simulé pour l'instant)
  await sendNotificationEmail(estimationRequest);

  console.log('Demande d\'estimation sauvegardée avec succès:', id);

  return new Response(JSON.stringify({
    success: true,
    id,
    message: 'Demande d\'estimation reçue avec succès'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

// Mise à jour du statut d'une demande
async function updateRequestStatus(id: string, status: string) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'estimation-requests.json');

    // Lire les demandes existantes
    let requests: EstimationRequest[] = [];
    try {
      const existingData = await readFile(filePath, 'utf-8');
      requests = JSON.parse(existingData);
    } catch (error) {
      throw new Error('Aucune demande trouvée');
    }

    // Trouver et mettre à jour la demande
    const requestIndex = requests.findIndex(r => r.id === id);
    if (requestIndex === -1) {
      return new Response(JSON.stringify({ error: 'Demande non trouvée' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Mettre à jour le statut et la date de dernière modification
    requests[requestIndex].status = status as 'pending' | 'contacted' | 'completed';
    requests[requestIndex].lastContact = new Date().toISOString();

    // Sauvegarder
    await writeFile(filePath, JSON.stringify(requests, null, 2));

    console.log(`Statut de la demande ${id} mis à jour: ${status}`);

    return new Response(JSON.stringify({
      success: true,
      message: 'Statut mis à jour avec succès'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut:', error);
    return new Response(JSON.stringify({
      error: 'Erreur lors de la mise à jour',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Fonction pour stocker les demandes d'estimation
async function storeEstimationRequest(request: EstimationRequest) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'estimation-requests.json');

    // Lire les demandes existantes
    let requests: EstimationRequest[] = [];
    try {
      const existingData = await readFile(filePath, 'utf-8');
      requests = JSON.parse(existingData);
    } catch (error) {
      // Le fichier n'existe pas encore, on commence avec un tableau vide
      console.log('Création du fichier de demandes d\'estimation');
    }

    // Ajouter la nouvelle demande
    requests.push(request);

    // Sauvegarder
    await writeFile(filePath, JSON.stringify(requests, null, 2));

  } catch (error) {
    console.error('Erreur lors du stockage:', error);
    throw error;
  }
}

// Fonction pour envoyer l'email de notification (simulation)
async function sendNotificationEmail(request: EstimationRequest) {
  try {
    // Simulation de l'envoi d'email
    // En production, vous utiliseriez un service comme SendGrid, Mailgun, etc.

    const emailContent = `
Nouvelle demande d'estimation reçue !

Détails du client :
- Nom: ${request.clientInfo.nom}
- Email: ${request.clientInfo.email}
- Téléphone: ${request.clientInfo.telephone}
- Ville: ${request.clientInfo.ville || 'Non spécifiée'}
- Type de bien: ${request.clientInfo.propertyType || 'Non spécifié'}
- Surface: ${request.clientInfo.surface || 'Non spécifiée'} m²

${request.type === 'ia' ? `Estimation IA générée :
- Valeur estimée: ${request.estimationData?.estimatedValue?.toLocaleString('fr-FR')} €
- Tendance marché: ${request.estimationData?.marketTrend}` : 'Demande d\'estimation traditionnelle'}

ID de la demande: ${request.id}
Date: ${new Date(request.timestamp).toLocaleString('fr-FR')}

---
Ceci est une notification automatique de L'Agence de Voglans
    `;

    console.log('Email de notification (simulé):', emailContent);

    // Ici vous ajouteriez l'appel à votre service d'email
    // Exemple avec SendGrid :
    // await sendEmail({
    //   to: 'contact@agencevoglans.fr',
    //   subject: `Nouvelle demande d'estimation - ${request.clientInfo.nom}`,
    //   html: emailContent
    // });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    // Ne pas throw l'erreur pour ne pas bloquer la demande
  }
}

// Endpoint pour récupérer toutes les demandes (pour l'admin)
export const GET: APIRoute = async ({ request }) => {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'estimation-requests.json');

    try {
      const data = await readFile(filePath, 'utf-8');
      const requests: EstimationRequest[] = JSON.parse(data);

      return new Response(JSON.stringify({
        success: true,
        requests,
        total: requests.length
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (error) {
      // Le fichier n'existe pas encore
      return new Response(JSON.stringify({
        success: true,
        requests: [],
        total: 0
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('Erreur lors de la récupération des demandes:', error);
    return new Response(JSON.stringify({
      error: 'Erreur serveur'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
