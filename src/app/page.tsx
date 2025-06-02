import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Analytics } from "@vercel/analytics/react"
import { AchievementsSection } from "@/sections/AchievementsSection";
import {SmoothCursor} from "../components/ui/smooth-cursor";
export default function Home() {
  return (
    <div>
           <SmoothCursor />
      <Analytics />
      <Header />
      <HeroSection />
      <AchievementsSection />
      <TapeSection />
      <ProjectsSection />

      {/* <TestimonialsSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
