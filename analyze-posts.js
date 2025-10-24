const fs = require('fs');
const path = '/Users/zazouino/Downloads/voglansastro-main/src/data/posts.js';
const content = fs.readFileSync(path, 'utf-8');

// Extraire les catégories
const categories = {};
const lines = content.split('\n');
lines.forEach(line => {
  const match = line.match(/category:\s*"([^"]+)"/);
  if (match) {
    const cat = match[1];
    categories[cat] = (categories[cat] || 0) + 1;
  }
});

console.log('📊 ANALYSE DES 300 ARTICLES\n');
console.log('RÉPARTITION PAR CATÉGORIE:');
Object.entries(categories)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count} articles`);
  });

console.log(`\nTOTAL: ${Object.values(categories).reduce((a,b)=>a+b,0)} articles`);
