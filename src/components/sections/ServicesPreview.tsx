import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function ServicesPreview() {
  return (
    <Section>
      <Container>
        <div className="mb-10 motion-safe:animate-[fade-up_700ms_ease-out_both]">
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

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-[color:var(--color-muted)]">
            Not sure which service fits your needs? Let’s find the right solution for you.
          </p>

          <Link
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/10 hover:text-cyan-200"
            href="/services"
          >
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
