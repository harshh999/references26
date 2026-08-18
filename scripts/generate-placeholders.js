const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '../public/references');

// Ensure directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = [
  { name: "Slight Twist", path: "slight-twist.png" },
  { name: "Ciao Energy", path: "ciao-energy.png" },
  { name: "G Drink Me", path: "g-drink-me.png" },
  { name: "Di Santino Water", path: "di-santino-water.png" },
  { name: "Taylors Wines", path: "taylors-wines.png" },
  { name: "Duckhorn", path: "duckhorn.png" },
  { name: "Oliver Winery", path: "oliver-winery.png" },
  { name: "Total Wine & More", path: "total-wine.png" },
  { name: "Dan Murphy's", path: "dan-murphys.png" },
  { name: "BevMo", path: "bevmo.png" },
  { name: "Bunta Beer", path: "bunta-beer.png" },
  { name: "Beer & BBQ Festival", path: "beer-bbq-festival.png" },
  { name: "White Coffee", path: "white-coffee.png" },
  { name: "7 Brew", path: "7-brew.png" },
  { name: "Aroma Coffee", path: "aroma-coffee.png" },
  { name: "Blue Bottle Coffee", path: "blue-bottle-coffee.png" },
  { name: "Saxbys", path: "saxbys.png" },
  { name: "Buck's Sauce", path: "bucks-sauce.png" },
  { name: "SQEW", path: "sqew.png" },
  { name: "Ballena Cabo", path: "ballena-cabo.png" },
  { name: "The Stay", path: "the-stay.png" },
  { name: "Supreme Luxury", path: "supreme-luxury.png" },
  { name: "White Desert", path: "white-desert.png" },
  { name: "Tandjung Sari Hotel", path: "tandjung-sari.png" },
  { name: "Vita Travel", path: "vita-travel.png" },
  { name: "Own Primland", path: "own-primland.png" },
  { name: "Azure", path: "azure.png" },
  { name: "Meritage Resort", path: "meritage-resort.png" },
  { name: "Omai Villas", path: "omai-villas.png" },
  { name: "Armenia Travel", path: "armenia-travel.png" },
  { name: "The Bend Club", path: "the-bend-club.png" },
  { name: "Horeca Social", path: "horeca-social.png" }
];

async function generatePlaceholders() {
  console.log(`Generating ${files.length} placeholder PNGs...`);
  
  for (const file of files) {
    const svg = `
      <svg width="800" height="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="500" fill="#D8D5CE"/>
        <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="20" font-weight="500" fill="#737373" dominant-baseline="middle" text-anchor="middle" letter-spacing="0.08em" text-transform="uppercase">${file.name.replace(/&/g, '&amp;')}</text>
      </svg>
    `;
    
    const outputPath = path.join(targetDir, file.path);
    
    try {
      await sharp(Buffer.from(svg))
        .png()
        .toFile(outputPath);
      console.log(`✓ Generated ${file.path}`);
    } catch (err) {
      console.error(`✗ Failed to generate ${file.path}:`, err);
    }
  }
  
  console.log("All placeholders generated successfully.");
}

generatePlaceholders();
