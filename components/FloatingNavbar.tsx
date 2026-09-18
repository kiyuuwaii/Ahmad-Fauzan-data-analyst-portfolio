"use client";

import { useEffect, useState } from "react";
import { User, Briefcase, GraduationCap, Mail, FileCheck } from "lucide-react";

export default function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Contact", path: "#contact", id: "contact", icon: Mail },
    { name: "Experience", path: "#experience", id: "experience", icon: Briefcase },
    { name: "About Me", path: "#home", id: "home", icon: User },
    { name: "Projects", path: "#projects", id: "projects", icon: FileCheck },
    { name: "Certificate", path: "#certificate", id: "certificate", icon: GraduationCap },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
      <nav className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 shadow-2xl rounded-2xl whitespace-nowrap overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const isCenter = item.id === "home";
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.path}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-zinc-100 text-zinc-950 font-semibold shadow-md"
                  : isCenter 
                    ? "bg-zinc-800/40 text-zinc-200 hover:bg-zinc-800/60 hover:text-zinc-100" 
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
              }`}
            >
              <Icon size={18} className={isActive ? "text-zinc-950" : ""} />
              <span className="text-xs sm:text-sm hidden md:inline-block">{item.name}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
