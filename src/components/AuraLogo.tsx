import React from 'react';

interface AuraLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'full' | 'mark';
  theme?: 'light' | 'dark' | 'auto';
}

export const AuraLogo: React.FC<AuraLogoProps> = ({
  className = '',
  height = 40,
  theme = 'light',
}) => {
  const isDarkSurface = theme === 'dark';
  const darkTextColor = isDarkSurface ? '#ffffff' : '#0a0a0c';
  const darkStrokeColor = isDarkSurface ? '#e2e8f0' : '#1e293b';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 480 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height, width: 'auto', display: 'block' }}
        className="transition-transform duration-200 hover:scale-[1.02]"
        aria-label="Aura AI Automations"
      >
        <defs>
          {/* Vivid 3D Orange Gradient for AURA matching exact image */}
          <linearGradient id="auraOrangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF9800" />
            <stop offset="45%" stopColor="#FF7700" />
            <stop offset="100%" stopColor="#F55A00" />
          </linearGradient>

          {/* Crescent Moon 3D Gradient */}
          <linearGradient id={`crescentGrad-${theme}`} x1="20%" y1="0%" x2="80%" y2="100%">
            {isDarkSurface ? (
              <>
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="45%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </>
            )}
          </linearGradient>

          {/* Dark / Light Gradient for AI Letterforms */}
          <linearGradient id={`aiTextGrad-${theme}`} x1="0%" y1="0%" x2="0%" y2="100%">
            {isDarkSurface ? (
              <>
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#000000" />
              </>
            )}
          </linearGradient>

          {/* Soft 3D Drop Shadow */}
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.12" />
          </filter>
        </defs>

        <g filter="url(#logoShadow)">
          {/* ======================================================== */}
          {/* 1. "A U R A" - Stylized 3D Orange Futuristic Letterforms */}
          {/* ======================================================== */}

          {/* First "A" (Futuristic Chevron without horizontal crossbar) */}
          <path
            d="M 28 88 L 60 16 L 76 16 L 108 88 L 88 88 L 68 38 L 48 88 Z"
            fill="url(#auraOrangeGrad)"
            stroke="#d95400"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Top highlight for 3D depth */}
          <path d="M 58 17 L 78 17" stroke="#ffd080" strokeWidth="2.5" strokeLinecap="round" />

          {/* "U" (Futuristic bold curved U) */}
          <path
            d="M 116 16 L 136 16 L 136 62 C 136 74 144 80 156 80 C 168 80 176 74 176 62 L 176 16 L 196 16 L 196 62 C 196 85 180 94 156 94 C 132 94 116 85 116 62 Z"
            fill="url(#auraOrangeGrad)"
            stroke="#d95400"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* "R" (Futuristic bold R with open rounded bowl & diagonal leg) */}
          <path
            d="M 204 16 L 244 16 C 260 16 270 24 270 38 C 270 48 263 56 252 58 L 273 88 L 251 88 L 233 60 L 224 60 L 224 88 L 204 88 Z M 224 45 L 242 45 C 248 45 252 42 252 38 C 252 33 248 30 242 30 L 224 30 Z"
            fill="url(#auraOrangeGrad)"
            stroke="#d95400"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Second "A" (Matching Chevron) */}
          <path
            d="M 276 88 L 308 16 L 324 16 L 356 88 L 336 88 L 316 38 L 296 88 Z"
            fill="url(#auraOrangeGrad)"
            stroke="#d95400"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path d="M 306 17 L 326 17" stroke="#ffd080" strokeWidth="2.5" strokeLinecap="round" />

          {/* ======================================================== */}
          {/* 2. Sleek Crescent Moon Arc between AURA and AI (Black)   */}
          {/* ======================================================== */}
          <path
            d="M 346 6 C 392 24 402 78 358 108 C 386 86 382 38 354 18 Z"
            fill={`url(#crescentGrad-${theme})`}
            stroke={darkStrokeColor}
            strokeWidth="0.8"
          />

          {/* ======================================================== */}
          {/* 3. "A I" - Futuristic Black Letterforms (Chevron A + I)   */}
          {/* ======================================================== */}

          {/* "A" of AI */}
          <path
            d="M 404 88 L 432 16 L 446 16 L 474 88 L 456 88 L 439 40 L 422 88 Z"
            fill={`url(#aiTextGrad-${theme})`}
            stroke={darkStrokeColor}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* "I" of AI */}
          <path
            d="M 472 16 L 488 16 L 488 88 L 472 88 Z"
            fill={`url(#aiTextGrad-${theme})`}
            stroke={darkStrokeColor}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* ======================================================== */}
          {/* 4. "A U T O M A T I O N S" - Wide-Spaced Lettering       */}
          {/* ======================================================== */}
          <g transform="translate(76, 122)">
            <text
              x="130"
              y="0"
              textAnchor="middle"
              fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
              fontSize="19"
              fontWeight="700"
              letterSpacing="0.45em"
              fill={darkTextColor}
            >
              AUTOMATIONS
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
