"use client";

import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import StatsSection from "@/components/StatsSection";
import InterviewSection from "@/components/InterviewSection";
import TrickSection from "@/components/TrickSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <StatsSection />
      <InterviewSection />
      <TrickSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
