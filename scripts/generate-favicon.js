const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

async function generate() {
  const publicDir = path.join(__dirname, '..', 'public');
  const svgPath = path.join(publicDir, 'fire.svg');
  if (!fs.existsSync(svgPath)) {
    console.error('fire.svg not found in public/');
    process.exit(1);
  }

  const sizes = [16, 32, 48];
  const pngPaths = [];

  for (const size of sizes) {
    const out = path.join(publicDir, `favicon-${size}.png`);
    await sharp(svgPath)
      .resize(size, size, { fit: 'contain' })
      .png({ quality: 100 })
      .toFile(out);
    pngPaths.push(out);
    console.log('Written', out);
  }

  // create favicon.ico from the generated PNGs
  const icoPath = path.join(publicDir, 'favicon.ico');
  const pngBuffers = await Promise.all(pngPaths.map(p => fs.promises.readFile(p)));
  const icoBuffer = await pngToIco(pngBuffers);
  await fs.promises.writeFile(icoPath, icoBuffer);
  console.log('Written', icoPath);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
