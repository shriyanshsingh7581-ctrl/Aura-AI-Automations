import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GenEmojiAvatar } from './GenEmojiAvatar';
import { ContactFormData } from '../types';
import { Send, CheckCircle2, Mail, Clock, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    service: 'AI Voice Receptionists',
    message: '',
    budget: '$5k - $15k',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message or project description';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a little more detail (min 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      service: 'AI Voice Receptionists',
      message: '',
      budget: '$5k - $15k',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#e91e63] mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Let's Engineer Your Next High-Performance System
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Tell us about your project, target launch date, and technical vision. We respond to all inquiries within 2 hours.
          </p>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Side: Clean Minimal Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#faf9f6] rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center text-[#e91e63]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Inquiry Received, {formData.firstName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our lead architect has received your project details for <span className="font-semibold text-slate-900">{formData.service}</span>. We will review your requirements and reach out to <span className="font-semibold text-slate-900">{formData.email}</span> within 2 hours.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href="mailto:contact@aurai.tech"
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Email Direct: contact@aurai.tech
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        First Name <span className="text-[#e91e63]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName) setErrors({ ...errors, firstName: '' });
                        }}
                        placeholder="e.g. Maya"
                        className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e91e63] transition-all ${
                          errors.firstName ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Last Name <span className="text-[#e91e63]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData({ ...formData, lastName: e.target.value });
                          if (errors.lastName) setErrors({ ...errors, lastName: '' });
                        }}
                        placeholder="e.g. Vance"
                        className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e91e63] transition-all ${
                          errors.lastName ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-[#e91e63]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e91e63] transition-all ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Primary Service Interested In */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service / Primary Objective
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e91e63] transition-all"
                    >
                      <option value="AI Voice Receptionists">Automated AI Voice Receptionists (OmniDimension)</option>
                      <option value="3D Websites">3D Websites & Spatial Experiences (Three.js)</option>
                      <option value="Mobile App Development">Mobile App Development (React Native / Kodular)</option>
                      <option value="Cloud Infrastructure & AI">Cloud Infrastructure & GPU Models (GCP / Replicate / Vercel)</option>
                      <option value="Full Workflow Automations">Custom Workflow Automations (Self-hosted n8n & Firebase)</option>
                    </select>
                  </div>

                  {/* Textarea for the message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message / Project Details <span className="text-[#e91e63]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Briefly describe what you are looking to build, current technical bottlenecks, or your target timeline..."
                      className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e91e63] transition-all resize-y ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button: Full width, vibrant pink/red accent color */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#e91e63] hover:bg-[#d81557] active:scale-[0.99] text-white font-bold text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(233,30,99,0.35)] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Routing Inbound Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center mt-3">
                    We sign mutual NDAs before technical deep-dives. No spam, ever.
                  </p>

                </form>
              )}

            </div>
          </div>

          {/* Right Side: Welcoming 3D Avatar */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full p-6 sm:p-8 rounded-3xl bg-[#faf9f6] border border-slate-200 shadow-[0_12px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center">
              
              {/* Avatar Anchor */}
              <GenEmojiAvatar variant="welcoming" className="my-2" />

              {/* Founder / Architect Guarantee */}
              <div className="mt-4 pt-4 border-t border-slate-200 w-full space-y-3">
                <div className="text-left">
                  <h4 className="text-sm font-bold text-slate-900">What happens next?</h4>
                  <ul className="mt-2 space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#e91e63] shrink-0" />
                      <span>Direct response from our Engineering Lead in &lt; 2 hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#e91e63] shrink-0" />
                      <span>Complimentary architectural scoping & feasibility audit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#e91e63] shrink-0" />
                      <span>Fixed-price milestone agreement with clear SLA</span>
                    </li>
                  </ul>
                </div>

                {/* Direct Connect Chips */}
                <div className="p-3 bg-white rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Need immediate assistance?</span>
                  <a
                    href="mailto:lead@aurai.tech"
                    className="font-bold text-[#e91e63] hover:underline"
                  >
                    lead@aurai.tech
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
