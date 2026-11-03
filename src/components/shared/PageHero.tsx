import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function PageHero({
  badge,
  eyebrow,
  title,
  description,
  children,
}: {
  badge?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-accent/[0.08] via-bg-soft to-accent-2/[0.09] px-6 py-12 sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full bg-accent/[0.08] blur-3xl" />

          <div className="relative max-w-3xl">
            {badge && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5 text-xs font-semibold tracking-wide text-accent">
                <Sparkles size={14} />
                {badge}
              </div>
            )}

            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            )}

            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            {description && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            )}

            {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
          </div>
        </div>
      </Container>
    </Section>
  );
}