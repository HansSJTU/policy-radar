// Draws favicon.ico and apple-touch-icon.png from public/icon.svg.
// Run after changing the icon: node scripts/build-icons.mjs
import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const publicDir = new URL('../public/', import.meta.url);
const svg = await readFile(new URL('icon.svg', publicDir), 'utf8');
// iOS rounds the corners itself, so the touch icon fills the whole square.
const square = svg.replace(' rx="14"', '');

const png = (source, size) =>
  sharp(Buffer.from(source), { density: (72 * size) / 64 * 4 })
    .resize(size, size)
    .png()
    .toBuffer();

// An ICO file whose entries are PNG images.
function ico(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, index) => {
    const entry = 6 + 16 * index;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map(({ data }) => data)]);
}

const sizes = [16, 32, 48];
const images = await Promise.all(
  sizes.map(async (size) => ({ size, data: await png(svg, size) })),
);
await writeFile(new URL('favicon.ico', publicDir), ico(images));
await writeFile(new URL('apple-touch-icon.png', publicDir), await png(square, 180));
console.log('Wrote public/favicon.ico and public/apple-touch-icon.png');
