import { Container, Section, SectionHeading } from "@/components/layout/Section";

const stack = [
  "TypeScript", "JavaScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "PostgreSQL", "Supabase", "Git", "Vercel",
  "REST APIs", "HTML", "CSS",
];

export function TechStack() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="Tools I work with"
          description="A focused, modern stack — chosen for reliability and long-term maintainability."
        />
        <div className="flex flex-wrap gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-[color:var(--color-border)] bg-white/[0.02] px-3 py-1.5 text-sm text-[color:var(--color-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
