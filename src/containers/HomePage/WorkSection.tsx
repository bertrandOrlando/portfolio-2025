import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workHistory = [
  {
    company: "Parahyangan University",
    companyUrl: "https://www.unpar.ac.id",
    companyLogo: "/logos/unpar.png",
    position: "Assistant Lecturer",
    duration: "Feb 2024 - Present",
    description: [
      "Assisted in various lab courses across different semesters, including Algorithms and Programming, Object-Oriented Programming, and Computer Networks.",
      "Provided hands-on guidance during practical sessions, covering topics such as Java, and basic networking.",
      "Evaluated and graded student assignments and quizzes.",
    ],
  },
];

export const WorkSection = () => {
  return (
    <section className="container flex w-full flex-col gap-y-8 px-20 py-20">
      <h2 className="text-2xl font-medium text-slate-500">/ Work History</h2>
      <div className="h-[1px] w-full bg-slate-500"></div>
      <div className="grid grid-cols-3 gap-x-8">
        <div>
          <p className="text-4xl font-medium">My work</p>
          <p className="text-4xl font-medium">experience</p>
          <Link
            href="https://www.linkedin.com/in/bertrandorlando/"
            target="_blank"
            className={`${ibmPlexMono.className} mt-5 flex w-max cursor-pointer items-center justify-center rounded-4xl border border-slate-400 bg-slate-200 px-4 py-2 text-sm font-medium transition duration-300 hover:scale-105 hover:bg-slate-100`}
          >
            VIEW LINKEDIN {<CgArrowTopRight />}
          </Link>
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-y-4">
          {workHistory.map((work, index) => (
            <div key={`work-${index}`}>
              <div className="flex items-center gap-x-4 rounded-lg p-4">
                <Image
                  src={work.companyLogo}
                  alt={`${work.company} logo`}
                  className="object-cover"
                  width={50}
                  height={50}
                />
                <div className="flex w-full items-center justify-between">
                  <p className="text-lg font-semibold">
                    {work.position} -{" "}
                    <Link
                      href={work.companyUrl}
                      target="_blank"
                      className="text-slate-500"
                    >
                      {work.company}
                    </Link>
                  </p>
                  <p className="text-sm text-slate-600">{work.duration}</p>
                </div>
              </div>
              <ul className="list-disc pl-15 text-sm">
                {work.description.map((desc, descIndex) => (
                  <li key={`work-desc-${index}-${descIndex}`} className="py-1">
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="my-8 h-[1px] w-full bg-slate-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
