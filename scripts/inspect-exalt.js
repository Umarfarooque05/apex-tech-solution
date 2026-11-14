const fs = require('fs');
const path = require('path');

async function inspect() {
  const res = await fetch('https://exaltsolutions.in/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const html = await res.text();
  const scratchDir = path.resolve(__dirname, '..', 'scratch');
  if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });

  fs.writeFileSync(path.join(scratchDir, 'exalt.html'), html);
  console.log('HTML fetched, length:', html.length);

  // Search for canvas tags
  const canvasMatches = [...html.matchAll(/<canvas[^>]*>/gi)].map(m => m[0]);
  console.log('Canvas tags found:', canvasMatches);

  // Search for scripts
  const scriptSrcs = [...html.matchAll(/<script[^>]*src=["']([^"']+)["']/gi)].map(m => m[1]);
  console.log('Script sources:', scriptSrcs);

  // Search for inline script contents mentioning three, webgl, canvas, particles, etc.
  const inlineScripts = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)]
    .map(m => m[1])
    .filter(s => /three|webgl|scene|camera|particles|geometry|renderer|mesh/i.test(s));

  console.log('Relevant inline scripts found:', inlineScripts.length);
  if (inlineScripts.length > 0) {
    fs.writeFileSync(path.join(scratchDir, 'exalt_inline.js'), inlineScripts.join('\n\n// --- NEXT SCRIPT ---\n\n'));
  }
}

inspect().catch(console.error);
