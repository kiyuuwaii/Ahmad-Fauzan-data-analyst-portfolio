import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 space-y-36">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      <footer className="pt-8 border-t border-slate-200 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Ahmad Fauzan Ash Shidiq
        </p>
      </footer>
    </main>
  );
}
