import { Container, Section, SectionHeading } from "@/components/layout/Section";
import {
  Code2,
  Database,
  Workflow,
  LifeBuoy,
  ArrowUpRight,
} from "lucide-react";

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
        <div className="mb-10">
          <SectionHeading
            eyebrow="What We Build"
            title="Digital solutions with a purpose."
            description="We combine practical thinking and modern technology to help businesses, schools, and individuals work smarter online."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, number, title, desc }) => (
            <article
              key={title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_12px_40px_rgba(34,211,238,0.06)] sm:p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300 transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.14] group-hover:text-cyan-200">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-white/30 transition-colors group-hover:text-cyan-300/70">
                  {number}
                </span>
              </div>

              <h3 className="text-lg font-semibold leading-snug tracking-tight text-white">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-[color:var(--color-muted)]">
                {desc}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span className="text-xs font-medium tracking-wide text-white/40 transition-colors group-hover:text-cyan-300/80">
                  PDT Softwares
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-cyan-400/60 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                />
              </div>

              <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400/70 to-purple-500/70 transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
