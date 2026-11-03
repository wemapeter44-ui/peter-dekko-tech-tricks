import Link from "next/link";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function ServicesPreview() {
  return (
    <Section>
      <Container>
        <div className="motion-safe:animate-[fade-up_700ms_ease-out_both]">
          <SectionHeading
            eyebrow="What We Do"
            title="Technology that moves your business forward."
            description="From professional websites to custom software and reliable technical support, we build practical digital solutions around your needs."
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={service.slug}
              className="h-full motion-safe:animate-[fade-up_700ms_ease-out_both]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-muted">
            Not sure which service fits your needs? Let’s find the right
            solution for you.
          </p>

          <Link href="/services" className="btn-secondary group w-fit shrink-0">
            Explore all services
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}