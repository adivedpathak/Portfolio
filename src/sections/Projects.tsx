import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Rajpath",
    year: "2023",
    title: "Voter Booth Locator",
    results: [
    { title: "Reduced manual queries by 70%" },
    { title: "Benefited over 1,500 voters" },
    { title: "Scaled for 100,000 users for 2024 elections" },
    ],
    link: "https://rajpath-2024.vercel.app/",
  },
  {
    company: "BNS Saral",
    year: "2024",
    title: "Legal Framework Automation",
    results: [
    { title: "Improved efficiency for 1,000+ legal professionals" },
    { title: "Automated 1,500+ legal updates, enhancing accuracy by 30%" },
    { title: "Reduced manual labor by 50% with Docker deployment" },
    ],
    link: "https://interview-platform-ten.vercel.app/",
  },
  {
    company: "CodeCollab",
    year: "2025",
    title: "Real-time Collaborative Code Editor",
    results: [
    { title: "Supported 50+ programming languages for coding interviews" },
    { title: "Enhanced collaboration for 5+ users, reducing project times by 25%" },
    { title: "Facilitated real-time output sharing, cutting turnaround times by 20%" },
    ],
    link: "https://interview-platform-ten.vercel.app/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed repetative tasks into engaging digital experiences."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.link}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex*40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <hr />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  /> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
