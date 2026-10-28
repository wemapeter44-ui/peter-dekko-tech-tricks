"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#05070d]/85 shadow-[0_4px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex min-w-0 items-center gap-3"
        >
          <span className="relative shrink-0">
            <Image
              src="/logo.jpeg"
              alt="Peter Dekko Tech Tricks"
              width={40}
              height={40}
              className="rounded-xl border border-white/10 object-cover transition duration-300 group-hover:border-cyan-400/40"
              priority
            />
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#05070d] bg-cyan-400" />
          </span>

          <span className="text-sm font-bold tracking-tight text-white sm:text-base">
            Peter Dekko
            <span className="block text-xs font-medium tracking-[0.12em] text-cyan-400 sm:text-sm">
              TECH TRICKS
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/65 transition duration-200 hover:bg-white/[0.05] hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="group ml-3 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-[#05070d] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Let’s Talk
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-t border-white/[0.08] bg-[#05070d]/95 transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 border-t-transparent opacity-0"
        )}
        aria-hidden={!open}
      >
        <Container className="flex flex-col gap-1 py-4">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/[0.05] hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-[#05070d] transition hover:bg-cyan-300"
          >
            Let’s Talk <ArrowRight size={16} />
          </Link>
        </Container>
      </div>
    </header>
  );
}
