"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/about", label: "Our Team" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/careers", label: "Careers" },
  { href: "/haraka-cares", label: "Haraka Cares" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-charcoal text-cream backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.4)]">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Haraka Headhunters home">
          <Logo className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-[15px] md:text-[17px] tracking-tight text-cream">Haraka Headhunters</span>
            <span className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-cream/55">Staffing &amp; Consulting</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm tracking-wide transition-colors text-cream/65 hover:text-cream">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium border border-cream/40 text-cream px-4 py-2 hover:bg-cream hover:text-charcoal-deep hover:border-cream transition-colors"
          >
            Get in touch
            <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <nav className="flex items-center gap-3" aria-label="Quick links">
            {navLinks.filter((l) => l.href !== "/haraka-cares").map((l) => (
              <Link key={l.href} href={l.href} className="text-xs whitespace-nowrap transition-colors text-cream/65 hover:text-cream">
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex items-center justify-center w-9 h-10 -mr-1 text-cream"
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
              <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`md:hidden ${open ? "" : "hidden"} border-t border-cream/15 bg-charcoal`}>
        <nav className="container-x py-4 flex flex-col gap-1" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="py-2 text-base text-cream/85 hover:text-cream transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-medium border border-cream/40 text-cream hover:bg-cream hover:text-charcoal-deep transition-colors px-4 py-2.5"
          >
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
