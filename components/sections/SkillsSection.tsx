"use client";

import { useRef, useState, useEffect } from "react";
import { Database, BarChart3, FileSpreadsheet, Code2, LineChart, BrainCircuit, Sparkles, Activity, Box, Gamepad2, Cuboid } from "lucide-react";
import { SiPostgresql, SiMysql, SiPython, SiPandas, SiNumpy, SiR } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { skillCategories } from "@/data/skills";

const groupIconMap: Record<string, any> = {
  "Database & Querying": Database,
  "Business Intelligence": BarChart3,
  "Programming": Code2,
  "Problem Solving": FileSpreadsheet,
  "3D Design": Cuboid,
};

const skillIconMap: Record<string, { icon: any, color?: string }> = {
  "SQL": { icon: Database, color: "#64748b" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MySQL": { icon: SiMysql, color: "#00758F" },
  "Power BI": { icon: BarChart3, color: "#F2C811" },
  "Tableau": { icon: IoLogoTableau, color: "#E97627" },
  "Looker Studio": { icon: LineChart, color: "#4285F4" },
  "Excel": { icon: PiMicrosoftExcelLogo, color: "#217346" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "Pandas": { icon: SiPandas, color: "#150458" },
  "NumPy": { icon: SiNumpy, color: "#013243" },
  "R": { icon: SiR, color: "#276DC3" },
  "Critical Thinking": { icon: BrainCircuit, color: "#8b5cf6" },
  "Data Storytelling": { icon: Sparkles, color: "#f59e0b" },
  "Statistical Analysis": { icon: Activity, color: "#10b981" },
  "Blender": { icon: Box, color: "#ea7600" },
  "Unity": { icon: Gamepad2, color: "#000000" },
  "3D Modeling": { icon: Cuboid, color: "#0ea5e9" },
};

export default function SkillsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const maskStyle = {
    maskImage: `linear-gradient(to right, ${canScrollLeft ? 'transparent, black 48px' : 'black 0%, black 48px'}, black calc(100% - 48px), ${canScrollRight ? 'transparent' : 'black 100%'})`,
    WebkitMaskImage: `linear-gradient(to right, ${canScrollLeft ? 'transparent, black 48px' : 'black 0%, black 48px'}, black calc(100% - 48px), ${canScrollRight ? 'transparent' : 'black 100%'})`,
  };

  return (
    <section id="skills" className="scroll-mt-36">
      <div className="w-full">
        <div className="mb-14">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">// TOOLKIT</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">Skills & Tools</h2>
          <p className="text-slate-600 max-w-2xl">
            The technical toolkit I use to extract, analyze, and communicate data insights.
          </p>
        </div>

        <div className="liquid-glass-card rounded-3xl py-8 sm:py-10 -mx-4 sm:-mx-6 lg:-mx-8">
          <div 
            className="w-full relative transition-all duration-300"
            style={maskStyle}
          >
            <div 
              ref={scrollRef}
              onScroll={checkScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={`flex overflow-x-auto gap-6 pb-2 pt-2 px-6 sm:px-10 lg:px-16 scroll-px-6 sm:scroll-px-10 lg:scroll-px-16 [&::-webkit-scrollbar]:hidden ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory scroll-smooth'}`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {skillCategories.map((group) => {
                const GroupIcon = groupIconMap[group.category] || Database;
                return (
                  <div 
                    key={group.category} 
                    className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-6 hover:shadow-lg hover:bg-white/90 transition-all duration-300 shrink-0 snap-center sm:snap-start w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center text-slate-700 mb-4 pointer-events-none">
                      <GroupIcon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-4 pointer-events-none">{group.category}</h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {group.skills.map((skill) => {
                        const skillData = skillIconMap[skill.name];
                        const IconComponent = skillData?.icon || Sparkles;
                        
                        return (
                          <span 
                            key={skill.name} 
                            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-800 bg-white border border-slate-200/60 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 pointer-events-none"
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
        </div>
      </div>
    </section>
  );
}
