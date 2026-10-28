import { Container, Section, SectionHeading } from "@/components/layout/Section";
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
        <div className="mb-10">
          <SectionHeading
            eyebrow="Technology Stack"
            title="Modern tools. Practical solutions."
            description="A focused set of technologies chosen to build responsive experiences, dependable systems, and maintainable digital products."
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {groups.map(({ title, icon: Icon, technologies }) => (
            <article
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.04] sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300">
                  <Icon size={19} strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold tracking-tight text-white">
                  {title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-[#05070d]/70 px-3 py-2 text-xs font-medium text-[color:var(--color-muted)] transition duration-200 hover:border-cyan-400/40 hover:text-cyan-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-400/30 via-purple-500/20 to-transparent" />
            </article>
          ))}
        </div>

        <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-[color:var(--color-muted)]">
          <Code2 size={15} className="shrink-0 text-cyan-400" />
          The right tools are selected based on each project's needs.
        </p>
      </Container>
    </Section>
  );
}
