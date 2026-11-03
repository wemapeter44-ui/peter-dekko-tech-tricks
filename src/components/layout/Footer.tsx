import Link from "next/link";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "./Container";

export function Footer() {
  // Only socials that have a link filled in site.ts are shown
  const socials: Array<{ label: string; href: string; Icon: IconType }> = [
    { label: "GitHub", href: site.socials.github, Icon: FaGithub },
    { label: "LinkedIn", href: site.socials.linkedin, Icon: FaLinkedinIn },
    { label: "X", href: site.socials.x, Icon: FaXTwitter },
    { label: "YouTube", href: site.socials.youtube, Icon: FaYoutube },
  ].filter((s) => s.href && s.href.length > 0);

  const contactItems = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      Icon: Mail,
    },
    {
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phone}`,
      Icon: Phone,
    },
  ];

  return (
    <footer className="mt-16 border-t border-border bg-bg/90 backdrop-blur-xl">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="group flex w-fit items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Peter Dekko Tech Tricks"
              width={42}
              height={42}
              className="rounded-xl object-cover ring-1 ring-white/10 transition group-hover:ring-accent/60"
            />
            <span className="text-sm font-bold tracking-wide text-foreground transition group-hover:text-accent">
              Peter Dekko
              <span className="block text-xs font-medium text-accent">
                TECH TRICKS
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Web development, software products and practical business systems
            built to help ideas move forward.
          </p>
          <p className="mt-4 text-xs font-medium tracking-wide text-foreground/40">
            SIMPLE. FAST. AFFORDABLE.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/50">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {site.nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex items-center gap-1.5 text-foreground/70 transition hover:translate-x-1 hover:text-accent"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/50">
            Get in touch
          </p>
          <ul className="mt-4 space-y-4 text-sm">
            {contactItems.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a href={href} className="group flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.07] text-accent transition duration-300 group-hover:border-accent/50 group-hover:bg-accent/15 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.12)]">
                    <Icon size={17} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-foreground/40">{label}</span>
                    <span className="block break-words text-foreground/75 transition group-hover:text-accent">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-2/20 bg-accent-2/10 text-accent-2">
                <MapPin size={17} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-foreground/40">Location</span>
                <span className="block break-words text-foreground/75">
                  {site.location}
                </span>
              </span>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/50">
            Connect
          </p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Follow the work, explore the technology, and keep up with what
            we’re building.
          </p>
          <ul className="mt-4 space-y-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  className="group flex w-fit items-center gap-3 text-sm text-foreground/70 transition hover:text-accent"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition group-hover:border-accent/30 group-hover:bg-accent/10">
                    <Icon size={16} />
                  </span>
                  {label}
                  <ArrowUpRight
                    size={13}
                    className="text-foreground/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-5 text-xs text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Peter Dekko Tech Tricks. All rights
            reserved.
          </p>
          <p className="tracking-wide">
            Built with purpose <span className="text-accent">✦</span> by PDT
            Softwares
          </p>
        </Container>
      </div>
    </footer>
  );
}