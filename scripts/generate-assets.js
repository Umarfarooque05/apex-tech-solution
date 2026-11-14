const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Sleek Icon SVG
const iconSvg = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="112" fill="#0F172A"/>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="50%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#818CF8"/>
    </linearGradient>
  </defs>
  <path d="M256 86 L410 396 H326 L256 250 L186 396 H102 Z" fill="url(#grad1)"/>
  <path d="M256 160 L330 310 H280 L256 260 L232 310 H182 Z" fill="url(#grad2)" opacity="0.9"/>
  <circle cx="256" cy="205" r="18" fill="#FFFFFF"/>
</svg>`;

// 2. OpenGraph Banner SVG
const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#090E1A"/>
  <defs>
    <linearGradient id="ogGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="50%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
    <linearGradient id="ogGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#818CF8"/>
    </linearGradient>
  </defs>

  <!-- Ambient light -->
  <circle cx="1020" cy="180" r="320" fill="#2563EB" opacity="0.18"/>
  <circle cx="200" cy="500" r="280" fill="#06B6D4" opacity="0.12"/>

  <!-- Left Content -->
  <g transform="translate(100, 100)">
    <!-- Pill -->
    <rect x="0" y="0" width="310" height="42" rx="21" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
    <circle cx="22" cy="21" r="6" fill="#06B6D4"/>
    <text x="38" y="27" font-family="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" font-weight="700" fill="#E2E8F0" letter-spacing="1">DIGITAL GROWTH &amp; TECH</text>

    <!-- Headline -->
    <text x="0" y="115" font-family="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="64" font-weight="800" fill="#FFFFFF" letter-spacing="-1.5">
      Apex Tech Solution
    </text>

    <!-- Subtitle -->
    <text x="0" y="175" font-family="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="600" fill="#38BDF8">
      Digital Strategy &amp; High-Performance Systems
    </text>

    <!-- Services bullet line -->
    <text x="0" y="235" font-family="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="20" font-weight="400" fill="#94A3B8">
      SEO • Digital Marketing • Web &amp; Custom Software • AI Automation
    </text>

    <!-- Highlights -->
    <g transform="translate(0, 300)">
      <rect x="0" y="0" width="180" height="46" rx="12" fill="#1E293B" stroke="#334155"/>
      <text x="22" y="29" font-family="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="15" font-weight="600" fill="#F8FAFC">⚡ Fast &amp; Modern</text>

      <rect x="200" y="0" width="190" height="46" rx="12" fill="#1E293B" stroke="#334155"/>
      <text x="222" y="29" font-family="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="15" font-weight="600" fill="#F8FAFC">📈 SEO Optimized</text>

      <rect x="410" y="0" width="180" height="46" rx="12" fill="#1E293B" stroke="#334155"/>
      <text x="232" y="29" font-family="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="15" font-weight="600" fill="#F8FAFC">🤖 AI Solutions</text>
    </g>

    <text x="0" y="420" font-family="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="700" fill="#06B6D4">
      https://apextechsolution.in
    </text>
  </g>

  <!-- Right Logo Badge -->
  <g transform="translate(860, 180)">
    <rect width="240" height="240" rx="54" fill="#0F172A" stroke="#334155" stroke-width="2"/>
    <path d="M120 38 L200 188 H158 L120 114 L82 188 H40 Z" fill="url(#ogGrad)"/>
    <path d="M120 74 L158 148 H132 L120 122 L108 148 H82 Z" fill="url(#ogGrad2)"/>
    <circle cx="120" cy="96" r="9" fill="#FFFFFF"/>
  </g>
</svg>`;

async function main() {
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), iconSvg);
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), iconSvg);

  const iconBuffer = Buffer.from(iconSvg);
  await sharp(iconBuffer).resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));
  await sharp(iconBuffer).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(iconBuffer).resize(512, 512).toFile(path.join(publicDir, 'icon.png'));
  await sharp(iconBuffer).resize(512, 512).toFile(path.join(publicDir, 'logo.png'));

  const ogBuffer = Buffer.from(ogSvg);
  await sharp(ogBuffer).jpeg({ quality: 90 }).toFile(path.join(publicDir, 'og-image.jpg'));
  await sharp(ogBuffer).png().toFile(path.join(publicDir, 'og-image.png'));

  console.log('Successfully generated public assets:');
  console.log('- public/favicon.svg');
  console.log('- public/favicon.ico');
  console.log('- public/apple-touch-icon.png');
  console.log('- public/icon.png');
  console.log('- public/logo.png');
  console.log('- public/logo.svg');
  console.log('- public/og-image.jpg');
  console.log('- public/og-image.png');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
