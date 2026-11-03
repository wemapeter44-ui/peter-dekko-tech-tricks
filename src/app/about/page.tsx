import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/shared/PageHero";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, business systems, automation, and technical support by Peter Dekko Tech Tricks.",
};

const steps = [
  { step: "01", title: "Discovery", desc: "We discuss your goals, requirements, and budget before choosing the right solution." },
  { step: "02", title: "Planning", desc: "You receive a clear proposed approach, timeline, and cost before work begins." },
  { step: "03", title: "Development", desc: "I build in stages, sharing progress so you can review and give feedback." },
  { step: "04", title: "Launch & Support", desc: "We prepare your solution for launch, with documentation and support options." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="PDT SOFTWARES · OUR SERVICES"
        eyebrow="What we do"
        title="Digital solutions built around your goals."
        description="From your first business website to custom software and automation, get practical technology designed to help you work smarter and grow with confidence."
      >
        <Link href="/contact" className="btn-primary">
          Discuss your project <ArrowRight size={16} />
        </Link>
      </PageHero>

      <Section className="pt-0">
        <Container>
          <SectionHeading
            eyebrow="What I offer"
            title="Services for real-world needs"
            description="Choose a service to get started, or contact me if you need a combination of solutions."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => {
              const Icon =
                (Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[
                  s.icon
                ] ?? Icons.Sparkles;

              return (
                <article
                  key={s.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.04] hover:shadow-[0_16px_45px_rgba(34,211,238,0.06)]"
                >
                  <div className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-foreground/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-accent/15 bg-accent/[0.08] text-accent transition duration-300 group-hover:border-accent/30 group-hover:bg-accent/[0.14]">
                    <Icon size={22} />
                  </div>

                  <h3 className="pr-8 text-lg font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{s.description}</p>

                  <div className="my-5 h-px bg-border" />

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/75">
                    What’s included
                  </p>
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-sm leading-5 text-foreground/65"
                      >
                        <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={15} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <Link
                      href={`/contact?service=${encodeURIComponent(s.title)}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-cyan-200"
                    >
                      Enquire about this service
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our process"
            title="From idea to launch"
            description="A straightforward process keeps expectations clear from the beginning."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-border bg-white/[0.025] p-6 transition duration-300 hover:border-accent/25"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-sm font-bold text-accent">
                  {p.step}
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-linear-to-r from-accent/[0.10] via-white/[0.025] to-accent-2/[0.08] p-7 sm:p-10">
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Have an idea?
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Let’s build something useful.
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Tell me what you’re trying to achieve. We’ll discuss your needs and find a practical way forward.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}