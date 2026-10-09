import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container, Section } from "@/components/layout/Section";
import { ScreenshotGallery } from "@/components/shared/ScreenshotGallery";
import { products } from "@/data/products";

type Params = { slug: string };

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

  return (
    <>
      <Section>
        <Container>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-cyan-400"
          >
            <ArrowLeft size={14} /> All products
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {product.name}
            </h1>
            <span className="rounded-full border border-[color:var(--color-border)] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[color:var(--color-muted)]">
              {product.status}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-base text-[color:var(--color-muted)] sm:text-lg">
            {product.tagline}
          </p>
        </Container>
      </Section>

      {product.screenshots && product.screenshots.length > 0 ? (
        <Section className="pt-0">
          <Container>
            <h2 className="mb-6 text-lg font-semibold">Screenshots</h2>
            <ScreenshotGallery screenshots={product.screenshots} title={product.name} />
          </Container>
        </Section>
      ) : null}

      <Section className="pt-0">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="text-lg font-semibold">Overview</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {product.description}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Problem</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {product.problem}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Key features</h2>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="surface h-fit p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
              Tech
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[color:var(--color-border)] px-2 py-0.5 text-[11px] text-[color:var(--color-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <Link
              href={product.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              {product.ctaLabel} <ExternalLink size={14} />
            </Link>
          </aside>
        </Container>
      </Section>
    </>
  );
}
