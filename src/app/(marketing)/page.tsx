import { HeroSection } from "@/_components/sections/home/hero-section";
import { StatsBar } from "@/_components/sections/home/stats-bar";
import { SkillsSection } from "@/_components/sections/home/skills-section";
import { FeaturedProjects } from "@/_components/sections/home/featured-projects";
import { AboutPreview } from "@/_components/sections/home/about-preview";
import { ContactPreview } from "@/_components/sections/home/contact-preview";
import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({ pathname: "/" });

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <SkillsSection />
      <FeaturedProjects />
      <AboutPreview />
      <ContactPreview />
    </>
  );
}
