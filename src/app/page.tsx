import { HeroSection } from "@/containers/HomePage/HeroSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
    </div>
  );
}
