import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PhoneCall, 
  Box, 
  Smartphone, 
  CloudLightning, 
  Check, 
  ArrowRight, 
  Play, 
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../types';
import { AvatarDisplay } from './AvatarDisplay';
import { ALL_SERVICE_PAGES_LIST } from '../data/seoPages';

interface ServicesSectionProps {
  onOpenVoiceSimulator: () => void;
  onOpenBooking: () => void;
  onNavigate?: (path: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenVoiceSimulator,
  onOpenBooking,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<string>('voice');

  const services: ServiceItem[] = [
    {
      id: 'voice',
      name: 'Automated AI Voice Receptionists',
      shortDesc: 'Powered by advanced AI and OmniDimension to manage brand calls seamlessly.',
      fullDesc: 'We build natural conversational voice agents that answer incoming phone inquiries 24/7 with human-grade prosody, low latency (< 600ms), and real-time integration into your calendar and CRM databases.',
      bulletPoints: [
        'Real-time OmniDimension & Sarvam multilingual voice synthesis',
        'Direct automated appointment booking synced to Google Calendar / Cal.com',
        'Live CRM sync (HubSpot, Salesforce, Firebase real-time)',
        'Intelligent caller intent extraction and warm transfer protocol',
      ],
      techStack: ['OmniDimension', 'Twilio / SIP', 'Sarvam AI', 'Node.js', 'Firebase Realtime'],
      highlightMetric: '< 600ms latency',
      iconName: 'phone',
      previewType: 'voice',
    },
    {
      id: '3d-web',
      name: '3D Websites',
      shortDesc: 'Highly interactive, visually stunning web experiences.',
      fullDesc: 'Transform standard flat websites into memorable spatial digital flagships. We implement custom Three.js, WebGL shaders, interactive 3D avatars, and fluid micro-interactions designed to elevate brand prestige and engagement.',
      bulletPoints: [
        'Hardware-accelerated Three.js & WebGL 2.0 graphics pipeline',
        'Custom 3D character avatars & spatial physics interactions',
        'Performance optimized with 60 FPS mobile rendering',
        'Micro-interactions that increase on-page conversion by up to 40%',
      ],
      techStack: ['Three.js', 'React Three Fiber', 'GLSL Shaders', 'Tailwind CSS', 'Vite'],
      highlightMetric: '60 FPS WebGL',
      iconName: 'box',
      previewType: 'web3d',
    },
    {
      id: 'mobile',
      name: 'Mobile App Development',
      shortDesc: 'End-to-end native and cross-platform app creation.',
      fullDesc: 'From conceptual wireframing to App Store and Google Play deployment. We craft performant, tactile mobile experiences with real-time sync, offline persistence, and seamless on-device AI acceleration.',
      bulletPoints: [
        'Cross-platform React Native & Flutter architecture',
        'Rapid prototype-to-production using Kodular and native SDKs',
        'Offline-first synchronization with Firebase and SQLite',
        'Push notification pipelines and automated in-app payment flows',
      ],
      techStack: ['React Native', 'Kodular', 'Firebase SDK', 'TypeScript', 'Tailwind'],
      highlightMetric: 'iOS & Android',
      iconName: 'mobile',
      previewType: 'mobile',
    },
    {
      id: 'cloud-ai',
      name: 'Cloud Infrastructure & AI',
      shortDesc: 'Deploying machine learning models and scalable backends using Replicate, Google Cloud Platform, and Vercel.',
      fullDesc: 'Architecting rock-solid serverless and GPU-accelerated cloud infrastructure capable of processing high-volume inferences, automated database migrations, and autonomous event-driven microservices.',
      bulletPoints: [
        'Replicate GPU inference orchestrations for Llama, Whisper, and diffusion models',
        'Google Cloud Platform (GCP) Cloud Run, Cloud Functions, and VPC security',
        'Vercel Edge serverless routing for instantaneous global delivery',
        'Automated ETL pipelines via self-hosted n8n workflows',
      ],
      techStack: ['Replicate', 'Google Cloud Platform', 'Vercel', 'n8n', 'Docker'],
      highlightMetric: 'Multi-Cloud Scale',
      iconName: 'cloud',
      previewType: 'cloud',
    },
  ];

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  const handleServiceLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
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
    onNavigate(path);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#faf9f6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header from Video */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#e91e63] font-mono mb-2">
            // 04. TECHNICAL CAPABILITIES & STACK
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Core <span className="font-script text-[#e91e63] font-bold text-4xl sm:text-5xl md:text-6xl">Expertise.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
            Specialized engineering capabilities across zero-latency conversational voice, spatial web flagships, native mobile, and GPU cloud infrastructure.
          </p>
        </div>

        {/* 3-Column Layout: Service Tabs | Center Pointing Avatar | Crimson Red Service Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Tabs (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {services.map((service, index) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer flex items-start gap-3.5 border ${
                    isActive
                      ? 'bg-white shadow-[0_10px_25px_rgba(233,30,99,0.12)] border-[#d90429] ring-2 ring-[#d90429]/20'
                      : 'bg-white/70 hover:bg-white border-slate-200/80 text-slate-700'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 transition-colors ${
                    isActive ? 'bg-[#d90429] text-white shadow-sm shadow-red-500/30' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {service.id === 'voice' && <PhoneCall className="w-4 h-4" />}
                    {service.id === '3d-web' && <Box className="w-4 h-4" />}
                    {service.id === 'mobile' && <Smartphone className="w-4 h-4" />}
                    {service.id === 'cloud-ai' && <CloudLightning className="w-4 h-4" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        0{index + 1}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-red-50 text-[#d90429]' : 'text-slate-400'
                      }`}>
                        {service.highlightMetric}
                      </span>
                    </div>
                    <h3 className={`text-sm sm:text-base font-bold mt-0.5 transition-colors ${
                      isActive ? 'text-slate-950 font-extrabold' : 'text-slate-800'
                    }`}>
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Column: Standing & Pointing 3D Avatar Pointing Toward Crimson Red Card */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center text-center">
            <div className="relative flex flex-col items-center">
              {/* Pointing Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-red-200 text-[11px] font-bold text-[#d90429] shadow-xs mb-2">
                <span>Directing Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>

              {/* Standing & Pointing Avatar */}
              <AvatarDisplay
                src="/avatars/avatar-services.png"
                alt="Aura AI Automations Engineer pointing to solutions"
                size="md"
                className="my-1"
              />

              <p className="text-[11px] text-slate-500 font-mono mt-1 max-w-[180px]">
                Sub-600ms latency voice & GPU architectures.
              </p>
            </div>
          </div>

          {/* Right Column: Crimson Red (#D90429) Service Showcase Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-gradient-to-br from-[#d90429] via-[#c90426] to-[#9b001a] text-white rounded-3xl p-6 sm:p-8 shadow-[0_16px_40px_rgba(217,4,41,0.28)] border border-red-400/30"
              >
                {/* Header of Crimson Card */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/20">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-200">
                      FLAGSHIP ARCHITECTURE
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                      {currentService.name}
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
                    {currentService.highlightMetric}
                  </div>
                </div>

                {/* Full Description */}
                <p className="text-sm sm:text-base text-red-50/95 font-normal leading-relaxed my-5">
                  {currentService.fullDesc}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-red-200 font-mono">
                    Production Deliverables
                  </h4>
                  {currentService.bulletPoints.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-1 w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-white/95 leading-normal">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Dynamic Action inside Crimson Card */}
                <div className="pt-2 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href="https://app.auraai.sbs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#d90429] hover:bg-red-50 text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Launch on app.auraai.sbs</span>
                  </a>

                  {currentService.id === 'voice' && (
                    <button
                      onClick={onOpenVoiceSimulator}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-black/30 hover:bg-black/40 rounded-full border border-white/30 transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Test Call</span>
                    </button>
                  )}
                </div>
                  
                {/* Tech Stack Styled Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/20">
                  <span className="text-xs font-semibold text-red-200 mr-1 font-mono">Tech Stack:</span>
                  {currentService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-black/25 text-white/90 text-[11px] font-mono border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {currentService.id === 'voice' ? (
                    <a
                      href="/ai-receptionist"
                      onClick={(e) => handleServiceLinkClick(e, '/ai-receptionist')}
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#d90429] bg-white hover:bg-red-50 rounded-full transition-all shadow-md cursor-pointer"
                    >
                      <span>Explore Our AI Receptionist</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#d90429] bg-white hover:bg-red-50 rounded-full transition-all shadow-md cursor-pointer"
                    >
                      <span>Request Proposal for {currentService.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                  <a
                    href="https://app.auraai.sbs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-black/30 hover:bg-black/40 rounded-full border border-white/30 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Open Studio</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Dedicated AI Service & Industry Pages (Crawlable Internal Links) */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#e91e63] font-mono block mb-1">
                // DEDICATED INDUSTRY &amp; SERVICE SOLUTIONS
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-950">
                Explore Specialized AI Automation Playbooks for Indian Businesses
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              24/7 Hindi, English &amp; Hinglish Support
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {ALL_SERVICE_PAGES_LIST.map((sp) => (
              <a
                key={sp.slug}
                href={sp.path}
                onClick={(e) => handleServiceLinkClick(e, sp.path)}
                className="group p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-[#d90429] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e91e63] block mb-1">
                    {sp.navLabel}
                  </span>
                  <h4 className="font-display text-sm font-bold text-slate-950 group-hover:text-[#d90429] transition-colors">
                    {sp.shortTitle}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {sp.metaDescription}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-800 group-hover:text-[#d90429]">
                  <span>View Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
