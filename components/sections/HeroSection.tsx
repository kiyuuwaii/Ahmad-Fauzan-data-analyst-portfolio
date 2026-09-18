import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowRight, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-32 min-h-[70vh]">
      <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
        <div className="inline-flex items-center justify-center md:justify-start gap-2 bg-emerald-950/40 border border-emerald-800/50 px-4 py-2 rounded-full self-center md:self-start">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 text-sm font-semibold">Available for new opportunities</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight leading-tight">
          Hi, I'm {profileData.name} <br />
          <span className="text-zinc-500">{profileData.role}.</span>
        </h1>
        
        <p className="text-lg text-zinc-400 max-w-xl mx-auto md:mx-0">
          {profileData.tagline}
        </p>
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
          <Link href="#contact" className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">
            Get in Touch <ArrowRight size={18} />
          </Link>
          <Link href="#projects" className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-100 px-6 py-3 rounded-xl font-semibold hover:bg-zinc-800 hover:text-white transition-colors">
            View Projects <FileText size={18} />
          </Link>
        </div>
      </div>
      
      <div className="flex-shrink-0 relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
        <div className="absolute inset-0 rounded-full border-2 border-zinc-800/80 bg-zinc-900 overflow-hidden">
          <Image
            src="/Foto-Formal-2-Croped.jpeg"
            alt={profileData.fullName}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-950/40 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}

