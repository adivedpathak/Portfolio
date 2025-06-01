'use client';
import React, { useEffect, useRef } from 'react';
import { Circle, Code, Database, FileCode, FileType, Server, Zap } from 'lucide-react';

interface ProjectVisualProps {
  stack: string[];
  company: string;
}

export const ProjectVisual = ({ stack, company }: ProjectVisualProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Function to get icon based on technology
  const getTechIcon = (tech: string) => {
    const iconSize = 24;
    const iconClasses = "text-white/40";
    
    const techToIcon: Record<string, JSX.Element> = {
      'ReactJs': <FileCode size={iconSize} className={`${iconClasses} text-blue-400`} />,
      'React.js': <FileCode size={iconSize} className={`${iconClasses} text-blue-400`} />,
      'NodeJs': <Server size={iconSize} className={`${iconClasses} text-green-400`} />,
      'Python': <Code size={iconSize} className={`${iconClasses} text-yellow-400`} />,
      'Supabase': <Database size={iconSize} className={`${iconClasses} text-emerald-400`} />,
      'NextJs': <FileType size={iconSize} className={`${iconClasses} text-gray-300`} />,
      'WebSockets': <Zap size={iconSize} className={`${iconClasses} text-purple-400`} />,
      'OpenAI': <Circle size={iconSize} className={`${iconClasses} text-teal-400`} />,
      'Pinecone': <Database size={iconSize} className={`${iconClasses} text-orange-400`} />,
      'Claude AI': <Circle size={iconSize} className={`${iconClasses} text-indigo-400`} />,
      'LangChain': <Code size={iconSize} className={`${iconClasses} text-pink-400`} />,
      'Kafka': <Server size={iconSize} className={`${iconClasses} text-red-400`} />,
    };
    
    return techToIcon[tech] || <Code size={iconSize} className={iconClasses} />;
  };

  // Get primary color based on company
  const getCompanyColor = (company: string): string => {
    const companyColors: Record<string, string> = {
      'EduEase': '#10B981', // emerald-500
      'CodeConnect': '#3B82F6', // blue-500
      'DocChat AI': '#8B5CF6', // violet-500
    };
    
    return companyColors[company] || '#6366F1'; // indigo-500 default
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match its display size
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation parameters
    const primaryColor = getCompanyColor(company);
    const lines: any[] = [];
    const particleCount = 20;
    
    // Create particles based on stack
    for (let i = 0; i < particleCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 20,
        opacity: Math.random() * 0.5 + 0.1,
        width: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        color: primaryColor,
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw lines
      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y + line.length);
        ctx.strokeStyle = `${line.color}${Math.floor(line.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = line.width;
        ctx.stroke();
        
        // Move line
        line.x += line.speed;
        line.y -= line.speed;
        
        // Reset if off screen
        if (line.x > canvas.width || line.y < 0) {
          line.x = Math.random() * canvas.width;
          line.y = canvas.height + Math.random() * 100;
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [company, stack]);

  return (
    <div className="relative h-full">
      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
      
      {/* Tech Icons Grid */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-16 p-8 relative z-10">
          {stack.map((tech, index) => (
            <div 
              key={tech} 
              className="flex items-center justify-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-white/5 transform transition-transform hover:scale-110 hover:shadow-lg"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              {getTechIcon(tech)}
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};