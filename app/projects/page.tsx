import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-zinc-100 tracking-tight mb-3">Project Showcase</h1>
        <p className="text-zinc-400 max-w-2xl">
          A selection of projects where I applied data analysis to solve real business challenges, from predictive modeling to interactive dashboards.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}

