"use client";

import Image from "next/image";
import { User, MapPin, GraduationCap, Mail, Phone, Briefcase, Download, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

const iconMap: Record<string, any> = {
  User,
  MapPin,
  GraduationCap,
  Mail,
  Phone,
  Briefcase
};

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section header - left aligned */}
        <div className="mb-14">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">// ABOUT ME</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">About Me</h2>
          <p className="text-slate-600 max-w-2xl">
            Passionate about turning raw data into strategic business solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Photo */}
          <div className="lg:col-span-4 xl:col-span-4">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
              <Image
                src="/Foto-Formal-2-Croped.jpeg"
                alt={profileData.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Detail card */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:py-10 sm:px-12 lg:px-16 shadow-sm flex flex-col h-full">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{profileData.aboutGreeting}</h3>
              <div className="text-slate-600 leading-relaxed space-y-4 mb-8">
                {profileData.aboutText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {profileData.infoCards.map((item) => {
                  const Icon = iconMap[item.icon] || User;
                  return (
                    <div key={item.label} className="flex items-start gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl">
                      <div className="bg-slate-900 text-white p-2.5 rounded-xl shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-sm font-bold text-slate-800">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interests / Tags */}
              <div className="mb-8 mt-auto">
                <p className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles size={16} className="text-amber-500" /> Core Focus & Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {profileData.interests.map((tag) => (
                    <span key={tag} className="bg-slate-100 border border-slate-200/50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 mt-2">
                <button
                  type="button"
                  className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition inline-flex items-center gap-2"
                >
                  <Download size={16} /> Download My CV
                </button>
                <a
                  href="#contact"
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl px-6 py-3 text-sm font-medium shadow-sm transition inline-flex items-center gap-2"
                >
                  Hire Me Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
