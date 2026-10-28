import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
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

      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(5,7,13,0.94) 0%, rgba(5,7,13,0.80) 48%, rgba(5,7,13,0.58) 100%), linear-gradient(180deg, rgba(5,7,13,0.08) 0%, var(--color-bg) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 z-10 h-80 w-80 rounded-full bg-cyan-400/[0.08] blur-3xl"
      />

      <Container className="relative z-20 py-24 sm:py-32 lg:py-36">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-black/40 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-cyan-200 backdrop-blur-md">
            <Sparkles size={14} className="text-cyan-300" />
            PETER DEKKO TECH TRICKS
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Technology that turns your ideas into{" "}
            <span className="gradient-text">digital solutions.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            We build professional websites, custom software, business
            management systems, and automation tools for businesses, schools,
            and individuals. Practical technology, designed around your needs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_36px_rgba(34,211,238,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Discuss Your Project
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium tracking-wide text-white/55 sm:text-sm">
            <span>Websites</span>
            <span className="text-cyan-400/70">/</span>
            <span>Software</span>
            <span className="text-cyan-400/70">/</span>
            <span>Business Systems</span>
            <span className="text-cyan-400/70">/</span>
            <span>Technical Support</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
