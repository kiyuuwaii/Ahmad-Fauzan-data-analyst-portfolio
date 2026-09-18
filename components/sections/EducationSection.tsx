import { educationData } from "@/data/education";
import { MapPin } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-32 mb-32 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-8 text-center">Education Journey</h2>
      
      <div className="space-y-6">
        {educationData.map((edu) => (
          <div key={edu.id} className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex gap-6 items-start">
            <div className="w-14 h-14 flex-shrink-0 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700">
              <span className="font-bold text-zinc-300 text-xl">{edu.logo}</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">{edu.institution}</h3>
                  <p className="text-zinc-300 font-medium">{edu.degree}</p>
                </div>
                <span className="text-zinc-500 text-sm font-medium px-3 py-1 bg-zinc-900/80 rounded-full border border-zinc-800 inline-block w-fit">
                  {edu.period}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm text-zinc-400">
                <span className="flex items-center gap-1.5"><MapPin size={16}/> {edu.location}</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span> GPA: {edu.gpa}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

