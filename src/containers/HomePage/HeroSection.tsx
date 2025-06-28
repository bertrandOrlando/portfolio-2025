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
    <header className="container w-full px-20 pt-24 pb-20">
      <div className="grid grid-cols-5 items-center justify-evenly gap-2">
        <div className="col-span-4 text-9xl font-semibold">Bertrand</div>
        <Image
          src="/assets/pasfoto.jpg"
          alt=""
          width={160}
          height={160}
          className="aspect-square rounded-full"
        />
        <div className="col-span-4 text-9xl font-semibold">Orlando</div>
      </div>
      <Typewriter
        className="text-3xl font-medium"
        lines={descriptions}
        typingSpeed={100}
        deletingSpeed={50}
        pause={1500}
      />
    </header>
  );
};
