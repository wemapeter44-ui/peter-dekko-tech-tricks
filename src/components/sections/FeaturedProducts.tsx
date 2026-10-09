import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Software products"
          description="Products I'm designing and building under the Peter Dekko Tech Tricks brand."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-8">
          <Link className="text-sm text-cyan-400 hover:underline" href="/products">
            View all products →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
