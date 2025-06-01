import React from 'react';
import { Card } from './Card';
import { SectionHeader } from './ProjectSectionHeader';
import { ProjectTechBadge } from './ProjectTechBadge';
import { ProjectVisual } from './ProjectVisual';
import { CheckCircle, ArrowUpRight, ExternalLink } from 'lucide-react';

const portfolioProjects = [
  {
    company: "EduEase",
    year: "Feb 2025",
    title: "Automated Assignment Feedback Platform",
    results: [
      { title: "Improved submission quality by 20% across classes" },
      { title: "Reduced manual workload by 40% using Google Classroom API and OCR" },
      { title: "Enhanced AI feedback retrieval speed by 30% with Supabase Vector DB" },
    ],
    link: "https://hm-0069-frontend.vercel.app/",
    stack: ["ReactJs", "NodeJs", "Python", "Supabase"],
  },
  {
    company: "CodeConnect",
    year: "Dec 2024",
    title: "Real-time Collaborative Coding Platform",
    results: [
      { title: "Reduced latency by 40% for real-time multi-user collaboration" },
      { title: "Supported 30 concurrent users per room with WebSockets" },
      { title: "Boosted debugging with AI code assistant for contextual suggestions" },
    ],
    link: "https://codeconnect-chi.vercel.app/",
    stack: ["NextJs", "WebSockets", "OpenAI", "Python"],
  },
  {
    company: "DocChat AI",
    year: "Jan 2025",
    title: "AI-Powered PDF Query Assistant",
    results: [
      { title: "Reduced manual document review time by 70%" },
      { title: "Achieved 93% answer accuracy via semantic search with Claude AI" },
      { title: "Processed 10,000+ chunks using Pinecone and LangChain" },
    ],
    link: "GitHub", // Replace with actual GitHub repo link
    stack: ["React.js", "Python", "Pinecone", "Claude AI", "LangChain"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed repetitive tasks into engaging digital experiences."
        />

        <div className="mt-10 md:mt-20 space-y-24">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.link}
              className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-stretch">
                {/* Left Column - Project Details */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col h-full relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-emerald-400 to-sky-400 h-8 w-1 rounded-full" aria-hidden="true"></div>
                    <div className="text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text flex items-center gap-2">
                      <span>{project.company}</span>
                      <span className="text-white/20">•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-8"></div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-5">
                      {project.results.map((result) => (
                        <li key={result.title} className="flex items-start gap-3 group">
                          <span className="mt-0.5 text-emerald-400 flex-shrink-0">
                            <CheckCircle size={20} className="group-hover:scale-110 transition-transform" />
                          </span>
                          <span className="text-white/80 group-hover:text-white transition-colors">{result.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <ProjectTechBadge key={tech} name={tech} />
                      ))}
                    </div>
                    
                    <a 
                      href={project.link}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 group"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
                
                {/* Right Column - Visual Element */}
                <div className="relative h-full lg:min-h-[500px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <ProjectVisual stack={project.stack} company={project.company} />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8 z-10">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <p className="text-xs text-white/60 uppercase tracking-wider">Project Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.slice(0, 2).map((tech) => (
                            <span key={tech} className="text-sm text-white/80">{tech}</span>
                          ))}
                          {project.stack.length > 2 && (
                            <span className="text-sm text-white/50">+{project.stack.length - 2} more</span>
                          )}
                        </div>
                      </div>
                      
                      <a href={project.link} className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1 text-sm font-medium">
                        <span>View</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};