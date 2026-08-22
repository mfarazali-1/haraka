import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 md:mt-32 bg-charcoal text-paper">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Haraka Headhunters home">
              <Logo className="w-12 h-12" />
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg text-cream">Haraka Headhunters</span>
                <span className="text-[11px] tracking-[0.18em] uppercase text-cream/60">Staffing &amp; Consulting</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-paper/70 leading-relaxed">
              Top candidates, faster than a New York minute. Specialized legal recruiting with the speed your firm
              needs and the care your career deserves.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] tracking-[0.18em] uppercase text-cream/60 mb-4">Firm</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about-us" className="text-sm text-paper/85 hover:text-cream transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-paper/85 hover:text-cream transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-paper/85 hover:text-cream transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] tracking-[0.18em] uppercase text-cream/60 mb-4">Work with us</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/careers" className="text-sm text-paper/85 hover:text-cream transition-colors">Open Roles</Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-paper/85 hover:text-cream transition-colors">Testimonials</Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/haraka-headhunters/"
                  className="text-sm text-paper/85 hover:text-cream transition-colors"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-paper/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-paper/55">© {new Date().getFullYear()} Haraka Headhunters. All rights reserved.</p>
          <p className="text-xs text-paper/55 italic">Providing top candidates faster than a New York minute.</p>
        </div>
      </div>
    </footer>
  );
}
