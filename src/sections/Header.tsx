'use client'

import { FC, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const Header: FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Add some buffer for better UX
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: `#${id}`,
          offsetY: 80
        },
        ease: "power2.inOut"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-2 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur w-max">
        <a 
          href="#hero" 
          onClick={(e) => handleClick(e, 'hero')}
          className={`nav-item text-sm sm:text-base px-3 sm:px-4 py-2 transition-colors duration-300
            ${activeSection === 'hero' ? 'bg-white text-gray-900' : 'hover:text-white/80'}`}
        >
          Home
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleClick(e, 'projects')}
          className={`nav-item text-sm sm:text-base px-3 sm:px-4 py-2 transition-colors duration-300
            ${activeSection === 'projects' ? 'bg-white text-gray-900' : 'hover:text-white/80'}`}
        >
          Projects
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleClick(e, 'about')}
          className={`nav-item text-sm sm:text-base px-3 sm:px-4 py-2 transition-colors duration-300
            ${activeSection === 'about' ? 'bg-white text-gray-900' : 'hover:text-white/80'}`}
        >
          About
        </a>
      </nav>
    </div>
  );
};