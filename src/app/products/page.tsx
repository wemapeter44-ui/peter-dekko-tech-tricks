import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { ProductsGrid } from "@/components/sections/ProductsGrid";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Software products built by Peter Dekko Tech Tricks — practical tools for real problems.",
};

export default function ProductsPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Software products"
            description="Tools I'm building under the Peter Dekko Tech Tricks brand. Each product solves a specific, practical problem."
          />
        </Container>
      </Section>
      <ProductsGrid />
    </>
  );
}
