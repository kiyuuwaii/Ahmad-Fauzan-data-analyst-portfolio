"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Trophy, MapPin, Calendar } from "lucide-react";

const tabs = [
  { id: "work", label: "Work Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "achievements", label: "Achievements", icon: Trophy },
];

const workData = [
  {
    id: "w1",
    role: "Data Analyst Intern",
    company: "PT. Example Analytics",
    location: "Surabaya, Indonesia",
    period: "Jan 2024 - Jun 2024",
    description: "Built interactive Power BI dashboards for sales performance monitoring across 3 regional branches. Designed SQL queries to extract and transform weekly sales data from PostgreSQL, reducing manual reporting time. Conducted exploratory data analysis on customer churn patterns and presented findings to stakeholders.",
    techStack: ["SQL", "Power BI", "PostgreSQL", "Excel"],
  },
  {
    id: "w2",
    role: "Laboratory Assistant",
    company: "PENS - Data Science Lab",
    location: "Surabaya, Indonesia",
    period: "Aug 2022 - Dec 2023",
    description: "Assisted in teaching database management and SQL fundamentals to junior students. Maintained lab datasets and prepared tutorial materials for hands-on data analysis sessions. Supported research projects involving statistical modeling and data preprocessing.",
    techStack: ["Python", "SQL", "Excel", "R"],
  },
];

const educationData = [
  {
    id: "e1",
    degree: "D4 Game Technology",
    institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
    period: "2020 - 2024",
    gpa: "3.85/4.00",
    description: "Focused on data-driven approaches to interactive systems, including procedural content generation, statistical modeling, and database architecture for game analytics pipelines.",
    coursework: ["Database Systems", "Statistics & Probability", "Data Structures", "Machine Learning Fundamentals", "Data Visualization"],
  },
];

const achievementData = [
  { id: "a1", title: "Data Science Foundations", issuer: "IBM SkillsBuild", date: "2024", credentialId: "IBM-DS-2024-XXXX" },
  { id: "a2", title: "Data Analytics with Python", issuer: "Hacktiv8", date: "2023", credentialId: "H8-DAP-2023-XXXX" },
  { id: "a3", title: "Data Analyst with SQL", issuer: "DQLab", date: "2023", credentialId: "DQLAB-SQL-2023-XXXX" },
  { id: "a4", title: "Data Visualization", issuer: "Dicoding Indonesia", date: "2023", credentialId: "DIC-VIZ-2023-XXXX" },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section id="experience" className="scroll-mt-36 w-full">
      <div className="mb-10">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">// EXPERIENCE</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">My Experience</h2>
        <p className="text-slate-600 max-w-2xl">
          A journey through my professional growth, education, and achievements.
        </p>
      </div>

      {/* Sub-tabs */}
      <div className="flex justify-start mb-10">
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
          workData.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
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
          ))}

        {activeTab === "education" &&
          educationData.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8">
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
          ))}

        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievementData.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm font-medium mb-3">{item.issuer}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{item.date}</span>
                  <span className="font-mono text-slate-400">{item.credentialId}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
