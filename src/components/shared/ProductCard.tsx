import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="surface group flex flex-col overflow-hidden transition hover:border-cyan-400/40"
    >
      {product.screenshots?.[0] ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[color:var(--color-border)]">
          <Image
            src={product.screenshots[0]}
            alt={`${product.name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="rounded-full border border-[color:var(--color-border)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[color:var(--color-muted)]">
            {product.status}
          </span>
        </div>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">{product.tagline}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm text-cyan-400">
          View product <ArrowRight size={14} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
