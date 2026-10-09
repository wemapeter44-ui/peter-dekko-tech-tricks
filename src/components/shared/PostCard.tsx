import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/tech-hub/${post.slug}`}
      className="surface group flex flex-col p-6 transition hover:border-cyan-400/40"
    >
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[color:var(--color-muted)]">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">{post.excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm text-cyan-400">
        Read article <ArrowRight size={14} className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
