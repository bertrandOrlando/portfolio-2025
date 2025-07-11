import { HeroSection } from "@/containers/HomePage/HeroSection";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/containers/HomePage/AboutSection";
import { SkillSection } from "@/containers/HomePage/SkillSection";
import { ProjectSection } from "@/containers/HomePage/ProjectSection";
import { Contact } from "@/containers/HomePage/Contact";
import { Footer } from "@/containers/HomePage/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-50 px-10 py-12 md:px-20">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
