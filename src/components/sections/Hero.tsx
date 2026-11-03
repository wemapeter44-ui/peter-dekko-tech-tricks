import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Code2,
  LayoutDashboard,
  Wrench,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";

const offerings = [
  {
    title: "Websites",
    text: "Professional sites for businesses, schools and individuals.",
    Icon: Globe,
  },
  {
    title: "Software",
    text: "Custom software built around the way you work.",
    Icon: Code2,
  },
  {
    title: "Business Systems",
    text: "Management systems and automation tools.",
    Icon: LayoutDashboard,
  },
  {
    title: "Technical Support",
    text: "Practical help when technology gets in the way.",
    Icon: Wrench,
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background photo (optimized by next/image) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/website-background.jpeg"
          alt=""
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark overlay so text stays readable, fading into the page color */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(5,7,13,0.94) 0%, rgba(5,7,13,0.82) 50%, rgba(5,7,13,0.62) 100%), linear-gradient(180deg, rgba(5,7,13,0.08) 0%, var(--color-bg) 100%)",
        }}
      />

      {/* Soft color glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 z-10 h-80 w-80 rounded-full bg-accent/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 z-10 h-72 w-72 rounded-full bg-accent-2/[0.1] blur-3xl"
      />

      <Container className="relative z-20 py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          {/* Left: message */}
          <div>
            <p
              className="mb-6 inline-flex animate-[fade-up_0.6s_ease-out_both] items-center gap-2 rounded-full border border-accent/25 bg-black/40 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-cyan-200 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-accent" />
              PETER DEKKO TECH TRICKS
            </p>

            <h1
              className="animate-[fade-up_0.7s_ease-out_both] text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              Technology that turns your ideas into{" "}
              <span className="gradient-text">digital solutions.</span>
            </h1>

            <p
              className="mt-7 max-w-2xl animate-[fade-up_0.7s_ease-out_both] text-base leading-7 text-white/75 sm:text-lg sm:leading-8"
              style={{ animationDelay: "160ms" }}
            >
              We build professional websites, custom software, business
              management systems, and automation tools for businesses, schools,
              and individuals. Practical technology, designed around your needs.
            </p>

            <div
              className="mt-9 flex animate-[fade-up_0.7s_ease-out_both] flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "240ms" }}
            >
              <Link href="/contact" className="btn-primary group min-h-12 px-6">
                Discuss Your Project
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link href="/services" className="btn-secondary min-h-12 px-6">
                Explore Our Services
              </Link>
            </div>

            {/* Tag line (phones and tablets; large screens show the card instead) */}
            <div
              className="mt-8 flex animate-[fade-up_0.7s_ease-out_both] flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium tracking-wide text-white/60 sm:text-sm lg:hidden"
              style={{ animationDelay: "320ms" }}
            >
              <span>Websites</span>
              <span className="text-accent/70">/</span>
              <span>Software</span>
              <span className="text-accent/70">/</span>
              <span>Business Systems</span>
              <span className="text-accent/70">/</span>
              <span>Technical Support</span>
            </div>
          </div>

          {/* Right: what we build (large screens only) */}
          <aside
            aria-label="What we build"
            className="surface glow hidden animate-[fade-up_0.8s_ease-out_both] p-6 lg:block"
            style={{ animationDelay: "200ms" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              What we build
            </p>

            <ul className="mt-5 space-y-5">
              {offerings.map(({ title, text, Icon }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {title}
                    </span>
                    <span className="mt-0.5 block text-sm leading-6 text-muted">
                      {text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-sm text-muted">
              <MapPin size={16} className="text-accent-2" />
              Based in {site.location}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}