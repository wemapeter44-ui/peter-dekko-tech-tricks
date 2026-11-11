"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/[0.11] bg-[#091326]/85 shadow-[0_18px_55px_rgba(0,0,0,.32)] backdrop-blur-2xl">
        <Container className="flex h-[70px] items-center justify-between">
          <Link href="/" onClick={() => setOpen(false)} className="group flex min-w-0 items-center gap-3">
            <span className="relative shrink-0 rounded-xl p-[1px] bg-gradient-to-br from-cyan-300 via-blue-400 to-violet-500 shadow-[0_0_24px_rgba(73,165,255,.22)]">
              <Image src="/logo.jpeg" alt="Peter Dekko Tech Tricks" width={42} height={42} className="rounded-[11px] object-cover" priority />
            </span>
            <span className="leading-tight">
              <span className="block text-[14px] font-extrabold tracking-tight text-white sm:text-base">PDT <span className="text-cyan-300">Softwares</span></span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[.24em] text-slate-400">Digital solutions studio</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-slate-300 transition hover:bg-white/[.07] hover:text-cyan-200">{item.label}</Link>
            ))}
            <Link href="/contact" className="group ml-3 inline-flex items-center gap-2 rounded-xl border border-cyan-200/30 bg-gradient-to-r from-cyan-300 to-blue-400 px-4 py-2.5 text-[13px] font-bold text-slate-950 shadow-[0_8px_25px_rgba(52,166,235,.2)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(52,166,235,.32)]">
              Let&apos;s Talk <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>

          <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.05] text-white transition hover:border-cyan-300/40 hover:text-cyan-200 lg:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
        <div id="mobile-navigation" aria-hidden={!open} className={cn("overflow-hidden border-t border-white/[.08] bg-[#091326]/95 transition-[max-height,opacity] duration-300 lg:hidden", open ? "max-h-[80vh] opacity-100" : "max-h-0 border-t-transparent opacity-0")}>
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[.06] hover:text-cyan-200">{item.label}</Link>)}
            <Link href="/contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-400 px-4 py-3 text-sm font-bold text-slate-950">Let&apos;s Talk <ArrowUpRight size={16} /></Link>
          </Container>
        </div>
      </div>
    </header>
  );
}
