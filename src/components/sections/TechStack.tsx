import { Section, SectionHeading } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Code2, Database, GitBranch, Layers } from "lucide-react";

const groups = [
  {
    title: "Frontend",
    icon: Layers,
    technologies: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    technologies: ["Node.js", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    title: "Development Tools",
    icon: GitBranch,
    technologies: ["Git", "Vercel"],
  },
];

export function TechStack() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Technology Stack"
          title="Modern tools. Practical solutions."
          description="A focused set of technologies chosen to build responsive experiences, dependable systems, and maintainable digital products."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {groups.map(({ title, icon: Icon, technologies }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-white/[0.025] p-5 transition duration-300 hover:border-accent/25 hover:bg-white/[0.04] sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
                  <Icon size={19} strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-border bg-bg/70 px-3 py-2 text-xs font-medium text-muted transition duration-200 hover:border-accent/40 hover:text-accent"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-5 h-px w-full bg-linear-to-r from-accent/30 via-accent-2/20 to-transparent" />
            </article>
          ))}
        </div>

        <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-muted">
          <Code2 size={15} className="shrink-0 text-accent" />
          The right tools are selected based on each project's needs.
        </p>
      </Container>
    </Section>
  );
}