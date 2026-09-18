"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Trophy, MapPin, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { workExperiences, educationData, certifications } from "@/data/experience";

const tabs = [
  { id: "work", label: "Work Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "achievements", label: "Achievements", icon: Trophy },
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
        <div className="bg-slate-100 p-1 rounded-xl inline-flex gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
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
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                    <p className="text-slate-600 font-medium">{item.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-lg inline-flex items-center gap-1.5 font-medium">
                      <MapPin size={12} /> {item.location}
                    </span>
                    <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-lg inline-flex items-center gap-1.5 font-medium">
                      <Calendar size={12} /> {item.period}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span key={tech} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium border border-slate-200/80">
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
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.degree}</h3>
                    <p className="text-slate-600 font-medium">{item.institution}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-lg font-medium">{item.period}</span>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-3 py-1 rounded-lg font-medium">GPA: {item.gpa}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span key={course} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium border border-slate-200/80">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1} className="h-full">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 h-full flex flex-col justify-center">
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-medium mb-3">{item.issuer}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-auto">
                    <span>{item.date}</span>
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
