import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import * as Icons from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, business systems, automation, and technical support by Peter Dekko Tech Tricks.",
};

const process = [
  { step: "01", title: "Discovery", desc: "We discuss your goals, requirements, and budget before choosing the right solution." },
  { step: "02", title: "Planning", desc: "You receive a clear proposed approach, timeline, and cost before work begins." },
  { step: "03", title: "Development", desc: "I build in stages, sharing progress so you can review and give feedback." },
  { step: "04", title: "Launch & Support", desc: "We prepare your solution for launch, with documentation and support options." },
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-cyan-400/[0.08] via-[#080b14] to-indigo-500/[0.09] px-6 py-12 sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-semibold tracking-wide text-cyan-300">
                <Sparkles size={14} />
                PDT SOFTWARES · OUR SERVICES
              </div>
              <SectionHeading
                eyebrow="What we do"
                title="Digital solutions built around your goals."
                description="From your first business website to custom software and automation, get practical technology designed to help you work smarter and grow with confidence."
              />
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#05070d] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Discuss your project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">What I offer</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Services for real-world needs
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--color-muted)]">
              Choose a service to get started, or contact me if you need a combination of solutions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => {
              const Icon =
                (Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[s.icon] ??
                Icons.Sparkles;

              return (
                <article
                  key={s.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04] hover:shadow-[0_16px_45px_rgba(34,211,238,0.06)]"
                >
                  <div className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.08] text-cyan-300 transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.14]">
                    <Icon size={22} />
                  </div>
                  <h3 className="pr-8 text-lg font-semibold tracking-tight text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">{s.description}</p>

                  <div className="my-5 h-px bg-white/[0.07]" />

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/75">
                    What’s included
                  </p>
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm leading-5 text-white/65">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={15} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <Link
                      href={`/contact?service=${encodeURIComponent(s.title)}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                    >
                      Enquire about this service
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
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
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Our process</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              From idea to launch
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--color-muted)]">
              A straightforward process keeps expectations clear from the beginning.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:border-cyan-400/25"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-sm font-bold text-cyan-300">
                  {p.step}
                </span>
                <h3 className="mt-5 text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/[0.10] via-white/[0.025] to-indigo-500/[0.08] p-7 sm:p-10">
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Have an idea?</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Let’s build something useful.
                </h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                  Tell me what you’re trying to achieve. We’ll discuss your needs and find a practical way forward.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#05070d] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
