import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="How I can help you"
          description="Services tailored for businesses and individuals who need reliable, well-built software."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-8">
          <Link className="text-sm text-cyan-400 hover:underline" href="/services">
            See all services →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
