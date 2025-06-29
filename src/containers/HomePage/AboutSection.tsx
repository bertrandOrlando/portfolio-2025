import React from "react";

export const AboutSection = () => {
  return (
    <section className="container grid w-full grid-cols-6 gap-4 px-20 py-20">
      <h2 className="col-span-full text-2xl font-medium text-slate-500">
        / About Me
      </h2>
      <p className="col-span-5 text-justify text-2xl font-semibold text-slate-900">
        I am Bertrand Orlando, a passionate Web Developer currently pursuing a
        Bachelor’s degree in Computer Science at Parahyangan University in
        Bandung, Indonesia. My expertise lies in building responsive,
        high-performance web applications supported by solid technical
        architecture.
      </p>
      <p className="col-span-5 col-start-2 text-justify text-2xl font-semibold text-slate-900">
        I am deeply interested in continuously learning new technologies,
        exploring best practices in software development, and expanding my
        skills in both front-end and back-end development to create solutions
        that make a meaningful impact.
      </p>
    </section>
  );
};
