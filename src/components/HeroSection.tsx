import React from 'react';
import { motion } from 'motion/react';
import { GenEmojiAvatar } from './GenEmojiAvatar';
import { ArrowUpRight, Sparkles, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking?: () => void;
  onExploreOriginals?: () => void;
  onTestVoiceAgent?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const backgroundMarqueeWords = [
    'AURA AI',
    '3D WEBSITES',
    'VOICE AGENTS',
    'AUTOMATED WORKFLOWS',
    'SARVAM AI',
    'OMNIDIMENSION',
    'SCALABLE CLOUD',
    'FULL-STACK SYSTEMS',
  ];

  const expertisePillTags = [
    'React',
    'AI Voice Receptionists',
    '3D Websites',
    'Full-Stack Development',
    'OmniDimension AI',
    'Sarvam AI',
    'Replicate ML',
    'Google Cloud Platform',
    'Vercel Edge',
    'Self-Hosted n8n',
    'Firebase Realtime',
    'TypeScript & Next.js',
    'Autonomous Workflows',
  ];

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      
      {/* 1. Large Subtle Background Marquee Scrolling Infinitely */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.04] dark:opacity-[0.06] z-0"
      >
        <div className="flex w-max animate-marquee-left text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black tracking-tighter uppercase font-display text-slate-900">
          {[...backgroundMarqueeWords, ...backgroundMarqueeWords].map((word, idx) => (
            <span key={idx} className="mx-6 flex items-center">
              <span>{word}</span>
              <span className="mx-6 text-pink-500">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Sarvam AI Backed Trust Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200/60 shadow-xs mb-8 text-xs font-semibold text-slate-800 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e91e63] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e91e63]"></span>
          </span>
          <span className="text-slate-600">Backed by the</span>
          <span className="font-bold text-[#e91e63]">Sarvam AI Startup Program</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 hidden sm:inline">Engineering High-Performance AI</span>
        </motion.div>

        {/* Central Visual: Large 3D Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8"
        >
          <GenEmojiAvatar variant="hero" />
        </motion.div>

        {/* Headline: Aura AI Automations in bold, modern font */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 mb-5"
          style={{ textWrap: 'balance' }}
        >
          Aura AI Automations
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed mb-10"
          style={{ textWrap: 'balance' }}
        >
          Turning ideas into scalable code & automated AI systems.
        </motion.p>

        {/* Single Primary Action Button: Create Voice Calling Agent -> app.auraai.sbs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center w-full mb-14"
        >
          <a
            href="https://app.auraai.sbs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#e91e63] via-[#f43f5e] to-[#e11d48] hover:opacity-95 active:scale-98 rounded-full transition-all shadow-[0_12px_32px_rgba(233,30,99,0.38)] hover:shadow-[0_16px_40px_rgba(233,30,99,0.48)] cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span>Create Voice Calling Agent</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Dynamic Element: Auto-scrolling pill-shaped tags showing expertise */}
        <div className="w-full overflow-hidden pt-4 pb-2 relative">
          {/* Subtle fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#faf9f6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#faf9f6] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-left py-1 select-none">
            {[...expertisePillTags, ...expertisePillTags].map((tag, i) => (
              <div
                key={i}
                className="mx-2 shrink-0 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-xs font-medium text-slate-700 hover:text-slate-950 hover:border-pink-300 hover:shadow-md transition-all flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#e91e63]" />
                <span className="whitespace-nowrap">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second reverse scrolling tag line for layered dynamism */}
        <div className="w-full overflow-hidden pb-4 relative mt-2">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#faf9f6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#faf9f6] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-right py-1 select-none">
            {[...expertisePillTags.reverse(), ...expertisePillTags].map((tag, i) => (
              <div
                key={i}
                className="mx-2 shrink-0 px-4 py-2 rounded-full bg-slate-900 text-white shadow-xs text-xs font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors"
              >
                <Zap className="w-3 h-3 text-pink-400" />
                <span className="whitespace-nowrap">{tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
