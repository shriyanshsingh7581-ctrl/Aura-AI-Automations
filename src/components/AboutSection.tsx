import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GenEmojiAvatar } from './GenEmojiAvatar';
import { 
  Award, 
  ArrowUpRight, 
  Zap, 
  ShieldCheck, 
  Mic, 
  Layers, 
  Workflow, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Globe2 
} from 'lucide-react';
import { SOCIAL_LINKS, SocialIcon } from './SocialLinks';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onOpenBooking?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      id: 'voice',
      icon: Mic,
      title: 'Autonomous Voice Intelligence',
      badge: 'OmniDimension + Sarvam',
      short: 'Zero-latency conversational telephone agents that handle customer inquiries and bookings with human-like warmth.',
      details: 'We engineer custom WebRTC and SIP telephone gateways connecting incoming calls directly to Sarvam AI multilingual LLMs and OmniDimension engines, maintaining latency under 480ms.',
      stat: '< 480ms Latency',
    },
    {
      id: 'workflows',
      icon: Workflow,
      title: 'Self-Hosted Automation Pipelines',
      badge: 'n8n & Firebase Realtime',
      short: 'Complex, mission-critical workflow engines running on self-hosted infrastructure without per-task SaaS subscription taxes.',
      details: 'Containerized n8n clusters deployed with automated failover, bidirectional CRM synchronization, and instant multi-channel webhook dispatching to WhatsApp, Slack, and Twilio.',
      stat: '180k+ Tasks / Day',
    },
    {
      id: 'spatial',
      icon: Layers,
      title: '3D Spatial & Modern Web',
      badge: 'React & Three.js',
      short: 'Immersive, ultra-high-performance web flagships engineered with modern physics and interactive 3D avatars.',
      details: 'We transform traditional static corporate websites into living 3D experiences that stop visitors in their tracks, driving industry-leading conversion and dwell times.',
      stat: '3.4x Conversion',
    },
    {
      id: 'cloud',
      icon: Cpu,
      title: 'Scale-To-Zero Cloud Architecture',
      badge: 'GCP + Vercel + Replicate',
      short: 'Production-ready microservices and serverless ML inference built to handle burst traffic with zero overhead.',
      details: 'Engineered on Google Cloud Run, Vercel Edge Runtime, and Replicate GPU inference endpoints, auto-scaling instantly from idle to hundreds of parallel requests.',
      stat: '99.98% Reliability',
    },
  ];

  const agencyStats = [
    { number: '85,000+', label: 'Active End Users', sublabel: 'Served across deployed apps' },
    { number: '< 480ms', label: 'Voice Streaming Latency', sublabel: 'Sub-second natural conversation' },
    { number: '340+ hrs', label: 'Saved Weekly / Client', sublabel: 'Automating manual operations' },
    { number: '99.98%', label: 'Production Uptime SLA', sublabel: 'Self-healing cloud clusters' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-200/90 relative overflow-hidden">
      
      {/* Decorative ambient background accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-10 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Company Introduction */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 mb-3 text-xs font-bold text-[#e91e63] font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#e91e63]" />
            <span>01 // COMPANY INTRODUCTION & MISSION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-4">
            We engineer autonomous systems that <span className="font-script text-[#e91e63] font-bold text-4xl sm:text-5xl md:text-6xl block sm:inline">turn ideas into scalable code.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Aura AI Automations is a specialized engineering agency building autonomous AI voice agents, self-hosted workflow engines, and interactive web flagships. Backed by the <strong className="text-slate-900 font-semibold underline decoration-[#e91e63] decoration-2 underline-offset-4">Sarvam AI startup program</strong>, we deploy battle-tested intelligence for forward-thinking enterprises.
          </p>
        </div>

        {/* Main Grid: Company Story & Visual Avatar Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Left Column: Deep Introduction & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mission Statement Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#faf9f6] border border-slate-200/90 shadow-2xs">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e91e63]" />
                Who We Are & What We Do
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Founded by <strong>Shriyansh Singh Rajpoot</strong>, Aura AI Automations exists to bridge the gap between speculative AI demonstrations and reliable, high-throughput production infrastructure. While typical agencies build superficial mockups, our team architects custom streaming voice gateways, microservices on Google Cloud Platform, and self-hosted n8n pipelines that never go down.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#e91e63] shrink-0 mt-0.5" />
                  <span>Backed by Sarvam AI Startup Program</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#e91e63] shrink-0 mt-0.5" />
                  <span>Zero Vendor Lock-in & Open Codebases</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#e91e63] shrink-0 mt-0.5" />
                  <span>Multilingual Support across 10+ Languages</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#e91e63] shrink-0 mt-0.5" />
                  <span>Live Production Studio at app.auraai.sbs</span>
                </div>
              </div>
            </div>

            {/* Interactive 4 Pillars Showcase */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block">
                Our Core Engineering Disciplines:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  const isSelected = selectedPillar === idx;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setSelectedPillar(idx)}
                      className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-white border-[#e91e63] shadow-md shadow-pink-500/10 ring-1 ring-[#e91e63]' 
                          : 'bg-[#faf9f6] border-slate-200/80 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-xl ${isSelected ? 'bg-pink-100 text-[#e91e63]' : 'bg-white text-slate-700 border border-slate-200'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {pillar.stat}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {pillar.short}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Pillar Deep Dive Drawer */}
              <motion.div
                key={selectedPillar}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl bg-pink-50/60 border border-pink-200/80 flex items-start justify-between gap-4"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#e91e63] block mb-1">
                    {pillars[selectedPillar].badge}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {pillars[selectedPillar].details}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Founder Profile & Direct Connect Links */}
            <div className="pt-2 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-script text-2xl sm:text-3xl text-slate-900 font-bold block leading-tight">
                    Shriyansh Singh Rajpoot
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Founder & Lead Architect — Aura AI Automations
                  </span>
                </div>

                <a
                  href="https://app.auraai.sbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e91e63] hover:bg-[#d81557] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all group shrink-0"
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Direct Founder Social Connect with Icons */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-700 mr-1">Direct Founder Connect:</span>
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 transition-all hover:scale-105 ${link.bgClass}`}
                  >
                    <span className={link.colorClass}>
                      <SocialIcon type={link.icon} className="w-3.5 h-3.5" />
                    </span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Standing 3D Avatar & Live Telemetry Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#faf9f6] border border-slate-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.04)] text-center">
              
              {/* Badge: Sarvam AI Startup Partner */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-2xs border border-pink-200 text-xs font-semibold text-slate-800 mb-3">
                <Award className="w-3.5 h-3.5 text-[#e91e63]" />
                <span className="text-slate-600">Partnered With</span>
                <span className="font-bold text-[#e91e63]">Sarvam AI Startup Fellow</span>
              </div>

              {/* Standing 3D Avatar */}
              <GenEmojiAvatar variant="standing" className="my-2" />

              {/* Live Status Indicators */}
              <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-left">
                <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-800">Voice Synthesis Node</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    480ms Edge Latency
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-800">n8n Execution Queue</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    0ms Backlog
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500" />
                    <span className="text-xs font-semibold text-slate-800">OmniDimension Gateway</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#e91e63] bg-pink-50 px-2 py-0.5 rounded">
                    Online & Active
                  </span>
                </div>
              </div>

              {/* Direct Studio Launcher */}
              <div className="mt-4 pt-3">
                <a
                  href="https://app.auraai.sbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Explore App Studio (app.auraai.sbs)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Agency Proof Metrics Bar */}
        <div className="pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {agencyStats.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-[#faf9f6] border border-slate-200/80 hover:border-slate-300 transition-all text-center"
              >
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 block mb-1">
                  {item.number}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 block mb-0.5">
                  {item.label}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  {item.sublabel}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
