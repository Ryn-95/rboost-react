import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = {
  favicon: 32,
  'favicon-16x16': 16,
  'favicon-32x32': 32,
  'apple-touch-icon': 180,
  'android-chrome-192x192': 192,
  'android-chrome-512x512': 512,
  'og-image': 1200
};

async function generateFavicons() {
  const sourceImage = join(__dirname, '../src/assets/logo.png');
  const publicDir = join(__dirname, '../public');

  // Ensure public directory exists
  await fs.mkdir(publicDir, { recursive: true });

  // Generate favicons for each size
  for (const [name, size] of Object.entries(sizes)) {
    const outputPath = join(publicDir, `${name}.png`);
    await sharp(sourceImage)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(outputPath);
    console.log(`Generated ${name}.png (${size}x${size})`);
  }
}

generateFavicons().catch(console.error); 