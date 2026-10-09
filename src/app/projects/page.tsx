import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects built by Peter Dekko Tech Tricks — web apps, business systems, and tools.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="A selection of projects I've designed and developed. Each one solved a specific problem."
          />
        </Container>
      </Section>
      <ProjectsGrid />
    </>
  );
}
