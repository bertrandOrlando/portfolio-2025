import { HeroSection } from "@/containers/HomePage/HeroSection";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/containers/HomePage/AboutSection";
import { SkillSection } from "@/containers/HomePage/SkillSection";
import { ProjectSection } from "@/containers/HomePage/ProjectSection";

export default function Home() {
  return (
    <div className="bg-slate-50 px-10 md:px-20">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </div>
  );
}
