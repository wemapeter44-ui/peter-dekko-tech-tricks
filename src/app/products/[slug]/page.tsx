import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ScreenshotGallery } from "@/components/shared/ScreenshotGallery";
import { products } from "@/data/products";
import type { ProductStatus } from "@/types";
import { cn } from "@/lib/utils";

type Params = { slug: string };

const statusStyles: Record<ProductStatus, { label: string; className: string }> = {
  live: { label: "Live", className: "border-emerald-400/30 text-emerald-300" },
  beta: { label: "Beta", className: "border-accent/30 text-accent" },
  "in-development": {
    label: "In development",
    className: "border-amber-400/30 text-amber-300",
  },
  planned: { label: "Planned", className: "border-white/20 text-foreground/70" },
};

const card = "rounded-2xl border border-border bg-white/[0.025] p-6 sm:p-8";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.tagline,
    openGraph: { title: product.name, description: product.tagline },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const status = statusStyles[product.status];

  return (
    <>
      <Section>
        <Container>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          >
            <ArrowLeft size={14} /> All products
          </Link>

          {product.category && (
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {product.category}
            </p>
          )}

          <div
            className={cn("flex flex-wrap items-center gap-3", !product.category && "mt-8")}
          >
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <span
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold",
                status.className
              )}
            >
              {status.label}
            </span>
          </div>

          <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">
            {product.tagline}
          </p>
        </Container>
      </Section>

      {product.screenshots && product.screenshots.length > 0 ? (
        <Section className="pt-0">
          <Container>
            <ScreenshotGallery
              screenshots={product.screenshots}
              title={product.name}
            />
          </Container>
        </Section>
      ) : null}

      <Section className="pt-0">
        <Container className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <article className={card}>
              <h2 className="text-lg font-semibold text-foreground">Overview</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                {product.description}
              </p>
            </article>

            <article className={card}>
              <h2 className="text-lg font-semibold text-foreground">Problem</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{product.problem}</p>
            </article>

            <article className={card}>
              <h2 className="text-lg font-semibold text-foreground">Key features</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-6 text-muted">
                    <Check size={16} className="mt-1 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <aside className="surface h-fit p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Tech
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-bg/60 px-2 py-1 text-[11px] text-foreground/75"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={product.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                {product.ctaLabel} <ExternalLink size={14} />
              </a>
              <Link href="/contact" className="btn-secondary w-full">
                Ask about this product <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}