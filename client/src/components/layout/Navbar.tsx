import React, { useState, useEffect } from "react";
import { Calendar, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },

    { name: "Integrations", href: "#stack" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0  w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* --- Logo --- */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">
            <Calendar className="text-white w-5 h-5" strokeWidth={3} />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase text-slate-900">
            Slot
          </span>
        </div>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-slate-200" />

          <div className="flex items-center gap-6">
            <Link
              to="/signin"
              className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 md:hidden animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-900 flex justify-between items-center"
              >
                {link.name}
                <ChevronRight size={18} className="text-slate-300" />
              </a>
            ))}
            <hr className="border-slate-50" />
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
