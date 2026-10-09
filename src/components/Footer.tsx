import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#e91e63] to-[#f43f5e] flex items-center justify-center text-white text-sm font-black shadow-md shadow-pink-500/20">
                A
              </span>
              <span className="font-display text-xl font-bold text-white tracking-tight">
                Aura AI Automations
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Turning ideas into scalable code & automated AI systems. We build high-throughput AI voice receptionists, spatial 3D web flagships, and autonomous cloud workflows.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                Supported by the Sarvam AI Startup Program
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI Voice Receptionists
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  3D Spatial Web Experiences
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cross-Platform Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud GPU Infrastructure
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Self-Hosted n8n Pipelines
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Works & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Originals & Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#originals" className="hover:text-white transition-colors">
                  Muskaan.ai (Multimodal Companion)
                </a>
              </li>
              <li>
                <a href="#originals" className="hover:text-white transition-colors">
                  MikMok (Dynamic Video Engine)
                </a>
              </li>
              <li>
                <a href="#originals" className="hover:text-white transition-colors">
                  Workflow Automations (n8n & Firebase)
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
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-400 transition-colors">About</a>
            <a href="#services" className="hover:text-slate-400 transition-colors">Services</a>
            <a href="#tech-stack" className="hover:text-slate-400 transition-colors">Ecosystem</a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Contact</a>
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
