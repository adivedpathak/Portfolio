import React from 'react';
import { CheckCircle, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './ProjectSectionHeader';
import { Card } from './Card';
import { AchievementVisual } from './AchievementVisual';

const achievements = [
  {
    title: "TechFiesta Hackathon",
    year: "2025",
    description: "Won 3rd place in Education Domain in the International Hackathon at PICT, Pune named TechFiesta.",
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
    <div className="pb-20">
    <section id="achievements" className="pb-16 lg:py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Personal Milestones"
          title="Notable Achievements"
          description="Here are some of the significant milestones I've achieved throughout my career."
        />

        <div className="mt-10 md:mt-20 space-y-24">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.link}
              className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 group backdrop-blur-sm border border-white/5"
              style={{
                top: `calc(64px + ${index * 40}px`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-stretch">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col h-full relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-emerald-400 to-sky-400 h-8 w-1 rounded-full animate-pulse" />
                    <div className="text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                      {achievement.year}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight bg-gradient-to-br from-white via-white/90 to-white/70 text-transparent bg-clip-text">
                    {achievement.title}
                  </h3>
                  
                  <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-8" />
                  
                  <p className="text-white/70 mb-8 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="flex-grow">
                    <ul className="space-y-5">
                      {achievement.results.map((result) => (
                        <li key={result.title} className="flex items-start gap-3 group/item">
                          <span className="mt-0.5 text-emerald-400 flex-shrink-0">
                            <CheckCircle size={20} className="group-hover/item:scale-110 transition-transform" />
                          </span>
                          <span className="text-white/80 group-hover/item:text-white transition-colors">
                            {result.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* <a 
                    href={achievement.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 mt-8 group/button relative overflow-hidden"
                  >
                    <span className="relative z-10">Learn More</span>
                    <ArrowUpRight 
                      size={18} 
                      className="relative z-10 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-sky-600 translate-y-full group-hover/button:translate-y-0 transition-transform" />
                  </a> */}
                </div>
                
                <div className="relative h-full lg:min-h-[500px] overflow-hidden">
                  <AchievementVisual title={achievement.title} year={achievement.year} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};