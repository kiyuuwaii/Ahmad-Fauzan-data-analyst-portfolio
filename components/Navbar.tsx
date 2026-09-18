"use client";

import { useEffect, useState } from "react";
import { Home, User, Briefcase, FolderGit2, Code2, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "#home", id: "home", icon: Home },
  { name: "About", path: "#about", id: "about", icon: User },
  { name: "Experience", path: "#experience", id: "experience", icon: Briefcase },
  { name: "Projects", path: "#projects", id: "projects", icon: FolderGit2 },
  { name: "Skills", path: "#skills", id: "skills", icon: Code2 },
  { name: "Contact", path: "#contact", id: "contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeItem = navItems.find((i) => i.id === activeSection) || navItems[0];

  return (
    <>
      {/* 1. DESKTOP NAVBAR (Horizontal Liquid Glass) */}
      <nav className="hidden sm:flex fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 max-w-fit">
        <div className="relative flex items-center flex-nowrap gap-1.5 justify-center whitespace-nowrap bg-white/45 backdrop-blur-2xl backdrop-saturate-180 border border-white/70 shadow-[0_12px_32px_rgba(15,23,42,0.08),inset_0_1.5px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.04)] rounded-full p-1.5">
          {/* Top highlight */}
          <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
          
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.path}
                aria-label={item.name}
                className={`relative flex items-center justify-center shrink-0 transition-colors duration-200 px-4 py-2 text-base font-medium rounded-full ${
                  isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktopLiquidActivePill"
                    transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-950 border border-white/20 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),0_6px_16px_rgba(15,23,42,0.25)] rounded-full"
                  >
                    <div className="absolute inset-x-2 top-0.5 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
                  </motion.div>
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon size={18} />
                  <span>{item.name}</span>
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* 2. MOBILE TRIGGER BUTTON */}
      <nav className="flex sm:hidden fixed top-4 left-1/2 -translate-x-1/2 z-[60] w-full justify-center px-4 pointer-events-none">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="pointer-events-auto relative flex items-center justify-between gap-6 px-5 py-2.5 w-auto min-w-[200px] bg-white/45 backdrop-blur-2xl backdrop-saturate-180 border border-white/70 shadow-[0_12px_32px_rgba(15,23,42,0.08),inset_0_1.5px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.04)] rounded-full active:scale-95 transition-transform"
        >
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
          <span className="font-bold text-slate-800 text-sm tracking-wide">
            {activeItem.name}
          </span>
          <div className="bg-white/80 shadow-sm border border-slate-200/50 p-1.5 rounded-full text-slate-700">
            <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}>
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.div>
          </div>
        </button>
      </nav>

      {/* 3. MOBILE FLOATING DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[55] bg-slate-900/10 backdrop-blur-sm sm:hidden"
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
              animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
              exit={{ opacity: 0, y: -10, scale: 0.95, x: "-50%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed top-20 left-1/2 z-[60] w-[86vw] bg-white/80 backdrop-blur-3xl border border-white/80 shadow-2xl rounded-3xl p-3 flex flex-col gap-1.5 sm:hidden"
            >
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-3 px-5 py-4 rounded-2xl w-full text-left transition-colors relative overflow-hidden ${
                      isActive
                        ? "text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.3)]"
                        : "text-slate-600 hover:bg-slate-100/80"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-950 -z-10" />
                    )}
                    <Icon size={20} className={isActive ? "text-white" : "text-slate-500"} />
                    <span className="font-semibold text-sm">{item.name}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
