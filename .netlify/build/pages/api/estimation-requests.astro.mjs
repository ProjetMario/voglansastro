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
  await storeEstimationRequest(estimationRequest);
  await sendNotificationEmail(estimationRequest);
  console.log("Demande d'estimation sauvegardée avec succès:", id);
  return new Response(JSON.stringify({
    success: true,
    id,
    message: "Demande d'estimation reçue avec succès"
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
