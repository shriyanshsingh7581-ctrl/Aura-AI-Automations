import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight, Sparkles, Smartphone, Film, Workflow, Layers, ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenBooking: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenBooking }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI' | 'Mobile' | 'Automation'>('All');

  const projects: ProjectItem[] = [
    {
      id: 'riya',
      name: 'Riya.ai',
      subtitle: 'Intelligent Emotional Wellness & Multimodal Voice Companion',
      description: 'An intelligent mobile application delivering empathic AI conversational companionship, real-time voice sentiment tracking, and personalized daily mental wellness routines.',
      tags: ['AI', 'Mobile', 'Sarvam AI', 'Voice'],
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
      tags: ['Mobile', 'AI', 'Video Engine', 'Kodular'],
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

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter) || p.category === activeFilter);

  return (
    <section id="originals" className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e91e63] mb-3">
              Featured Originals
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Selected Works & Shipped Platforms
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3">
              Real-world systems engineered for scale, reliability, and measurable client ROI.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-full shrink-0 border border-slate-200/80 self-start md:self-auto">
            {(['All', 'AI', 'Mobile', 'Automation'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid (with Horizontal Scroll support on smaller devices) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col justify-between bg-[#faf9f6] rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-pink-300 hover:shadow-[0_16px_40px_rgba(233,30,99,0.08)] transition-all duration-300 relative"
            >
              <div>
                {/* Visual Banner Thumbnail */}
                <div className={`h-44 rounded-2xl bg-gradient-to-tr ${project.accentGradient} p-6 flex flex-col justify-between text-white relative overflow-hidden mb-6 shadow-xs`}>
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-[11px] font-semibold tracking-wide border border-white/20">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      {project.id === 'riya' && <Smartphone className="w-4 h-4 text-white" />}
                      {project.id === 'mikmok' && <Film className="w-4 h-4 text-white" />}
                      {project.id === 'workflows' && <Workflow className="w-4 h-4 text-white" />}
                    </div>
                  </div>

                  <div className="z-10">
                    <span className="text-[11px] uppercase tracking-wider text-white/80 font-semibold block">
                      Production Release
                    </span>
                    <h3 className="font-display text-2xl font-black text-white tracking-tight">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Subtitle & Description */}
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#e91e63] transition-colors">
                  {project.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Quantitative Stats */}
                <div className="grid grid-cols-2 gap-3 py-4 my-4 border-y border-slate-200/80">
                  {project.stats.slice(0, 2).map((st, i) => (
                    <div key={i}>
                      <span className="text-[11px] text-slate-500 font-medium">{st.label}</span>
                      <p className="font-display text-base sm:text-lg font-bold text-slate-900 tabular-nums">
                        {st.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white border border-slate-300 hover:border-slate-900 text-xs font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <span>View Full Architecture Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              Have a custom AI or mobile platform in mind?
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              We design and build from day zero to production release with full source code handover.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded-full bg-[#e91e63] hover:bg-[#d81557] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-pink-500/25 cursor-pointer whitespace-nowrap"
          >
            Start Your Build
          </button>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
