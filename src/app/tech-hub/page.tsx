import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { PostCard } from "@/components/shared/PostCard";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Tech Hub",
  description:
    "Tutorials, build notes, and lessons from building real software at Peter Dekko Tech Tricks.",
};

export default function TechHubPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Tech Hub"
            title="Articles & tutorials"
            description="Practical notes from real projects — engineering, tools, and lessons learned."
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          {sorted.length === 0 ? (
            <div className="surface p-10 text-center text-sm text-[color:var(--color-muted)]">
              No articles yet. Check back soon.
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
