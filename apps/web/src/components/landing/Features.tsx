import React, { useState } from 'react';
import { 
  Globe, ShieldCheck, Calendar, 
  Mail, Users, Lock, ChevronLeft, ChevronRight,
  Sparkles, ArrowUpRight
} from 'lucide-react';

const featureList = [
  { 
    title: 'Public Event Pages', 
    desc: 'Instantly generate a public URL for any event. Guests can register in seconds without an account.', 
    icon: Globe,
    accent: 'from-blue-500 to-cyan-400'
  },
  { 
    title: 'Google Calendar Sync', 
    desc: 'Automatically add events to your attendees’ Google Calendars upon successful registration.', 
    icon: Calendar,
    accent: 'from-indigo-600 to-violet-500'
  },
  { 
    title: 'Capacity Management', 
    desc: 'Database-level checks ensure you never overbook. Registration closes automatically when full.', 
    icon: ShieldCheck,
    accent: 'from-emerald-500 to-teal-400'
  },
  { 
    title: 'Email Confirmations', 
    desc: 'Automated professional emails sent to every guest to confirm their registration details.', 
    icon: Mail,
    accent: 'from-rose-500 to-orange-400'
  },
  { 
    title: 'Host Dashboard', 
    desc: 'A central command center to track your events, manage registrations, and see guest lists.', 
    icon: Users,
    accent: 'from-amber-500 to-yellow-400'
  },
  { 
    title: 'Security First', 
    desc: 'JWT-based auth, server-side validation, and rate limiting to keep your platform secure.', 
    icon: Lock,
    accent: 'from-slate-700 to-slate-500'
  }
];

export const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Total steps to slide (Total - items shown)
  const maxIndex = featureList.length - 3;

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <section id="features" className="py-32 px-6 md:px-10 bg-[#FCFCFD]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- ENHANCED HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm mb-6">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Sparkles size={14} fill="currentColor" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                Core Capabilities
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[0.95]">
              Built for <br />
              <span className="relative inline-block text-indigo-600">
                professional
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-100 rounded-full opacity-50" />
              </span>
              <span className="text-slate-300 ml-4">scheduling.</span>
            </h2>
            
            <p className="mt-8 text-xl text-slate-500 font-medium max-w-md border-l-4 border-indigo-100 pl-6">
              A high-performance engine for your events, built with <b>Prisma</b> and <b>PostgreSQL</b>.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="group h-16 w-16 rounded-3xl border-2 border-slate-100 flex items-center justify-center disabled:opacity-20 hover:border-indigo-600 hover:bg-white transition-all shadow-sm"
                >
                  <ChevronLeft className="group-hover:-translate-x-1 transition-transform text-slate-900" size={28} />
                </button>
                <button 
                  onClick={nextSlide}
                  disabled={currentIndex === maxIndex}
                  className="group h-16 w-16 rounded-3xl border-2 border-slate-100 flex items-center justify-center disabled:opacity-20 hover:border-indigo-600 hover:bg-white transition-all shadow-sm"
                >
                  <ChevronRight className="group-hover:translate-x-1 transition-transform text-slate-900" size={28} />
                </button>
            </div>
          </div>
        </div>

        {/* --- THE SLIDER WINDOW --- */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {featureList.map((feature, i) => (
              <div key={i} className="min-w-full md:min-w-[33.333%] px-4">
                <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 relative overflow-hidden h-full">
                  
                  {/* Background Number */}
                  <span className="absolute top-8 right-10 text-indigo-600 font-black text-6xl group-hover:text-slate-100 transition-colors pointer-events-none">
                    0{i + 1}
                  </span>

                  {/* Icon Container */}
                  <div className="relative mb-10 w-16 h-16">
                    <div className={`absolute -inset-2 bg-gradient-to-br ${feature.accent} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity`} />
                    <div className="relative bg-white border border-slate-100 w-full h-full rounded-2xl flex items-center justify-center shadow-sm group-hover:border-transparent transition-all">
                      <feature.icon size={28} className="text-slate-900 group-hover:text-indigo-600 transition-colors" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      {feature.title}
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0 text-indigo-600" />
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Hover Accent Bar */}
                  <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${feature.accent} group-hover:w-full transition-all duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};