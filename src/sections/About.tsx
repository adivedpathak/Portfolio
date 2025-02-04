import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import MapImage from '@/assets/images/map.png'
import { TechIcon } from "@/components/TechIcon";
import SmileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";

const toolBoxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨'
  },
  {
    title: 'Photography',
    emoji: '📸'
  },
  {
    title: 'Gaming',
    emoji: '🎮'
  },
  {
    title: 'Hiking',
    emoji: '🥾'
  },
  {
    title: 'Music',
    emoji: '🎵'
  },
  {
    title: 'Reading',
    emoji: '📚'
  },
  {
    title: 'Fitness',
    emoji: '🏋️'
  },
]

export const AboutSection = () => {
  return <div className="py-20">
    <div className="container">
      <SectionHeader eyebrow="About me" title="A Glimpse Into my World" description="Learn more about who I am, what I do, and what inspires me." />
      <div className="mt-20 flex flex-col gap-8">
        <Card className="h-[320px]">
          <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
          <div className="w-40 mx-auto mt-8">
            <Image src={BookImage} alt="Book Cover" />
          </div>
        </Card>
        <Card className="h-[320px] p-0">
        <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft digital experiences." className="px-6 pt-6"/>
        <ToolBoxItems items={toolBoxItems} className="mt-6"/>
        <ToolBoxItems items={toolBoxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2"/>
        </Card>
        <Card>
        <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital relm." />
          <div>
            {hobbies.map(hobby => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
            <Image src={MapImage} alt="Map" />
            <Image src={SmileMemoji} alt="Smile Memoji" />
        </Card>
      </div>
    </div>
  </div>;
};
