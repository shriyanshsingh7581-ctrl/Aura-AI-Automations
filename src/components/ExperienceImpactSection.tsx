import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GenEmojiAvatar } from './GenEmojiAvatar';
import { CheckCircle2, ArrowUpRight, Zap, ShieldCheck, Activity } from 'lucide-react';

export const ExperienceImpactSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);

  const impactItems = [
    {
      role: 'FOUNDER & LEAD ARCHITECT // AURA AI AUTOMATIONS',
      title: 'OmniDimension Real-Time Voice Gateway',
      timeline: '2025 - PRESENT',
      metrics: '< 480ms Voice Latency • 99.9% Uptime',
      tags: ['VOICE AI', 'OMNIDIMENSION', 'SARVAM AI', 'WEBRTC'],
      points: [
        'Architected sub-500ms voice streaming gateway connecting SIP telephony with Sarvam AI multilingual models.',
        'Engineered direct two-way calendar sync and live CRM table ingestion with zero human intervention.',
        'Eliminated over 28 weekly front-desk hours for early partner healthcare and service clinics.',
      ],
    },
    {
      role: 'SYSTEMS ENGINEERING // SARVAM AI STARTUP PROGRAM',
      title: 'Multilingual Conversational Audio Pipeline',
      timeline: '2024 - 2025',
      metrics: '85k+ Active Users • 4.9★ Rating',
      tags: ['FULL-STACK', 'REACT NATIVE', 'GCP CLOUD RUN', 'FIREBASE'],
      points: [
        'Shipped Riya.ai, an empathic conversational wellness companion with real-time sentiment extraction.',
        'Optimized Opus audio compression and WebSocket frame buffering to achieve smooth 480ms response turnarounds.',
        'Configured automated GCP Cloud Run auto-scaling to absorb peak evening usage spikes seamlessly.',
      ],
    },
    {
      role: 'CLOUD ARCHITECT // ENTERPRISE AUTOMATIONS',
      title: 'Self-Hosted n8n & Firebase Telephony Cluster',
      timeline: '2024 - PRESENT',
      metrics: '180,000+ Tasks Daily • 340 Hrs Saved/Wk',
      tags: ['AUTOMATION', 'DOCKER', 'N8N', 'FIREBASE REALTIME'],
      points: [
        'Deployed containerized self-hosted n8n infrastructure handling high-throughput webhooks and event queues.',
        'Constructed sub-100ms real-time event listeners syncing lead qualification data across WhatsApp and Slack.',
        'Achieved 99.98% system reliability with self-healing Docker worker nodes and automated failover alerting.',
      ],
    },
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-[#faf9f6] border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from Video */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#e91e63] font-mono mb-2">
            // 02. PROVEN IMPACT & TIMELINE
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Where We've Delivered <span className="font-script text-[#e91e63] font-bold text-4xl sm:text-5xl md:text-6xl">Impact.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-normal">
            Explore our track record engineering zero-latency voice agents, high-performance mobile apps, and autonomous cloud pipelines.
          </p>
        </div>

        {/* Split Screen matching Video: Avatar Left, Interactive Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Standing 3D Avatar (Video Frame 00:06 - 00:07) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.03)] text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-[#e91e63] mb-3">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>Verified System Milestones</span>
              </div>
              <GenEmojiAvatar variant="standing" className="my-2" />
              <p className="text-xs text-slate-500 mt-3 font-mono">
                Proven architecture shipped across voice, web, and mobile.
              </p>
            </div>
          </div>

          {/* Impact Cards on the Right */}
          <div className="lg:col-span-7 space-y-4">
            {impactItems.map((item, idx) => {
              const isSelected = activeCard === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveCard(idx)}
                  className={`p-6 sm:p-7 rounded-2xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-white border-[#e91e63] shadow-[0_12px_35px_rgba(233,30,99,0.08)] ring-1 ring-[#e91e63]/25'
                      : 'bg-white/80 hover:bg-white border-slate-200/90'
                  }`}
                >
                  {/* Top Bar with Role & Timeline */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 font-mono">
                      {item.role}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 font-mono px-2 py-0.5 rounded-full bg-slate-100">
                      {item.timeline}
                    </span>
                  </div>

                  {/* Title & Metric */}
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <span className="text-xs font-bold text-[#e91e63] bg-pink-50 px-3 py-1 rounded-full">
                      {item.metrics}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-4 space-y-2">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#e91e63] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pill Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((tg) => (
                      <span
                        key={tg}
                        className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold font-mono text-slate-700"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
