import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  const single = featured.length === 1;

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Software products"
          description="Products I'm designing and building under the Peter Dekko Tech Tricks brand."
        />

        <div
          className={cn(
            "grid gap-5",
            !single && "sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} wide={single} />
          ))}
        </div>

        <div className="mt-8">
          <Link href="/products" className="btn-secondary group w-fit">
            View all products
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}