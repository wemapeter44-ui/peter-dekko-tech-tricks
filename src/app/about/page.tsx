import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Peter Dekko Tech Tricks — an independent technology brand building practical software for businesses and organizations.",
};

const principles = [
  {
    icon: Code2,
    title: "Clean engineering",
    desc: "Readable, maintainable code that outlives the first version.",
  },
  {
    icon: ShieldCheck,
    title: "Honesty first",
    desc: "Realistic scopes, clear timelines, no overpromising.",
  },
  {
    icon: Cpu,
    title: "Practical focus",
    desc: "Solve the actual problem — not the fashionable one.",
  },
  {
    icon: Rocket,
    title: "Built to grow",
    desc: "Foundations ready for scale when you're ready to scale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-cyan-400/[0.08] via-[#080b14] to-indigo-500/[0.09] px-6 py-12 sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-semibold tracking-wide text-cyan-300">
                <Sparkles size={14} />
                THE STORY BEHIND PDT SOFTWARES
              </div>
              <SectionHeading
                eyebrow="About"
                title="Peter Dekko Tech Tricks"
                description="An independent technology brand focused on building practical software for real-world problems."
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#05070d] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Let’s work together <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">01 · The person</p>
              <h2 className="mt-3 text-xl font-semibold text-white">Who I am</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                I&apos;m Peter Dekko, a web developer and software builder based in Kenya. I create practical digital solutions for businesses, organizations, and individuals, with a focus on websites, web applications, business systems, and software products. I&apos;m driven by the idea that technology should solve real problems and be useful in everyday work.
              </p>
            </article>

            <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">02 · The work</p>
              <h2 className="mt-3 text-xl font-semibold text-white">What I do</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                I build web applications, business management systems, and software products. My work connects engineering with practical business needs: tools intended for everyday use, not just attractive demonstrations.
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                Under the Peter Dekko Tech Tricks brand, I also develop my own software products, including{" "}
                <Link href="/products/pdt-shule" className="font-medium text-cyan-400 transition hover:text-cyan-300 hover:underline">
                  PDT Shule
                </Link>
                , my school-management software project.
              </p>
            </article>

            <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">03 · The vision</p>
              <h2 className="mt-3 text-xl font-semibold text-white">Where I&apos;m going</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                I&apos;m building Peter Dekko Tech Tricks into a technology brand focused on useful software products, modern websites, and digital systems for businesses and organizations. My long-term goal is to build products that solve real problems in Africa while working with clients and teams to turn ideas into reliable technology.
              </p>
            </article>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-muted)]">Based in</p>
              <p className="mt-2 text-base font-semibold text-white">{site.location}</p>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">Kenya · Working on digital solutions</p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-muted)]">Focus areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Web development", "Business systems", "Software products", "Automation"].map((item) => (
                  <span key={item} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/75">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-muted)]">Open to</p>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Freelance projects, long-term collaborations, and product partnerships.
              </p>
            </div>
            <Link
              href="/contact"
              className="group flex w-full items-center justify-between gap-3 rounded-xl bg-cyan-400 px-5 py-4 text-sm font-semibold text-[#05070d] transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Work with me
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </aside>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <SectionHeading
            eyebrow="Principles"
            title="How I approach the work"
            description="The values that guide how I plan, build, and deliver digital solutions."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, desc }, index) => (
              <article
                key={title}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.08] text-cyan-300 transition group-hover:bg-cyan-400/[0.14]">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-white/25">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">{desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
