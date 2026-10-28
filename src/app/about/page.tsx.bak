import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Rocket, ShieldCheck } from "lucide-react";
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
          <SectionHeading
            eyebrow="About"
            title="Peter Dekko Tech Tricks"
            description="An independent technology brand focused on building practical software for real-world problems."
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="surface p-8">
              <h2 className="text-lg font-semibold">Who I am</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                I&apos;m Peter Dekko, a web developer and software builder based in
                Kenya. I create practical digital solutions for businesses,
                organizations, and individuals — with a focus on websites, web
                applications, business systems, and software products. I&apos;m
                driven by the idea that technology should solve real problems
                and be useful in everyday work.
              </p>
            </div>

            <div className="surface p-8">
              <h2 className="text-lg font-semibold">What I do</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                I build web applications, business management systems, and
                software products. My work sits at the intersection of
                engineering and practical business needs — tools that are used
                every day, not demos that look nice in a pitch deck.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                Under the Peter Dekko Tech Tricks brand, I also build and
                maintain my own software products, including{" "}
                <Link
                  href="/products/smartmwalimu"
                  className="text-cyan-400 hover:underline"
                >
                  Smart Mwalimu
                </Link>
                .
              </p>
            </div>

            <div className="surface p-8">
              <h2 className="text-lg font-semibold">Where I&apos;m going</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                I&apos;m building Peter Dekko Tech Tricks into a technology
                brand focused on creating useful software products, modern
                websites, and digital systems for businesses and organizations.
                My long-term goal is to build products that solve real problems
                in Africa, while working with clients and teams to turn ideas
                into reliable technology.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="surface p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                Based in
              </p>
              <p className="mt-2 text-sm">{site.location}</p>
            </div>
            <div className="surface p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                Focus
              </p>
              <p className="mt-2 text-sm">
                Web development · Business systems · Software products
              </p>
            </div>
            <div className="surface p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                Open to
              </p>
              <p className="mt-2 text-sm">
                Freelance projects · Long-term collaborations · Product partnerships
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Work with me <ArrowRight size={16} />
            </Link>
          </aside>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <SectionHeading
            eyebrow="Principles"
            title="How I approach the work"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, desc }) => (
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
    </>
  );
}
