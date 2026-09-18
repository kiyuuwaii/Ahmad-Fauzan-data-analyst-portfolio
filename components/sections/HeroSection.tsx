"use client";

import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Linkedin, Github, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = profileData.role + "|";
  
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, [fullText]);

  return (
    <section id="home" className="scroll-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-3 py-1 text-xs font-medium inline-flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for work / opportunities
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
            Hi, I'm {profileData.name}
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-bold text-slate-700 mb-4 h-8">
            {typedText}
          </h2>
          
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-5 max-w-lg">
            {profileData.tagline} {profileData.aboutText[1]}
          </p>

          <div className="flex gap-3 mb-8">
            <span className="bg-slate-100 text-slate-700 border border-slate-200 rounded-full px-3 py-1 text-xs font-medium">
              📍 {profileData.contact.location}
            </span>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-xs font-medium">
              ⚡ Available Now
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-8 justify-center md:justify-start">
            <Link href="#projects" className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-5 py-2.5 font-medium shadow-sm transition-colors">
              View Projects &rarr;
            </Link>
            <Link href="#contact" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 rounded-xl px-5 py-2.5 font-medium transition-colors">
              Let's Work Together
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-medium">Follow me:</span>
            <div className="flex gap-3">
              <a href={profileData.socials.linkedin} className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
              <a href={profileData.socials.github} className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20} /></a>
              <a href={profileData.socials.instagram} className="text-slate-400 hover:text-slate-900 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="md:col-span-5 w-full max-w-sm mx-auto">
          <div className="relative aspect-[4/5] w-full rounded-2xl shadow-lg border border-slate-200 overflow-hidden bg-slate-100">
            <Image
              src="/Foto-Formal-2-Croped.jpeg"
              alt={profileData.fullName}
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
