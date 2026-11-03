import { Section, SectionHeading } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const points = [
  {
    title: "Quality code",
    description: "Clean, maintainable code — not quick hacks.",
  },
  {
    title: "Direct communication",
    description: "Clear updates and direct communication. No middlemen.",
  },
  {
    title: "Built for growth",
    description: "Software designed to grow alongside your business.",
  },
  {
    title: "You stay in control",
    description: "Clear documentation helps you understand and manage your software.",
  },
  {
    title: "Solutions that matter",
    description: "A practical focus on solving your actual business problems.",
  },
];

export function WhyWorkWithMe() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Why PDT Softwares"
          title="Technology built with purpose."
          description="A thoughtful approach to every project, with a focus on quality, communication, and solutions that serve real needs."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <li
              key={point.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white/[0.025] p-5 pb-7 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent/[0.04]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                <CheckCircle2 size={20} />
              </div>

              <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground">
                {point.title}
              </h3>

              <p className="text-sm leading-6 text-muted">{point.description}</p>

              <div className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-linear-to-r from-accent to-accent-2 transition-transform duration-300 group-hover:scale-x-100" />
            </li>
          ))}

          <li className="flex flex-col justify-center rounded-2xl border border-accent/20 bg-linear-to-br from-accent/[0.08] to-accent-2/[0.06] p-5 sm:col-span-2 lg:col-span-1">
            <ShieldCheck className="mb-4 text-accent" size={25} />
            <h3 className="mb-2 text-base font-semibold text-foreground">
              Your goals come first
            </h3>
            <p className="text-sm leading-6 text-muted">
              Every solution starts with understanding what you need and choosing a practical way to deliver it.
            </p>
          </li>
        </ul>
      </Container>
    </Section>
  );
}