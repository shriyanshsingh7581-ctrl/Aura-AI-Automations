import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cloud, Cpu, Database, Flame, Server, Smartphone, Zap, Code, Check } from 'lucide-react';
import { TechItem } from '../types';

export const TechStackSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('sarvam');

  const coreStack: (TechItem & { id: string })[] = [
    {
      id: 'gcp',
      name: 'Google Cloud Platform (GCP)',
      role: 'Enterprise Cloud & Compute',
      category: 'Cloud Infrastructure',
      description: 'Host scalable containerized backends on Cloud Run, secure VPC networking, and BigQuery data warehousing with 99.99% availability.',
      badgeColor: '#4285F4',
      iconType: 'cloud',
    },
    {
      id: 'vercel',
      name: 'Vercel',
      role: 'Edge Network & Frontends',
      category: 'Deployment & Edge',
      description: 'Global sub-50ms edge delivery for client portals, 3D web applications, dynamic SSR caching, and instant Git branch previews.',
      badgeColor: '#000000',
      iconType: 'server',
    },
    {
      id: 'firebase',
      name: 'Firebase',
      role: 'Realtime Database & Auth',
      category: 'Data & Security',
      description: 'Bidirectional document sync, low-latency live triggers for telephone audio transcripts, Firestore security rules, and user authentication.',
      badgeColor: '#FFCA28',
      iconType: 'database',
    },
    {
      id: 'replicate',
      name: 'Replicate',
      role: 'Serverless GPU AI Inference',
      category: 'Machine Learning',
      description: 'High-speed GPU clustering for running open-source diffusion models, audio transcription (Whisper), and image enhancement pipelines with zero idle cost.',
      badgeColor: '#e91e63',
      iconType: 'cpu',
    },
    {
      id: 'sarvam',
      name: 'Sarvam AI',
      role: 'Multilingual LLMs & Voice',
      category: 'AI Partnership',
      description: 'Official startup program partner: leveraging state-of-the-art regional LLMs, voice synthesis, and speech translation tailored for global multilingual applications.',
      badgeColor: '#10B981',
      iconType: 'zap',
    },
    {
      id: 'kodular',
      name: 'Kodular',
      role: 'Rapid Android App Engineering',
      category: 'Mobile Engine',
      description: 'Accelerated mobile application prototyping and visual block-to-native Android builds for rapid time-to-market deployments.',
      badgeColor: '#6366F1',
      iconType: 'smartphone',
    },
  ];

  const current = coreStack.find((s) => s.id === selectedTech) || coreStack[0];

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-[#faf9f6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#e91e63] mb-3">
            Ecosystem & Tools
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Battle-Tested Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            We partner with industry-leading cloud providers and AI research labs to deliver unmatched stability and performance.
          </p>
        </div>

        {/* 6 Core Tech Grid with Interactive Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {coreStack.map((tech) => {
            const isSelected = tech.id === selectedTech;
            return (
              <button
                key={tech.id}
                onClick={() => setSelectedTech(tech.id)}
                className={`p-5 rounded-2xl flex flex-col items-center text-center transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-white shadow-[0_10px_25px_rgba(233,30,99,0.12)] border-[#e91e63] ring-2 ring-[#e91e63]/20 scale-102'
                    : 'bg-white/80 hover:bg-white border-slate-200/90 shadow-2xs hover:shadow-sm'
                }`}
              >
                {/* Custom Tech Icon Badge */}
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-3 shadow-xs"
                  style={{ backgroundColor: tech.badgeColor === '#000000' ? '#0f172a' : tech.badgeColor }}
                >
                  {tech.id === 'gcp' && <Cloud className="w-6 h-6" />}
                  {tech.id === 'vercel' && <Server className="w-6 h-6" />}
                  {tech.id === 'firebase' && <Flame className="w-6 h-6 text-amber-900" />}
                  {tech.id === 'replicate' && <Cpu className="w-6 h-6" />}
                  {tech.id === 'sarvam' && <Zap className="w-6 h-6" />}
                  {tech.id === 'kodular' && <Smartphone className="w-6 h-6" />}
                </div>

                <span className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">
                  {tech.name}
                </span>
                <span className="text-[11px] text-slate-500 font-medium mt-1">
                  {tech.role.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Selected Tech Spotlight Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 mt-1"
              style={{ backgroundColor: current.badgeColor === '#000000' ? '#0f172a' : current.badgeColor }}
            >
              {current.id === 'gcp' && <Cloud className="w-6 h-6" />}
              {current.id === 'vercel' && <Server className="w-6 h-6" />}
              {current.id === 'firebase' && <Flame className="w-6 h-6 text-amber-900" />}
              {current.id === 'replicate' && <Cpu className="w-6 h-6" />}
              {current.id === 'sarvam' && <Zap className="w-6 h-6" />}
              {current.id === 'kodular' && <Smartphone className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-display text-xl font-bold text-slate-950">
                  {current.name}
                </h4>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-50 text-[#e91e63] font-semibold">
                  {current.category}
                </span>
              </div>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {current.description}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
            <Check className="w-4 h-4" />
            <span>Production Verified Integration</span>
          </div>
        </motion.div>

        {/* Supplementary Framework Badges */}
        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Additional Stack Elements:</span>
          {['React 19', 'TypeScript', 'Tailwind CSS', 'n8n Automations', 'Node.js', 'Python', 'Twilio SIP', 'PostgreSQL'].map((item) => (
            <span key={item} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-medium">
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
