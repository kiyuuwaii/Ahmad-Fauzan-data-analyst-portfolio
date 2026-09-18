"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MapPin, Calendar, FolderKanban, Mail, Briefcase, Code, Camera } from "lucide-react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Data Analyst";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section id="home" className="scroll-mt-28 pt-28 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Available badge */}
          <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-3 py-1 text-xs font-medium inline-flex items-center gap-2 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for freelance work
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 leading-tight">
            Hi, I&apos;m Ahmad Fauzan<br />Ash Shidiq
          </h1>

          <div className="text-xl sm:text-2xl font-bold text-slate-700 mb-4 h-9">
            {typedText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </div>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6 max-w-lg">
            I solve complex business problems through data analysis, building interactive dashboards, and transforming raw datasets into strategic decisions that drive measurable impact.
          </p>

          {/* Quick badges */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
            <span className="bg-slate-100 text-slate-700 text-xs px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 font-medium">
              <MapPin size={14} /> Surabaya, Indonesia
            </span>
            <span className="bg-slate-100 text-slate-700 text-xs px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 font-medium">
              <Calendar size={14} /> Available Now
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-5 py-2.5 font-medium shadow-sm transition inline-flex items-center gap-2"
            >
              <FolderKanban size={18} /> View Projects &rarr;
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl px-5 py-2.5 font-medium shadow-sm transition inline-flex items-center gap-2"
            >
              <Mail size={18} /> Let&apos;s Work Together
            </a>
          </div>

          {/* Follow me */}
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-medium">Follow me:</span>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-slate-900 transition-colors"><Briefcase size={20} /></a>
              <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-slate-900 transition-colors"><Code size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-slate-900 transition-colors"><Camera size={20} /></a>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5 w-full max-w-sm mx-auto">
          <div className="relative aspect-[4/5] w-full rounded-3xl shadow-xl border-4 border-white overflow-hidden bg-slate-100">
            <Image
              src="/Foto-Formal-2-Croped.jpeg"
              alt="Ahmad Fauzan Ash Shidiq"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
