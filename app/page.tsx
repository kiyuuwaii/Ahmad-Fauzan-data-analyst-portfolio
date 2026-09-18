import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}
