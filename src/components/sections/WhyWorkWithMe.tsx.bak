import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Clean, maintainable code — not quick hacks.",
  "Direct communication. No middlemen.",
  "Built for growth: your software can scale with you.",
  "Real documentation so you're never locked in.",
  "Focus on solving the actual business problem.",
];

export function WhyWorkWithMe() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Why work with me"
          title="Built the right way, from the start"
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="surface flex items-start gap-3 p-4">
              <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={18} />
              <span className="text-sm text-[color:var(--color-muted)]">{p}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
