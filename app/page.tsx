import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ToolsSection from "@/components/sections/ToolsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ToolsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      
      <footer className="py-8 mt-12 border-t border-zinc-800/60 text-center">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Ahmad Fauzan Ash Shidiq. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
