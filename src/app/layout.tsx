import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google"; 
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ['latin'], variable: "--font-serif", weight: ['400'] });

export const metadata: Metadata = {
  title: "Aditya Vedpathak | Award-Winning Full Stack Developer & UI/UX Designer",
  description:
    "Aditya Vedpathak is a passionate full stack developer and UI/UX designer specializing in scalable web applications, AI integration, and real-time collaboration tools. National and international hackathon winner delivering innovative software solutions.",
  keywords: [
    "Aditya Vedpathak",
    "Full Stack Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Expert",
    "Node.js",
    "AI Integration",
    "Hackathon Winner",
    "Web Application Developer",
    "Software Engineer",
    "Frontend Tribe",
    "Open Source Contributor",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Vedpathak", url: "https://adityavedpathak.vercel.app/" }],
  creator: "Aditya Vedpathak",
  robots: "index, follow",
  openGraph: {
    title: "Aditya Vedpathak | Full Stack Developer & UI/UX Designer",
    description:
      "Explore Aditya Vedpathak’s portfolio showcasing cutting-edge projects, award-winning hackathon solutions, and expertise in React, Next.js, AI-driven applications, and scalable web platforms.",
    url: "https://adityavedpathak.vercel.app/",
    siteName: "Aditya Vedpathak Portfolio",
    // Removed images here
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Vedpathak | Full Stack Developer & UI/UX Designer",
    description:
      "Award-winning developer and designer building innovative web applications and AI-powered solutions. Check out the portfolio for projects and achievements.",
    // Removed images and creator handle
  },
  metadataBase: new URL("https://adityavedpathak.vercel.app/"),
  formatDetection: {
    telephone: false,
  },
  // Adding LinkedIn link in authors or custom metadata (since metadata doesn’t have a dedicated linkedin field)
  // You can add a custom property like this:
    // linkedin: "https://www.linkedin.com/in/aditya-vedpathak-2b469b259/" ,

};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export function generateThemeColor() {
  return "#0f172a";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
