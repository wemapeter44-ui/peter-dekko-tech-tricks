import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, Section } from "@/components/layout/Section";
import { posts } from "@/data/posts";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Section>
      <Container className="max-w-3xl">
        <Link
          href="/tech-hub"
          className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-cyan-400"
        >
          <ArrowLeft size={14} /> All articles
        </Link>
        <div className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-wider text-[color:var(--color-muted)]">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-[color:var(--color-border)] px-2 py-0.5 text-[11px] text-[color:var(--color-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
        <article className="prose prose-invert mt-10 max-w-none whitespace-pre-wrap text-sm leading-relaxed text-[color:var(--color-muted)]">
          {post.content}
        </article>
      </Container>
    </Section>
  );
}
