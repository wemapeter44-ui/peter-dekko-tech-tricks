import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="surface group flex flex-col overflow-hidden transition hover:border-cyan-400/40"
    >
      {project.cover ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[color:var(--color-border)]">
          <Image
            src={project.cover}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <ArrowUpRight size={16} className="text-[color:var(--color-muted)] transition group-hover:text-cyan-400" />
        </div>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-[color:var(--color-border)] px-2 py-0.5 text-[11px] text-[color:var(--color-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
