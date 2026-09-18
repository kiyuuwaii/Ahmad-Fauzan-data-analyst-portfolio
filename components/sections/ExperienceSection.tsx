import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Work Experience</h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mb-4"></div>
        <p className="text-slate-500">
          My professional journey focusing on delivering data-driven business impact.
        </p>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 flex-shrink-0 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200">
              <span className="font-bold text-slate-700">{exp.logoInitial}</span>
            </div>
            
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-slate-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-slate-500 text-sm font-medium px-3 py-1 bg-slate-100 rounded-full border border-slate-200 w-fit">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
