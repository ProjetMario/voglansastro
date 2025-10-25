const fs = require('fs');

const file = '/Users/zazouino/Downloads/voglansastro-main/src/data/communes.ts';
let content = fs.readFileSync(file, 'utf8');

// Pattern pour matcher les méta descriptions génériques
const genericPattern = /description: "Estimez gratuitement votre bien à ([^"]+) \(Savoie\) avec notre agence 100% locale & Humaine\. Expertise du marché local, estimation précise sous 48h\.",/g;

// Remplacement par description optimisée CTR
content = content.replace(genericPattern, (match, ville) => {
  return `description: "🏡 Estimation GRATUITE ${ville} ⭐ Rapport détaillé 48h ✅ Expert marché local ✅ +200 clients 4,8/5 ✅ 0€ sans engagement. Demandez la vôtre !",`;
});

// Écrire le fichier
fs.writeFileSync(file, content, 'utf8');

console.log('✅ Toutes les méta descriptions ont été optimisées !');
