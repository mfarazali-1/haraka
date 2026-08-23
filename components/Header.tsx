import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/about", label: "Our Team" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

const directionsHref = "https://www.google.com/maps/search/?api=1&query=250+Park+Avenue+New+York+NY+10016";

function PhoneIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.16 21 3 14.84 3 7a2 2 0 0 1 1-1.73V4z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 7 9-7M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-charcoal text-cream backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.4)]">
      <div className="hidden md:block border-b border-cream/10 bg-charcoal-deep">
        <div className="container-x px-10 flex items-center justify-end gap-6 py-1.5">
          <a
            href="tel:+12122224265"
            className="inline-flex items-center gap-1.5 text-xs text-cream/70 hover:text-cream transition-colors whitespace-nowrap"
          >
            <PhoneIcon />
            +1 (212) 222-4265
          </a>
          <a
            href="mailto:info@HarakaHeadhunters.com"
            className="inline-flex items-center gap-1.5 text-xs text-cream/70 hover:text-cream transition-colors whitespace-nowrap"
          >
            <MailIcon />
            info@HarakaHeadhunters.com
          </a>
          <a
            href={directionsHref}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-xs text-cream/70 hover:text-cream transition-colors whitespace-nowrap"
          >
            <PinIcon />
            250 Park Avenue, New York, NY 10016
          </a>
        </div>
      </div>

      <div className="container-x pl-[2px] pr-4 md:px-10 flex items-center justify-between gap-2 h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0" aria-label="Haraka Headhunters home">
          <Logo className="w-[60px] h-[60px] md:w-[76px] md:h-[76px] shrink-0 transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif font-bold sm:font-semibold text-[16px] sm:text-[19px] md:text-[22px] tracking-tight text-cream whitespace-nowrap">Haraka Headhunters</span>
            <span className="font-bold sm:font-normal text-[9px] sm:text-[12px] md:text-[13px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-cream sm:text-cream/55 whitespace-nowrap">Staffing &amp; Consulting</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm tracking-wide transition-colors text-cream/65 hover:text-cream">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex md:hidden flex-col items-end gap-1 min-w-0">
          <a
            href="tel:+12122224265"
            className="inline-flex items-center gap-1 text-[10px] font-semibold text-cream/90 hover:text-cream transition-colors whitespace-nowrap"
          >
            <PhoneIcon />
            +1 (212) 222-4265
          </a>
          <a
            href="mailto:info@HarakaHeadhunters.com"
            className="inline-flex items-center gap-1 text-[8px] text-cream/70 hover:text-cream transition-colors whitespace-nowrap"
          >
            <MailIcon />
            info@HarakaHeadhunters.com
          </a>
          <a
            href={directionsHref}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-[8px] text-cream/60 hover:text-cream/80 transition-colors whitespace-nowrap"
          >
            <PinIcon />
            250 Park Avenue, New York, NY 10016
          </a>
        </div>
      </div>

      <nav className="md:hidden border-t border-cream/15 bg-charcoal" aria-label="Primary">
        <div className="flex items-center justify-between px-4 py-2.5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[10px] font-bold uppercase whitespace-nowrap text-cream/80 hover:text-cream transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
