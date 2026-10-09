import type { Metadata } from "next";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { ContactForm } from "@/components/shared/ContactForm";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Peter Dekko Tech Tricks — start a project or ask a question.",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your project"
            description="Fill in the form or reach out directly. I reply to every serious enquiry."
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="space-y-4">
            <div className="surface flex items-start gap-3 p-5">
              <Mail className="mt-0.5 text-cyan-400" size={18} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                  Email
                </p>
                <p className="mt-1 text-sm">{site.email}</p>
              </div>
            </div>

            <div className="surface flex items-start gap-3 p-5">
              <MessageSquare className="mt-0.5 text-cyan-400" size={18} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                  Phone / WhatsApp
                </p>
                <p className="mt-1 text-sm">{site.phone}</p>
              </div>
            </div>

            <div className="surface flex items-start gap-3 p-5">
              <MapPin className="mt-0.5 text-cyan-400" size={18} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                  Location
                </p>
                <p className="mt-1 text-sm">{site.location}</p>
              </div>
            </div>

            <div className="surface p-5 text-xs leading-relaxed text-[color:var(--color-muted)]">
              Response time: typically within 24–48 hours on weekdays.
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
