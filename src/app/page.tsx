import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificateSection from "@/components/CertificateSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificateSection />
      <Footer />
    </main>
  );
}
