"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-black">
            PD
          </span>
          <span className="text-sm font-semibold tracking-wide sm:text-base">
            Peter Dekko <span className="text-cyan-400">Tech Tricks</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-[color:var(--color-muted)] transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-md bg-cyan-400 px-3 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Hire Me
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-[color:var(--color-border)] lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-[color:var(--color-border)] lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col py-3">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-[color:var(--color-muted)] hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-cyan-400 px-3 py-2 text-center text-sm font-semibold text-black"
          >
            Hire Me
          </Link>
        </Container>
      </div>
    </header>
  );
}
