import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-24 space-y-28">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      
      <footer className="pt-8 border-t border-slate-200 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Ahmad Fauzan Ash Shidiq. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
