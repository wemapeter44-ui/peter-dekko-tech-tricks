import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { Code2, Database, Workflow, LifeBuoy } from "lucide-react";

const items = [
  { icon: Code2, title: "Web Development", desc: "Fast, modern websites and web apps built with Next.js and TypeScript." },
  { icon: Database, title: "Business Systems", desc: "Custom management systems, dashboards, and internal tools." },
  { icon: Workflow, title: "Automation", desc: "Automating repetitive work to save time and reduce errors." },
  { icon: LifeBuoy, title: "Technical Support", desc: "Ongoing maintenance, fixes, and improvements for your software." },
];

export function WhatIBuild() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="What I Build"
          title="Practical software for real problems"
          description="From business websites to full software products — everything I build is designed to be used, maintained, and grown."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="surface p-6">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
