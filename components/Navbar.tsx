"use client";

import { useEffect, useState } from "react";
import { Home, User, Briefcase, FolderGit2, Code2, Mail } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", path: "#home", id: "home", icon: Home },
    { name: "About", path: "#about", id: "about", icon: User },
    { name: "Experience", path: "#experience", id: "experience", icon: Briefcase },
    { name: "Projects", path: "#projects", id: "projects", icon: FolderGit2 },
    { name: "Skills", path: "#skills", id: "skills", icon: Code2 },
    { name: "Contact", path: "#contact", id: "contact", icon: Mail },
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
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
      <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 bg-white/85 backdrop-blur-md border border-slate-200 shadow-md rounded-full whitespace-nowrap overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.path}
              className={`flex items-center gap-1.5 transition-all duration-300 ${
                isActive
                  ? "bg-slate-900 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium"
              }`}
            >
              <Icon size={16} className={isActive ? "text-white" : "text-slate-500"} />
              <span className={isActive ? "inline-block" : "hidden sm:inline-block"}>{item.name}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
