import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  Briefcase,
  Video,
  ArrowUpRight,
} from "lucide-react";
import { site } from "@/config/site";
import { Container } from "./Container";

export function Footer() {
  const socials: Array<{
    label: string;
    href: string;
    Icon: React.ComponentType<{ size?: number }>;
  }> = [
    { label: "GitHub", href: site.socials.github, Icon: Code2 },
    { label: "LinkedIn", href: site.socials.linkedin, Icon: Briefcase },
    { label: "YouTube", href: site.socials.youtube, Icon: Video },
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
    <footer className="mt-16 border-t border-white/10 bg-[#05070d]/90 backdrop-blur-xl">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="group flex w-fit items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Peter Dekko Tech Tricks"
              width={42}
              height={42}
              className="rounded-xl object-cover ring-1 ring-white/10 transition group-hover:ring-cyan-400/60"
            />
            <span className="text-sm font-bold tracking-wide text-white transition group-hover:text-cyan-300">
              Peter Dekko
              <span className="block text-xs font-medium text-cyan-400">
                TECH TRICKS
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
            Web development, software products and practical business systems
            built to help ideas move forward.
          </p>
          <p className="mt-4 text-xs font-medium tracking-wide text-white/35">
            SIMPLE. FAST. AFFORDABLE.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {site.nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex items-center gap-1.5 text-white/65 transition hover:translate-x-1 hover:text-cyan-300"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
            Get in touch
          </p>
          <ul className="mt-4 space-y-4 text-sm">
            {contactItems.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex min-w-0 items-center gap-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-300 transition duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.12)]">
                    <Icon size={17} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/40">{label}</span>
                    <span className="block break-words text-white/75 transition group-hover:text-cyan-200">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.07] text-violet-300">
                <MapPin size={17} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-white/40">Location</span>
                <span className="break-words text-white/75">{site.location}</span>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
            Connect
          </p>
          <p className="mt-4 text-sm leading-6 text-white/55">
            Follow the work, explore the technology, and keep up with what
            we’re building.
          </p>
          <ul className="mt-4 space-y-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  className="group flex w-fit items-center gap-3 text-sm text-white/70 transition hover:text-cyan-300"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <Icon size={16} />
                  </span>
                  {label}
                  <ArrowUpRight
                    size={13}
                    className="text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/[0.07]">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Peter Dekko Tech Tricks. All rights
            reserved.
          </p>
          <p className="tracking-wide">
            Built with purpose <span className="text-cyan-400">✦</span> by PDT
            Softwares
          </p>
        </Container>
      </div>
    </footer>
  );
}
