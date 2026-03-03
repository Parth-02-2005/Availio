
import { Calendar, Github, Twitter, Linkedin, Mail, ArrowUpRight} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f9fafb] pt-32 pb-16 overflow-hidden">
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-50/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-10">
        
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 mb-24">
          
          {/* Section 1: Brand (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 bg-indigo-600 rounded-[1.25rem] flex items-center justify-center shadow-2xl shadow-indigo-200">
                <Calendar className="text-white w-6 h-6" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Slotyn</span>
            </div>
            
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm mb-10">
              The high-performance engine for seamless event registration and automated scheduling.
            </p>

            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Links (Aligned 5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-x-8">
            {/* Product Column */}
            <div className="flex flex-col items-start space-y-7">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">Product</h4>
              <ul className="flex flex-col items-start gap-y-5">
                {['Features', 'Roadmap', 'Stack'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-[15px] font-bold text-slate-400 hover:text-slate-900 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developer Column */}
            <div className="flex flex-col items-start space-y-7">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">Developer</h4>
              <ul className="flex flex-col items-start gap-y-5">
                <li>
                  <a href="https://github.com/sahajj11" className="flex items-center gap-1.5 text-[15px] font-bold text-slate-400 hover:text-slate-900 transition-colors group">
                    GitHub <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                  </a>
                </li>
                <li><a href="#" className="text-[15px] font-bold text-slate-400 hover:text-slate-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-[15px] font-bold text-slate-400 hover:text-slate-900 transition-colors">API Keys</a></li>
              </ul>
            </div>
          </div>

          {/* Section 3: Floating Card (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="relative p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
              <h4 className="text-lg font-black text-slate-900 mb-2">Build Together</h4>
              <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">Let's discuss the 6-week architecture.</p>
              <a href="mailto:sahaj@example.com" className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl text-xs font-bold hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300">
                <Mail size={16} /> Contact
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Meta Bar --- */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
         

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
              © {currentYear} SLOTYN PLATFORM 
            </p>
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-indigo-100 to-transparent opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer