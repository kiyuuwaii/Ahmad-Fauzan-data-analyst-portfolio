import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ExternalLink, BookOpen } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden bg-zinc-900/60 border border-zinc-800/80 rounded-2xl transition-all duration-300 hover:bg-zinc-900/80 hover:border-zinc-700">
      <div className="relative w-full aspect-video bg-zinc-800">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex flex-col p-5 flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-zinc-800 text-zinc-300 text-xs px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-zinc-100 font-bold text-lg leading-tight mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-auto flex gap-3">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Dashboard</span>
            </Link>
          )}
          {project.caseStudyLink && (
            <Link
              href={project.caseStudyLink}
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-100 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors"
            >
              <BookOpen size={16} />
              <span>Case Study</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

