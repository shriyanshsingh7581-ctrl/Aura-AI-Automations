import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  PhoneCall,
  Sparkles,
  Calendar,
  Play,
  ShieldCheck,
  Zap,
  MessageSquare,
} from 'lucide-react';
import { ServicePageConfig, SERVICE_PAGES, APP_STUDIO_URL } from '../data/seoPages';
import { AvatarDisplay } from './AvatarDisplay';
import { ContactSection } from './ContactSection';

interface ServiceLandingPageProps {
  page: ServicePageConfig;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
  onTestVoiceAgent: () => void;
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({
  page,
  onNavigate,
  onOpenBooking,
  onTestVoiceAgent,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (
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

  const relatedPages = page.relatedSlugs
    .map((slug) => SERVICE_PAGES[slug])
    .filter(Boolean);

  return (
    <article className="bg-[#faf9f6] text-[#0f172a]">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2"
      >
        <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
          <li>
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="hover:text-[#e91e63] transition-colors inline-flex items-center gap-1 font-semibold text-slate-700"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </a>
          </li>
          <li aria-hidden="true" className="text-slate-300">
            /
          </li>
          <li>
            <a
              href="/#services"
              onClick={(e) => handleLinkClick(e, '/#services')}
              className="hover:text-[#e91e63] transition-colors"
            >
              Services
            </a>
          </li>
          <li aria-hidden="true" className="text-slate-300">
            /
          </li>
          <li className="text-[#e91e63] font-bold" aria-current="page">
            {page.shortTitle}
          </li>
        </ol>
      </nav>

      {/* 1. Hero Section with Single Clear H1 */}
      <section className="relative pt-4 pb-16 md:pt-8 md:pb-24 overflow-hidden border-b border-slate-200/80">
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Cols: H1, Subtitle & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200 shadow-2xs text-xs font-bold text-[#e91e63] font-mono uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#e91e63]" />
                <span>{page.heroBadge}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                {page.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {page.heroSubtitle}
              </p>

              {/* Primary Conversion CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#e91e63] hover:bg-[#d81557] rounded-full shadow-[0_12px_28px_rgba(233,30,99,0.32)] transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a 15-Min Live Demo</span>
                </button>

                <button
                  type="button"
                  onClick={onTestVoiceAgent}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-full transition-all cursor-pointer shadow-2xs"
                >
                  <Play className="w-3.5 h-3.5 text-[#e91e63] fill-current" />
                  <span>Test Live Voice Simulator</span>
                </button>

                <a
                  href={APP_STUDIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#e91e63] transition-colors"
                >
                  <span>Launch Studio (app.auraai.sbs)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e91e63] shrink-0" />
                  <span>Hindi, English &amp; Hinglish</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e91e63] shrink-0" />
                  <span>Sarvam AI Startup Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e91e63] shrink-0" />
                  <span>24/7 Automated Booking</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: 3D Avatar Visual Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.04)] text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-[#e91e63] mb-2">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Production-Ready Architecture</span>
                </div>

                <AvatarDisplay
                  src={page.avatarSrc}
                  alt={page.avatarAlt}
                  size="lg"
                  priority={true}
                  className="my-2"
                />

                <p className="text-xs text-slate-500 font-medium mt-2">
                  Engineered for{' '}
                  <strong className="text-slate-800">{page.targetAudienceSummary}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep-Dive Service Overview Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#e91e63] font-mono">
                // 01. OVERVIEW &amp; ARCHITECTURE
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                {page.overviewHeading}
              </h2>
              {page.overviewParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base text-slate-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Metrics / Benefits Summary Box */}
            <div className="lg:col-span-5 bg-[#faf9f6] rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-5">
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-950">
                {page.benefitsHeading}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {page.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs"
                  >
                    <span className="inline-block text-xs font-bold font-mono text-[#e91e63] bg-pink-50 px-2.5 py-1 rounded-full mb-2">
                      {benefit.metric}
                    </span>
                    <h3 className="text-sm font-bold text-slate-950 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities / Features Grid */}
      <section className="py-16 md:py-24 bg-[#faf9f6] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#e91e63] font-mono mb-2">
              // 02. CAPABILITIES &amp; DELIVERABLES
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              {page.keyFeaturesHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.03)] hover:border-pink-300 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-200 text-[#e91e63] font-mono text-xs font-bold flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-950 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Step-by-Step Workflow Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#e91e63] font-mono mb-2">
              // 03. EXECUTION PIPELINE
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              {page.workflowHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.workflowSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-3xl bg-[#faf9f6] border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-white bg-[#d90429] px-3 py-1 rounded-full inline-block mb-4">
                    STEP {step.step}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industry Use Cases Across India */}
      <section className="py-16 md:py-24 bg-[#faf9f6] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#e91e63] font-mono mb-2">
              // 04. REAL-WORLD INDIAN BUSINESS APPLICATIONS
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              {page.useCasesHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-950">
                    {uc.industry}
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-[#e91e63] bg-pink-50 px-3 py-1 rounded-full shrink-0">
                    Verified Use Case
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Scenario:</strong> {uc.scenario}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#e91e63] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Outcome:</strong> {uc.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions (FAQ Section) */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[#e91e63] font-mono mb-2">
              // 05. FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              {page.faqHeading}
            </h2>
          </div>

          <div className="space-y-3.5">
            {page.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-[#faf9f6] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors"
                  >
                    <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-slate-950">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#e91e63] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 bg-white ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Crimson CTA Banner + Internal Cross-Links to Other Dedicated Service Pages */}
      <section className="py-16 md:py-20 bg-[#faf9f6] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Crimson Banner */}
          <div className="rounded-3xl bg-gradient-to-br from-[#d90429] via-[#c90426] to-[#9b001a] text-white p-8 sm:p-12 shadow-[0_16px_40px_rgba(217,4,41,0.25)] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 text-center lg:text-left">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-red-200">
                READY TO AUTOMATE YOUR OPERATIONS?
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {page.ctaHeading}
              </h2>
              <p className="text-sm sm:text-base text-red-100 leading-relaxed">
                {page.ctaDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-full bg-white text-[#d90429] hover:bg-red-50 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book a Demo Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={APP_STUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-black/30 hover:bg-black/40 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Open app.auraai.sbs</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Internal Links to Related Dedicated Service Pages */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#e91e63] font-mono mb-1">
                  // EXPLORE RELATED SOLUTIONS
                </p>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-950">
                  More AI Automation Services for Indian Businesses
                </h2>
              </div>
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="text-xs font-bold text-[#e91e63] hover:underline inline-flex items-center gap-1"
              >
                <span>Return to Aura AI Automations Homepage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedPages.map((rel) => (
                <a
                  key={rel.slug}
                  href={rel.path}
                  onClick={(e) => handleLinkClick(e, rel.path)}
                  className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#e91e63] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e91e63] block mb-1">
                      DEDICATED SOLUTION
                    </span>
                    <h3 className="font-display text-base font-bold text-slate-950 group-hover:text-[#e91e63] transition-colors">
                      {rel.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {rel.metaDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-[#e91e63]">
                    <span>Explore {rel.navLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Shared Contact Section for Direct Lead Capture */}
      <ContactSection />
    </article>
  );
};
