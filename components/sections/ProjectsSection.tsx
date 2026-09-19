"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Code, Star, Database, BarChart3, LineChart, BrainCircuit, Sparkles, Activity, Server, FileCode2, Cpu } from "lucide-react";
import { SiPostgresql, SiMysql, SiPython, SiPandas, SiNumpy, SiR, SiJupyter } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { projects as projectsData } from "@/data/projects";

const techIconMap: Record<string, { icon: any; color: string }> = {
  "SQL": { icon: Database, color: "#64748b" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MySQL": { icon: SiMysql, color: "#00758F" },
  "Power BI": { icon: BarChart3, color: "#F2C811" },
  "Tableau": { icon: IoLogoTableau, color: "#E97627" },
  "Looker Studio": { icon: LineChart, color: "#4285F4" },
  "Excel": { icon: PiMicrosoftExcelLogo, color: "#217346" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "Pandas": { icon: SiPandas, color: "#150458" },
  "NumPy": { icon: SiNumpy, color: "#013243" },
  "R": { icon: SiR, color: "#276DC3" },
  "Jupyter": { icon: SiJupyter, color: "#F37626" },
  "dbt": { icon: Cpu, color: "#FF694B" },
  "Seaborn": { icon: BarChart3, color: "#444876" },
  "DAX": { icon: FileCode2, color: "#F2C811" },
  "SQL Server": { icon: Server, color: "#CC2927" },
  "Metabase": { icon: BarChart3, color: "#509EE3" },
};

const categories = [
  { id: "all", label: "All Projects" },
  { id: "bi-dashboards", label: "BI Dashboards" },
  { id: "sql-analytics", label: "SQL & Analytics" },
  { id: "exploratory-data", label: "EDA & Python" }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="scroll-mt-36">
      <div className="mb-10">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">// PORTFOLIO</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">Projects</h2>
        <p className="text-slate-600 max-w-2xl">
          A showcase of my data analytics dashboards, SQL models, and business intelligence projects.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex justify-start mb-10">
        <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl sm:rounded-full bg-white/50 backdrop-blur-md sm:backdrop-blur-2xl border border-white/80 shadow-xs flex-wrap">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="projectFilterPill"
                    className="absolute inset-0 bg-white shadow-sm border border-slate-200/50 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1} className="flex flex-col h-full">
            <TiltCard>
              <article 
                className="liquid-glass-card rounded-2xl p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 !overflow-visible"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Meta Top: Icon & Status */}
                <div 
                  className="flex items-start justify-between mb-4"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm flex items-center justify-center text-slate-600 shrink-0">
                    <FolderGit2 size={18} />
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${
                    project.status === "Completed"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <div style={{ transform: 'translateZ(35px)' }}>
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                    {project.featured && (
                      <span className="liquid-glass-card rounded-md !bg-amber-50/60 !border-amber-200/80 text-amber-700 font-bold px-2 py-0.5 text-[10px] inline-flex items-center gap-1 uppercase tracking-wide">
                        <Star size={10} /> Featured
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>
                </div>

                {/* Metrics & Tech Stack */}
                <div style={{ transform: 'translateZ(50px)' }}>
                  <div className="flex flex-wrap gap-4 mb-4 py-3 border-y border-slate-100">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-xs text-slate-400 font-medium">{m.label}</p>
                        <p className="text-sm font-bold text-slate-800">{m.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => {
                      const techData = techIconMap[tech];
                      const TechIcon = techData?.icon || Cpu;
                      return (
                        <span 
                          key={tech} 
                          className="liquid-glass-card group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold text-slate-800 hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <TechIcon 
                            className="w-3 h-3 shrink-0 transition-transform duration-300 group-hover:scale-110" 
                            style={{ color: techData?.color || "#64748b" }}
                          />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Action buttons */}
                <div 
                  className="mt-auto flex gap-3"
                  style={{ transform: 'translateZ(65px)' }}
                >
                  <a
                    href={project.codeLink}
                    className="flex-1 flex items-center justify-center gap-2 liquid-btn-light rounded-xl px-4 py-2 text-sm font-medium"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Code size={15} /> Code
                    </span>
                  </a>
                  <a
                    href={project.demoLink}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900/85 backdrop-blur-md sm:backdrop-blur-xl border border-white/20 border-t-white/40 shadow-sm text-white hover:bg-slate-900 rounded-2xl px-4 py-2 text-sm font-medium transition-colors"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <ExternalLink size={15} /> Demo
                    </span>
                  </a>
                </div>
              </article>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
