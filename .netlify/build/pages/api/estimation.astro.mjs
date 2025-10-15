export { renderers } from '../../renderers.mjs';

const GET = async ({ request }) => {
  const url = new URL(request.url);
  const city = url.searchParams.get("city");
  const propertyType = url.searchParams.get("propertyType");
  const surface = url.searchParams.get("surface");
  console.log("API appelée avec:", { city, propertyType, surface });
  if (!city || !propertyType) {
    return new Response(JSON.stringify({ error: "Paramètres manquants" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const mockDVFData = await getMockDVFData(city, propertyType, parseInt(surface || "100"));
    console.log("Données DVF générées:", mockDVFData);
    const result = {
      success: true,
      data: mockDVFData,
      estimatedValue: calculateEstimate(mockDVFData, propertyType, parseInt(surface || "100"))
    };
    console.log("Résultat d'estimation:", result);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erreur lors de la récupération DVF:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
async function getMockDVFData(city, propertyType, surface) {
  const basePrices = {
    "maison": { min: 25e4, max: 8e5 },
    "appartement": { min: 15e4, max: 5e5 },
    "terrain": { min: 8e4, max: 3e5 }
  };
  const cityMultiplier = {
    "voglans": 1.2,
    "chambery": 1.1,
    "aix-les-bains": 1.3,
    "bourget-du-lac": 1.15
  };
  const basePrice = basePrices[propertyType] || basePrices.maison;
  const multiplier = cityMultiplier[city.toLowerCase()] || 1;
  const transactions = [];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  for (let i = 0; i < 15; i++) {
    const transactionYear = currentYear - Math.floor(Math.random() * 3);
    const transactionSurface = surface + (Math.random() - 0.5) * 50;
    const pricePerM2 = (basePrice.min + Math.random() * (basePrice.max - basePrice.min)) * multiplier;
    transactions.push({
      id: `DVF_${transactionYear}_${i}`,
      date: `${transactionYear}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-01`,
      price: Math.round(transactionSurface * pricePerM2),
      surface: Math.round(transactionSurface),
      pricePerM2: Math.round(pricePerM2),
      address: `${Math.floor(Math.random() * 200)} rue fictive, ${city}`,
      propertyType,
      year: transactionYear
    });
  }
  return {
    city,
    propertyType,
    totalTransactions: transactions.length,
    averagePricePerM2: Math.round(transactions.reduce((sum, t) => sum + t.pricePerM2, 0) / transactions.length),
    priceRange: {
      min: Math.min(...transactions.map((t) => t.price)),
      max: Math.max(...transactions.map((t) => t.price))
    },
    recentTransactions: transactions.slice(0, 8)
    // 8 transactions les plus récentes
  };
}
function calculateEstimate(dvfData, propertyType, surface) {
  const { averagePricePerM2, priceRange } = dvfData;
  const baseEstimate = surface * averagePricePerM2;
  let adjustmentFactor = 1;
  if (propertyType === "maison") {
    adjustmentFactor = 1.05;
  } else if (propertyType === "appartement") {
    adjustmentFactor = 0.95;
  }
  const adjustedEstimate = Math.round(baseEstimate * adjustmentFactor);
  const confidenceMargin = 0.15;
  const minEstimate = Math.round(adjustedEstimate * (1 - confidenceMargin));
  const maxEstimate = Math.round(adjustedEstimate * (1 + confidenceMargin));
  return {
    estimatedValue: adjustedEstimate,
    confidenceRange: {
      min: minEstimate,
      max: maxEstimate
    },
    pricePerM2: Math.round(averagePricePerM2 * adjustmentFactor),
    marketTrend: getMarketTrend(dvfData),
    factors: {
      surface,
      averagePricePerM2,
      locationFactor: 1,
      propertyFactor: adjustmentFactor
    }
  };
}
function getMarketTrend(dvfData) {
  const { recentTransactions } = dvfData;
  if (recentTransactions.length < 3) return "stable";
  const recentPrices = recentTransactions.slice(0, 5).map((t) => t.pricePerM2);
  const olderPrices = recentTransactions.slice(5, 10).map((t) => t.pricePerM2);
  if (olderPrices.length === 0) return "stable";
  const recentAvg = recentPrices.reduce((a, b) => a + b, 0) / recentPrices.length;
  const olderAvg = olderPrices.reduce((a, b) => a + b, 0) / olderPrices.length;
  const change = (recentAvg - olderAvg) / olderAvg;
  if (change > 0.05) return "increasing";
  if (change < -0.05) return "decreasing";
  return "stable";
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
