import React from 'react';
import { motion } from 'motion/react';
import { AvatarDisplay } from './AvatarDisplay';
import { ShieldCheck, Award, Zap, Code, Sparkles, Layers, Cpu } from 'lucide-react';

export default function CoreExpertise() {
  const skills = [
    { name: 'Autonomous Voice Gateways', level: '99%', desc: 'OmniDimension + Sarvam AI' },
    { name: '3D Spatial Web & Shaders', level: '96%', desc: 'Three.js & WebGL 2.0' },
    { name: 'Self-Hosted n8n Workflows', level: '98%', desc: 'Enterprise Docker Orchestration' },
    { name: 'GPU Cloud Architectures', level: '95%', desc: 'GCP Cloud Run & Replicate' },
  ];

  return (
    <section className="py-16 bg-[#faf9f6] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Avatar on Left with Soft Cream Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="bg-[#FAF8F5] rounded-3xl p-6 shadow-xl border border-slate-200/80 text-center w-full max-w-sm">
              <span className="text-[11px] font-mono font-bold text-[#e91e63] uppercase tracking-wider block mb-2">
                CORE TECHNICAL COMPETENCIES
              </span>
              <AvatarDisplay
                src="/avatars/avatar-skills.png"
                alt="Confident standing engineer - Core Expertise"
                size="md"
                className="my-2"
              />
              <p className="text-xs text-slate-600 font-semibold mt-2">
                Deep expertise in low-latency inference, real-time telephony, and scalable cloud clusters.
              </p>
            </div>
          </div>

          {/* Skills Breakdown on Right */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e91e63] font-mono">
                // ENGINEERING DEPTH
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                Core Technical Expertise & Benchmarks
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {skills.map((s, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{s.name}</span>
                    <span className="text-xs font-mono font-bold text-[#e91e63]">{s.level}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium block">{s.desc}</span>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#e91e63] to-red-600 h-1.5 rounded-full"
                      style={{ width: s.level }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://app.auraai.sbs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#d90429] hover:bg-[#b80020] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Test in Live App Studio</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export { CoreExpertise };
