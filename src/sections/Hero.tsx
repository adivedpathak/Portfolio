"use client";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      {/* Background & Floating Elements */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          className="absolute inset-0 -z-30 opacity-5 pointer-events-none"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20 pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300 pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300 pointer-events-none" />
        </HeroOrbit>
      </div>

      {/* Hero Content */}
      <div className="container relative z-50 -mt-12">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Memoji" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl mt-8 tracking-wide">
           Aditya Vedpathak
          </h1>
          <p className="mt-4 text-white/60 md:text-lg">
            Backend-focused full-stack developer specializing in scalable
            architectures, API design—ensuring
            reliability, efficiency at every step.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-50">
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition-transform transform hover:scale-105 hover:bg-white/10 hover:border-white/25 active:scale-95"
            onClick={() => {
              console.log("Explore my work clicked!");
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <span className="font-semibold transition-colors duration-300">
              Explore my work
            </span>
            <ArrowDown className="size-4 transition-transform transform group-hover:translate-y-1" />
          </button>

          <button
            className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition-transform transform hover:scale-105 hover:bg-gray-300 active:scale-95 shadow-md hover:shadow-lg"
            onClick={() => {
              const resumeUrl = "/ADITYA_resune.pdf"; // Ensure it's in the public folder
              const link = document.createElement("a");
              link.href = resumeUrl;
              link.download = "Aditya's Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <span className="transition-transform transform hover:rotate-12">
              👋
            </span>
            <span className="font-semibold transition-colors duration-300">
              Download Resume
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
