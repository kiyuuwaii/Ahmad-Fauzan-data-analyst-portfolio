"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MapPin, Calendar, FolderKanban, Mail, Briefcase, Code, Camera } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const textToType = profileData.role;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        currentText += textToType[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [textToType]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="scroll-mt-36 pt-10 lg:pt-20 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Available badge */}
          <div className="liquid-glass-card !rounded-full !bg-emerald-50/60 !border-emerald-200/80 px-4 py-1.5 text-xs font-semibold text-emerald-700 inline-flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="relative z-10">
              {profileData.infoCards.find(card => card.label === "Status")?.value || "Available"}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.1]" dangerouslySetInnerHTML={{ __html: `Hi, I'm ${profileData.fullName.split(' ').slice(0, 2).join(' ')}<br />${profileData.fullName.split(' ').slice(2).join(' ')}` }}>
          </h1>

          <div className="text-2xl sm:text-3xl font-bold text-slate-700 mb-6 h-10">
            {typedText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </div>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-8 max-w-lg">
            {profileData.tagline}
          </p>

          {/* Quick badges */}
          <div className="flex flex-wrap gap-3 mb-10 justify-start">
            <span className="liquid-glass-card !rounded-full px-4 py-2 text-xs font-medium text-slate-700 inline-flex items-center gap-1.5">
              <MapPin size={16} /> Surabaya, Indonesia
            </span>
            <span className="liquid-glass-card !rounded-full px-4 py-2 text-xs font-medium text-slate-700 inline-flex items-center gap-1.5">
              <Calendar size={16} /> Available Now
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-5 justify-start">
            <a
              href="#projects"
              className="bg-gradient-to-b from-slate-800/90 via-slate-900/90 to-slate-950 backdrop-blur-xl border border-white/20 border-t-white/50 shadow-md text-white rounded-2xl px-6 py-3 text-sm font-medium transition-colors hover:bg-slate-900 inline-flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FolderKanban size={18} /> View Projects &rarr;
              </span>
            </a>
            <a
              href="#contact"
              className="liquid-btn-light rounded-xl px-6 py-3 text-sm font-medium transition inline-flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={18} /> Let&apos;s Work Together
              </span>
            </a>
          </div>

          {/* Follow me */}
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-500">
              <span className="text-slate-500 text-base font-semibold">Follow me:</span>
              <div className="flex gap-2">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full text-slate-600 transition-all duration-200 hover:bg-slate-900 hover:text-white"
                >
                  <LinkedinIcon className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
                  <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-200 ease-out group-hover:-top-9 group-hover:opacity-100 z-20">
                    <div className="relative rounded-md bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-white shadow-md whitespace-nowrap">
                      LinkedIn
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900"></div>
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full text-slate-600 transition-all duration-200 hover:bg-slate-900 hover:text-white"
                >
                  <GithubIcon className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
                  <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-200 ease-out group-hover:-top-9 group-hover:opacity-100 z-20">
                    <div className="relative rounded-md bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-white shadow-md whitespace-nowrap">
                      GitHub
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900"></div>
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full text-slate-600 transition-all duration-200 hover:bg-slate-900 hover:text-white"
                >
                  <InstagramIcon className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
                  <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-200 ease-out group-hover:-top-9 group-hover:opacity-100 z-20">
                    <div className="relative rounded-md bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-white shadow-md whitespace-nowrap">
                      Instagram
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-8 lg:mt-10">
          <div className="group relative aspect-[4/5] w-full max-w-md rounded-3xl border-4 border-white bg-slate-100 overflow-hidden shadow-xl transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:border-slate-400">
            <Image
              src="/IMG_6992.png"
              alt="Ahmad Fauzan Ash Shidiq"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
