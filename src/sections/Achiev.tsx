import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const achievements = [
  {
    title: "1",
    year: "2024",
    description: "Recognized for exceptional contributions to developing innovative solutions in the tech industry.",
    results: [
      { title: "Introduced cutting-edge AI solutions" },
      { title: "Collaborated with cross-functional teams" },
      { title: "Improved overall project delivery by 40%" },
    ],
    link: "https://www.example.com/award-top-innovator",
  },
  {
    title: "Hackathon Winner",
    year: "2023",
    description: "Won a national-level hackathon with a team of 4 developers for creating a highly scalable web app.",
    results: [
      { title: "Developed a real-time chat application" },
      { title: "Achieved scalability to handle 10,000+ concurrent users" },
      { title: "Won first place in a competitive field of 50 teams" },
    ],
    link: "https://www.example.com/hackathon-winner",
  },
  {
    title: "Published Research Paper",
    year: "2022",
    description: "Authored and published a research paper on AI and machine learning applications in modern web development.",
    results: [
      { title: "Published in an internationally recognized journal" },
      { title: "Received widespread acknowledgment from industry leaders" },
      { title: "Contributed to advancing industry knowledge" },
    ],
    link: "https://www.example.com/research-paper",
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
