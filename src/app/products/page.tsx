import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { ProductsGrid } from "@/components/sections/ProductsGrid";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover practical software products built by Peter Dekko Tech Tricks to solve real-world problems.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-[#090d18] to-violet-500/10 px-6 py-14 sm:px-10 sm:py-20">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-sm text-cyan-300">
                <Sparkles size={15} />
                Built by PDT Softwares
              </div>
              <SectionHeading
                eyebrow="Our Products"
                title="Software built to solve real problems."
                description="Explore practical digital tools designed to make everyday work simpler, help organisations run smoothly, and turn good ideas into useful technology."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Discuss a product <ArrowRight size={17} />
                </Link>
                <Link href="/services" className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-cyan-300/50 hover:bg-white/5">
                  Explore our services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <ProductsGrid />
        </Container>
      </Section>
    </main>
  );
}
