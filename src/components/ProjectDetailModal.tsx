import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2, Cpu, Database, Server, Smartphone, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenBooking,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#e91e63] text-white">
                {project.category}
              </span>
              <span className="text-xs text-slate-300">Case Study</span>
            </div>
            <h3 className="font-display text-2xl font-bold mt-1 text-white">
              {project.name}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key metrics grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            {project.stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="text-xs text-slate-500 font-medium">{stat.label}</span>
                <p className="font-display text-xl sm:text-2xl font-black text-slate-900 mt-0.5 tabular-nums">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e91e63] mb-2">
              Executive Summary
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                The Engineering Challenge
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.caseStudyDetails.challenge}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-200/80">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#e91e63] mb-1">
                Aura's Architectural Solution
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.caseStudyDetails.solution}
              </p>
            </div>
          </div>

          {/* Architecture Notes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              System Architecture & Core Infrastructure
            </h4>
            <div className="space-y-2">
              {project.caseStudyDetails.architectureNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#e91e63] shrink-0 mt-0.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Production Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Want similar architecture for your venture?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#e91e63] hover:bg-[#d81557] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-pink-500/20 cursor-pointer"
            >
              <span>Build Similar System</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
