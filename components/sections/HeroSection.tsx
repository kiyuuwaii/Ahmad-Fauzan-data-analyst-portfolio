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
          <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-3 py-1 text-xs font-medium inline-flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {profileData.infoCards.find(card => card.label === "Status")?.value || "Available"}
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
            <span className="bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 font-medium">
              <MapPin size={16} /> Surabaya, Indonesia
            </span>
            <span className="bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 font-medium">
              <Calendar size={16} /> Available Now
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 justify-start">
            <a
              href="#projects"
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition inline-flex items-center gap-2"
            >
              <FolderKanban size={18} /> View Projects &rarr;
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition inline-flex items-center gap-2"
            >
              <Mail size={18} /> Let&apos;s Work Together
            </a>
          </div>

          {/* Follow me */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200">
              <span className="text-slate-500 text-sm font-medium">Follow me:</span>
              <div className="flex gap-2">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group relative flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-all duration-200 hover:bg-slate-900 hover:text-white"
                >
                  <LinkedinIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
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
                  className="group relative flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-all duration-200 hover:bg-slate-900 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
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
                  className="group relative flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-all duration-200 hover:bg-slate-900 hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
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
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
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
