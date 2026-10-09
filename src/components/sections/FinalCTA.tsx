import Link from "next/link";
import { Container, Section } from "@/components/layout/Section";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <Section>
      <Container>
        <div className="surface relative overflow-hidden p-10 sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(50% 50% at 100% 0%, rgba(34,211,238,0.15), transparent 70%)",
            }}
          />
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[color:var(--color-muted)] sm:text-base">
            Tell me what you're trying to build. I'll reply with honest feedback and next steps.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
