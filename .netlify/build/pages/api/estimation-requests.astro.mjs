import { mkdir, writeFile, readFile } from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

try {
  await mkdir(path.join(process.cwd(), "src", "data"), { recursive: true });
} catch (error) {
}
try {
  const filePath = path.join(process.cwd(), "src", "data", "estimation-requests.json");
  await writeFile(filePath, "[]", "utf-8");
  console.log("Fichier estimation-requests.json créé");
} catch (error) {
}
async function sendToHubSpot(estimationRequest) {
  const HUBSPOT_API_KEY = "votre_clé_api_hubspot_ici";
  try {
    const hubspotData = {
      properties: {
        firstname: estimationRequest.clientInfo.nom.split(" ")[0] || "",
        lastname: estimationRequest.clientInfo.nom.split(" ").slice(1).join(" ") || "",
        email: estimationRequest.clientInfo.email,
        phone: estimationRequest.clientInfo.telephone,
        ville_interet: estimationRequest.clientInfo.ville || "",
        type_de_bien: estimationRequest.clientInfo.propertyType || "",
        surface: estimationRequest.clientInfo.surface?.toString() || "",
        valeur_estimee: estimationRequest.estimationData?.estimatedValue?.toString() || "",
        fourchette_basse: estimationRequest.estimationData?.confidenceRange?.min?.toString() || "",
        fourchette_haute: estimationRequest.estimationData?.confidenceRange?.max?.toString() || "",
        tendance_marche: estimationRequest.estimationData?.marketTrend || "",
        type_estimation: estimationRequest.type,
        date_demande: estimationRequest.timestamp,
        statut: "Nouveau",
        source_lead: "Formulaire estimation site web",
        notes: estimationRequest.clientInfo.message || ""
      }
    };
    const response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${HUBSPOT_API_KEY}`
      },
      body: JSON.stringify(hubspotData)
    });
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Erreur HubSpot: ${response.status} - ${errorData}`);
    }
    const result = await response.json();
    console.log("Contact créé dans HubSpot:", result.id);
    return true;
  } catch (error) {
    console.error("Erreur lors de l'envoi à HubSpot:", error);
    return false;
  }
}
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { action, id, status, ...updateData } = body;
    if (!action) {
      return await handleEstimationRequest(body);
    }
    if (action === "update_status" && id && status) {
      return await updateRequestStatus(id, status);
    }
    return new Response(JSON.stringify({ error: "Action non reconnue" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erreur lors du traitement de la requête:", error);
    return new Response(JSON.stringify({
      error: "Erreur serveur",
      details: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
async function handleEstimationRequest(body) {
  const { type, clientInfo, estimationData, source } = body;
  console.log("Nouvelle demande d'estimation reçue:", { type, source, clientInfo: clientInfo.email });
  const id = `EST_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const estimationRequest = {
    id,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    type: type || "traditional",
    clientInfo,
    estimationData,
    status: "pending"
  };
  const hubspotSuccess = await sendToHubSpot(estimationRequest);
  await storeEstimationRequest(estimationRequest);
  await sendNotificationEmail(estimationRequest);
  console.log("Demande d'estimation traitée:", { id, hubspotSuccess });
  return new Response(JSON.stringify({
    success: true,
    id,
    hubspot: hubspotSuccess ? "success" : "fallback",
    message: hubspotSuccess ? "Demande d'estimation envoyée à HubSpot avec succès" : "Demande sauvegardée localement (HubSpot non configuré)"
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
async function updateRequestStatus(id, status) {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "estimation-requests.json");
    let requests = [];
    try {
      const existingData = await readFile(filePath, "utf-8");
      requests = JSON.parse(existingData);
    } catch (error) {
      throw new Error("Aucune demande trouvée");
    }
    const requestIndex = requests.findIndex((r) => r.id === id);
    if (requestIndex === -1) {
      return new Response(JSON.stringify({ error: "Demande non trouvée" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    requests[requestIndex].status = status;
    requests[requestIndex].lastContact = (/* @__PURE__ */ new Date()).toISOString();
    await writeFile(filePath, JSON.stringify(requests, null, 2));
    console.log(`Statut de la demande ${id} mis à jour: ${status}`);
    return new Response(JSON.stringify({
      success: true,
      message: "Statut mis à jour avec succès"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du statut:", error);
    return new Response(JSON.stringify({
      error: "Erreur lors de la mise à jour",
      details: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function storeEstimationRequest(request) {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "estimation-requests.json");
    let requests = [];
    try {
      const existingData = await readFile(filePath, "utf-8");
      requests = JSON.parse(existingData);
    } catch (error) {
      console.log("Création du fichier de demandes d'estimation");
    }
    requests.push(request);
    await writeFile(filePath, JSON.stringify(requests, null, 2));
  } catch (error) {
    console.error("Erreur lors du stockage:", error);
    throw error;
  }
}
async function sendNotificationEmail(request) {
  try {
    const emailContent = `
Nouvelle demande d'estimation reçue !

Détails du client :
- Nom: ${request.clientInfo.nom}
- Email: ${request.clientInfo.email}
- Téléphone: ${request.clientInfo.telephone}
- Ville: ${request.clientInfo.ville || "Non spécifiée"}
- Type de bien: ${request.clientInfo.propertyType || "Non spécifié"}
- Surface: ${request.clientInfo.surface || "Non spécifiée"} m²

${request.type === "ia" ? `Estimation IA générée :
- Valeur estimée: ${request.estimationData?.estimatedValue?.toLocaleString("fr-FR")} €
- Tendance marché: ${request.estimationData?.marketTrend}` : "Demande d'estimation traditionnelle"}

ID de la demande: ${request.id}
Date: ${new Date(request.timestamp).toLocaleString("fr-FR")}

---
Ceci est une notification automatique de L'Agence de Voglans
    `;
    console.log("Email de notification (simulé):", emailContent);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
  }
}
const GET = async ({ request }) => {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "estimation-requests.json");
    try {
      const data = await readFile(filePath, "utf-8");
      const requests = JSON.parse(data);
      return new Response(JSON.stringify({
        success: true,
        requests,
        total: requests.length
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      return new Response(JSON.stringify({
        success: true,
        requests: [],
        total: 0
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des demandes:", error);
    return new Response(JSON.stringify({
      error: "Erreur serveur"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
