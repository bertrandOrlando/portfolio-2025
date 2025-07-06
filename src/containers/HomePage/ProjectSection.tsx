import Image from "next/image";
import React from "react";

export const ProjectSection = () => {
  const projects = [
    {
      title: "EcoSave - Waste Management Application",
      description:
        "EcoSave is a web-based platform built to support community-driven recycling initiatives and track waste collection activity. The application allows both administrators and users to manage waste deposits, track transactions, and view savings based on recyclable materials.",
      images: ["/EcoSave/Home.png"],
      technologies: [
        "Next.js",
        "Express.js & RESTful APIs ",
        "PostgreSQL",
        "TypeScript",
        "Tailwind CSS & HeroUI",
      ],
    },
    {
      title: "Klinik Vida - Online Registration & Clinic Management System",
      description:
        "Klinik Vida is a web-based application to streamline clinic operations by allowing patients to register online, view doctor schedules, and access their visit history. The system supports multiple user roles—administrators, nurses, doctors, and system admins—each with role-specific dashboards and access controls. Core functionalities include online appointment booking, electronic medical records, queue management, and administrative tools for clinic staff.",
      images: ["/KlinikVida/Home.png"],
      technologies: [
        "Next.js",
        "Express.js & RESTful APIs ",
        "PostgreSQL",
        "TypeScript",
        "Tailwind CSS & HeroUI",
      ],
    },
    {
      title: "WombatFM - Live Setlist Archive Platform",
      description: `WombatFM is a web-based platform inspired by setlist.fm</Link>)} that enables users to browse, search, and archive concert setlists from various artists. The application includes features such as artist profiles, concert and show listings, timeline views, setlist submissions, and  charts for review analytics.`,
      images: ["/WombatFM/Home.png"],
      technologies: [
        "Next.js",
        "Express.js & RESTful APIs ",
        "PostgreSQL",
        "TypeScript",
        "Tailwind CSS & HeroUI",
      ],
    },
  ];

  return (
    <section className="flex w-full flex-col gap-y-8 py-20">
      <h2 id="project" className="text-2xl font-medium text-slate-500">
        / Projects
      </h2>
      <div className="h-[1px] w-full bg-slate-500"></div>

      {projects.map((project) => (
        <React.Fragment key={project.title}>
          <div className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2">
            <Image
              src={`/projects_screenshots${project.images[0]}`}
              alt={`EcoSave Home Page`}
              width={800}
              height={400}
            />
            <div className="flex flex-col justify-center gap-y-1">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-justify text-slate-800">
                {project.description}
              </p>
              <p className="mt-4 font-medium text-slate-900">
                Technologies used:
              </p>
              <ul className="grid list-disc grid-cols-1 pl-5 text-slate-800 lg:grid-cols-2">
                {project.technologies.map((tech, index) => (
                  <li key={`${project.title}-tech-${index}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-[1px] w-full bg-slate-500"></div>
        </React.Fragment>
      ))}
    </section>
  );
};
