import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import path from 'path';

const IMAGES_DIR = 'public/images';
const QUALITY = 80;
const MAX_WIDTH = 1600; // max width for full images
const THUMB_WIDTH = 400; // thumbnails for cards/gallery

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getFiles(full));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath);
  const base = filePath.slice(0, -ext.length);
  const webpPath = base + '.webp';

  const info = await stat(filePath);
  const sizeMB = info.size / 1024 / 1024;

  // Skip tiny files
  if (sizeMB < 0.05) return null;

  try {
    const img = sharp(filePath);
    const meta = await img.metadata();

    // Convert to WebP with resize if too large
    const width = meta.width > MAX_WIDTH ? MAX_WIDTH : undefined;
    await sharp(filePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const newInfo = await stat(webpPath);
    const saved = ((info.size - newInfo.size) / info.size * 100).toFixed(0);

    console.log(`✓ ${path.basename(filePath)} → .webp (${(info.size/1024).toFixed(0)}KB → ${(newInfo.size/1024).toFixed(0)}KB, -${saved}%)`);
    return { original: filePath, webp: webpPath, saved: info.size - newInfo.size };
  } catch (err) {
    console.error(`✗ ${path.basename(filePath)}: ${err.message}`);
    return null;
  }
}

async function main() {
  const files = await getFiles(IMAGES_DIR);
  console.log(`Found ${files.length} images to optimize\n`);

  let totalSaved = 0;
  let count = 0;

  for (const file of files) {
    const result = await optimizeImage(file);
    if (result) {
      totalSaved += result.saved;
      count++;
    }
  }

  console.log(`\nDone: ${count} images optimized, ${(totalSaved / 1024 / 1024).toFixed(1)}MB saved`);
}

main();
