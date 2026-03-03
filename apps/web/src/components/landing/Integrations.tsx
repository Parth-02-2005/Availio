
import { ArrowRight } from 'lucide-react';

// Using high-quality logo URLs for a "Product" feel
const techStack = [

  { name: 'Google Calendar', logo: 'https://cdn.simpleicons.org/googlecalendar/4285F4' },
 
  { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
 
  { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/000000' },
  { name: 'Render', logo: 'https://cdn.simpleicons.org/render/46E3B7' },

  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/4A154B' },
  { name: 'Gmail', logo: 'https://cdn.simpleicons.org/gmail/EA4335' },

  { name: 'LinkedIn', logo: 'https://cdn.simpleicons.org/linkedin/0A66C2' },
  { name: 'Skype', logo: 'https://cdn.simpleicons.org/skype/00AFF0' },
  { name: 'Mail', logo: 'https://cdn.simpleicons.org/icloud/000000' }, // Using iCloud for a generic mail feel
  { name: 'Google Meet', logo: 'https://cdn.simpleicons.org/googlemeet/00897B' },
  { name: 'Microsoft Teams', logo: 'https://cdn.simpleicons.org/microsoftteams/6264A7' },
  { name: 'Zoom', logo: 'https://cdn.simpleicons.org/zoom/2D8CFF' },
  { name: 'Outlook', logo: 'https://cdn.simpleicons.org/microsoftoutlook/0078D4' },
  { name: 'Salesforce', logo: 'https://cdn.simpleicons.org/salesforce/00A1E0' },
  { name: 'PayPal', logo: 'https://cdn.simpleicons.org/paypal/003087' },
];

export const Integrations = () => {
  return (
    <section id="stack" className="py-24 px-6 md:px-10 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-[#092640] tracking-tight leading-[1.1] mb-6">
              Connect Slot to the <br />
              <span className="text-indigo-600">tools you already use</span>
            </h2>
          </div>
          
          <div className="lg:text-right">
            <p className="text-slate-500 font-medium text-lg mb-4">
              Built with a production-ready stack
            </p>
            <button className="inline-flex items-center gap-2 text-[#092640] font-bold hover:text-indigo-600 transition-colors group">
              View all 20+ integrations 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* --- Product-Style Icon Grid --- */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 md:gap-8">
          {techStack.map((tech, i) => (
            <div 
              key={i}
              className="group relative aspect-square bg-white rounded-3xl border border-slate-100 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:shadow-indigo-100/50 hover:-translate-y-2 transition-all duration-500 cursor-pointer flex items-center justify-center p-6 sm:p-8"
            >
              {/* Internal Soft Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Real Logo Component */}
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="w-full h-full object-contain relative z-10 filter  group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-110"
              />

              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20 pointer-events-none">
                {tech.name}
              </div>
            </div>
          ))}

          {/* Empty 'Add' Slot to mimic the image exactly */}
         
        </div>
      </div>
    </section>
  );
};