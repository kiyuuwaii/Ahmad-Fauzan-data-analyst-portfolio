"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, GraduationCap, Trophy, MapPin, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { workExperiences, educationData, certifications } from "@/data/experience";

const tabs = [
  { id: "work", label: "Work Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: Trophy },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section id="experience" className="scroll-mt-28">
      <div className="mb-10">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">// Experience</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-left mt-1">My Experience</h2>
        <p className="text-slate-600 text-left max-w-2xl mt-2">
          A journey through my professional growth, education, and achievements.
        </p>
      </div>

      {/* Sub-tabs */}
      <div className="flex mb-10">
        <div className="liquid-glass-card p-1 rounded-xl inline-flex gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "liquid-btn-light shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                <Icon size={15} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="space-y-6">
        {activeTab === "work" &&
          workExperiences.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    {item.logo ? (
                      <div className="w-12 h-12 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm p-1.5 shrink-0 overflow-hidden flex items-center justify-center relative">
                        <Image
                          src={item.logo}
                          alt={item.company}
                          width={44}
                          height={44}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : item.logoInitial ? (
                      <div className="w-12 h-12 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm flex items-center justify-center shrink-0 font-bold text-sm text-slate-700">
                        {item.logoInitial}
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm flex items-center justify-center shrink-0 text-slate-600">
                        <Briefcase size={20} />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                      <p className="text-slate-600 font-medium">{item.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="liquid-tag inline-flex items-center gap-1.5 font-medium px-2.5 py-1 text-xs">
                      <MapPin size={12} /> {item.location}
                    </span>
                    <span className="liquid-tag inline-flex items-center gap-1.5 font-medium px-2.5 py-1 text-xs">
                      <Calendar size={12} /> {item.period}
                    </span>
                  </div>
                </div>
                <p className="text-slate-700/90 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span key={tech} className="liquid-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

        {activeTab === "education" &&
          educationData.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    {item.logo ? (
                      <div className="w-12 h-12 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm p-1.5 shrink-0 overflow-hidden flex items-center justify-center relative">
                        <Image
                          src={item.logo}
                          alt={item.institution}
                          width={44}
                          height={44}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm flex items-center justify-center shrink-0 text-slate-600">
                        <GraduationCap size={22} />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.degree}</h3>
                      <p className="text-slate-600 font-medium">{item.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="liquid-tag">{item.period}</span>
                    <span className="liquid-tag !bg-emerald-50/50 !text-emerald-700 !border-emerald-200">GPA: {item.gpa}</span>
                  </div>
                </div>
                <p className="text-slate-700/90 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span key={course} className="liquid-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

        {activeTab === "certifications" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1} className="h-full">
                <div className="liquid-glass-card rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                  <div>
                    <div className="flex items-start gap-3.5 mb-3">
                      {item.logo ? (
                        <div className="w-11 h-11 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm p-1.5 shrink-0 overflow-hidden flex items-center justify-center relative">
                          <Image
                            src={item.logo}
                            alt={item.issuer}
                            width={36}
                            height={36}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-11 h-11 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm flex items-center justify-center shrink-0 text-slate-500">
                          <Trophy size={18} />
                        </div>
                      )}
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
                        <p className="text-slate-600 text-sm font-medium mt-0.5">{item.issuer}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-200 mt-3">
                    <span className="font-semibold">{item.date}</span>
                    <span className="font-mono text-slate-400">{item.credentialId}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
