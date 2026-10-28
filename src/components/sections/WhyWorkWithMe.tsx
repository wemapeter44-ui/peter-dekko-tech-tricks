import { Container, Section, SectionHeading } from "@/components/layout/Section";
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
        <div className="mb-10">
          <SectionHeading
            eyebrow="Why PDT Softwares"
            title="Technology built with purpose."
            description="A thoughtful approach to every project, with a focus on quality, communication, and solutions that serve real needs."
          />
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <li
              key={point.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-colors group-hover:bg-cyan-400/15">
                <CheckCircle2 size={20} />
              </div>

              <h3 className="mb-2 text-base font-semibold tracking-tight text-white">
                {point.title}
              </h3>

              <p className="text-sm leading-6 text-[color:var(--color-muted)]">
                {point.description}
              </p>

              <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400/70 to-purple-500/70 transition-transform duration-300 group-hover:scale-x-100" />
            </li>
          ))}

          <li className="flex flex-col justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-purple-500/[0.06] p-5 sm:col-span-2 lg:col-span-1">
            <ShieldCheck className="mb-4 text-cyan-300" size={25} />
            <h3 className="mb-2 text-base font-semibold text-white">
              Your goals come first
            </h3>
            <p className="text-sm leading-6 text-[color:var(--color-muted)]">
              Every solution starts with understanding what you need and choosing a practical way to deliver it.
            </p>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
