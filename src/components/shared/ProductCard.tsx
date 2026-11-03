import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Check } from "lucide-react";
import type { Product, ProductStatus } from "@/types";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProductStatus, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "border-emerald-400/30 text-emerald-300",
  },
  beta: {
    label: "Beta",
    className: "border-accent/30 text-accent",
  },
  "in-development": {
    label: "In development",
    className: "border-amber-400/30 text-amber-300",
  },
  planned: {
    label: "Planned",
    className: "border-white/20 text-foreground/70",
  },
};

export function ProductCard({
  product,
  wide = false,
}: {
  product: Product;
  wide?: boolean;
}) {
  const highlights = product.features.slice(0, 4);
  const status = statusStyles[product.status];

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_55px_rgba(34,211,238,0.10)]",
        wide && "lg:flex-row"
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative aspect-[16/9] overflow-hidden bg-linear-to-br from-[#071a2d] via-[#10152d] to-[#21113c]",
          wide && "lg:aspect-auto lg:min-h-[380px] lg:w-[55%] lg:shrink-0"
        )}
      >
        {product.screenshots?.[0] ? (
          <Image
            src={product.screenshots[0]}
            alt={`${product.name} product showcase`}
            fill
            sizes={
              wide
                ? "(max-width: 1024px) 100vw, 60vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
            <div className="flex size-20 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10">
              <BookOpen size={42} className="text-accent" />
            </div>
            <p className="text-2xl font-bold text-foreground">{product.name}</p>
          </div>
        )}

        <span
          className={cn(
            "absolute left-4 top-4 z-10 rounded-full border bg-bg/80 px-3 py-1 text-xs font-semibold backdrop-blur",
            status.className
          )}
        >
          {status.label}
        </span>

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-bg-soft to-transparent",
            wide && "lg:hidden"
          )}
        />
        {wide && (
          <div className="absolute inset-y-0 right-0 hidden w-24 bg-linear-to-l from-bg-soft to-transparent lg:block" />
        )}
      </div>

      {/* Details */}
      <div
        className={cn(
          "flex flex-1 flex-col p-5 sm:p-6",
          wide && "lg:justify-center lg:p-8"
        )}
      >
        {product.category && (
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent" />
            {product.category}
          </div>
        )}

        <div className="mt-3 flex items-center justify-between gap-3">
          <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
            {product.name}
          </h3>
          <ArrowUpRight
            size={20}
            className="shrink-0 text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
          />
        </div>

        <p className="mt-2 text-sm font-medium text-foreground/80">
          {product.tagline}
        </p>

        <p
          className={cn(
            "mt-3 text-sm leading-6 text-muted",
            wide ? "line-clamp-5" : "line-clamp-4"
          )}
        >
          {product.description}
        </p>

        {highlights.length > 0 && (
          <ul
            className={cn("mb-6 mt-5 grid gap-2", wide && "lg:grid-cols-2")}
          >
            {highlights.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] p-2.5"
              >
                <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                <span className="line-clamp-2 text-xs leading-5 text-foreground/80">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-5">
          <span className="text-xs text-muted">By PDT Softwares</span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            {product.ctaLabel || "Explore Product"}
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}