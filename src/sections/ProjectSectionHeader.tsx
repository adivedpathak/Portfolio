import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-emerald-400 font-medium uppercase tracking-wider text-sm mb-2">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      <p className="text-white/60 text-lg md:text-xl">{description}</p>
    </div>
  );
};