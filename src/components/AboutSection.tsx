import React from 'react';
import { motion } from 'motion/react';
import { GenEmojiAvatar } from './GenEmojiAvatar';
import { CheckCircle2, Award, Cpu, Shield, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const highlights = [
    {
      title: 'Sarvam AI Incubation',
      desc: 'Backed by the Sarvam AI startup program with access to state-of-the-art multilingual LLMs and accelerated compute.',
    },
    {
      title: 'Production Engineering',
      desc: 'Zero-downtime microservices and automated CI/CD deployed across GCP, Replicate, and Vercel.',
    },
    {
      title: 'Multimodal Interaction',
      desc: 'Seamless fusion of conversational voice agents, real-time databases, and responsive 3D web graphics.',
    },
  ];

  const metrics = [
    { label: 'Cloud Uptime SLA', value: '99.9%' },
    { label: 'Voice Response Latency', value: '< 650ms' },
    { label: 'Workflow Acceleration', value: '10x' },
    { label: 'Deployments Shipped', value: '45+' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#e91e63] mb-3">
            About Our Agency
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Engineering Tomorrow's Autonomous Digital Systems
          </h2>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text on the Left */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed">
              We engineer robust AI platforms, automated workflows, and immersive 3D websites. Backed by the <span className="font-semibold text-slate-950 underline decoration-[#e91e63] decoration-2 underline-offset-4">Sarvam AI startup program</span>, we leverage cutting-edge LLMs and scalable cloud infrastructure to build high-performance systems.
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              From zero-latency AI voice receptionists powered by OmniDimension to custom full-stack enterprise automation pipelines running on self-hosted n8n and Firebase, we bridge the gap between speculative AI research and battle-tested production software.
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-pink-200 transition-colors">
                  <div className="mt-0.5 p-1 rounded-full bg-pink-100 text-[#e91e63] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
              {metrics.map((metric, i) => (
                <div key={i} className="p-3">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#e91e63] hover:text-[#d81557] group cursor-pointer"
              >
                <span>Partner with our engineering team</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Standing 3D Avatar on the Right */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.04)] text-center">
              
              {/* Top Card Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-slate-200 text-xs font-semibold text-slate-800 mb-4">
                <Award className="w-3.5 h-3.5 text-[#e91e63]" />
                <span>Sarvam AI Startup Fellow</span>
              </div>

              {/* The Standing 3D Avatar */}
              <GenEmojiAvatar variant="standing" className="my-2" />

              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-900">Lead Systems Architect</p>
                <p className="text-xs text-slate-500 mt-0.5">Automating workflows with deep LLM integrations</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
