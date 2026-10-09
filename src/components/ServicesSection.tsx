import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PhoneCall, 
  Box, 
  Smartphone, 
  CloudLightning, 
  Check, 
  ArrowRight, 
  Volume2, 
  Mic, 
  Cpu, 
  Play, 
  Square,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenVoiceSimulator: () => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenVoiceSimulator,
  onOpenBooking,
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

  // Mini state for Interactive Preview tab on the right
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [interactiveRotation, setInteractiveRotation] = useState({ x: 15, y: -25 });

  return (
    <section id="services" className="py-20 md:py-28 bg-[#faf9f6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#e91e63] mb-3">
            Core Expertise
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Specialized Engineering & AI Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4">
            Explore how we build automated intelligence, spatial interfaces, and resilient infrastructure.
          </p>
        </div>

        {/* List & Detail Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {services.map((service, index) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-200 cursor-pointer flex items-start gap-4 border ${
                    isActive
                      ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border-pink-300 ring-1 ring-[#e91e63]/20'
                      : 'bg-white/60 hover:bg-white border-slate-200/80 text-slate-700'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 transition-colors ${
                    isActive ? 'bg-[#e91e63] text-white shadow-sm shadow-pink-500/30' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {service.id === 'voice' && <PhoneCall className="w-5 h-5" />}
                    {service.id === '3d-web' && <Box className="w-5 h-5" />}
                    {service.id === 'mobile' && <Smartphone className="w-5 h-5" />}
                    {service.id === 'cloud-ai' && <CloudLightning className="w-5 h-5" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        0{index + 1}
                      </span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-pink-50 text-[#e91e63]' : 'text-slate-400'
                      }`}>
                        {service.highlightMetric}
                      </span>
                    </div>
                    <h3 className={`text-base sm:text-lg font-bold mt-1 transition-colors ${
                      isActive ? 'text-slate-950' : 'text-slate-800'
                    }`}>
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Description & Interactive View */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
              >
                {/* Header of Detail */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e91e63]">
                      Service Detail
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                      {currentService.name}
                    </h3>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold">
                    {currentService.highlightMetric}
                  </div>
                </div>

                {/* Full Description */}
                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed my-6">
                  {currentService.fullDesc}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Capabilities Included
                  </h4>
                  {currentService.bulletPoints.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-pink-50 text-[#e91e63] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm text-slate-700 leading-normal">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Dynamic Preview Container */}
                <div className="mb-8 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  
                  {/* Voice Receptionist Simulator Preview */}
                  {currentService.id === 'voice' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#e91e63] animate-pulse" />
                          <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                            OmniDimension Voice Node Active
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">Sample: Inbound Clinic Call</span>
                      </div>

                      {/* Waveform graphic */}
                      <div className="h-16 bg-slate-900 rounded-xl p-3 flex items-center justify-center gap-1.5 overflow-hidden">
                        {[40, 65, 85, 30, 95, 50, 70, 90, 45, 60, 100, 75, 40, 85, 95, 60, 50, 80, 65, 40, 75, 90].map((h, i) => (
                          <div
                            key={i}
                            className={`w-1 rounded-full transition-all duration-300 ${
                              isPlayingDemo ? 'bg-[#e91e63]' : 'bg-slate-700'
                            }`}
                            style={{
                              height: isPlayingDemo ? `${Math.max(15, Math.round(h * Math.random()))}%` : `${h * 0.4}%`,
                            }}
                          />
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                        <p className="text-xs text-slate-600">
                          "Hello! Thank you for calling. I can schedule your consultation or answer questions."
                        </p>
                        <button
                          onClick={onOpenVoiceSimulator}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#e91e63] hover:bg-[#d81557] rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-xs"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Launch Live Call Test</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 3D Web interactive canvas simulation */}
                  {currentService.id === '3d-web' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#e91e63]" />
                          Interactive Spatial Canvas
                        </span>
                        <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                          60.2 FPS
                        </span>
                      </div>

                      {/* 3D Perspective interactive box simulation */}
                      <div className="h-36 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-xl flex items-center justify-center overflow-hidden relative select-none">
                        <div className="text-center">
                          <div 
                            className="w-20 h-20 mx-auto border-2 border-pink-400 bg-pink-500/20 backdrop-blur-xs rounded-xl shadow-lg shadow-pink-500/20 flex items-center justify-center transition-transform duration-300 cursor-grab active:cursor-grabbing"
                            style={{
                              transform: `perspective(400px) rotateX(${interactiveRotation.x}deg) rotateY(${interactiveRotation.y}deg)`,
                            }}
                            onMouseMove={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const x = ((e.clientY - rect.top) / rect.height - 0.5) * 50;
                              const y = ((e.clientX - rect.left) / rect.width - 0.5) * 50;
                              setInteractiveRotation({ x: -x, y });
                            }}
                            onMouseLeave={() => setInteractiveRotation({ x: 15, y: -25 })}
                          >
                            <Box className="w-8 h-8 text-white" />
                          </div>
                          <span className="text-[11px] text-slate-300 font-mono mt-2 block">
                            Move cursor over cube to rotate WebGL geometry
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile development interactive frame */}
                  {currentService.id === 'mobile' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                          Cross-Platform Deployment Matrix
                        </span>
                        <span className="text-xs text-slate-500">React Native • Kodular • Flutter</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 bg-white rounded-xl border border-slate-200">
                          <p className="text-xs font-bold text-slate-900">Apple iOS</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">Swift Runtime & TestFlight CI</p>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-slate-200">
                          <p className="text-xs font-bold text-slate-900">Google Android</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">Kotlin Native & Play Console</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cloud AI architecture diagram preview */}
                  {currentService.id === 'cloud-ai' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                          Serverless GPU & Microservice Topology
                        </span>
                        <span className="text-xs text-emerald-600 font-mono">100% Automated</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl text-white text-xs font-mono overflow-x-auto gap-2">
                        <div className="px-2.5 py-1.5 bg-slate-800 rounded border border-slate-700 whitespace-nowrap">
                          Vercel Edge
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                        <div className="px-2.5 py-1.5 bg-pink-950/80 text-pink-200 rounded border border-pink-700 whitespace-nowrap">
                          Replicate GPU
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                        <div className="px-2.5 py-1.5 bg-slate-800 rounded border border-slate-700 whitespace-nowrap">
                          GCP Cloud Run
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                        <div className="px-2.5 py-1.5 bg-slate-800 rounded border border-slate-700 whitespace-nowrap">
                          Firebase RTDB
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Tech Stack Styled Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-400 mr-2">Built with:</span>
                  {currentService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="mt-8">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#e91e63] hover:bg-[#d81557] rounded-full transition-all shadow-md shadow-pink-500/20 cursor-pointer"
                  >
                    <span>Request Proposal for {currentService.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
