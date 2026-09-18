"use client";

import { useState } from "react";
import { FolderGit2, ExternalLink, Code, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import { projects as projectsData } from "@/data/projects";

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
        <div className="flex flex-wrap gap-2 justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === cat.id
                  ? "liquid-btn-dark shadow-sm"
                  : "liquid-btn-light"
              }`}
            >
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
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
                      <span className="liquid-tag !bg-amber-50/50 !text-amber-700 !border-amber-200 !px-2 !py-0.5 inline-flex items-center gap-1">
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
                    {project.techStack.map((tech) => (
                      <span key={tech} className="liquid-tag">
                        {tech}
                      </span>
                    ))}
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
                    className="flex-1 flex items-center justify-center gap-2 liquid-btn-dark rounded-xl px-4 py-2 text-sm font-medium"
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
