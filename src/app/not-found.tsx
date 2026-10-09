import Link from "next/link";
import { Container, Section } from "@/components/layout/Section";

export default function NotFound() {
  return (
    <Section>
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-[color:var(--color-muted)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
        >
          Back home
        </Link>
      </Container>
    </Section>
  );
}
