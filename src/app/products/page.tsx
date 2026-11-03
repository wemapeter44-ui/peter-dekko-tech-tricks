import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ProductsGrid } from "@/components/sections/ProductsGrid";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover practical software products built by Peter Dekko Tech Tricks to solve real-world problems.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        badge="BUILT BY PDT SOFTWARES"
        eyebrow="Our Products"
        title="Software built to solve real problems."
        description="Explore practical digital tools designed to make everyday work simpler, help organisations run smoothly, and turn good ideas into useful technology."
      >
        <Link href="/contact" className="btn-primary">
          Discuss a product <ArrowRight size={17} />
        </Link>
        <Link href="/services" className="btn-secondary">
          Explore our services
        </Link>
      </PageHero>

      <Section className="pt-0">
        <Container>
          <ProductsGrid />
        </Container>
      </Section>
    </>
  );
}