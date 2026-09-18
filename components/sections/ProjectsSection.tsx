"use client";

import { useState } from "react";
import { FolderGit2, Star, ExternalLink, Code } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "bi-dashboards", label: "BI & Dashboards" },
  { id: "sql-analytics", label: "SQL & Analytics" },
  { id: "exploratory-data", label: "Exploratory Data" },
];

const projectsData = [
  {
    id: "p1",
    title: "Regional Sales Performance Dashboard",
    description: "Built an interactive multi-page Power BI dashboard monitoring sales KPIs across regional branches, enabling branch managers to drill down into weekly and monthly performance trends.",
    category: "bi-dashboards",
    featured: true,
    status: "Completed",
    date: "2024",
    metrics: [
      { label: "Data Sources", value: "3 Databases" },
      { label: "Dashboard Pages", value: "5 Interactive Views" },
    ],
    techStack: ["Power BI", "PostgreSQL", "DAX", "Excel"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    id: "p2",
    title: "Customer Churn Analysis with SQL",
    description: "Developed a structured SQL analysis pipeline to identify key churn indicators from transactional and behavioral data, delivering segmented retention strategies to the marketing team.",
    category: "sql-analytics",
    featured: false,
    status: "Completed",
    date: "2024",
    metrics: [
      { label: "Query Complexity", value: "Multi-join CTEs" },
      { label: "Segments Identified", value: "4 Risk Groups" },
    ],
    techStack: ["PostgreSQL", "SQL", "Excel"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    id: "p3",
    title: "E-Commerce EDA with Python",
    description: "Conducted comprehensive exploratory data analysis on e-commerce transaction records using Python, uncovering seasonal purchasing patterns and product category performance insights.",
    category: "exploratory-data",
    featured: false,
    status: "Completed",
    date: "2023",
    metrics: [
      { label: "Analysis Depth", value: "Full EDA Pipeline" },
      { label: "Visualizations", value: "Charts & Heatmaps" },
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    id: "p4",
    title: "Supply Chain Efficiency Tracker",
    description: "Designed an Excel-based analytics model with Power Query automation to track supply chain delivery timelines and flag bottleneck patterns across warehouse operations.",
    category: "bi-dashboards",
    featured: true,
    status: "Active Development",
    date: "2024",
    metrics: [
      { label: "Automation Level", value: "Power Query ETL" },
      { label: "Tracked Metrics", value: "Delivery & Lead Time" },
    ],
    techStack: ["Excel", "Power Query", "DAX"],
    codeLink: "#",
    demoLink: "#",
  },
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
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div key={project.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 flex-shrink-0">
                  <FolderGit2 size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-slate-900">{project.title}</h3>
                    {project.featured && (
                      <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] px-2 py-0.5 rounded-md font-semibold inline-flex items-center gap-1">
                        <Star size={10} /> Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-4">
                <span className="text-xs text-slate-500">{project.date}</span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${
                  project.status === "Completed"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-blue-50 text-blue-700 border border-blue-200"
                }`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>

            {/* Metrics row */}
            <div className="flex flex-wrap gap-4 mb-4 py-3 border-y border-slate-100">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-xs text-slate-400 font-medium">{m.label}</p>
                  <p className="text-sm font-bold text-slate-800">{m.value}</p>
                </div>
              ))}
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium border border-slate-200/80">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-auto flex gap-3">
              <a
                href={project.codeLink}
                className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-4 py-2 rounded-xl text-sm font-medium transition shadow-sm"
              >
                <Code size={15} /> Code
              </a>
              <a
                href={project.demoLink}
                className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition shadow-sm"
              >
                <ExternalLink size={15} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
