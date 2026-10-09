import React from 'react';
import { motion } from 'motion/react';
import { GenEmojiAvatar } from './GenEmojiAvatar';
import { CheckCircle2, Award, Sparkles, ArrowUpRight, ShieldCheck, Zap, Bot, Code, Cpu } from 'lucide-react';
import { SocialButtonsRow, SOCIAL_LINKS, SocialIcon } from './SocialLinks';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onOpenBooking?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const companyPillars = [
    {
      icon: Bot,
      title: 'Autonomous Voice Calling Agents',
      desc: 'Multilingual conversational AI agents powered by OmniDimension & Sarvam AI that answer customer calls 24/7, qualify leads, and schedule appointments with sub-500ms latency.',
      metric: '< 500ms Voice Latency',
    },
    {
      icon: Sparkles,
      title: 'Immersive 3D Spatial Websites',
      desc: 'Interactive Three.js and WebGL web flagships that replace standard static templates with memorable, interactive brand worlds that drive high engagement.',
      metric: '60 FPS Hardware Render',
    },
    {
      icon: Cpu,
      title: 'Autonomous Cloud Workflows & AI Pipelines',
      desc: 'Self-hosted n8n orchestrations, GCP serverless microservices, and Replicate GPU clustering that automate complex backends and eliminate repetitive manual tasks.',
      metric: '10x Workflow Speedup',
    },
  ];

  const executiveMetrics = [
    { label: 'Sarvam AI Incubation', value: 'Backed Partner' },
    { label: 'Cloud Uptime SLA', value: '99.99%' },
    { label: 'Voice Response Latency', value: '< 500ms' },
    { label: 'Systems Shipped', value: '45+ Live' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white border-y border-slate-200/90 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Kicker & Headline */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#e91e63]" />
            <span>Company Introduction & Overview</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
            Engineering the Next Generation of <span className="text-[#e91e63]">Autonomous AI Systems</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mt-5 leading-relaxed font-normal">
            Aura AI Automations is a specialized AI systems engineering studio. We turn visionary concepts into resilient, scalable code and autonomous voice intelligence.
          </p>
        </div>

        {/* Main Grid: Executive Overview on Left, Founder Spotlight & Avatar on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column (7 cols): The Story, Pillars, and Proof */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Core Mission Manifesto Card */}
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#faf9f6] to-white border border-slate-200 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e91e63]">
                <Award className="w-4 h-4" />
                <span>Our Mission & Backing</span>
              </div>
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                "We engineer robust AI platforms, automated workflows, and immersive 3D websites. Backed by the <strong className="text-slate-950 font-semibold underline decoration-[#e91e63] decoration-2 underline-offset-4">Sarvam AI startup program</strong>, we leverage cutting-edge LLMs and scalable cloud infrastructure to build high-performance systems."
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether deploying zero-latency voice receptionists via OmniDimension, scaling high-throughput mobile platforms like <strong>Riya.ai</strong> and <strong>MikMok</strong>, or orchestrating self-hosted n8n pipelines, our team builds production-ready software designed to eliminate human bottlenecks.
              </p>
            </div>

            {/* Three Core Pillars */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">
                Core Architectural Pillars
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {companyPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-pink-300 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-start gap-4"
                    >
                      <div className="w-11 h-11 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-[#e91e63] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-base font-bold text-slate-900">{pillar.title}</h4>
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {pillar.metric}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Executive Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900 text-white">
              {executiveMetrics.map((m, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="font-display text-xl sm:text-2xl font-black text-white tabular-nums tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Platform Call to Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://app.auraai.sbs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#e91e63] hover:bg-[#d81557] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-pink-500/25 transition-all cursor-pointer group"
              >
                <span>Deploy on app.auraai.sbs</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Explore Technical Services</span>
              </a>
            </div>

          </div>

          {/* Right Column (5 cols): Founder & Leadership Spotlight Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-3xl bg-gradient-to-b from-[#faf9f6] via-white to-slate-50 border border-slate-200 p-7 sm:p-9 shadow-[0_16px_45px_rgba(0,0,0,0.04)] text-center relative">
              
              {/* Badge: Founder & Lead Architect */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xs border border-slate-200 text-xs font-bold text-slate-900 mb-6">
                <ShieldCheck className="w-4 h-4 text-[#e91e63]" />
                <span>Founder & Leadership</span>
              </div>

              {/* The 3D Standing Avatar */}
              <GenEmojiAvatar variant="standing" className="my-2" />

              {/* Founder Details */}
              <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                <div>
                  <h3 className="font-display text-2xl font-black text-slate-950">
                    Shriyansh Singh Rajpoot
                  </h3>
                  <p className="text-xs font-semibold text-[#e91e63] uppercase tracking-wider mt-0.5">
                    Founder & Lead Systems Architect
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Spearheading Aura's core autonomous voice technology, multilingual LLM gateways with Sarvam AI, and real-time distributed infrastructure.
                </p>

                {/* Direct Founder Socials */}
                <div className="pt-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Connect Directly With The Founder:
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.name}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs transition-all hover:scale-105 ${link.bgClass}`}
                      >
                        <span className={link.colorClass}>
                          <SocialIcon type={link.icon} className="w-4 h-4" />
                        </span>
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Founder Guarantee */}
                <div className="mt-4 p-3 bg-pink-50/70 rounded-2xl border border-pink-100 text-left text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-[#e91e63]">Direct Engineering Access</p>
                  <p className="text-slate-600">
                    Every project is architected with direct founder oversight, custom SLAs, and full codebase ownership.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
