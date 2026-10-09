import { Container, Section } from "@/components/layout/Section";
import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/data/products";

export function ProductsGrid() {
  if (products.length === 0) {
    return (
      <Section>
        <Container>
          <div className="surface p-10 text-center text-sm text-[color:var(--color-muted)]">
            No products yet. Check back soon.
          </div>
        </Container>
      </Section>
    );
  }
  return (
    <Section>
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
