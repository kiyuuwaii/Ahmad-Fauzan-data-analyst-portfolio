import { Code, Camera, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const skills = [
    "Data Analysis",
    "SQL Database Management",
    "Data Visualization",
    "Leadership & Mentorship",
    "Effective Communication",
    "Problem Solving",
  ];

  return (
    <section id="home" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      {/* Left Column: Profile Box */}
      <div className="md:col-span-1 flex flex-col">
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-zinc-700 overflow-hidden">
              <Image
                src="/Foto-Formal-2-Croped.jpeg"
                alt="Ahmad Fauzan Ash Shidiq"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-xl font-bold text-zinc-100 mb-2 tracking-tight">
            Ahmad Fauzan Ash Shidiq
          </h1>
          <p className="text-zinc-400 text-sm font-medium mb-6">
            Data Analyst | Problem Solver | Tech Enthusiast
          </p>

          <div className="flex items-center gap-2 mb-8 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-xs font-semibold">Available for work</span>
          </div>

          <blockquote className="border-l-2 border-zinc-700 pl-4 text-left text-zinc-400 text-sm italic mb-8 w-full">
            "Data without context is just noise. I turn noise into strategies."
          </blockquote>

          <div className="flex justify-center gap-4 w-full pt-4 border-t border-zinc-800/80">
            <Link href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <Briefcase size={20} />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <Code size={20} />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <Camera size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column: Main Details */}
      <div className="md:col-span-2 flex flex-col gap-8">
        <section className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">About Me</h2>
          <div className="text-zinc-400 leading-relaxed space-y-4">
            <p>
              I am a Data Analyst driven by the desire to solve complex business problems through data-backed insights. My approach focuses on extracting actionable intelligence from raw data rather than just building pretty charts.
            </p>
            <p>
              With a strong foundation in SQL, Python, and data visualization tools, I bridge the gap between technical datasets and strategic business decisions.
            </p>
          </div>
        </section>

        <section className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 tracking-tight">Education</h2>
          <div className="flex gap-4">
            <div className="w-12 h-12 flex-shrink-0 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700">
              <span className="font-bold text-zinc-400">UN</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100">University Name</h3>
              <p className="text-zinc-300 font-medium">B.Sc. in Data Science & Analytics</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-zinc-500">
                <span className="flex items-center gap-1"><MapPin size={14}/> Surabaya, Indonesia</span>
                <span>GPA: 3.85/4.00</span>
                <span>2020 - 2024</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 tracking-tight">Core Competencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4 flex items-center justify-center text-center transition-colors hover:bg-zinc-800 hover:border-zinc-600">
                <span className="text-zinc-300 text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

