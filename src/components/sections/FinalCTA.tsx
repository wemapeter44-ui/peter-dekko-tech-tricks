import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";

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
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
            Tell me what you're trying to build. I'll reply with honest feedback and next steps.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary group min-h-12 px-6">
              Start a conversation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a href={`mailto:${site.email}`} className="btn-secondary min-h-12 px-6">
              <Mail size={16} />
              Email me directly
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}