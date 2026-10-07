import { Container } from "@/components/layout/Container";

export default function Home() {
  return (
    <Container className="py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
        Peter Dekko Tech Tricks
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
        Building <span className="gradient-text">software</span> that solves real problems.
      </h1>
      <p className="mt-6 max-w-2xl text-[color:var(--color-muted)]">
        Home page coming in Stage 3.
      </p>
    </Container>
  );
}
