'use client';
import React, { useEffect, useRef } from 'react';
import { Award, Trophy, Medal, Lightbulb } from 'lucide-react';

interface AchievementVisualProps {
  title: string;
  year: string;
}

export const AchievementVisual = ({ title, year }: AchievementVisualProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getAchievementIcon = (title: string) => {
    const iconSize = 48;
    const iconClass = "text-white/90 filter drop-shadow-lg";
    
    if (title.toLowerCase().includes('hackathon')) {
      return <Trophy size={iconSize} className={`${iconClass} text-yellow-400`} />;
    } else if (title.toLowerCase().includes('competition')) {
      return <Medal size={iconSize} className={`${iconClass} text-blue-400`} />;
    } else if (title.toLowerCase().includes('innovation')) {
      return <Lightbulb size={iconSize} className={`${iconClass} text-purple-400`} />;
    }
    return <Award size={iconSize} className={`${iconClass} text-emerald-400`} />;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center transform transition-all duration-700 hover:scale-105">
          <div className="mb-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full opacity-75 blur"></div>
            <div className="relative bg-gray-900 rounded-full p-10 shadow-lg">
              {getAchievementIcon(title)}
            </div>
          </div>
          <div className="mt-4 text-5xl font-bold bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
            {year}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
    </div>
  );
};