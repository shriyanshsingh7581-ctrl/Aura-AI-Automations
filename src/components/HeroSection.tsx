import React from 'react';
import { motion } from 'motion/react';
import { GenEmojiAvatar } from './GenEmojiAvatar';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking?: () => void;
  onExploreOriginals?: () => void;
  onTestVoiceAgent?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const redPillTags = [
    '// AI VOICE RECEPTIONISTS',
    '// SARVAM AI STARTUP PROGRAM',
    '// 3D SPATIAL WEBSITES',
    '// REPLICATE GPU INFERENCE',
    '// KODULAR MOBILE APPS',
    '// OMNIDIMENSION ENGINE',
    '// AUTONOMOUS AGENTS',
  ];

  const blackPillTags = [
    '// REACT & TYPESCRIPT',
    '// SELF-HOSTED N8N',
    '// FIREBASE REALTIME DB',
    '// FULL-STACK DEVELOPMENT',
    '// GOOGLE CLOUD PLATFORM',
    '// VERCEL EDGE RUNTIME',
    '// MULTILINGUAL LLMS',
  ];

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-[#faf9f6]">
      
      {/* Large Subtle Background Marquee Typography from Video */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.045] z-0"
      >
        <div className="flex w-max animate-marquee-left text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black tracking-tighter uppercase font-display text-slate-900">
          {['AURA AI AUTOMATIONS', '3D WEBSITES', 'VOICE AGENTS', 'SARVAM AI', 'SCALABLE CODE', 'AURA AI AUTOMATIONS', '3D WEBSITES', 'VOICE AGENTS'].map((word, idx) => (
            <span key={idx} className="mx-6 flex items-center">
              <span>{word}</span>
              <span className="mx-6 text-[#e91e63]">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Sarvam AI Kicker Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-pink-200/90 shadow-2xs mb-6 text-xs font-semibold text-slate-800"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e91e63] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e91e63]"></span>
          </span>
          <span className="text-slate-600">Backed by the</span>
          <span className="font-bold text-[#e91e63]">Sarvam AI Startup Program</span>
        </motion.div>

        {/* Central Visual: Big 3D GenEmoji Avatar (Face of the Portfolio as in Video) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 relative"
        >
          <GenEmojiAvatar variant="hero" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 mb-4 leading-[1.05]"
          style={{ textWrap: 'balance' }}
        >
          Aura AI Automations
        </motion.h1>

        {/* Sub-headline / Bio Paragraph from Video */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-8"
          style={{ textWrap: 'balance' }}
        >
          Engineering robust full-stack web solutions, scalable microservices, and AI-driven platforms with clean architecture and modern tools.
        </motion.p>

        {/* Single Prominent Button: Create Voice Calling Agent (Direct to app.auraai.sbs) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center w-full mb-12 space-y-2"
        >
          <a
            href="https://app.auraai.sbs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#e91e63] hover:bg-[#d81557] active:scale-98 rounded-full transition-all shadow-[0_12px_28px_rgba(233,30,99,0.36)] hover:shadow-[0_16px_36px_rgba(233,30,99,0.48)] cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Create Voice Calling Agent</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <span className="text-[11px] text-slate-400 font-medium">
            Launch platform on <span className="text-slate-600 font-bold font-mono">app.auraai.sbs</span>
          </span>
        </motion.div>

        {/* Dynamic Horizontal Scrolling Pill Tags (Exact Video Match with Red & Black Pills) */}
        <div className="w-full overflow-hidden pt-2 pb-1 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#faf9f6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#faf9f6] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Vibrant Red/Pink Pills */}
          <div className="flex animate-marquee-left py-1 select-none">
            {[...redPillTags, ...redPillTags].map((tag, i) => (
              <div
                key={i}
                className="mx-1.5 shrink-0 px-4 py-2 rounded-full bg-[#e91e63] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs hover:bg-[#d81557] transition-colors"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sleek Black Pills */}
        <div className="w-full overflow-hidden pb-3 relative mt-1.5">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#faf9f6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#faf9f6] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-right py-1 select-none">
            {[...blackPillTags, ...blackPillTags].map((tag, i) => (
              <div
                key={i}
                className="mx-1.5 shrink-0 px-4 py-2 rounded-full bg-slate-900 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs hover:bg-slate-800 transition-colors"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
