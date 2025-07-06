import Image from "next/image";
import React from "react";
import Skills from "@/data/Skill.json";

export const SkillSection = () => {
  return (
    <section className="flex w-full flex-col gap-y-8 py-20">
      <h2 id="skill" className="text-2xl font-medium text-slate-500">
        / My Skills
      </h2>
      <div className="h-[1px] w-full bg-slate-500"></div>
      <div className="grid grid-cols-2 items-center justify-center gap-8 md:grid-cols-4 lg:grid-cols-7">
        {Skills.map((skill, index) => (
          <div
            key={`skills-${index}`}
            className="flex flex-col items-center justify-center rounded-lg border border-slate-400 bg-slate-100 p-4 transition-transform duration-300 hover:scale-105 hover:bg-slate-200/50"
          >
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              width={100}
              height={100}
            />
            <p className="mt-2 text-center text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
