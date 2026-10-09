import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Real projects I've designed and developed."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-8">
          <Link className="text-sm text-cyan-400 hover:underline" href="/projects">
            View all projects →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
