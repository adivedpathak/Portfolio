"use client"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/Card"
import BookImage from "@/assets/images/book-cover.png"
import Image from "next/image"
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"
import MapImage from "@/assets/images/map.png"
import SmileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader"
import { ToolBoxItems } from "@/components/ToolBoxItems"
import { motion } from "framer-motion"
import { useRef } from "react"

const toolBoxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: "Competitive Programming",
    emoji: "💻",
    left: "5%",
    top: "5%",
  },
  {
    title: "Automating Software",
    emoji: "🤖",
    left: "50%",
    top: "5%",
  },
  {
    title: "Collecting Tech Gadgets",
    emoji: "🔌",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },
]

const LocationText = () => {
  const containerVariants = {
    initial: { width: "120px" },
    hover: { width: "320px" }
  };

  const shortTextVariants = {
    initial: { opacity: 1, x: 0 },
    hover: { opacity: 0, x: -20 }
  };

  const longTextVariants = {
    initial: { opacity: 0, x: 20 },
    hover: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      className="group absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-900/80 text-white/80 text-sm px-4 py-1.5 rounded-full shadow-md backdrop-blur cursor-pointer overflow-hidden"
      initial="initial"
      whileHover="hover"
      animate="initial"
      variants={containerVariants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="relative h-6">
        <motion.span
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
          variants={shortTextVariants}
          transition={{ duration: 0.2 }}
        >
          📍 Pune, India
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
          variants={longTextVariants}
          transition={{ duration: 0.2 }}
        >
          📍 Akurdi, Pune, Maharashtra, India
        </motion.span>
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into my World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-[320px] flex flex-col justify-between">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage || "/placeholder.svg"} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft digital experiences."
              />
              <div className="overflow-hidden">
                <ToolBoxItems
                  items={toolBoxItems}
                  className="mb-4"
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolBoxItems
                  items={toolBoxItems}
                  className=""
                  itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1 overflow-hidden" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 whitespace-nowrap">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative">
              <Image src={MapImage || "/placeholder.svg"} alt="Map" className="h-full w-full object-cover opacity-80" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={SmileMemoji || "/placeholder.svg"} alt="Smile Memoji" className="size-20" />
              </div>
              <LocationText />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}