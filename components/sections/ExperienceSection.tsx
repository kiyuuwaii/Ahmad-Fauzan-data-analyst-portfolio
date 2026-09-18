import ExperienceItem from "@/components/ExperienceItem";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-32 mb-32 max-w-3xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-3">Work Experience</h2>
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
    </section>
  );
}

