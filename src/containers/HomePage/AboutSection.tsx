import React from "react";

export const AboutSection = () => {
  return (
    <section className="flex w-full flex-col gap-y-4 py-20">
      <h2 id="about" className="text-xl font-medium text-slate-500 md:text-2xl">
        / About Me
      </h2>
      <div className="h-[1px] w-full bg-slate-500"></div>
      <div className="grid grid-cols-6 gap-4">
        <p className="col-span-5 text-base font-semibold text-slate-900 md:text-2xl">
          I am Bertrand Orlando, a passionate Web Developer currently pursuing a
          Bachelor’s degree in Computer Science at Parahyangan University in
          Bandung, Indonesia. My expertise lies in building responsive,
          high-performance web applications supported by solid technical
          architecture.
        </p>
        <p className="col-span-5 col-start-2 text-base font-semibold text-slate-900 md:text-2xl">
          I am deeply interested in continuously learning new technologies,
          exploring best practices in software development, and expanding my
          skills in both front-end and back-end development to create solutions
          that make a meaningful impact.
        </p>
      </div>
    </section>
  );
};
