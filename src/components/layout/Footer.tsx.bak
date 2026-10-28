import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Code2, Briefcase, Video } from "lucide-react";
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

  return (
    <footer className="mt-16 border-t border-[color:var(--color-border)] bg-black/40 backdrop-blur">
      <Container className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.jpeg"
              alt="Peter Dekko Tech Tricks"
              width={32}
              height={32}
              className="rounded-lg object-cover"
            />
            <span className="text-sm font-semibold">Peter Dekko Tech Tricks</span>
          </Link>
          <p className="mt-3 text-xs text-[color:var(--color-muted)]">
            Web development, software products &amp; business systems.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link className="hover:text-cyan-400" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-cyan-400" />
              <a className="hover:text-cyan-400" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-cyan-400" />
              <a className="hover:text-cyan-400" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-cyan-400" />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
            Follow
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  className="inline-flex items-center gap-2 hover:text-cyan-400"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={14} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-[color:var(--color-border)] py-4 text-center text-xs text-[color:var(--color-muted)]">
        © {new Date().getFullYear()} Peter Dekko Tech Tricks. All rights reserved.
      </div>
    </footer>
  );
}