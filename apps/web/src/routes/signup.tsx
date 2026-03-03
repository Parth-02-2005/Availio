import { createFileRoute, Link } from '@tanstack/react-router'


import { Calendar, ArrowRight, Github, Mail, Lock, User, AlertCircle, ChevronLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '#/components/ui/Button';

// 1. Define the Validation Schema
const signupSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid professional email"),
  password: z.string().min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Include at least one uppercase letter")
    .regex(/[0-9]/, "Include at least one number"),
});

type SignupFormData = z.infer<typeof signupSchema>;


const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white font-sans antialiased">
      {/* --- Left Side: Branding --- */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-slate-50 border-r border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern></defs>
        </div>
        <Link to="/" className="flex items-center gap-2 relative z-10">
          <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-100">
            <Calendar size={24} strokeWidth={3} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">Slot</span>
        </Link>
        <div className="relative z-10">
          <h1 className="text-5xl font-black text-slate-900 leading-tight mb-6">
            Start managing <br /><span className="text-indigo-600">events like a pro.</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-md">
            Join 500+ hosts using Slot to automate their scheduling and registration workflows.
          </p>
        </div>
        <div className="relative z-10 flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>Final Year Project</span>
          <div className="h-1 w-1 rounded-full bg-slate-300" />
          <span>MERN + Prisma Stack</span>
        </div>
      </div>

      {/* --- Right Side: Form Side --- */}
      <div className="relative flex flex-col justify-center items-center p-8 lg:p-24">
        
        {/* --- Floating Back Button --- */}
        <Link 
          to="/" 
          className="absolute top-8 left-8 lg:top-12 lg:left-12 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors group"
        >
          <div className="h-8 w-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-indigo-100 group-hover:bg-indigo-50 transition-all">
            <ChevronLeft size={16} />
          </div>
          Back to Home
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Create Account</h2>
            <p className="text-slate-500 font-medium">Enter your details to get started with Slot.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
              <div className="relative group">
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${errors.fullName ? 'text-rose-500' : 'text-slate-400 group-focus-within:text-indigo-600'}`}>
                  <User size={18} />
                </div>
                <input 
                  {...register("fullName")}
                  className={`w-full pl-11 pr-4 py-4 rounded-2xl text-sm font-bold outline-none transition-all border ${errors.fullName ? 'bg-rose-50/50 border-rose-200 focus:border-rose-500' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50'}`}
                  placeholder="Sahaj Rajput" 
                />
              </div>
              {errors.fullName && <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1 mt-1 ml-1 leading-none"><AlertCircle size={12}/> {errors.fullName.message}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
              <div className="relative group">
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${errors.email ? 'text-rose-500' : 'text-slate-400 group-focus-within:text-indigo-600'}`}>
                  <Mail size={18} />
                </div>
                <input 
                  {...register("email")}
                  className={`w-full pl-11 pr-4 py-4 rounded-2xl text-sm font-bold outline-none transition-all border ${errors.email ? 'bg-rose-50/50 border-rose-200 focus:border-rose-500' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50'}`}
                  placeholder="name@example.com" 
                />
              </div>
              {errors.email && <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1 mt-1 ml-1 leading-none"><AlertCircle size={12}/> {errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
              <div className="relative group">
                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${errors.password ? 'text-rose-500' : 'text-slate-400 group-focus-within:text-indigo-600'}`}>
                  <Lock size={18} />
                </div>
                <input 
                  {...register("password")}
                  type="password"
                  className={`w-full pl-11 pr-4 py-4 rounded-2xl text-sm font-bold outline-none transition-all border ${errors.password ? 'bg-rose-50/50 border-rose-200 focus:border-rose-500' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50'}`}
                  placeholder="••••••••" 
                />
              </div>
              {errors.password && <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1 mt-1 ml-1 leading-none"><AlertCircle size={12}/> {errors.password.message}</p>}
            </div>

            <Button disabled={isSubmitting} className="w-full py-4 rounded-2xl group flex justify-center items-center gap-2">
              {isSubmitting ? "Creating Account..." : "Create My Account"}
              {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </Button>
          </form>

          {/* Footer of Form */}
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center gap-6">
            <p className="text-sm font-bold text-slate-400">
              Already have an account? <Link to="/signin" className="text-indigo-600 hover:underline">Sign In</Link>
            </p>
            <button className="flex items-center justify-center gap-3 w-full py-3 border border-slate-200 rounded-2xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
              <Github size={18} />
              Sign up with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/signup')({
  component: SignupPage,
})

export default SignupPage;