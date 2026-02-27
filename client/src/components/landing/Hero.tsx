import React, { useState, useEffect } from 'react';
import { Zap ,  Globe, Plus, Check, Calendar, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Cycle through the three UI states every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const screens = [
    {
      id: 0,
      label: "Host Dashboard",
      content: (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">Active Events</h3>
            <div className="bg-indigo-600 p-1.5 rounded-lg text-white shadow-md shadow-indigo-100">
              <Plus size={18} strokeWidth={3} />
            </div>
          </div>
          <div className="space-y-3">
            {[
              { name: "MERN Stack Workshop", reg: "18/20", color: "bg-indigo-500" },
              { name: "DSA Mock Interview", reg: "5/10", color: "bg-emerald-500" }
            ].map((event, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white group hover:border-indigo-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-lg ${event.color} opacity-10 flex items-center justify-center font-bold text-slate-900`}>
                    {event.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{event.name}</p>
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{event.reg} Registered</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 1,
      label: "Guest Registration",
      content: (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center py-4">
          <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calendar className="text-indigo-600" size={28} />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Join the Event</h3>
          <p className="text-xs text-slate-400 mb-6">Confirm your details to secure a slot</p>
          <div className="space-y-2 mb-4">
            <div className="h-10 w-full bg-slate-50 border border-slate-100 rounded-lg" />
            <div className="h-10 w-full bg-slate-50 border border-slate-100 rounded-lg" />
          </div>
          <Button size="sm" className="w-full">Reserve My Slot</Button>
        </div>
      )
    },
    {
      id: 2,
      label: "Auto Calendar Sync",
      content: (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col items-center justify-center h-full">
          <div className="relative mb-6">
            <div className="h-20 w-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600">
              <Check size={40} strokeWidth={3} />
            </div>
          </div>
          <h3 className="font-bold text-slate-900">Synced Successfully!</h3>
          <p className="text-xs text-slate-500 mt-2 text-center leading-relaxed">
            This event is now in your <br /><b>Google Calendar</b>.
          </p>
          <div className="mt-8 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full flex items-center gap-2">
            <Clock size={14} className="text-slate-400" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Feb 26, 2:00 PM</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative bg-[#f9fafb] mt-2 overflow-hidden pt-16 pb-32 px-6 md:px-10">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
        {/* LEFT SIDE: Content */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
            <Zap size={14} fill="currentColor" /> Week 6: Production Live
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8">
            Event registration, <br />
            <span className="text-indigo-600 italic">simplified.</span>
          </h1>
          
          <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
            Create events, share links, and let <b>Slot</b> handle the registrations and calendar invites automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button size="lg" className="w-full sm:w-auto">Get Started Free</Button>
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-11 w-11 rounded-full border-4 border-white bg-slate-200" />
              ))}
              <div className="pl-6 text-sm font-bold text-slate-400 self-center">Trusted by 500+ hosts</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Dynamic UI Mockup */}
        <div className="lg:col-span-6 relative">
          <div className="relative z-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Fake Browser Bar */}
            <div className="bg-slate-50/50 border-b border-slate-100 p-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </div>
              <div className="px-4 py-1.5 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-slate-400 flex items-center gap-2 shadow-sm">
                <Globe size={12} /> slot.io/sahaj-rajput
              </div>
              <div className="w-10" />
            </div>

            {/* Dynamic Content Frame */}
            <div className="p-10 h-[420px] flex flex-col justify-center">
              {screens[activeTab].content}
            </div>

            {/* Tab Controls / Progress */}
            <div className="flex border-t border-slate-100">
              {screens.map((screen, i) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    activeTab === i ? 'text-indigo-600 bg-white' : 'text-slate-300 bg-slate-50/30'
                  }`}
                >
                  <span className={`block h-1 w-12 mx-auto mb-2 rounded-full transition-all ${
                    activeTab === i ? 'bg-indigo-600' : 'bg-transparent'
                  }`} />
                  {screen.label}
                </button>
              ))}
            </div>
          </div>

          {/* Background Blobs */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-50 -z-10" />
        </div>
      </div>
    </section>
  );
};