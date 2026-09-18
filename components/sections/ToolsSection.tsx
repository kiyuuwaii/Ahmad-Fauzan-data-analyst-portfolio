import { toolsData } from "@/data/tools";

export default function ToolsSection() {
  return (
    <section id="tools" className="scroll-mt-32 mb-32">
      <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-8 text-center">Technical Tools & Competencies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolsData.map((group, i) => (
          <div key={i} className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-6">
            <h3 className="text-lg font-bold text-zinc-100 mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="bg-zinc-800/80 border border-zinc-700/80 text-zinc-300 text-sm font-medium px-3 py-1.5 rounded-xl">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

