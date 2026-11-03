import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductsGrid() {
  if (products.length === 0) {
    return (
      <div className="surface p-10 text-center text-sm text-muted">
        No products yet. Check back soon.
      </div>
    );
  }

  // One product looks best as a wide card; several use a normal grid.
  const single = products.length === 1;

  return (
    <div className={cn("grid gap-5", !single && "sm:grid-cols-2 lg:grid-cols-3")}>
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} wide={single} />
      ))}
    </div>
  );
}