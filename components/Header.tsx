import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/about", label: "Our Team" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-charcoal text-cream backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.4)]">
      <div className="container-x px-4 md:px-10 flex items-center justify-between gap-2 h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Haraka Headhunters home">
          <Logo className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] transition-transform duration-500 group-hover:rotate-[8deg]" />
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

        <nav className="flex md:hidden items-center justify-between flex-1 min-w-0" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex flex-col items-center justify-center text-center px-0.5 text-[10px] font-bold uppercase leading-[1.15] text-cream/80 hover:text-cream transition-colors"
            >
              {l.label.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
