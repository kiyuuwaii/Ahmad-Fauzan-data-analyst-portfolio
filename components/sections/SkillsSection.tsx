import { Database, BarChart3, FileSpreadsheet, Code2 } from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, any> = {
  "Database & Querying": Database,
  "Business Intelligence": BarChart3,
  "Programming": Code2,
  "Problem Solving": FileSpreadsheet,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-36 bg-slate-50/50 -mx-4 sm:-mx-6 lg:-mx-16 px-4 sm:px-6 lg:px-16 py-20 rounded-3xl">
      <div className="w-full">
        <div className="mb-14">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">// TOOLKIT</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">Skills & Tools</h2>
          <p className="text-slate-600 max-w-2xl">
            The technical toolkit I use to extract, analyze, and communicate data insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group) => {
            const Icon = iconMap[group.category] || Database;
            return (
              <div key={group.category} className="liquid-glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm flex items-center justify-center text-slate-700 mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill.name} className="liquid-tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
