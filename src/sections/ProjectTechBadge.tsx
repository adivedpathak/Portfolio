import React from 'react';

interface ProjectTechBadgeProps {
  name: string;
}

// Map technology names to colors
const techColors: Record<string, string> = {
  'ReactJs': 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
  'React.js': 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
  'NodeJs': 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-400',
  'Python': 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400',
  'Supabase': 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400',
  'NextJs': 'from-gray-500/20 to-gray-600/20 border-gray-500/30 text-gray-300',
  'WebSockets': 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
  'OpenAI': 'from-teal-500/20 to-teal-600/20 border-teal-500/30 text-teal-400',
  'Pinecone': 'from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400',
  'Claude AI': 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-400',
  'LangChain': 'from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-400',
  'Kafka': 'from-red-500/20 to-red-600/20 border-red-500/30 text-red-400',
};

// Default color for technologies not in the map
const defaultTechColor = 'from-gray-500/20 to-gray-600/20 border-gray-500/30 text-gray-300';

export const ProjectTechBadge = ({ name }: ProjectTechBadgeProps) => {
  const colorClasses = techColors[name] || defaultTechColor;
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border bg-gradient-to-r ${colorClasses} transition-all duration-300 hover:scale-105`}>
      {name}
    </span>
  );
};