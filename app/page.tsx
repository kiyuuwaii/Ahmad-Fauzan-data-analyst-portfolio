import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden pt-20 pb-20 sm:pt-24 sm:pb-24">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-20 sm:space-y-28">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
      
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
      
        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <SkillsSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>

        <ScrollReveal>
          <footer className="pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Ahmad Fauzan Ash Shidiq
            </p>
          </footer>
        </ScrollReveal>
      </div>
    </main>
  );
}
