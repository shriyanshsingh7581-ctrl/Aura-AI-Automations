import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Bot, PhoneCall, Code, Layers, Zap } from 'lucide-react';

interface GenEmojiAvatarProps {
  variant: 'hero' | 'standing' | 'welcoming';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showFloatingBadges?: boolean;
}

export const GenEmojiAvatar: React.FC<GenEmojiAvatarProps> = ({
  variant,
  className = '',
  size = 'lg',
  showFloatingBadges = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Hero Avatar - Futuristic 3D Tech Creator with sleek smart-glasses and cyber-pink hoodie
  if (variant === 'hero') {
    return (
      <div 
        className={`relative flex items-center justify-center select-none ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 -m-8 bg-gradient-to-tr from-pink-500/20 via-rose-400/10 to-amber-300/10 rounded-full blur-3xl -z-10 animate-pulse-subtle" />

        {/* Floating Badges for Hero */}
        {showFloatingBadges && (
          <>
            <motion.div
              animate={{ y: [-4, 6, -4], rotate: [-1, 2, -1] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute -top-4 -left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-slate-200/80 text-xs font-semibold text-slate-800 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-[#e91e63] animate-ping" />
              <span>OmniDimension AI</span>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6], rotate: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -bottom-2 -right-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-slate-200/80 text-xs font-semibold text-slate-800 backdrop-blur-md"
            >
              <Zap className="w-3.5 h-3.5 text-[#e91e63]" />
              <span>Sarvam AI Backed</span>
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 1.4 }}
              className="absolute top-1/2 -right-10 z-20 hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-medium shadow-lg"
            >
              <Sparkles className="w-3 h-3 text-pink-400" />
              <span>3D Spatial Web</span>
            </motion.div>
          </>
        )}

        {/* 3D GenEmoji Bust SVG Container */}
        <motion.div
          animate={{
            y: isHovered ? -8 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 flex items-center justify-center filter drop-shadow-[0_20px_35px_rgba(15,23,42,0.12)]"
        >
          <svg viewBox="0 0 320 320" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Gradients */}
              <linearGradient id="skinGlow" x1="160" y1="40" x2="160" y2="240" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffd8b3" />
                <stop offset="60%" stopColor="#f5b28a" />
                <stop offset="100%" stopColor="#e08e61" />
              </linearGradient>

              <radialGradient id="faceShade" cx="160" cy="140" r="85" gradientUnits="userSpaceOnUse">
                <stop offset="65%" stopColor="#ffdfc4" />
                <stop offset="90%" stopColor="#f0ab82" />
                <stop offset="100%" stopColor="#dc8e62" />
              </radialGradient>

              <linearGradient id="hoodieGrad" x1="70" y1="200" x2="250" y2="320" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              <linearGradient id="hoodieTrim" x1="100" y1="220" x2="220" y2="300" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ff4081" />
                <stop offset="100%" stopColor="#e91e63" />
              </linearGradient>

              <linearGradient id="hairGrad" x1="160" y1="30" x2="160" y2="130" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="70%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              <linearGradient id="glassesGlass" x1="110" y1="120" x2="210" y2="155" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#f472b6" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#e11d48" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
              </linearGradient>

              <radialGradient id="cheekGlow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
              </radialGradient>

              <filter id="clayShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* Background 3D Platform Disc */}
            <ellipse cx="160" cy="295" rx="100" ry="20" fill="#e2e8f0" fillOpacity="0.6" />
            <ellipse cx="160" cy="290" rx="85" ry="14" fill="#cbd5e1" fillOpacity="0.7" />

            {/* Shoulders & Hoodie Base */}
            <path
              d="M75 315 C75 255 100 230 140 226 L180 226 C220 230 245 255 245 315 Z"
              fill="url(#hoodieGrad)"
              filter="url(#clayShadow)"
            />

            {/* Hoodie Collar & Pink Accent V-Cut */}
            <path
              d="M130 226 C140 248 150 258 160 258 C170 258 180 248 190 226 C205 242 208 268 200 295 C190 310 175 318 160 318 C145 318 130 310 120 295 C112 268 115 242 130 226 Z"
              fill="#1e293b"
            />
            
            {/* Vibrant Pink Hoodie Drawstrings & Accents */}
            <path d="M142 245 Q145 275 140 300" stroke="url(#hoodieTrim)" strokeWidth="4" strokeLinecap="round" />
            <path d="M178 245 Q175 275 180 300" stroke="url(#hoodieTrim)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="140" cy="302" r="3.5" fill="#e91e63" />
            <circle cx="180" cy="302" r="3.5" fill="#e91e63" />

            {/* Neck */}
            <path d="M142 195 L142 232 C148 238 172 238 178 232 L178 195 Z" fill="#e08e61" />
            <ellipse cx="160" cy="202" rx="18" ry="6" fill="#cf7f52" />

            {/* Head Silhouette */}
            <ellipse cx="160" cy="142" rx="64" ry="70" fill="url(#faceShade)" />

            {/* Ears */}
            <g>
              <ellipse cx="94" cy="144" rx="12" ry="16" fill="#f0ab82" />
              <ellipse cx="94" cy="144" rx="6" ry="9" fill="#dc8e62" />
              <ellipse cx="226" cy="144" rx="12" ry="16" fill="#f0ab82" />
              <ellipse cx="226" cy="144" rx="6" ry="9" fill="#dc8e62" />
              {/* Modern Cyber Ear-Cuff / Mic Node */}
              <circle cx="228" cy="148" r="4.5" fill="#e91e63" />
              <circle cx="228" cy="148" r="2" fill="#ffffff" />
            </g>

            {/* Cheeks blush */}
            <circle cx="122" cy="158" r="14" fill="url(#cheekGlow)" />
            <circle cx="198" cy="158" r="14" fill="url(#cheekGlow)" />

            {/* Confident Friendly Smile */}
            <path
              d="M142 166 C147 182 173 182 178 166"
              stroke="#833216"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="#ffffff"
            />
            {/* Subtle Lip Shading */}
            <path d="M149 184 Q160 188 171 184" stroke="#c06040" strokeWidth="2.5" strokeLinecap="round" />

            {/* Nose 3D bump */}
            <path d="M157 140 C155 149 157 153 160 154 C163 153 165 149 163 140" fill="#e59871" />

            {/* Expressive Eyes Behind Smart Glasses */}
            <g>
              {/* Left Eye */}
              <ellipse cx="132" cy="132" rx="10" ry="12" fill="#ffffff" />
              <ellipse cx="134" cy="132" rx="6.5" ry="7.5" fill="#1e293b" />
              <circle cx="136" cy="130" r="2.5" fill="#ffffff" />
              <circle cx="133" cy="135" r="1" fill="#ffffff" />
              {/* Left Eyebrow */}
              <path d="M122 114 Q134 108 144 114" stroke="#1e293b" strokeWidth="4.5" strokeLinecap="round" />

              {/* Right Eye */}
              <ellipse cx="188" cy="132" rx="10" ry="12" fill="#ffffff" />
              <ellipse cx="190" cy="132" rx="6.5" ry="7.5" fill="#1e293b" />
              <circle cx="192" cy="130" r="2.5" fill="#ffffff" />
              <circle cx="189" cy="135" r="1" fill="#ffffff" />
              {/* Right Eyebrow */}
              <path d="M176 114 Q186 108 198 114" stroke="#1e293b" strokeWidth="4.5" strokeLinecap="round" />
            </g>

            {/* Modern 3D Smart Glasses (Futuristic Sleek Specs) */}
            <g filter="url(#clayShadow)">
              {/* Bridge */}
              <path d="M148 132 Q160 128 172 132" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" />
              
              {/* Left Lens Frame */}
              <rect
                x="110"
                y="114"
                width="38"
                height="34"
                rx="14"
                fill="url(#glassesGlass)"
                stroke="#e91e63"
                strokeWidth="3.5"
              />
              {/* Left Lens Specular Highlight */}
              <path d="M116 120 L132 120" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

              {/* Right Lens Frame */}
              <rect
                x="172"
                y="114"
                width="38"
                height="34"
                rx="14"
                fill="url(#glassesGlass)"
                stroke="#e91e63"
                strokeWidth="3.5"
              />
              {/* Right Lens Specular Highlight */}
              <path d="M178 120 L194 120" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

              {/* Temples */}
              <path d="M110 130 L95 133" stroke="#e91e63" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M210 130 L225 133" stroke="#e91e63" strokeWidth="3.5" strokeLinecap="round" />
            </g>

            {/* Stylish Volumetric 3D Hair */}
            <path
              d="M102 112 C96 82 118 52 160 52 C204 52 226 82 220 114 C216 102 208 92 195 90 C182 88 175 92 165 92 C152 92 144 86 130 90 C118 94 110 102 102 112 Z"
              fill="url(#hairGrad)"
            />
            {/* Hair highlight swoop */}
            <path
              d="M135 64 Q162 58 190 66"
              stroke="#64748b"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M145 74 Q165 70 185 76"
              stroke="#94a3b8"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      </div>
    );
  }

  // Standing Avatar - About Us Section (Confident tech engineer holding glowing tablet)
  if (variant === 'standing') {
    return (
      <div 
        className={`relative flex items-center justify-center select-none ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ambient subtle glow ring */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-pink-400/5 to-transparent rounded-full blur-2xl -z-10" />

        <motion.div
          animate={{
            y: isHovered ? -6 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-72 h-88 sm:w-80 sm:h-96 md:w-92 md:h-108 flex items-center justify-center filter drop-shadow-[0_20px_35px_rgba(15,23,42,0.1)]"
        >
          <svg viewBox="0 0 340 440" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="standSkin" x1="170" y1="40" x2="170" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffd8b3" />
                <stop offset="100%" stopColor="#e59871" />
              </linearGradient>
              <linearGradient id="standJacket" x1="100" y1="130" x2="240" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="standPants" x1="120" y1="270" x2="220" y2="390" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="tabletScreen" x1="180" y1="190" x2="270" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e1e2f" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <filter id="glowPink" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Base Shadow & Pedestal */}
            <ellipse cx="170" cy="416" rx="100" ry="14" fill="#e2e8f0" fillOpacity="0.8" />
            <ellipse cx="170" cy="414" rx="80" ry="10" fill="#cbd5e1" fillOpacity="0.9" />

            {/* Legs & Pants */}
            <path d="M138 270 L132 390 L158 390 L166 270 Z" fill="url(#standPants)" />
            <path d="M174 270 L182 390 L208 390 L202 270 Z" fill="url(#standPants)" />

            {/* White & Pink Designer Sneakers */}
            <path d="M120 390 C120 384 135 382 158 382 L162 400 C155 404 125 404 120 390 Z" fill="#ffffff" />
            <path d="M122 398 L160 398" stroke="#e91e63" strokeWidth="3" />
            
            <path d="M180 390 C180 384 195 382 218 382 L222 400 C215 404 185 404 180 390 Z" fill="#ffffff" />
            <path d="M182 398 L220 398" stroke="#e91e63" strokeWidth="3" />

            {/* Torso & Tech Jacket */}
            <path
              d="M125 150 C120 220 128 275 140 275 L200 275 C212 275 220 220 215 150 Z"
              fill="url(#standJacket)"
            />

            {/* Jacket Zipper & Neon Accent Line */}
            <path d="M170 155 L170 275" stroke="#e91e63" strokeWidth="3.5" />
            <circle cx="170" cy="165" r="3" fill="#ffffff" />

            {/* Left Arm (holding holographic tablet) */}
            <path d="M125 155 Q95 210 135 240 Q150 250 165 245" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
            
            {/* Right Arm (bent forward supporting tablet) */}
            <path d="M215 155 Q245 200 225 242" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />

            {/* Hands */}
            <circle cx="158" cy="246" r="10" fill="#ffd8b3" />
            <circle cx="218" cy="242" r="10" fill="#ffd8b3" />

            {/* Glowing Holographic Glass Tablet */}
            <g transform="translate(145, 205) rotate(-6)">
              <rect
                x="0"
                y="0"
                width="72"
                height="50"
                rx="6"
                fill="url(#tabletScreen)"
                stroke="#e91e63"
                strokeWidth="2.5"
                filter="url(#clayShadow)"
              />
              {/* Tablet Screen Holographic Code Lines */}
              <rect x="8" y="10" width="30" height="3" rx="1.5" fill="#e91e63" />
              <rect x="8" y="18" width="46" height="3" rx="1.5" fill="#38bdf8" />
              <rect x="8" y="26" width="38" height="3" rx="1.5" fill="#4ade80" />
              <rect x="8" y="34" width="24" height="3" rx="1.5" fill="#f43f5e" />
              {/* Screen Beam Hologram */}
              <polygon points="12,-15 60,-15 50,0 20,0" fill="#e91e63" fillOpacity="0.15" />
              <circle cx="36" cy="-14" r="3" fill="#e91e63" />
            </g>

            {/* Neck */}
            <path d="M158 130 L158 152 C164 156 176 156 182 152 L182 130 Z" fill="#e59871" />

            {/* Head */}
            <ellipse cx="170" cy="98" rx="42" ry="46" fill="url(#standSkin)" />

            {/* Ears */}
            <ellipse cx="127" cy="100" rx="8" ry="11" fill="#ffd8b3" />
            <ellipse cx="213" cy="100" rx="8" ry="11" fill="#ffd8b3" />

            {/* Hair */}
            <path
              d="M132 82 C128 58 144 38 170 38 C198 38 212 58 208 82 C204 72 195 64 186 64 C176 64 172 68 164 68 C154 68 146 62 138 66 Z"
              fill="#0f172a"
            />
            {/* Hair highlight */}
            <path d="M152 48 Q170 44 188 50" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />

            {/* Eyes */}
            <ellipse cx="154" cy="95" rx="5" ry="6.5" fill="#0f172a" />
            <circle cx="156" cy="93" r="1.8" fill="#ffffff" />
            <ellipse cx="186" cy="95" rx="5" ry="6.5" fill="#0f172a" />
            <circle cx="188" cy="93" r="1.8" fill="#ffffff" />

            {/* Eyebrows */}
            <path d="M148 83 Q155 78 162 82" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            <path d="M178 82 Q185 78 192 83" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />

            {/* Smile */}
            <path d="M160 114 Q170 124 180 114" stroke="#833216" strokeWidth="2.5" strokeLinecap="round" fill="#ffffff" />

            {/* Cheek glow */}
            <circle cx="147" cy="108" r="7" fill="#f43f5e" fillOpacity="0.25" />
            <circle cx="193" cy="108" r="7" fill="#f43f5e" fillOpacity="0.25" />
          </svg>
        </motion.div>
      </div>
    );
  }

  // Welcoming Avatar - Contact Section (Friendly AI Consultant with wireless headset & greeting wave)
  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/15 via-pink-400/10 to-amber-200/10 rounded-full blur-3xl -z-10" />

      {/* Floating Prompt Bubble */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -top-3 right-2 sm:right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 shadow-lg border border-slate-200 text-xs font-semibold text-slate-800 backdrop-blur-md"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Live Response in &lt; 2h</span>
      </motion.div>

      <motion.div
        animate={{
          y: isHovered ? -6 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 flex items-center justify-center filter drop-shadow-[0_20px_35px_rgba(15,23,42,0.12)]"
      >
        <svg viewBox="0 0 320 320" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="welSkin" x1="160" y1="50" x2="160" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffdfc4" />
              <stop offset="100%" stopColor="#e59871" />
            </linearGradient>
            <linearGradient id="blazerGrad" x1="80" y1="210" x2="240" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Pedestal */}
          <ellipse cx="160" cy="295" rx="90" ry="16" fill="#e2e8f0" fillOpacity="0.7" />

          {/* Shoulders & Modern Casual Jacket */}
          <path
            d="M80 315 C80 250 110 230 145 228 L175 228 C210 230 240 250 240 315 Z"
            fill="url(#blazerGrad)"
          />

          {/* Inner Shirt with Pink Accent V-Neck */}
          <polygon points="140,228 180,228 160,280" fill="#ffffff" />
          <polygon points="148,228 172,228 160,265" fill="#fce4ec" />
          <path d="M160 265 L160 315" stroke="#e91e63" strokeWidth="2.5" />

          {/* Waving Right Hand (Welcoming gesture) */}
          <g className="origin-[220px_230px] animate-[wave_2.5s_ease-in-out_infinite]">
            {/* Arm */}
            <path d="M225 240 Q250 215 255 180" stroke="#1e293b" strokeWidth="20" strokeLinecap="round" />
            {/* Hand palm */}
            <ellipse cx="258" cy="165" rx="13" ry="15" fill="#ffd8b3" />
            {/* Fingers waving */}
            <rect x="250" y="140" width="5.5" height="16" rx="2.5" fill="#ffd8b3" />
            <rect x="257" y="136" width="5.5" height="20" rx="2.5" fill="#ffd8b3" />
            <rect x="264" y="140" width="5.5" height="17" rx="2.5" fill="#ffd8b3" />
            <rect x="270" y="146" width="5" height="13" rx="2.5" fill="#ffd8b3" />
            {/* Thumb */}
            <rect x="244" y="156" width="6" height="12" rx="3" transform="rotate(-25 244 156)" fill="#ffd8b3" />
            {/* Sparkle near wave */}
            <circle cx="276" cy="132" r="3" fill="#e91e63" />
            <circle cx="276" cy="132" r="1.5" fill="#ffffff" />
          </g>

          {/* Neck */}
          <path d="M145 195 L145 234 C152 238 168 238 175 234 L175 195 Z" fill="#e59871" />

          {/* Head */}
          <ellipse cx="160" cy="142" rx="58" ry="64" fill="url(#welSkin)" />

          {/* Ears */}
          <ellipse cx="102" cy="144" rx="10" ry="14" fill="#ffd8b3" />
          <ellipse cx="218" cy="144" rx="10" ry="14" fill="#ffd8b3" />

          {/* Modern Wireless AI Headset with Microphone boom */}
          <g>
            {/* Headband arch */}
            <path d="M102 144 C100 70 220 70 218 144" stroke="#475569" strokeWidth="5" strokeLinecap="round" fill="none" />
            
            {/* Left Ear Cushion */}
            <rect x="94" y="132" width="12" height="26" rx="6" fill="#0f172a" />
            <circle cx="100" cy="145" r="4" fill="#e91e63" />

            {/* Right Ear Cushion */}
            <rect x="214" y="132" width="12" height="26" rx="6" fill="#0f172a" />
            <circle cx="220" cy="145" r="4" fill="#e91e63" />

            {/* Mic boom pointing to mouth */}
            <path d="M218 148 Q210 185 180 180" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <ellipse cx="178" cy="180" rx="4.5" ry="3.5" fill="#e91e63" />
            {/* Audio Waves pulse indicator */}
            <path d="M170 176 Q167 180 170 184" stroke="#e91e63" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M165 173 Q161 180 165 187" stroke="#e91e63" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
          </g>

          {/* Hair */}
          <path
            d="M108 116 C102 78 126 50 160 50 C196 50 218 78 212 116 C206 102 198 94 186 92 C176 90 170 94 160 94 C150 94 142 88 132 92 C120 96 114 105 108 116 Z"
            fill="#1e293b"
          />
          <path d="M140 65 Q164 58 185 66" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />

          {/* Eyes - Warm & Attentive */}
          <ellipse cx="138" cy="136" rx="7" ry="8.5" fill="#0f172a" />
          <circle cx="140" cy="133" r="2.5" fill="#ffffff" />
          <ellipse cx="182" cy="136" rx="7" ry="8.5" fill="#0f172a" />
          <circle cx="184" cy="133" r="2.5" fill="#ffffff" />

          {/* Eyebrows */}
          <path d="M130 120 Q138 114 148 119" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M172 119 Q182 114 190 120" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />

          {/* Warm Welcoming Smile */}
          <path
            d="M142 164 C148 182 172 182 178 164"
            stroke="#833216"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="#ffffff"
          />

          {/* Cheeks */}
          <circle cx="128" cy="154" r="10" fill="#f43f5e" fillOpacity="0.28" />
          <circle cx="192" cy="154" r="10" fill="#f43f5e" fillOpacity="0.28" />
        </svg>
      </motion.div>
    </div>
  );
};
