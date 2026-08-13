const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

// Twemoji URL for FIRE (U+1F525)
const TWEMOJI_URL = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f525.png';

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error('Failed to download: ' + res.statusCode));
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function generate() {
  const publicDir = path.join(__dirname, '..', 'public');
  const tmpPath = path.join(publicDir, 'twemoji-fire-72.png');

  console.log('Downloading Twemoji PNG...');
  await download(TWEMOJI_URL, tmpPath);
  console.log('Downloaded to', tmpPath);

  const sizes = [16, 32, 48];
  const pngPaths = [];
  for (const size of sizes) {
    const out = path.join(publicDir, `favicon-${size}.png`);
    await sharp(tmpPath).resize(size, size).png({ quality: 100 }).toFile(out);
    pngPaths.push(out);
    console.log('Written', out);
  }

  const icoPath = path.join(publicDir, 'favicon.ico');
  const buffers = await Promise.all(pngPaths.map(p => fs.promises.readFile(p)));
  const icoBuffer = await toIco(buffers);
  await fs.promises.writeFile(icoPath, icoBuffer);
  console.log('Written', icoPath);

  // Also overwrite fire.svg fallback with an embedded PNG wrapper (optional)
  const fireSvgPath = path.join(publicDir, 'fire.svg');
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>` +
    `<image href='favicon-32.png' width='64' height='64'/>` +
    `</svg>`;
  await fs.promises.writeFile(fireSvgPath, svgContent);
  console.log('Rewrote', fireSvgPath);

  // remove tmp
  await fs.promises.unlink(tmpPath);
}

generate().catch(err => { console.error(err); process.exit(1); });
