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
      <nav className="hidden sm:flex fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-fit">
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
                className={`relative flex items-center justify-center shrink-0 transition-colors duration-200 px-4 py-2 text-base rounded-full ${
                  isActive ? "text-slate-950 font-semibold" : "text-slate-500 font-medium hover:text-slate-800"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktopLiquidActivePill"
                    transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.6 }}
                    className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-b from-white/90 via-white/55 to-white/35 backdrop-blur-2xl backdrop-saturate-200 border border-white/90 shadow-[0_6px_20px_rgba(15,23,42,0.07),0_1px_3px_rgba(15,23,42,0.05),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-1px_1.5px_rgba(255,255,255,0.6)]"
                  >
                    <div className="pointer-events-none absolute inset-x-1.5 top-0.5 h-[48%] rounded-full bg-gradient-to-b from-white via-white/50 to-transparent opacity-90" />
                    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-white blur-[0.3px]" />
                    <div className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
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

      {/* 2. MOBILE BOTTOM NAVIGATION */}
      <nav className="flex sm:hidden fixed bottom-6 left-5 z-[60] pointer-events-none items-center gap-3">
        {/* Trigger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="pointer-events-auto relative flex items-center justify-center w-12 h-12 rounded-full bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_12px_28px_rgba(15,23,42,0.16),inset_0_1.5px_2px_rgba(255,255,255,1)] active:scale-95 transition-transform text-slate-800 z-50"
        >
          <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}>
            {isMobileMenuOpen ? (
              <X size={20} />
            ) : (
              (() => {
                const ActiveIcon = activeItem.icon;
                return <ActiveIcon size={20} />;
              })()
            )}
          </motion.div>
        </button>

        {/* Unroll Menu Capsule */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Invisible Backdrop to catch clicks */}
              <div 
                className="fixed inset-0 z-40 pointer-events-auto"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              <motion.div
                initial={{ width: 0, opacity: 0, scale: 0.85, x: -10 }}
                animate={{ width: 'auto', opacity: 1, scale: 1, x: 0 }}
                exit={{ width: 0, opacity: 0, scale: 0.85, x: -10 }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="pointer-events-auto relative flex items-center gap-1.5 p-1.5 rounded-full bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_12px_28px_rgba(15,23,42,0.12),inset_0_1.5px_2px_rgba(255,255,255,1)] z-50 overflow-hidden"
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isActive 
                          ? "bg-slate-900 text-white shadow-sm" 
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                    >
                      <Icon size={18} />
                    </button>
                  );
                })}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
