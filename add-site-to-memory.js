import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import fs from 'fs';
import Supermemory from 'supermemory';

const client = new Supermemory({ apiKey: process.env.SUPERMEMORY_API_KEY });

const urls = fs.readFileSync('urls.txt', 'utf8').split('\n').filter(u => u.trim());

console.log(`Adding ${urls.length} URLs to supermemory...`);

for (const url of urls) {
  try {
    await client.add({ content: url, containerTags: ["agence-voglans-site"] });
    console.log(`Added ${url}`);
    // Add delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  } catch (e) {
    console.error(`Error adding ${url}:`, e);
  }
}

console.log('Done adding site to supermemory.');
