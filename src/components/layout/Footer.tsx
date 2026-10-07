import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)]">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm font-semibold">Peter Dekko Tech Tricks</p>
          <p className="mt-2 text-xs text-[color:var(--color-muted)]">
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
            <li>{site.email}</li>
            <li>{site.phone}</li>
            <li>{site.location}</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
            Follow
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-cyan-400" href={site.socials.github}>GitHub</a></li>
            <li><a className="hover:text-cyan-400" href={site.socials.linkedin}>LinkedIn</a></li>
            <li><a className="hover:text-cyan-400" href={site.socials.x}>X</a></li>
            <li><a className="hover:text-cyan-400" href={site.socials.youtube}>YouTube</a></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-[color:var(--color-border)] py-4 text-center text-xs text-[color:var(--color-muted)]">
        © {new Date().getFullYear()} Peter Dekko Tech Tricks. All rights reserved.
      </div>
    </footer>
  );
}
