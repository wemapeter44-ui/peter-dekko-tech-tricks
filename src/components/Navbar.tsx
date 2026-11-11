
"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.08] bg-[#080d1a]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="flex h-[76px] items-center justify-between">

          {/* BRAND */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-xl font-black text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
              P
            </div>

            <div className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-white">
                PDT <span className="text-cyan-400">Softwares</span>
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 text-[13px] font-medium tracking-wide text-slate-400 transition-colors duration-300 hover:text-white"
              >
                {link.name}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/30 sm:inline-flex"
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "max-h-96 border-t border-white/10 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3.5 text-sm font-bold text-white"
            >
              Let's Talk <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}
