import Image from "next/image";
import { Typewriter } from "../../components/Typewriter/Typewriter";

export const HeroSection = () => {
  const descriptions = [
    "Software Engineer",
    "Web Developer",
    "Tech Enthusiast",
    "Problem Solver",
    "Lifelong Learner",
  ];

  return (
    <header className="pt-24 pb-20">
      <div className="grid grid-cols-5 items-center justify-evenly gap-2 text-4xl font-semibold md:text-7xl lg:text-9xl">
        <div className="col-span-4">Bertrand</div>
        <Image
          src="/assets/pasfoto.jpg"
          alt="Profile picture of Bertrand Orlando"
          width={160}
          height={160}
          className="invisible row-span-2 aspect-square rounded-full md:visible"
        />
        <div className="col-span-4">Orlando</div>
      </div>
      <Typewriter
        className="text-2xl font-medium lg:text-3xl"
        lines={descriptions}
        typingSpeed={100}
        deletingSpeed={50}
        pause={1500}
      />
    </header>
  );
};
