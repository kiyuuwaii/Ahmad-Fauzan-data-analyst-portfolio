import { toolsData } from "@/data/tools";

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Technical Skills & Tools</h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mb-4"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolsData.map((group, i) => (
          <div key={i} className="bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="bg-slate-50 text-slate-600 border border-slate-200 text-sm font-medium px-3 py-1.5 rounded-xl">
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

