import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code2 as Github } from "lucide-react";
import { Container, Section } from "@/components/layout/Section";
import { projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Section>
        <Container>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-cyan-400"
          >
            <ArrowLeft size={14} /> All projects
          </Link>
          <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-[color:var(--color-muted)] sm:text-lg">
            {project.summary}
          </p>
        </Container>
      </Section>

      {project.screenshots && project.screenshots.length > 0 ? (
        <Section className="pt-0">
          <Container>
            <h2 className="mb-6 text-lg font-semibold">Screenshots</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.screenshots.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[16/10] bg-black/40 overflow-hidden rounded-xl border border-[color:var(--color-border)]"
                >
                  <Image
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2 transition hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className="pt-0">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="text-lg font-semibold">Problem</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {project.problem}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Solution</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {project.solution}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Key features</h2>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
                {project.features.map((f) => (
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
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[color:var(--color-border)] px-2 py-0.5 text-[11px] text-[color:var(--color-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Live demo <ExternalLink size={14} />
              </a>
            ) : null}

            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[color:var(--color-border)] px-4 py-2.5 text-sm font-semibold transition hover:border-cyan-400/50"
              >
                Source code <Github size={14} />
              </a>
            ) : null}
          </aside>
        </Container>
      </Section>
    </>
  );
}