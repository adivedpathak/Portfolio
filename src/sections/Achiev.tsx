import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const achievements = [
    {
      title: "TechFiesta Hackathon",
      year: "2025",
      description: "Won 3rd place in  Education Domain in the  International Hackathon at PICT ,Pune named TechFiesta.",
      results: [
        { title: "Developed an innovative project with cross-functional collaboration" },
        { title: "Implemented creative solutions with a focus on scalability" },
        { title: "Earned recognition in an international hackathon" },
      ],
      link: "https://www.example.com/techfiesta-hackathon",
    },
    {
      title: "HackMatrix Hackathon",
      year: "2025",
      description: "Won 1st place in the national HackMatrix hackathon at PCCOE College.",
      results: [
        { title: "Led a team of developers to create a high-performance application" },
        { title: "Achieved optimal performance and functionality under tight deadlines" },
        { title: "Secured 1st place in a competitive national-level event" },
      ],
      link: "https://www.example.com/hackmatrix-hackathon",
    },
    {
      title: "UI Wars Hackathon",
      year: "2024",
      description: "Won 2nd place in the UI Wars Hackathon.",
      results: [
        { title: "Designed a user-friendly, intuitive interface" },
        { title: "Implemented advanced UX/UI features" },
        { title: "Earned second place in a competitive UI-focused hackathon" },
      ],
      link: "https://www.example.com/ui-wars-hackathon",
    },
    {
      title: "Innovative Business Idea Competition",
      year: "2023",
      description: "Won the Innovative Business Idea Competition at PCCOE Pune.",
      results: [
        { title: "Developed a creative business idea with potential for real-world application" },
        { title: "Presented a compelling business plan to industry experts" },
        { title: "Earned recognition for innovation and strategic thinking" },
      ],
      link: "https://www.example.com/innovative-business-idea-competition",
    },
  ];
  

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Personal Milestones"
          title="Notable Achievements"
          description="Here are some of the significant milestones I've achieved throughout my career."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.link}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{achievement.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {achievement.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <p className="mt-4 text-white/50 text-sm md:text-base">
                    {achievement.description}
                  </p>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {achievement.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={achievement.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Learn More</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  {/* Optionally, add an image for each achievement */}
                  {/* <Image
                    src={achievement.image || GrainImage}
                    alt={achievement.title}
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
