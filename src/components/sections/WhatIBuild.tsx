import { Section, SectionHeading } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Code2, Database, Workflow, LifeBuoy } from "lucide-react";

const items = [
  {
    icon: Code2,
    number: "01",
    title: "Websites & Web Apps",
    desc: "Professional, responsive digital experiences that build credibility and help businesses serve customers online.",
  },
  {
    icon: Database,
    number: "02",
    title: "Business Systems",
    desc: "Purpose-built systems for schools and businesses, including records, inventory, management, and reporting.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Automation & AI",
    desc: "Useful automations and AI-powered features that streamline repetitive tasks and improve everyday workflows.",
  },
  {
    icon: LifeBuoy,
    number: "04",
    title: "IT Support & Maintenance",
    desc: "Practical technical support, troubleshooting, updates, and maintenance to keep your digital tools running.",
  },
];

export function WhatIBuild() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="Digital solutions with a purpose."
          description="We combine practical thinking and modern technology to help businesses, schools, and individuals work smarter online."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, number, title, desc }) => (
            <article
              key={title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-linear-to-b from-white/[0.045] to-white/[0.015] p-5 pb-7 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_12px_40px_rgba(34,211,238,0.08)] sm:p-6 sm:pb-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent transition duration-300 group-hover:border-accent/40 group-hover:bg-accent/[0.14]">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-foreground/30 transition-colors group-hover:text-accent/70">
                  {number}
                </span>
              </div>

              <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">{desc}</p>

              <div className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-linear-to-r from-accent to-accent-2 transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}