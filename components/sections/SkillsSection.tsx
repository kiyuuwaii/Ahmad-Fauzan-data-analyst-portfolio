import { Database, BarChart3, FileSpreadsheet, Code2 } from "lucide-react";

const skillGroups = [
  {
    title: "Database & Querying",
    icon: Database,
    skills: ["SQL", "PostgreSQL", "MySQL", "Query Optimization"],
  },
  {
    title: "Business Intelligence & Viz",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "Looker Studio", "Excel (Advanced)"],
  },
  {
    title: "Programming & Scripting",
    icon: Code2,
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Problem Solving",
    icon: FileSpreadsheet,
    skills: ["Critical Thinking", "Data Storytelling", "Statistical Analysis", "Business Acumen"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 bg-slate-50/50 -mx-4 sm:-mx-6 px-4 sm:px-6 py-20 rounded-3xl">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Skills & Tools</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            The technical toolkit I use to extract, analyze, and communicate data insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="bg-slate-50 text-slate-600 border border-slate-200/80 text-xs font-medium px-2.5 py-1 rounded-lg">
                      {skill}
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
