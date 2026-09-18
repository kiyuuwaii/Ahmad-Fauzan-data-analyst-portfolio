import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Project Showcase</h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mb-4"></div>
        <p className="text-slate-500 max-w-2xl mx-auto">
          A selection of projects where I applied data analysis to solve real business challenges, from predictive modeling to interactive dashboards.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all rounded-2xl flex flex-col overflow-hidden">
            <div className="relative w-full aspect-video bg-slate-100 border-b border-slate-200/80">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-100 text-slate-700 border border-slate-200 text-xs px-2.5 py-1 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <h3 className="text-slate-900 font-bold text-lg leading-tight mb-2 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="mt-auto flex gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="flex-1 flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm"
                  >
                    View Dashboard
                  </a>
                )}
                {project.caseStudyLink && (
                  <a
                    href={project.caseStudyLink}
                    className="flex-1 flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                  >
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
