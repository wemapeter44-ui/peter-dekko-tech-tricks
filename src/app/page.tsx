import { Hero } from "@/components/sections/Hero";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechStack } from "@/components/sections/TechStack";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIBuild />
      <ServicesPreview />
      <FeaturedProducts />
      <FeaturedProjects />
      <TechStack />
      <WhyWorkWithMe />
      <FinalCTA />
    </>
  );
}
