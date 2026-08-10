import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Hero } from "@/components/sections/hero";
import { StackSection } from "@/components/sections/stack-section";
import { WorkSection } from "@/components/sections/work-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <StackSection />
    </>
  );
}
