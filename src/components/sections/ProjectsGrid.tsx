import { Container, Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  if (projects.length === 0) {
    return (
      <Section>
        <Container>
          <div className="surface p-10 text-center text-sm text-[color:var(--color-muted)]">
            No projects yet. Check back soon.
          </div>
        </Container>
      </Section>
    );
  }
  return (
    <Section>
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
