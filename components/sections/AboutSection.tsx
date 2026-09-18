import { profileData } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">About Me</h2>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mb-4"></div>
          </div>
          
          <div className="text-slate-600 leading-relaxed space-y-4">
            {profileData.aboutText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {profileData.stats.map((stat, i) => (
            <div key={i} className="bg-white border border-slate-200/80 shadow-sm rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md hover:border-slate-300 transition-all">
              <span className="text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</span>
              <span className="text-sm font-semibold text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
