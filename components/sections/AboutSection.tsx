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
    <section id="about" className="scroll-mt-28 bg-slate-50/60 -mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16 py-20 rounded-3xl">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        {/* Section header - left aligned */}
        <div className="mb-14">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">// ABOUT ME</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">Hello There!</h2>
          <p className="text-slate-600 max-w-2xl">
            Passionate about turning raw data into strategic business solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <Image
                src="/Foto-Formal-2-Croped.jpeg"
                alt="Ahmad Fauzan Ash Shidiq"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Detail card */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{profileData.aboutGreeting}</h3>
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
                  <div key={item.label} className="flex items-start gap-3 bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm">
                    <div className="bg-slate-100 text-slate-600 p-2 rounded-lg shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-slate-800">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interests / Tags */}
            <div className="mb-8">
              <p className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-amber-500" /> Core Focus & Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((tag) => (
                  <span key={tag} className="bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-5 py-2.5 font-medium shadow-sm transition inline-flex items-center gap-2"
              >
                <Download size={16} /> Download My CV
              </button>
              <a
                href="#contact"
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl px-5 py-2.5 font-medium shadow-sm transition inline-flex items-center gap-2"
              >
                Hire Me Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
