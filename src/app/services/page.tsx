import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import * as Icons from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, business systems, automation, and technical support by Peter Dekko Tech Tricks.",
};

const process = [
  { step: "01", title: "Discovery", desc: "We talk through your goals, requirements, and constraints." },
  { step: "02", title: "Planning", desc: "I propose an approach, timeline, and cost. You approve before work starts." },
  { step: "03", title: "Build", desc: "Development happens in stages with regular updates and review points." },
  { step: "04", title: "Launch & Support", desc: "Deployment, documentation, and ongoing support if needed." },
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="What I can build for you"
            description="Practical software services focused on real business outcomes — not buzzwords."
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon =
              (Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[s.icon] ??
              Icons.Sparkles;
            return (
              <div key={s.slug} className="surface flex flex-col p-6">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-xs text-[color:var(--color-muted)]"
                    >
                      <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={12} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How we work together"
            description="A clear, predictable process — no surprises."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="surface p-6">
                <p className="text-xs font-semibold tracking-wider text-cyan-400">{p.step}</p>
                <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="surface flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-xl font-semibold">Ready to start?</h3>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">
                Tell me about your project and I'll get back to you.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Contact me <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
