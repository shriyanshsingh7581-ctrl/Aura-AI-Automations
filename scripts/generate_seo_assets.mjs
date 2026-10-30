import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const avatarsDir = path.join(publicDir, 'avatars');

async function convertAvatarsToModernFormats() {
  const files = [
    'avatar-hero.png',
    'avatar-about.png',
    'avatar-services.png',
    'avatar-projects.png',
    'avatar-skills.png',
    'avatar-contact.png',
  ];

  for (const file of files) {
    const inputPath = path.join(avatarsDir, file);
    if (!fs.existsSync(inputPath)) continue;

    const baseName = file.replace(/\.png$/, '');
    const webpPath = path.join(avatarsDir, `${baseName}.webp`);
    const avifPath = path.join(avatarsDir, `${baseName}.avif`);

    await sharp(inputPath)
      .webp({ quality: 84, effort: 5 })
      .toFile(webpPath);

    await sharp(inputPath)
      .avif({ quality: 72, effort: 4 })
      .toFile(avifPath);

    console.log(`Generated ${baseName}.webp and ${baseName}.avif`);
  }
}

async function generateOgImage() {
  const ogSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#faf9f6" />
        <stop offset="60%" stop-color="#fff5f7" />
        <stop offset="100%" stop-color="#ffe4e9" />
      </linearGradient>
      <linearGradient id="crimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e91e63" />
        <stop offset="100%" stop-color="#d90429" />
      </linearGradient>
      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FF9800" />
        <stop offset="100%" stop-color="#F55A00" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bgGrad)" />

    <!-- Subtle Decorative Grid / Circles -->
    <circle cx="1050" cy="120" r="240" fill="#e91e63" opacity="0.06" />
    <circle cx="150" cy="550" r="220" fill="#ff7a00" opacity="0.06" />

    <!-- Top Border Accent -->
    <rect x="0" y="0" width="1200" height="10" fill="url(#crimsonGrad)" />

    <!-- Main Card Frame -->
    <rect x="60" y="54" width="1080" height="522" rx="32" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />

    <!-- Badge -->
    <rect x="110" y="102" width="410" height="42" rx="21" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
    <circle cx="136" cy="123" r="6" fill="#e91e63" />
    <text x="154" y="129" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#e91e63" letter-spacing="0.06em">
      AURA AI AUTOMATIONS • INDIA
    </text>

    <!-- Headline -->
    <text x="110" y="215" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="800" fill="#0f172a">
      AI Receptionist &amp;
    </text>
    <text x="110" y="285" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="800" fill="#e91e63">
      Business Automation
    </text>

    <!-- Description -->
    <text x="110" y="348" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="#475569">
      24/7 AI Voice Calling Agents, WhatsApp Chatbots, Lead
    </text>
    <text x="110" y="384" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="#475569">
      Generation &amp; Workflow Automation for Indian Businesses.
    </text>

    <!-- Service Pills -->
    <rect x="110" y="430" width="220" height="44" rx="22" fill="#0f172a" />
    <text x="220" y="458" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">
      AI Receptionist
    </text>

    <rect x="346" y="430" width="220" height="44" rx="22" fill="#e91e63" />
    <text x="456" y="458" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">
      AI Voice Agents
    </text>

    <rect x="582" y="430" width="250" height="44" rx="22" fill="#0f172a" />
    <text x="707" y="458" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">
      WhatsApp AI Chatbots
    </text>

    <!-- Domain Footer -->
    <text x="110" y="530" font-family="monospace" font-size="20" font-weight="700" fill="#64748b">
      www.auraaiautomation.online
    </text>

    <!-- Right Accent Visual Panel -->
    <rect x="880" y="102" width="210" height="426" rx="24" fill="#faf9f6" stroke="#e2e8f0" stroke-width="1.5" />
    <circle cx="985" cy="245" r="72" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" />
    <text x="985" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="url(#orangeGrad)" text-anchor="middle">
      AURA
    </text>
    <text x="985" y="272" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" fill="#0f172a" text-anchor="middle">
      AI
    </text>
    <rect x="905" y="355" width="160" height="36" rx="18" fill="#ecfdf5" />
    <text x="985" y="378" font-family="monospace" font-size="14" font-weight="700" fill="#059669" text-anchor="middle">
      &lt; 480ms Latency
    </text>
    <rect x="905" y="405" width="160" height="36" rx="18" fill="#fff1f2" />
    <text x="985" y="428" font-family="monospace" font-size="14" font-weight="700" fill="#e91e63" text-anchor="middle">
      24/7 Support
    </text>
    <rect x="905" y="455" width="160" height="36" rx="18" fill="#f1f5f9" />
    <text x="985" y="478" font-family="monospace" font-size="14" font-weight="700" fill="#334155" text-anchor="middle">
      Sarvam AI Backed
    </text>
  </svg>
  `;

  const ogPngPath = path.join(publicDir, 'og-image.png');
  const ogWebpPath = path.join(publicDir, 'og-image.webp');

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png({ quality: 92, compressionLevel: 8 })
    .toFile(ogPngPath);

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .webp({ quality: 88 })
    .toFile(ogWebpPath);

  console.log('Generated public/og-image.png and public/og-image.webp');
}

async function run() {
  await convertAvatarsToModernFormats();
  await generateOgImage();
}

run().catch((err) => {
  console.error('Error generating SEO assets:', err);
  process.exit(1);
});
