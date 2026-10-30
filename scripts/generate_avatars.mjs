import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/avatars');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper to generate rich 3D stylized character SVGs then convert to PNG
function createHeroSvg() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
    <defs>
      <linearGradient id="bgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#ffffff" />
      </linearGradient>
      <radialGradient id="studioLight" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="70%" stop-color="#fdfbf9" />
        <stop offset="100%" stop-color="#f5efe6" />
      </radialGradient>
      <radialGradient id="faceGrad" cx="38%" cy="32%" r="65%">
        <stop offset="0%" stop-color="#fcd8b8" />
        <stop offset="45%" stop-color="#f0b68c" />
        <stop offset="85%" stop-color="#d68d60" />
        <stop offset="100%" stop-color="#b06b43" />
      </radialGradient>
      <linearGradient id="hairGrad" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stop-color="#2d221e" />
        <stop offset="40%" stop-color="#191311" />
        <stop offset="100%" stop-color="#0d0908" />
      </linearGradient>
      <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#4a3b34" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#2a1d17" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#242838" />
        <stop offset="50%" stop-color="#141724" />
        <stop offset="100%" stop-color="#0a0c14" />
      </linearGradient>
      <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff2a6d" />
        <stop offset="60%" stop-color="#e91e63" />
        <stop offset="100%" stop-color="#b80c44" />
      </linearGradient>
      <linearGradient id="glassesFrame" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
      <linearGradient id="lensGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4" />
        <stop offset="50%" stop-color="#818cf8" stop-opacity="0.15" />
        <stop offset="100%" stop-color="#e91e63" stop-opacity="0.3" />
      </linearGradient>
      <radialGradient id="cheekGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f87171" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#f87171" stop-opacity="0" />
      </radialGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.12" />
      </filter>
      <filter id="avatarShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.18" />
      </filter>
    </defs>

    <!-- Studio White Background -->
    <rect width="800" height="800" fill="#ffffff" />
    <circle cx="400" cy="380" r="320" fill="url(#studioLight)" opacity="0.6" />

    <!-- 3D Studio Pedestal / Base Shadow -->
    <ellipse cx="400" cy="740" rx="260" ry="24" fill="#0f172a" opacity="0.08" />
    <ellipse cx="400" cy="738" rx="190" ry="16" fill="#0f172a" opacity="0.12" />

    <g filter="url(#avatarShadow)">
      <!-- Shoulders & Dark Tech Jacket -->
      <path d="M 220 540 C 250 510, 310 490, 400 490 C 490 490, 550 510, 580 540 L 640 730 C 640 750, 600 760, 400 760 C 200 760, 160 750, 160 730 Z" fill="url(#jacketGrad)" />

      <!-- Inner Crimson / Pink Tech Collar -->
      <path d="M 330 495 C 360 520, 380 540, 400 580 C 420 540, 440 520, 470 495 C 440 560, 420 620, 400 650 C 380 620, 360 560, 330 495 Z" fill="url(#hoodieGrad)" />
      
      <!-- Minimalist Inner Tee -->
      <path d="M 360 550 C 380 570, 400 580, 400 640 C 400 580, 420 570, 440 550 C 425 580, 400 610, 400 610 C 400 610, 375 580, 360 550 Z" fill="#ffffff" />

      <!-- Neck with 3D Depth Shadow -->
      <path d="M 345 420 L 345 510 C 345 530, 455 530, 455 510 L 455 420 Z" fill="#cf8659" />
      <path d="M 350 430 C 380 470, 420 470, 450 430 L 450 500 C 430 520, 370 520, 350 500 Z" fill="#be7447" opacity="0.6" />

      <!-- Ears -->
      <!-- Left Ear -->
      <ellipse cx="270" cy="360" rx="24" ry="34" fill="#e5a075" transform="rotate(-5 270 360)" />
      <ellipse cx="272" cy="360" rx="14" ry="20" fill="#c4784a" />
      <!-- Right Ear -->
      <ellipse cx="530" cy="360" rx="24" ry="34" fill="#e5a075" transform="rotate(5 530 360)" />
      <ellipse cx="528" cy="360" rx="14" ry="20" fill="#c4784a" />

      <!-- Head / Face Sculpt (Pixar 3D Geometry) -->
      <path d="M 280 320 C 280 200, 520 200, 520 320 C 520 420, 460 480, 400 480 C 340 480, 280 420, 280 320 Z" fill="url(#faceGrad)" />

      <!-- Soft Pink Cheeks -->
      <ellipse cx="325" cy="375" rx="30" ry="18" fill="url(#cheekGlow)" />
      <ellipse cx="475" cy="375" rx="30" ry="18" fill="url(#cheekGlow)" />

      <!-- Stylish Modern Hair (3D Volumetric Quiff) -->
      <path d="M 270 300 C 265 210, 310 140, 400 135 C 490 140, 535 210, 530 300 C 510 270, 480 260, 450 265 C 410 250, 350 250, 310 270 C 290 280, 275 295, 270 300 Z" fill="url(#hairGrad)" />
      <!-- Hair Top Strands & Highlights -->
      <path d="M 320 180 C 370 140, 440 140, 480 185 C 440 165, 360 165, 320 180 Z" fill="url(#hairHighlight)" />
      <path d="M 300 240 C 340 180, 430 170, 470 210 C 420 190, 350 200, 300 240 Z" fill="#3a2a22" opacity="0.6" />

      <!-- Eyebrows (Expressive & Friendly) -->
      <path d="M 315 305 C 335 295, 365 300, 375 310" stroke="#1f1613" stroke-width="8" stroke-linecap="round" fill="none" />
      <path d="M 485 305 C 465 295, 435 300, 425 310" stroke="#1f1613" stroke-width="8" stroke-linecap="round" fill="none" />

      <!-- Big Warm Pixar Eyes -->
      <!-- Left Eye Sclera -->
      <ellipse cx="345" cy="345" rx="26" ry="24" fill="#ffffff" />
      <!-- Left Iris (Warm Amber Hazel) -->
      <circle cx="347" cy="345" r="16" fill="#633918" />
      <circle cx="347" cy="345" r="14" fill="#80471c" />
      <circle cx="347" cy="345" r="8" fill="#140a04" />
      <!-- Left Catchlights -->
      <circle cx="342" cy="340" r="4.5" fill="#ffffff" />
      <circle cx="351" cy="348" r="2" fill="#ffffff" />

      <!-- Right Eye Sclera -->
      <ellipse cx="455" cy="345" rx="26" ry="24" fill="#ffffff" />
      <!-- Right Iris -->
      <circle cx="453" cy="345" r="16" fill="#633918" />
      <circle cx="453" cy="345" r="14" fill="#80471c" />
      <circle cx="453" cy="345" r="8" fill="#140a04" />
      <!-- Right Catchlights -->
      <circle cx="448" cy="340" r="4.5" fill="#ffffff" />
      <circle cx="457" cy="348" r="2" fill="#ffffff" />

      <!-- Nose (Cute 3D Sculpted) -->
      <path d="M 395 350 C 392 370, 388 385, 382 390 C 392 394, 408 394, 418 390 C 412 385, 408 370, 405 350" fill="#df9366" />
      <ellipse cx="400" cy="388" rx="14" ry="6" fill="#cb7e52" />
      <circle cx="398" cy="385" r="3" fill="#ffffff" opacity="0.4" />

      <!-- Warm Charismatic Smile -->
      <path d="M 355 418 C 375 448, 425 448, 445 418" stroke="#7c2d12" stroke-width="4.5" stroke-linecap="round" fill="none" />
      <path d="M 360 420 C 380 445, 420 445, 440 420 C 430 424, 370 424, 360 420 Z" fill="#ffffff" />
      <!-- Dimple Accents -->
      <path d="M 346 414 C 348 420, 350 424, 352 426" stroke="#b06b43" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M 454 414 C 452 420, 450 424, 448 426" stroke="#b06b43" stroke-width="3" stroke-linecap="round" fill="none" />

      <!-- Sleek Modern Tech Smart-Glasses -->
      <!-- Left Frame -->
      <rect x="305" y="320" width="80" height="52" rx="18" fill="url(#lensGlow)" stroke="#1e293b" stroke-width="6" />
      <!-- Right Frame -->
      <rect x="415" y="320" width="80" height="52" rx="18" fill="url(#lensGlow)" stroke="#1e293b" stroke-width="6" />
      <!-- Bridge -->
      <path d="M 385 338 C 395 334, 405 334, 415 338" stroke="#1e293b" stroke-width="6" stroke-linecap="round" fill="none" />
      <!-- Frame Highlights (Glossy Specular) -->
      <path d="M 315 328 L 340 328" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.7" />
      <path d="M 425 328 L 450 328" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.7" />
      <!-- Temple Arms -->
      <path d="M 305 336 L 270 338" stroke="#1e293b" stroke-width="5" stroke-linecap="round" />
      <path d="M 495 336 L 530 338" stroke="#1e293b" stroke-width="5" stroke-linecap="round" />

      <!-- Floating Cyber AI Sparkles & Badge -->
      <circle cx="560" cy="260" r="6" fill="#e91e63" />
      <circle cx="560" cy="260" r="14" fill="#e91e63" opacity="0.3" />
      <circle cx="230" cy="460" r="5" fill="#38bdf8" />
      <circle cx="230" cy="460" r="12" fill="#38bdf8" opacity="0.3" />
    </g>
  </svg>
  `;
}

function createAboutSvg() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
    <defs>
      <linearGradient id="stoolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#475569" />
        <stop offset="100%" stop-color="#1e293b" />
      </linearGradient>
      <radialGradient id="faceGradAbout" cx="38%" cy="32%" r="65%">
        <stop offset="0%" stop-color="#fcd8b8" />
        <stop offset="55%" stop-color="#f0b68c" />
        <stop offset="100%" stop-color="#b06b43" />
      </radialGradient>
      <linearGradient id="jacketAbout" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#242838" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
      <linearGradient id="pantsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#334155" />
        <stop offset="100%" stop-color="#1e293b" />
      </linearGradient>
      <filter id="softShadowAbout" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.16" />
      </filter>
    </defs>

    <rect width="800" height="800" fill="#ffffff" />
    
    <!-- Floor Shadow -->
    <ellipse cx="400" cy="740" rx="280" ry="26" fill="#0f172a" opacity="0.1" />
    <ellipse cx="400" cy="738" rx="200" ry="18" fill="#0f172a" opacity="0.14" />

    <g filter="url(#softShadowAbout)">
      <!-- Modern Minimalist Studio Stool -->
      <ellipse cx="400" cy="540" rx="90" ry="24" fill="url(#stoolGrad)" />
      <line x1="360" y1="550" x2="330" y2="730" stroke="#64748b" stroke-width="8" stroke-linecap="round" />
      <line x1="440" y1="550" x2="470" y2="730" stroke="#64748b" stroke-width="8" stroke-linecap="round" />
      <line x1="400" y1="555" x2="400" y2="730" stroke="#475569" stroke-width="8" stroke-linecap="round" />

      <!-- Sitting Legs (Dark denim tech pants) -->
      <!-- Left Leg -->
      <path d="M 340 500 C 320 540, 310 600, 300 660 L 290 690 L 330 690 L 350 630 C 360 590, 370 540, 370 500 Z" fill="url(#pantsGrad)" />
      <!-- Left White Sneaker -->
      <path d="M 280 690 C 270 690, 260 705, 260 720 C 260 735, 340 735, 340 720 C 340 705, 330 690, 310 690 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3" />
      <!-- Sneaker Sole Crimson Accent -->
      <rect x="260" y="725" width="80" height="8" rx="3" fill="#e91e63" />

      <!-- Right Crossed Leg -->
      <path d="M 430 500 C 450 540, 480 570, 510 600 L 460 640 C 430 600, 400 560, 410 500 Z" fill="url(#pantsGrad)" />
      <!-- Right Sneaker resting -->
      <path d="M 480 620 C 510 630, 520 650, 510 670 C 490 680, 450 650, 460 630 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3" />

      <!-- Torso & Dark Tech Jacket -->
      <path d="M 320 360 C 340 330, 440 330, 460 360 L 470 510 C 470 525, 310 525, 310 510 Z" fill="url(#jacketAbout)" />
      <!-- Crimson Inner Tee Accent -->
      <path d="M 370 340 L 410 340 L 415 480 L 365 480 Z" fill="#e91e63" />
      <path d="M 380 340 L 400 340 L 405 450 L 375 450 Z" fill="#ffffff" />

      <!-- Left Arm resting comfortably on knee -->
      <path d="M 320 370 C 290 410, 290 470, 330 500" stroke="#1e293b" stroke-width="32" stroke-linecap="round" fill="none" />
      <circle cx="335" cy="505" r="16" fill="#f0b68c" />

      <!-- Right Arm (Raised & Enthusiastically Waving) -->
      <path d="M 460 370 C 500 350, 530 300, 550 240" stroke="#1e293b" stroke-width="30" stroke-linecap="round" fill="none" />
      <!-- Waving Hand with friendly open fingers -->
      <g transform="translate(555, 215) rotate(15)">
        <ellipse cx="12" cy="15" rx="14" ry="18" fill="#f0b68c" />
        <rect x="0" y="-8" width="8" height="18" rx="4" fill="#f0b68c" />
        <rect x="10" y="-12" width="8" height="22" rx="4" fill="#f0b68c" />
        <rect x="20" y="-10" width="8" height="20" rx="4" fill="#f0b68c" />
        <rect x="30" y="-4" width="7" height="15" rx="3.5" fill="#f0b68c" />
        <!-- Thumb -->
        <rect x="-8" y="10" width="12" height="7" rx="3.5" fill="#f0b68c" transform="rotate(-30)" />
      </g>
      <!-- Waving Motion Arc Lines -->
      <path d="M 585 195 C 600 215, 600 235, 590 250" stroke="#e91e63" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <path d="M 600 200 C 615 220, 615 240, 605 255" stroke="#e91e63" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6" />

      <!-- Neck & Head -->
      <rect x="375" y="290" width="35" height="45" rx="10" fill="#cf8659" />
      <!-- Face -->
      <ellipse cx="390" cy="245" rx="60" ry="70" fill="url(#faceGradAbout)" />
      <!-- Hair -->
      <path d="M 330 230 C 330 160, 450 160, 450 230 C 430 200, 350 200, 330 230 Z" fill="#1f1613" />
      <path d="M 345 180 C 380 150, 430 155, 445 185 C 410 170, 370 170, 345 180 Z" fill="#3a2a22" />

      <!-- Glasses -->
      <rect x="345" y="230" width="38" height="26" rx="8" fill="#38bdf8" fill-opacity="0.2" stroke="#0f172a" stroke-width="4" />
      <rect x="395" y="230" width="38" height="26" rx="8" fill="#38bdf8" fill-opacity="0.2" stroke="#0f172a" stroke-width="4" />
      <line x1="383" y1="240" x2="395" y2="240" stroke="#0f172a" stroke-width="4" />

      <!-- Cheerful Smile -->
      <path d="M 370 280 C 382 295, 398 295, 410 280" stroke="#7c2d12" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <!-- Sparkle -->
      <circle cx="360" cy="180" r="4" fill="#e91e63" />
    </g>
  </svg>
  `;
}

function createServicesSvg() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
    <defs>
      <linearGradient id="bodyGradServ" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#242838" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
      <radialGradient id="faceGradServ" cx="38%" cy="32%" r="65%">
        <stop offset="0%" stop-color="#fcd8b8" />
        <stop offset="55%" stop-color="#f0b68c" />
        <stop offset="100%" stop-color="#b06b43" />
      </radialGradient>
      <filter id="softShadowServ" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.16" />
      </filter>
    </defs>

    <rect width="800" height="800" fill="#ffffff" />
    
    <!-- Floor Shadow -->
    <ellipse cx="370" cy="740" rx="250" ry="24" fill="#0f172a" opacity="0.1" />

    <g filter="url(#softShadowServ)">
      <!-- Standing Legs (Slim fit dark pants) -->
      <path d="M 310 460 L 300 700 L 345 700 L 360 460 Z" fill="#1e293b" />
      <path d="M 370 460 L 385 700 L 430 700 L 415 460 Z" fill="#1e293b" />
      <!-- Modern White Tech Sneakers -->
      <path d="M 285 700 C 275 700, 270 715, 270 725 C 270 735, 350 735, 350 725 C 350 715, 340 700, 325 700 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3" />
      <rect x="270" y="726" width="80" height="7" rx="3" fill="#e91e63" />
      <path d="M 370 700 C 360 700, 355 715, 355 725 C 355 735, 435 735, 435 725 C 435 715, 425 700, 410 700 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3" />
      <rect x="355" y="726" width="80" height="7" rx="3" fill="#e91e63" />

      <!-- Torso & Stylish Tech Jacket -->
      <path d="M 280 290 C 310 260, 420 260, 450 290 L 430 480 C 430 490, 300 490, 300 480 Z" fill="url(#bodyGradServ)" />
      <!-- Crimson Zipper / Inner Accent -->
      <line x1="365" y1="280" x2="365" y2="475" stroke="#e91e63" stroke-width="6" />

      <!-- Left Arm at waist/hip confidently -->
      <path d="M 290 295 C 240 340, 240 400, 290 420" stroke="#1e293b" stroke-width="28" stroke-linecap="round" fill="none" />
      <circle cx="295" cy="425" r="16" fill="#f0b68c" />

      <!-- Right Arm (Assertively Pointing Forward/Right toward Service Card) -->
      <path d="M 440 295 C 490 310, 560 320, 640 320" stroke="#1e293b" stroke-width="28" stroke-linecap="round" fill="none" />
      <!-- Pointing Hand & Extended Finger -->
      <g transform="translate(645, 310)">
        <circle cx="10" cy="10" r="15" fill="#f0b68c" />
        <!-- Index Finger Pointing -->
        <rect x="15" y="4" width="45" height="12" rx="6" fill="#f0b68c" />
        <!-- Curled other fingers -->
        <circle cx="15" cy="18" r="7" fill="#df9366" />
        <circle cx="10" cy="22" r="6" fill="#df9366" />
      </g>
      <!-- Futuristic Pointing Energy Particle / Arrow -->
      <path d="M 705 316 L 735 316 M 725 306 L 735 316 L 725 326" stroke="#e91e63" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="710" cy="316" r="10" fill="#e91e63" opacity="0.25" />

      <!-- Head & Neck -->
      <rect x="345" y="235" width="40" height="40" rx="8" fill="#cf8659" />
      <ellipse cx="365" cy="185" rx="65" ry="75" fill="url(#faceGradServ)" />
      <!-- Hair -->
      <path d="M 305 170 C 305 95, 425 95, 425 170 C 405 140, 325 140, 305 170 Z" fill="#1f1613" />
      <path d="M 320 120 C 355 90, 405 95, 420 125 C 385 110, 345 110, 320 120 Z" fill="#3a2a22" />

      <!-- Glasses -->
      <rect x="320" y="170" width="40" height="28" rx="8" fill="#38bdf8" fill-opacity="0.25" stroke="#0f172a" stroke-width="4.5" />
      <rect x="370" y="170" width="40" height="28" rx="8" fill="#38bdf8" fill-opacity="0.25" stroke="#0f172a" stroke-width="4.5" />
      <line x1="360" y1="180" x2="370" y2="180" stroke="#0f172a" stroke-width="4.5" />

      <!-- Confident Smile -->
      <path d="M 345 220 C 360 235, 375 235, 390 220" stroke="#7c2d12" stroke-width="4" stroke-linecap="round" fill="none" />
    </g>
  </svg>
  `;
}

function createProjectsSvg() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
    <defs>
      <linearGradient id="laptopBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#94a3b8" />
        <stop offset="100%" stop-color="#475569" />
      </linearGradient>
      <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#1e1b4b" />
      </linearGradient>
      <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e91e63" />
        <stop offset="100%" stop-color="#38bdf8" />
      </linearGradient>
      <radialGradient id="faceGradProj" cx="38%" cy="32%" r="65%">
        <stop offset="0%" stop-color="#fcd8b8" />
        <stop offset="55%" stop-color="#f0b68c" />
        <stop offset="100%" stop-color="#b06b43" />
      </radialGradient>
      <filter id="softShadowProj" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.16" />
      </filter>
    </defs>

    <rect width="800" height="800" fill="#ffffff" />
    
    <!-- Floor Shadow -->
    <ellipse cx="400" cy="740" rx="260" ry="24" fill="#0f172a" opacity="0.1" />

    <g filter="url(#softShadowProj)">
      <!-- Standing Lower Body -->
      <path d="M 330 460 L 320 700 L 365 700 L 380 460 Z" fill="#1e293b" />
      <path d="M 390 460 L 405 700 L 450 700 L 435 460 Z" fill="#1e293b" />
      <!-- Shoes -->
      <path d="M 305 700 C 295 700, 290 715, 290 725 C 290 735, 370 735, 370 725 C 370 715, 360 700, 345 700 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3" />
      <rect x="290" y="726" width="80" height="7" rx="3" fill="#e91e63" />
      <path d="M 390 700 C 380 700, 375 715, 375 725 C 375 735, 455 735, 455 725 C 455 715, 445 700, 430 700 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3" />
      <rect x="375" y="726" width="80" height="7" rx="3" fill="#e91e63" />

      <!-- Torso -->
      <path d="M 300 290 C 330 260, 440 260, 470 290 L 450 480 C 450 490, 320 490, 320 480 Z" fill="#0f172a" />

      <!-- Head & Neck -->
      <rect x="365" y="235" width="40" height="40" rx="8" fill="#cf8659" />
      <ellipse cx="385" cy="185" rx="65" ry="75" fill="url(#faceGradProj)" />
      <!-- Hair -->
      <path d="M 325 170 C 325 95, 445 95, 445 170 C 425 140, 345 140, 325 170 Z" fill="#1f1613" />
      <path d="M 340 120 C 375 90, 425 95, 440 125 C 405 110, 365 110, 340 120 Z" fill="#3a2a22" />

      <!-- Smart Glasses with Holographic Reflection -->
      <rect x="340" y="170" width="40" height="28" rx="8" fill="#38bdf8" fill-opacity="0.3" stroke="#0f172a" stroke-width="4.5" />
      <rect x="390" y="170" width="40" height="28" rx="8" fill="#38bdf8" fill-opacity="0.3" stroke="#0f172a" stroke-width="4.5" />
      <line x1="380" y1="180" x2="390" y2="180" stroke="#0f172a" stroke-width="4.5" />

      <!-- Proud Smile -->
      <path d="M 365 220 C 380 235, 395 235, 410 220" stroke="#7c2d12" stroke-width="4" stroke-linecap="round" fill="none" />

      <!-- Arms Holding Sleek Open Laptop -->
      <!-- Left Arm holding base -->
      <path d="M 310 300 C 270 360, 280 430, 350 430" stroke="#1e293b" stroke-width="26" stroke-linecap="round" fill="none" />
      <!-- Right Arm supporting laptop -->
      <path d="M 460 300 C 500 360, 490 430, 420 430" stroke="#1e293b" stroke-width="26" stroke-linecap="round" fill="none" />

      <!-- 3D Open Metallic Laptop -->
      <!-- Laptop Base -->
      <polygon points="280,440 490,440 470,470 300,470" fill="url(#laptopBody)" stroke="#334155" stroke-width="2" />
      <!-- Laptop Keyboard Area -->
      <polygon points="295,445 475,445 460,465 310,465" fill="#1e293b" />
      <!-- Trackpad -->
      <rect x="365" y="458" width="40" height="8" rx="2" fill="#475569" />

      <!-- Laptop Open Screen (Angled Upward) -->
      <polygon points="290,340 480,340 490,440 280,440" fill="url(#laptopScreen)" stroke="#475569" stroke-width="3" />
      
      <!-- Glowing Holographic Screen Interface (Riya.ai & Voice Code) -->
      <polygon points="302,348 468,348 478,432 292,432" fill="#090d16" />
      <!-- Glowing Code lines & Waveform -->
      <line x1="315" y1="365" x2="370" y2="365" stroke="#e91e63" stroke-width="4" stroke-linecap="round" />
      <line x1="380" y1="365" x2="440" y2="365" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" />
      <line x1="315" y1="380" x2="420" y2="380" stroke="#a855f7" stroke-width="3" stroke-linecap="round" />
      <line x1="315" y1="395" x2="360" y2="395" stroke="#22c55e" stroke-width="3" stroke-linecap="round" />
      <line x1="370" y1="395" x2="450" y2="395" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />
      <!-- Mini audio waveform on screen -->
      <path d="M 315 415 Q 330 405 345 415 T 375 415 T 405 415 T 435 415 T 455 415" stroke="#e91e63" stroke-width="3" fill="none" />

      <!-- Hands Holding Sides of Laptop -->
      <circle cx="285" cy="445" r="14" fill="#f0b68c" />
      <circle cx="485" cy="445" r="14" fill="#f0b68c" />

      <!-- Holographic Glow Beams radiating upward from laptop -->
      <polygon points="310,340 460,340 490,270 280,270" fill="url(#screenGlow)" opacity="0.12" />
    </g>
  </svg>
  `;
}

function createSkillsSvg() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
    <defs>
      <radialGradient id="faceGradSkill" cx="38%" cy="32%" r="65%">
        <stop offset="0%" stop-color="#fcd8b8" />
        <stop offset="55%" stop-color="#f0b68c" />
        <stop offset="100%" stop-color="#b06b43" />
      </radialGradient>
      <filter id="softShadowSkill" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.16" />
      </filter>
    </defs>

    <rect width="800" height="800" fill="#ffffff" />
    
    <!-- Floor Shadow -->
    <ellipse cx="400" cy="740" rx="260" ry="24" fill="#0f172a" opacity="0.1" />

    <g filter="url(#softShadowSkill)">
      <!-- Standing Legs (Slim fit dark pants) -->
      <path d="M 330 460 L 320 700 L 365 700 L 380 460 Z" fill="#1e293b" />
      <path d="M 390 460 L 405 700 L 450 700 L 435 460 Z" fill="#1e293b" />
      <!-- White Sneakers -->
      <path d="M 305 700 C 295 700, 290 715, 290 725 C 290 735, 370 735, 370 725 C 370 715, 360 700, 345 700 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3" />
      <rect x="290" y="726" width="80" height="7" rx="3" fill="#e91e63" />
      <path d="M 390 700 C 380 700, 375 715, 375 725 C 375 735, 455 735, 455 725 C 455 715, 445 700, 430 700 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3" />
      <rect x="375" y="726" width="80" height="7" rx="3" fill="#e91e63" />

      <!-- Torso with Modern Charcoal Tech Jacket -->
      <path d="M 290 280 C 320 250, 450 250, 480 280 L 460 480 C 460 490, 310 490, 310 480 Z" fill="#0f172a" />
      <!-- Red Collar Trim -->
      <path d="M 360 260 L 410 260 L 400 340 L 370 340 Z" fill="#e91e63" />

      <!-- Confident Folded Arms Pose (Signature Tech Leader Stance) -->
      <!-- Left Forearm folded across -->
      <path d="M 300 300 C 260 360, 280 410, 370 410 L 440 410" stroke="#1e293b" stroke-width="32" stroke-linecap="round" fill="none" />
      <!-- Right Forearm tucked over left -->
      <path d="M 470 300 C 510 360, 490 410, 400 410 L 330 410" stroke="#1e293b" stroke-width="30" stroke-linecap="round" fill="none" />
      <!-- Hands resting comfortably under elbows -->
      <circle cx="340" cy="405" r="15" fill="#f0b68c" />
      <circle cx="430" cy="405" r="15" fill="#f0b68c" />

      <!-- Head & Neck -->
      <rect x="365" y="225" width="40" height="40" rx="8" fill="#cf8659" />
      <ellipse cx="385" cy="175" rx="65" ry="75" fill="url(#faceGradSkill)" />
      <!-- Hair -->
      <path d="M 325 160 C 325 85, 445 85, 445 160 C 425 130, 345 130, 325 160 Z" fill="#1f1613" />
      <path d="M 340 110 C 375 80, 425 85, 440 115 C 405 100, 365 100, 340 110 Z" fill="#3a2a22" />

      <!-- Glasses -->
      <rect x="340" y="160" width="40" height="28" rx="8" fill="#38bdf8" fill-opacity="0.25" stroke="#0f172a" stroke-width="4.5" />
      <rect x="390" y="160" width="40" height="28" rx="8" fill="#38bdf8" fill-opacity="0.25" stroke="#0f172a" stroke-width="4.5" />
      <line x1="380" y1="170" x2="390" y2="170" stroke="#0f172a" stroke-width="4.5" />

      <!-- Confident Smirk / Smile -->
      <path d="M 365 210 C 380 225, 395 225, 410 210" stroke="#7c2d12" stroke-width="4" stroke-linecap="round" fill="none" />

      <!-- Floating Tech Badges around character -->
      <circle cx="270" cy="240" r="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
      <text x="270" y="244" font-size="11" font-family="monospace" font-weight="bold" fill="#e91e63" text-anchor="middle">AI</text>

      <circle cx="500" cy="240" r="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
      <text x="500" y="244" font-size="10" font-family="monospace" font-weight="bold" fill="#0284c7" text-anchor="middle">3D</text>
    </g>
  </svg>
  `;
}

function createContactSvg() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
    <defs>
      <radialGradient id="faceGradContact" cx="38%" cy="32%" r="65%">
        <stop offset="0%" stop-color="#fcd8b8" />
        <stop offset="55%" stop-color="#f0b68c" />
        <stop offset="100%" stop-color="#b06b43" />
      </radialGradient>
      <filter id="softShadowContact" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.16" />
      </filter>
    </defs>

    <rect width="800" height="800" fill="#ffffff" />
    
    <!-- Floor Shadow -->
    <ellipse cx="400" cy="740" rx="260" ry="24" fill="#0f172a" opacity="0.1" />

    <g filter="url(#softShadowContact)">
      <!-- Standing Lower Body -->
      <path d="M 330 460 L 320 700 L 365 700 L 380 460 Z" fill="#1e293b" />
      <path d="M 390 460 L 405 700 L 450 700 L 435 460 Z" fill="#1e293b" />
      <!-- Sneakers -->
      <path d="M 305 700 C 295 700, 290 715, 290 725 C 290 735, 370 735, 370 725 C 370 715, 360 700, 345 700 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3" />
      <rect x="290" y="726" width="80" height="7" rx="3" fill="#e91e63" />
      <path d="M 390 700 C 380 700, 375 715, 375 725 C 375 735, 455 735, 455 725 C 455 715, 445 700, 430 700 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3" />
      <rect x="375" y="726" width="80" height="7" rx="3" fill="#e91e63" />

      <!-- Torso -->
      <path d="M 300 290 C 330 260, 440 260, 470 290 L 450 480 C 450 490, 320 490, 320 480 Z" fill="#0f172a" />
      <!-- Inner Pink Tee Accent -->
      <path d="M 365 270 L 405 270 L 395 380 L 375 380 Z" fill="#e91e63" />

      <!-- Left Arm (Holding Smartphone near ear / chest to take call) -->
      <path d="M 310 300 C 260 340, 270 410, 320 370 L 335 340" stroke="#1e293b" stroke-width="26" stroke-linecap="round" fill="none" />
      <!-- Hand holding Smartphone -->
      <g transform="translate(320, 310)">
        <!-- Smartphone (Sleek dark glass with glowing screen) -->
        <rect x="-10" y="-20" width="30" height="52" rx="6" fill="#020617" stroke="#475569" stroke-width="2" transform="rotate(-15)" />
        <rect x="-7" y="-16" width="24" height="44" rx="4" fill="#0284c7" fill-opacity="0.8" transform="rotate(-15)" />
        <!-- Call Screen Waveform / Green Answer Button -->
        <circle cx="5" cy="18" r="4" fill="#22c55e" />
        <!-- Fingers holding edges -->
        <circle cx="-12" cy="-2" r="5" fill="#f0b68c" />
        <circle cx="-10" cy="8" r="5" fill="#f0b68c" />
        <circle cx="-8" cy="18" r="5" fill="#f0b68c" />
      </g>
      <!-- Sound waves radiating from phone -->
      <path d="M 310 280 C 295 290, 295 310, 305 320" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" fill="none" />

      <!-- Right Arm (Raised & Enthusiastically Waving to Contact!) -->
      <path d="M 460 300 C 510 280, 540 230, 560 170" stroke="#1e293b" stroke-width="28" stroke-linecap="round" fill="none" />
      <!-- Waving Hand -->
      <g transform="translate(565, 145) rotate(20)">
        <ellipse cx="14" cy="16" rx="15" ry="18" fill="#f0b68c" />
        <rect x="0" y="-8" width="9" height="18" rx="4.5" fill="#f0b68c" />
        <rect x="11" y="-12" width="9" height="22" rx="4.5" fill="#f0b68c" />
        <rect x="22" y="-10" width="9" height="20" rx="4.5" fill="#f0b68c" />
        <rect x="33" y="-4" width="8" height="15" rx="4" fill="#f0b68c" />
        <rect x="-8" y="10" width="12" height="8" rx="4" fill="#f0b68c" transform="rotate(-30)" />
      </g>
      <!-- Waving dynamic ripples -->
      <path d="M 600 120 C 615 140, 615 160, 605 180" stroke="#e91e63" stroke-width="3.5" stroke-linecap="round" fill="none" />
      <path d="M 615 125 C 630 145, 630 165, 620 185" stroke="#e91e63" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6" />

      <!-- Head & Neck -->
      <rect x="365" y="225" width="40" height="40" rx="8" fill="#cf8659" />
      <ellipse cx="385" cy="175" rx="65" ry="75" fill="url(#faceGradContact)" />
      <!-- Hair -->
      <path d="M 325 160 C 325 85, 445 85, 445 160 C 425 130, 345 130, 325 160 Z" fill="#1f1613" />
      <path d="M 340 110 C 375 80, 425 85, 440 115 C 405 100, 365 100, 340 110 Z" fill="#3a2a22" />

      <!-- Glasses -->
      <rect x="340" y="160" width="40" height="28" rx="8" fill="#38bdf8" fill-opacity="0.25" stroke="#0f172a" stroke-width="4.5" />
      <rect x="390" y="160" width="40" height="28" rx="8" fill="#38bdf8" fill-opacity="0.25" stroke="#0f172a" stroke-width="4.5" />
      <line x1="380" y1="170" x2="390" y2="170" stroke="#0f172a" stroke-width="4.5" />

      <!-- Friendly Open Smile -->
      <path d="M 360 210 C 375 230, 400 230, 415 210" stroke="#7c2d12" stroke-width="4" stroke-linecap="round" fill="none" />
      <path d="M 365 212 C 380 226, 395 226, 410 212 Z" fill="#ffffff" />
    </g>
  </svg>
  `;
}

async function generateAll() {
  const avatars = [
    { name: 'avatar-hero.png', svg: createHeroSvg() },
    { name: 'avatar-about.png', svg: createAboutSvg() },
    { name: 'avatar-services.png', svg: createServicesSvg() },
    { name: 'avatar-projects.png', svg: createProjectsSvg() },
    { name: 'avatar-skills.png', svg: createSkillsSvg() },
    { name: 'avatar-contact.png', svg: createContactSvg() },
  ];

  for (const item of avatars) {
    const dest = path.join(outDir, item.name);
    console.log(`Rendering ${item.name}...`);
    await sharp(Buffer.from(item.svg))
      .resize(800, 800)
      .png({ quality: 95, compressionLevel: 8 })
      .toFile(dest);
    console.log(`Saved ${dest} (${fs.statSync(dest).size} bytes)`);
  }
}

generateAll().catch(err => {
  console.error('Error generating avatars:', err);
  process.exit(1);
});
