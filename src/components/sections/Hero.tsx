import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/website-background.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,13,0.55) 0%, rgba(5,7,13,0.8) 55%, var(--color-bg) 100%)",
        }}
      />

      {/* Content */}
      <Container className="relative z-20 py-16 sm:py-24">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-black/40 px-3 py-1 text-xs text-[color:var(--color-muted)] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Peter Dekko Tech Tricks
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Building <span className="gradient-text">software</span> that solves real business problems.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--color-muted)] sm:text-lg">
          I design and develop web applications, business systems, and software products —
          with a focus on practical tools that help people work better.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Hire Me <ArrowRight size={16} />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--color-border)] bg-black/40 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:border-cyan-400/50"
          >
            View Products
          </Link>
        </div>
      </Container>
    </section>
  );
}
