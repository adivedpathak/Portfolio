import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card = ({ children, className = '', style }: CardProps) => {
  return (
    <div 
      className={`bg-gray-800/80 backdrop-blur-sm border border-white/5 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};