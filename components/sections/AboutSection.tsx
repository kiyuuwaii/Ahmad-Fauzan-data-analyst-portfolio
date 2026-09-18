import { profileData } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-32 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">About Me</h2>
          <div className="text-zinc-400 leading-relaxed space-y-4">
            {profileData.aboutText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {profileData.stats.map((stat, i) => (
            <div key={i} className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-zinc-900/80 transition-colors">
              <span className="text-4xl font-bold text-emerald-500 mb-2">{stat.value}</span>
              <span className="text-sm font-medium text-zinc-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
