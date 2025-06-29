import { HeroSection } from "@/containers/HomePage/HeroSection";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/containers/HomePage/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
