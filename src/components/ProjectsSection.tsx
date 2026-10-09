import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { GenEmojiAvatar } from './GenEmojiAvatar';
import { ArrowUpRight, ArrowLeft, ArrowRight, Sparkles, Smartphone, Film, Workflow } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenBooking?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenBooking }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'riya',
      name: 'Riya.ai',
      subtitle: 'Intelligent Emotional Wellness & Multimodal Voice Companion',
      description: 'An intelligent mobile application delivering empathic AI conversational companionship, real-time voice sentiment tracking, and personalized daily mental wellness routines.',
      tags: ['AI', 'Mobile', 'Sarvam AI', 'Voice', 'WebRTC'],
      category: 'Mobile',
      accentGradient: 'from-pink-500 to-rose-600',
      tech: ['React Native', 'Sarvam Multilingual LLM', 'WebRTC Audio', 'Firebase Firestore', 'GCP'],
      stats: [
        { label: 'Active Daily Users', value: '85,000+' },
        { label: 'Speech-to-Speech Latency', value: '480ms' },
        { label: 'App Store Rating', value: '4.9 ★' },
      ],
      deliverables: [
        'Real-time voice streaming with sentiment scoring',
        'Offline fallback caching for remote zones',
        'Cross-platform iOS and Android rollout',
      ],
      caseStudyDetails: {
        challenge: 'Standard conversational models suffer from latency exceeding 2.5 seconds, which breaks conversational intimacy for empathetic companionship.',
        solution: 'Aura architected a custom streaming pipeline integrating Sarvam AI multilingual voice models directly over WebSockets, shaving response latency down to 480ms.',
        impact: 'Achieved 85k+ daily active users and 92% retention rate in user sentiment improvement over 30-day tracking periods.',
        architectureNotes: [
          'Edge audio packetization with Opus compression',
          'Sarvam conversational LLM streaming tokens in real time',
          'Firebase Realtime Database syncing sentiment mood rings',
          'Cloud Run auto-scaling to absorb peak evening traffic spikes',
        ],
      },
    },
    {
      id: 'mikmok',
      name: 'MikMok',
      subtitle: 'Dynamic Short-Video Creation Mobile Platform',
      description: 'A high-speed, dynamic short-video mobile creation engine equipped with real-time AI effects, automated beat-matching audio, and instant serverless video transcoding.',
      tags: ['Mobile', 'AI', 'Video Engine', 'Kodular', 'FFmpeg'],
      category: 'Mobile',
      accentGradient: 'from-purple-600 to-pink-500',
      tech: ['Kodular & Android Native', 'Replicate GPU Models', 'FFmpeg GPU Cluster', 'Vercel Edge', 'GCP Storage'],
      stats: [
        { label: 'Videos Rendered Monthly', value: '420,000+' },
        { label: 'Cloud Transcode Speed', value: '1.8x realtime' },
        { label: 'Crash-Free Sessions', value: '99.85%' },
      ],
      deliverables: [
        'On-device hardware-accelerated video recording and filters',
        'Automated AI background replacement & smart subtitles',
        'Ultra-low-latency feed delivery via global CDN',
      ],
      caseStudyDetails: {
        challenge: 'Rendering high-resolution multi-layer video effects on budget Android devices led to overheating and memory crashes.',
        solution: 'We divided processing between lightweight client-side preview shaders and asynchronous Replicate GPU serverless rendering for final export.',
        impact: 'Delivered over 420k videos monthly with an average generation turnaround of just 6.4 seconds per 30-second clip.',
        architectureNotes: [
          'GPU-backed FFmpeg workers hosted on GCP Cloud Run',
          'Asynchronous Webhook orchestration with automated retry queues',
          'Instant cloud asset signed URLs via Google Cloud Storage',
          'Zero-buffering adaptive HLS video streaming',
        ],
      },
    },
    {
      id: 'workflows',
      name: 'Workflow Automations',
      subtitle: 'Self-Hosted n8n & Firebase Real-Time Ecosystem',
      description: 'Complex enterprise automated systems engineered with self-hosted n8n pipelines, real-time Firebase databases, bidirectional CRM syncing, and multi-channel telephony routing.',
      tags: ['Automation', 'AI', 'n8n', 'Firebase', 'GCP'],
      category: 'Automation',
      accentGradient: 'from-slate-900 to-slate-800',
      tech: ['Self-Hosted n8n', 'Firebase Realtime DB', 'Twilio Voice', 'Replicate API', 'Docker / GCP'],
      stats: [
        { label: 'Daily Automated Tasks', value: '180,000+' },
        { label: 'Manual Hours Saved / Wk', value: '340 hrs' },
        { label: 'System Reliability', value: '99.98%' },
      ],
      deliverables: [
        'End-to-end inbound call to CRM auto-logging system',
        'Autonomous customer lead qualification with LLM scoring',
        'Instant multi-channel webhook dispatching to Slack & WhatsApp',
      ],
      caseStudyDetails: {
        challenge: 'The client was losing 35% of qualified leads due to delayed manual follow-ups and disjointed databases across three SaaS platforms.',
        solution: 'Aura deployed a hardened, self-hosted n8n cluster connected to Firebase Realtime Database that responds within 5 seconds to incoming webhook events.',
        impact: 'Saved 340 manual engineering and operational hours weekly, generating a 2.4x increase in completed inbound sales conversations.',
        architectureNotes: [
          'High-availability n8n container cluster orchestrated on GCP',
          'Firebase real-time document listeners triggering sub-100ms actions',
          'Automated data encryption and audit compliance logging',
          'Self-healing worker processes with automated failover alerting',
        ],
      },
    },
  ];

  const currentProject = projects[activeProjectIndex];

  return (
    <section id="originals" className="py-20 md:py-28 bg-white border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header from Video */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#e91e63] font-mono mb-2">
              // 03. TECHNICAL PROJECTS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Featured <span className="font-script text-[#e91e63] font-bold text-4xl sm:text-5xl md:text-6xl">Originals.</span>
            </h2>
          </div>

          {/* Quick Pagination Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveProjectIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))}
              className="p-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-4 h-4 text-slate-700" />
            </button>
            <button
              onClick={() => setActiveProjectIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0))}
              className="p-2.5 rounded-full border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Next project"
            >
              <ArrowRight className="w-4 h-4 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Carousel Card & Avatar Split (Matching Video Frame 00:08 - 00:10) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Featured Project Card (Left 8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-[#faf9f6] rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.03)] space-y-6"
              >
                {/* Red Badge Bar from Video */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#e91e63] text-white text-[11px] font-bold uppercase tracking-wider font-mono">
                    LIVE SYSTEM
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider font-mono">
                    {currentProject.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono ml-auto">
                    0{activeProjectIndex + 1} / 0{projects.length}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950">
                    {currentProject.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#e91e63] mt-1 font-mono uppercase tracking-wide">
                    {currentProject.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {currentProject.description}
                </p>

                {/* Quantitative Metrics Bar */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-slate-200">
                  {currentProject.stats.map((st, i) => (
                    <div key={i}>
                      <span className="text-[11px] text-slate-500 font-semibold uppercase block truncate">
                        {st.label}
                      </span>
                      <p className="font-display text-lg sm:text-xl font-bold text-slate-950 tabular-nums mt-0.5">
                        {st.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.tags.map((tg) => (
                    <span
                      key={tg}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 font-mono"
                    >
                      {tg}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(currentProject)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xs"
                  >
                    <span>View Architecture Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="https://app.auraai.sbs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white border border-slate-300 hover:border-pink-300 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Build Similar on Aura</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#e91e63]" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots below card (as seen in video) */}
            <div className="flex items-center justify-center gap-2 pt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProjectIndex(i)}
                  className={`transition-all rounded-full cursor-pointer ${
                    activeProjectIndex === i
                      ? 'w-8 h-2.5 bg-[#e91e63]'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Standing 3D Avatar (Right 4 cols matching video) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs p-6 rounded-3xl bg-[#faf9f6] border border-slate-200 text-center">
              <span className="text-xs font-bold text-slate-500 font-mono block mb-2">
                PROJECT SPOTLIGHT
              </span>
              <GenEmojiAvatar variant="standing" className="my-2" />
              <p className="text-xs text-slate-600 mt-3 font-semibold">
                Engineered with Sarvam Multilingual LLMs & High-Throughput GCP Nodes.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={() => onOpenBooking && onOpenBooking()}
      />
    </section>
  );
};
