import { Experience } from "@/data/experience";

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

export default function ExperienceItem({ experience, isLast }: ExperienceItemProps) {
  return (
    <div className="relative flex gap-6 pb-8">
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-px bg-zinc-800" />
      )}
      
      <div className="flex-shrink-0 mt-1">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 font-bold">
          {experience.logoInitial}
        </div>
      </div>
      
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-zinc-100">{experience.role}</h3>
            <p className="text-zinc-300 font-medium">{experience.company}</p>
          </div>
          <span className="text-zinc-500 text-sm mt-1 md:mt-0 font-medium px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
            {experience.period}
          </span>
        </div>
        
        <ul className="mt-3 space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
              <span className="text-zinc-600 mt-1.5">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

