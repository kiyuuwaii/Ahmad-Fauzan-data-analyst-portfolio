import ExperienceItem from "@/components/ExperienceItem";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-zinc-100 tracking-tight mb-3">Work Experience</h1>
        <p className="text-zinc-400">
          My professional journey focusing on delivering data-driven business impact.
        </p>
      </div>
      
      <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-6 sm:p-10">
        {experiences.map((exp, idx) => (
          <ExperienceItem 
            key={exp.id} 
            experience={exp} 
            isLast={idx === experiences.length - 1} 
          />
        ))}
      </div>
    </main>
  );
}

