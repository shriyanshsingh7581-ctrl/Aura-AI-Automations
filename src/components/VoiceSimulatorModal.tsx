import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, PhoneOff, Mic, MicOff, Volume2, Sparkles, CheckCircle2, User, Bot, Calendar, Clock } from 'lucide-react';

interface VoiceSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleRealCall: () => void;
}

interface Message {
  speaker: 'agent' | 'caller';
  text: string;
  time: string;
}

export const VoiceSimulatorModal: React.FC<VoiceSimulatorModalProps> = ({
  isOpen,
  onClose,
  onScheduleRealCall,
}) => {
  const [callStatus, setCallStatus] = useState<'idle' | 'calling' | 'connected' | 'ended'>('idle');
  const [activeStep, setActiveStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMuted, setIsMuted] = useState(false);

  const conversationFlow = [
    {
      agent: "Hi there! Thank you for calling Aura AI Automations. I'm Omni, your AI voice assistant. How can I assist you with your project today?",
      caller: "Hello! We are looking to automate our clinic's appointment booking and inbound inquiries.",
    },
    {
      agent: "That's exactly what our OmniDimension voice receptionists excel at! We handle round-the-clock patient scheduling with direct Google Calendar and CRM sync in under 600 milliseconds. How many calls do you receive daily?",
      caller: "We get around 120 calls a day, especially during morning hours.",
    },
    {
      agent: "Perfect. With that volume, our system saves roughly 28 staff hours every week while ensuring zero missed patient inquiries. Would you like me to book a 15-minute discovery session with our Lead Architect tomorrow at 2:00 PM?",
      caller: "Yes, tomorrow at 2:00 PM works great!",
    },
    {
      agent: "Done! I've reserved tomorrow at 2:00 PM and sent an instant SMS confirmation to your number. Is there anything else you'd like to ask?",
      caller: "No, that was remarkably fast and clear. Thank you!",
    },
    {
      agent: "You're most welcome! Have a fantastic day ahead. Goodbye!",
      caller: "[Call Completed — Lead Synced to CRM]",
    },
  ];

  const startCall = () => {
    setCallStatus('calling');
    setMessages([]);
    setActiveStep(0);

    setTimeout(() => {
      setCallStatus('connected');
      // Kick off first message
      const first = conversationFlow[0];
      setMessages([
        { speaker: 'agent', text: first.agent, time: '0:02' }
      ]);
    }, 1500);
  };

  const endCall = () => {
    setCallStatus('ended');
  };

  const triggerNextTurn = () => {
    if (activeStep < conversationFlow.length - 1) {
      const nextIdx = activeStep + 1;
      setActiveStep(nextIdx);
      const curr = conversationFlow[activeStep];
      const next = conversationFlow[nextIdx];

      setMessages((prev) => [
        ...prev,
        { speaker: 'caller', text: curr.caller, time: `0:${(nextIdx * 12).toString().padStart(2, '0')}` },
        { speaker: 'agent', text: next.agent, time: `0:${(nextIdx * 12 + 4).toString().padStart(2, '0')}` },
      ]);
    } else {
      setCallStatus('ended');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#e91e63] flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold flex items-center gap-2">
                <span>Aura OmniVoice Receptionist</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/30 text-pink-300">
                  OmniDimension Engine
                </span>
              </h3>
              <p className="text-xs text-slate-400">Interactive Inbound Call Simulation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          
          {callStatus === 'idle' && (
            <div className="text-center py-8 space-y-5">
              <div className="w-20 h-20 mx-auto rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center">
                <Volume2 className="w-10 h-10 text-[#e91e63] animate-bounce" />
              </div>
              <div className="max-w-md mx-auto">
                <h4 className="text-xl font-bold text-slate-900">Experience Live Voice AI</h4>
                <p className="text-sm text-slate-600 mt-2">
                  Test how our automated receptionist answers caller inquiries, schedules appointments, and updates CRM tables with zero human latency.
                </p>
              </div>
              <button
                onClick={startCall}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#e91e63] hover:bg-[#d81557] text-white font-semibold text-sm shadow-lg shadow-pink-500/25 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Simulate Inbound Call</span>
              </button>
            </div>
          )}

          {callStatus === 'calling' && (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#e91e63] text-white flex items-center justify-center animate-ping">
                <Phone className="w-8 h-8" />
              </div>
              <p className="text-sm font-semibold text-slate-800">Connecting to OmniDimension Voice Node...</p>
              <p className="text-xs text-slate-400 font-mono">Routing through Sarvam AI multilingual low-latency gateway</p>
            </div>
          )}

          {callStatus === 'connected' && (
            <div className="space-y-4">
              {/* Call Status Bar */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-800">Live Call in Progress</span>
                  <span className="text-xs font-mono text-slate-500">• Latency: 540ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-medium">
                    CRM Connected
                  </span>
                </div>
              </div>

              {/* Dynamic Waveform Visualizer */}
              <div className="h-12 bg-slate-900 rounded-xl px-4 flex items-center justify-center gap-1.5 overflow-hidden">
                {[60, 40, 80, 100, 70, 90, 50, 85, 95, 45, 65, 80, 55, 90, 100, 75, 60, 40, 80, 95, 65, 85].map((val, i) => (
                  <div
                    key={i}
                    className="w-1 bg-[#e91e63] rounded-full animate-pulse"
                    style={{
                      height: `${val}%`,
                      animationDuration: `${0.4 + (i % 5) * 0.15}s`,
                    }}
                  />
                ))}
              </div>

              {/* Live Transcript Chat */}
              <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 space-y-3 max-h-56 overflow-y-auto">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 ${
                      m.speaker === 'agent' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {m.speaker === 'agent' && (
                      <div className="w-6 h-6 rounded-full bg-[#e91e63] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                        AI
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                        m.speaker === 'agent'
                          ? 'bg-white border border-slate-200 text-slate-800'
                          : 'bg-[#e91e63] text-white'
                      }`}
                    >
                      <p>{m.text}</p>
                      <span className="text-[10px] opacity-60 block mt-1 text-right">{m.time}</span>
                    </div>
                    {m.speaker === 'caller' && (
                      <div className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                        You
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Caller Turn Trigger */}
              <div className="p-3 bg-white rounded-2xl border border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-600">
                  Simulate your reply as the customer:
                </span>
                <button
                  onClick={triggerNextTurn}
                  className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold cursor-pointer whitespace-nowrap shadow-xs"
                >
                  Speak / Advance Dialog →
                </button>
              </div>
            </div>
          )}

          {callStatus === 'ended' && (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Call Completed & Auto-Processed</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Caller intent extracted, appointment placed on calendar, and transcript synced to Firebase CRM in real time.
              </p>
              
              {/* Summary Card */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left max-w-md mx-auto space-y-2 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Scheduled:</span>
                  <span className="font-bold text-slate-900">Tomorrow at 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Intent:</span>
                  <span className="font-bold text-slate-900">Clinic Appointment Booking</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Latency:</span>
                  <span className="font-bold text-emerald-600">540ms avg response</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={startCall}
                  className="px-5 py-2.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  Restart Test
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onScheduleRealCall();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#e91e63] hover:bg-[#d81557] text-white text-xs font-semibold cursor-pointer shadow-md shadow-pink-500/20"
                >
                  Deploy for Your Brand
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-medium">
            Powered by OmniDimension & Sarvam AI Gateway
          </span>
          {callStatus === 'connected' && (
            <button
              onClick={endCall}
              className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneOff className="w-3.5 h-3.5" />
              <span>Hang Up</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
