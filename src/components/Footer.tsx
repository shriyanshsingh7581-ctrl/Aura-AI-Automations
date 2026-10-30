import React from 'react';
import { AuraLogo } from './AuraLogo';
import { SocialButtonsRow } from './SocialLinks';
import { ALL_SERVICE_PAGES_LIST } from '../data/seoPages';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

    const isSamePageHash =
      (window.location.pathname === '/' || window.location.pathname === '') &&
      href.startsWith('/#');

    if (isSamePageHash) {
      const targetId = href.replace('/#', '');
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="py-1">
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                aria-label="Aura AI Automations Home"
                className="inline-block"
              >
                <AuraLogo height={40} theme="dark" />
              </a>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Turning ideas into scalable code &amp; automated AI systems. We build high-throughput AI voice receptionists, WhatsApp AI chatbots, spatial 3D web flagships, and autonomous cloud workflows for Indian businesses.
            </p>
            <div className="pt-2 flex flex-col gap-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 w-fit">
                Supported by the Sarvam AI Startup Program
              </span>

              {/* Social Links with Icons */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 block mb-2">Connect Directly:</span>
                <SocialButtonsRow darkTheme={true} />
              </div>
            </div>
          </div>

          {/* Dedicated Service Pages (Crawlable Internal Links) */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white">
              AI Services &amp; Solutions
            </h2>
            <ul className="space-y-2 text-sm">
              {ALL_SERVICE_PAGES_LIST.map((sp) => (
                <li key={sp.slug}>
                  <a
                    href={sp.path}
                    onClick={(e) => handleLinkClick(e, sp.path)}
                    className="hover:text-white transition-colors"
                  >
                    {sp.shortTitle}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleLinkClick(e, '/#services')}
                  className="hover:text-white transition-colors"
                >
                  Business Workflow Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Works & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white">
              Originals &amp; Contact
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#originals"
                  onClick={(e) => handleLinkClick(e, '/#originals')}
                  className="hover:text-white transition-colors"
                >
                  Riya.ai (Multimodal Companion)
                </a>
              </li>
              <li>
                <a
                  href="/#originals"
                  onClick={(e) => handleLinkClick(e, '/#originals')}
                  className="hover:text-white transition-colors"
                >
                  MikMok (Dynamic Video Engine)
                </a>
              </li>
              <li>
                <a
                  href="/#originals"
                  onClick={(e) => handleLinkClick(e, '/#originals')}
                  className="hover:text-white transition-colors"
                >
                  Workflow Automations (n8n &amp; Firebase)
                </a>
              </li>
              <li>
                <a 
                  href="https://app.auraai.sbs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                >
                  <span>Launch Platform (app.auraai.sbs)</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="mailto:contact@aurai.tech" 
                  className="text-white hover:text-[#e91e63] transition-colors font-medium"
                >
                  contact@aurai.tech
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Aura AI Automations. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="/#about" onClick={(e) => handleLinkClick(e, '/#about')} className="hover:text-slate-400 transition-colors">About</a>
            <a href="/#services" onClick={(e) => handleLinkClick(e, '/#services')} className="hover:text-slate-400 transition-colors">Services</a>
            <a href="/#tech-stack" onClick={(e) => handleLinkClick(e, '/#tech-stack')} className="hover:text-slate-400 transition-colors">Ecosystem</a>
            <a href="/#contact" onClick={(e) => handleLinkClick(e, '/#contact')} className="hover:text-slate-400 transition-colors">Contact</a>
            <a href="/sitemap.xml" className="hover:text-slate-400 transition-colors">Sitemap</a>
            <button
              onClick={onOpenBooking}
              className="text-[#e91e63] font-semibold hover:underline cursor-pointer"
            >
              Book Discovery Call
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
