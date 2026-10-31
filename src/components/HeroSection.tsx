import React from 'react';
import { motion } from 'motion/react';
import { AvatarDisplay } from './AvatarDisplay';
import { ArrowUpRight, ArrowRight, Sparkles, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking?: () => void;
  onExploreOriginals?: () => void;
  onTestVoiceAgent?: () => void;
  onNavigate?: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
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

  const handleInternalClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (
      !onNavigate ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }
    e.preventDefault();
    onNavigate(href);
  };

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

        {/* Central Visual: 3D Avatar Hero Portrait with Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 relative flex items-center justify-center"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 -m-8 bg-gradient-to-tr from-pink-500/20 via-rose-400/10 to-amber-300/10 rounded-full blur-3xl -z-10 animate-pulse-subtle" />

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [-4, 6, -4], rotate: [-1, 2, -1] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="absolute -top-3 -left-10 sm:-left-16 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-slate-200/80 text-xs font-semibold text-slate-800 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-[#e91e63] animate-ping" />
            <span>OmniDimension AI</span>
          </motion.div>

          <motion.div
            animate={{ y: [6, -6, 6], rotate: [2, -2, 2] }}
            transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 0.8 }}
            className="absolute -bottom-2 -right-10 sm:-right-16 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-slate-200/80 text-xs font-semibold text-slate-800 backdrop-blur-md"
          >
            <Zap className="w-3.5 h-3.5 text-[#e91e63]" />
            <span>Sarvam AI Backed</span>
          </motion.div>

          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 1.4 }}
            className="absolute top-1/2 -right-12 sm:-right-20 z-20 hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-medium shadow-lg"
          >
            <Sparkles className="w-3 h-3 text-pink-400" />
            <span>3D Spatial Web</span>
          </motion.div>

          {/* 3D Avatar Hero Portrait */}
          <AvatarDisplay
            src="/avatars/avatar-hero.png"
            alt="Aura AI Automations Founder & AI Engineer"
            size="lg"
            priority={true}
            className="py-1"
          />
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

        {/* Prominent Hero CTAs: Platform Builder & Crawlable Internal Link to AI Receptionist */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full mb-3"
        >
          <a
            href="https://app.auraai.sbs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#e91e63] hover:bg-[#d81557] active:scale-98 rounded-full transition-all shadow-[0_12px_28px_rgba(233,30,99,0.36)] hover:shadow-[0_16px_36px_rgba(233,30,99,0.48)] cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Create Voice Calling Agent</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="/ai-receptionist"
            onClick={(e) => handleInternalClick(e, '/ai-receptionist')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold tracking-tight text-slate-900 bg-white hover:bg-slate-50 hover:text-[#e91e63] active:scale-98 rounded-full border border-slate-300/90 hover:border-[#e91e63]/40 transition-all shadow-xs cursor-pointer group"
          >
            <span>Explore Our AI Receptionist</span>
            <ArrowRight className="w-4 h-4 text-[#e91e63] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
        <span className="text-[11px] text-slate-400 font-medium mb-12 text-center">
          Automate calls 24/7 or launch builder on <span className="text-slate-600 font-bold font-mono">app.auraai.sbs</span>
        </span>

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
