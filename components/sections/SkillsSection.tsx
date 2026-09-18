import { Database, BarChart3, FileSpreadsheet, Code2, LineChart, BrainCircuit, Sparkles, Activity } from "lucide-react";
import { SiPostgresql, SiMysql, SiPython, SiPandas, SiNumpy, SiR } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { skillCategories } from "@/data/skills";

const groupIconMap: Record<string, any> = {
  "Database & Querying": Database,
  "Business Intelligence": BarChart3,
  "Programming": Code2,
  "Problem Solving": FileSpreadsheet,
};

const skillIconMap: Record<string, { icon: any, color?: string }> = {
  "SQL": { icon: Database, color: "#64748b" }, // slate-500
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MySQL": { icon: SiMysql, color: "#00758F" },
  "Power BI": { icon: BarChart3, color: "#F2C811" },
  "Tableau": { icon: IoLogoTableau, color: "#E97627" },
  "Looker Studio": { icon: LineChart, color: "#4285F4" }, // Google blue
  "Excel": { icon: PiMicrosoftExcelLogo, color: "#217346" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "Pandas": { icon: SiPandas, color: "#150458" },
  "NumPy": { icon: SiNumpy, color: "#013243" },
  "R": { icon: SiR, color: "#276DC3" },
  "Critical Thinking": { icon: BrainCircuit, color: "#8b5cf6" }, // violet-500
  "Data Storytelling": { icon: Sparkles, color: "#f59e0b" }, // amber-500
  "Statistical Analysis": { icon: Activity, color: "#10b981" }, // emerald-500
};

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-36 liquid-glass-card -mx-4 sm:-mx-6 lg:-mx-16 px-4 sm:px-6 lg:px-16 py-20 rounded-3xl">
      <div className="w-full">
        <div className="mb-14">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">// TOOLKIT</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">Skills & Tools</h2>
          <p className="text-slate-600 max-w-2xl">
            The technical toolkit I use to extract, analyze, and communicate data insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {skillCategories.map((group) => {
            const GroupIcon = groupIconMap[group.category] || Database;
            return (
              <div key={group.category} className="liquid-glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/80 border border-slate-200/60 shadow-sm flex items-center justify-center text-slate-700 mb-4">
                  <GroupIcon size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill) => {
                    const skillData = skillIconMap[skill.name];
                    const IconComponent = skillData?.icon || Sparkles;
                    
                    return (
                      <span 
                        key={skill.name} 
                        className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-800 bg-white/70 backdrop-blur-md border border-white/90 shadow-[0_2px_8px_rgba(15,23,42,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-200"
                      >
                        <IconComponent 
                          className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110" 
                          style={{ color: skillData?.color || "#64748b" }}
                        />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
