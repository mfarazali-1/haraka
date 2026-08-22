import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
};

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 7 9-7M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
    </svg>
  );
}

const directionsHref = "https://www.google.com/maps/search/?api=1&query=250+Park+Avenue+New+York+NY+10016";

export default function AboutUsPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="container-x pt-20 md:pt-28 pb-16">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight max-w-4xl">
            A legal recruiting firm built for speed, specialization, and care.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            Haraka Headhunters is a boutique staffing &amp; consulting firm headquartered in Midtown Manhattan,
            working with law firms and in-house teams across the country. We do one thing — legal recruiting —
            and we do it faster than a New York minute.
          </p>
        </div>
      </section>

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">Who we are</p>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl leading-tight">A small firm, on purpose.</h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base md:text-lg leading-relaxed text-charcoal-deep">
              <p>
                Haraka means &ldquo;speed&rdquo; in Swahili — and it&rsquo;s the whole thesis of the firm. We
                stay small and specialized on purpose, because a boutique team that only works legal placements
                can move faster and know its market deeper than a generalist shop ever could.
              </p>
              <p>
                We&rsquo;re not trying to be the biggest legal recruiting firm in New York. We&rsquo;re trying to
                be the one attorneys and firms actually want to work with twice — built on real relationships,
                straight answers, and a bias toward moving quickly once we know what a search actually needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-20 md:py-28">
          <p className="eyebrow">Our office</p>
          <h2 className="mt-5 font-serif text-3xl md:text-4xl leading-tight max-w-2xl">Based in Midtown Manhattan.</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-line-strong border border-line-strong">
            <div className="bg-paper p-8 md:p-10">
              <span className="text-slate-deep"><PinIcon /></span>
              <h3 className="mt-4 font-serif text-xl text-charcoal-deep">Address</h3>
              <p className="mt-3 text-base text-charcoal-deep leading-relaxed">
                250 Park Avenue
                <br />
                New York, NY 10016
              </p>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Meetings by appointment. Reach out first and we&rsquo;ll get you set up.
              </p>
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex link-underline text-charcoal-deep text-sm"
              >
                Get directions →
              </a>
            </div>
            <div className="bg-paper p-8 md:p-10">
              <span className="text-slate-deep"><MailIcon /></span>
              <h3 className="mt-4 font-serif text-xl text-charcoal-deep">Say hello</h3>
              <p className="mt-3 text-base text-charcoal-deep leading-relaxed">
                Whether you&rsquo;re hiring or looking, Tiffany reads every message personally, usually within one
                business day.
              </p>
              <a
                href="mailto:Tiffany.Meikle@HarakaHeadhunters.com"
                className="mt-4 inline-flex link-underline text-charcoal-deep text-sm"
              >
                Tiffany.Meikle@HarakaHeadhunters.com
              </a>
              <div>
                <Link href="/contact" className="mt-6 inline-flex link-underline text-charcoal-deep text-sm">
                  Or use the contact form →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="container-x py-20 md:py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream max-w-2xl mx-auto leading-tight">
            Hiring? Looking? Either way, let&rsquo;s talk.
          </h2>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 bg-cream text-charcoal-deep border border-cream hover:bg-paper"
            >
              Contact us <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 border border-cream/40 text-cream hover:bg-cream/10"
            >
              Meet the team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
