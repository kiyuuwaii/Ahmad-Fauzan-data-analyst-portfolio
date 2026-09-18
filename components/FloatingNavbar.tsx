"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Briefcase, GraduationCap, Mail, FileCheck } from "lucide-react";

export default function FloatingNavbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Contact", path: "/contact", icon: Mail },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "About Me", path: "/", icon: User },
    { name: "Projects", path: "/projects", icon: FileCheck },
    { name: "Certificate", path: "/certificate", icon: GraduationCap },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 shadow-2xl rounded-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-zinc-100 text-zinc-950 font-semibold shadow-md"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
              }`}
            >
              <Icon size={18} className={isActive ? "text-zinc-950" : ""} />
              <span className="hidden md:block text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

