import type { Metadata } from "next";
import { Mail, MessageSquare, MapPin, ArrowUpRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/layout/Section";
import { ContactForm } from "@/components/shared/ContactForm";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Peter Dekko Tech Tricks — start a project or ask a question.",
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.56 0 .24 5.32.24 11.86c0 2.09.55 4.13 1.59 5.93L.14 24l6.36-1.67a11.9 11.9 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86a11.8 11.8 0 0 0-3.45-8.41ZM12.1 21.74a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.23c0-5.46 4.44-9.9 9.91-9.9a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.88-9.91 9.88Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function ContactPage() {
  const phoneDigits = site.phone.replace(/\D/g, "");
  const whatsappNumber = phoneDigits.startsWith("0")
    ? `254${phoneDigits.slice(1)}`
    : phoneDigits;

  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your project"
            description="Have an idea? Tell me what you need, and let's find the right digital solution for your business."
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="surface rounded-2xl p-5 sm:p-7">
              <div className="mb-6">
                <p className="text-lg font-semibold text-white">Send an enquiry</p>
                <p className="mt-1 text-sm text-[color:var(--color-muted)]">
                  Share a few details and I’ll get back to you.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/[0.09] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.14]"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366] text-white">
                  <WhatsAppIcon />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#25D366]">
                    Chat directly
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white">
                    WhatsApp PDT Softwares
                  </span>
                  <span className="mt-1 block text-xs text-white/60">
                    Usually the quickest way to reach me
                  </span>
                </span>
              </span>
              <ArrowUpRight size={18} className="shrink-0 text-[#25D366] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="surface flex items-start gap-3 rounded-2xl p-5">
              <Mail className="mt-0.5 text-cyan-400" size={19} />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block break-all text-sm text-white transition hover:text-cyan-300"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="surface flex items-start gap-3 rounded-2xl p-5">
              <MessageSquare className="mt-0.5 text-cyan-400" size={19} />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                  Phone
                </p>
                <a
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="mt-1 block text-sm text-white transition hover:text-cyan-300"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="surface flex items-start gap-3 rounded-2xl p-5">
              <MapPin className="mt-0.5 text-cyan-400" size={19} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                  Location
                </p>
                <p className="mt-1 text-sm text-white">{site.location}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-sm leading-relaxed text-[color:var(--color-muted)]">
              <p className="font-semibold text-white">What happens next?</p>
              <p className="mt-2">
                I’ll review your enquiry and respond, typically within 24–48 hours on weekdays.
              </p>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
