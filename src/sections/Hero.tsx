'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      {/* Background + Mask + Floating Elements */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      {/* Hero Content */}
      <div className="container relative z-50 -mt-12">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={memojiImage}
              alt="Memoji of developer"
              className="size-[100px]"
              priority
              placeholder="blur"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"
            aria-label="Availability status"
          >
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </motion.div>
        </div>

        {/* Name & Role */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <h1 className="font-serif text-4xl md:text-6xl mt-8 tracking-wide bg-gradient-to-r from-white via-gray-100 to-white text-transparent bg-clip-text">
            Aditya Vedpathak
          </h1>
          <p className="mt-4 text-white/70 md:text-lg leading-relaxed">
            Backend-focused full-stack developer specializing in scalable architectures and elegant APIs — ensuring reliability, performance, and impact.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4"
        >
          <button
            aria-label="Explore Projects"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition-transform transform hover:scale-105 hover:bg-white/10 hover:border-white/25 active:scale-95 group"
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform" title="Scroll Down" />
          </button>

          <button
            aria-label="Download Resume"
            className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition-transform transform hover:scale-105 hover:bg-gray-300 active:scale-95 shadow-md hover:shadow-lg"
            onClick={() => {
              const resumeUrl = "/AdityaVedpathak_FullStack_Resume.pdf";
              const link = document.createElement("a");
              link.href = resumeUrl;
              link.download = "AdityaVedpathak_FullStack_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <span className="transition-transform transform hover:rotate-12">👋</span>
            <span className="font-semibold">Download Resume</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
