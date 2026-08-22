import Link from "next/link";
import Counter from "@/components/Counter";
import TestimonialCard from "@/components/TestimonialCard";

const featured = [
  {
    avatar: "/testimonials/avatars/aliya-rampersad.jpg",
    name: "Aliya Rampersad",
    title: "Undergraduate at John Jay College of Criminal Justice",
    quote:
      "She creates a work environment that feels supportive, motivating, and genuinely collaborative. Anyone would be lucky to have her as a boss.",
    date: "Dec 2025",
  },
  {
    avatar: "/testimonials/avatars/sherwin-primo.jpg",
    name: "Sherwin Primo",
    title: "President at Primo Arch Drafting + Design, Inc.",
    quote: "Tiffany is probably one of the best sources for attorneys of all kinds to find their place in the world.",
    date: "Jun 2025",
  },
  {
    avatar: "/testimonials/avatars/christina-davis.jpg",
    name: "CHRISTINA DAVIS",
    title: "With God all things are possible 🙏",
    quote:
      "Tiffany and her team are devoted to finding top-notch candidates who are not only highly qualified and motivated but also an excellent cultural fit.",
    date: "Apr 2025",
  },
];

export default function Home() {

  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div className="container-x pt-14 md:pt-24 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">Legal Recruiting · New York</p>
              <h1 className="mt-6 font-serif text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.02] tracking-tight text-charcoal-deep">
                Top legal talent.
                <br />
                <span className="italic text-slate-deep">Faster</span> than a
                <br />
                New York minute.
              </h1>
              <p className="mt-7 max-w-xl text-base md:text-lg text-muted leading-relaxed">
                We connect law firms with the attorneys who reshape them — and we move at the speed your career and
                your practice demand.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3 group">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 bg-charcoal-deep text-cream hover:bg-slate-deep border border-charcoal-deep hover:border-slate-deep group"
                >
                  Hire talent
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 border border-charcoal-deep text-charcoal-deep hover:bg-charcoal-deep hover:text-cream group"
                >
                  Find a role
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-line-strong">
              <div className="inline-flex flex-col items-start">
                <div className="flex items-baseline gap-2 leading-none">
                  <span className="font-serif text-[clamp(4.5rem,12vw,9rem)] tracking-tight text-charcoal-deep">
                    <Counter target={200} duration={2400} />
                  </span>
                  <span className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-slate-deep -translate-y-2" aria-hidden="true">+</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="hairline w-10 bg-slate" style={{ height: "1px" }} />
                  <p className="text-sm md:text-base text-charcoal-deep">
                    <span className="font-medium">Lawyers placed</span>
                    <span className="text-muted"> since January 2023</span>
                  </p>
                </div>
                <span className="sr-only">200+ Lawyers placed since January 2023</span>
              </div>
              <p className="mt-8 max-w-xs text-sm text-muted">
                And we&rsquo;re still counting. Every placement is a partnership — built fast, built well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">How we work</p>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl text-charcoal-deep leading-tight">
                Three things we get right, every time.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line-strong border border-line-strong">
                <li className="bg-paper p-7 md:p-8 flex flex-col gap-4">
                  <h3 className="font-serif text-2xl text-charcoal-deep">Speed</h3>
                  <p className="text-sm md:text-[15px] text-muted leading-relaxed">
                    Placements measured in days, not months. Two-interview turnarounds inside a single week, when
                    the moment calls for it.
                  </p>
                </li>
                <li className="bg-paper p-7 md:p-8 flex flex-col gap-4">
                  <h3 className="font-serif text-2xl text-charcoal-deep">Specialization</h3>
                  <p className="text-sm md:text-[15px] text-muted leading-relaxed">
                    Legal recruiting is all we do. Associates, partners, in-house counsel — across practice areas,
                    with a network built relationship by relationship.
                  </p>
                </li>
                <li className="bg-paper p-7 md:p-8 flex flex-col gap-4">
                  <h3 className="font-serif text-2xl text-charcoal-deep">Discretion</h3>
                  <p className="text-sm md:text-[15px] text-muted leading-relaxed">
                    Confidential candidate searches handled with care. Your name is shared only where it should be,
                    when it should be.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
            <div>
              <p className="eyebrow">Recommendations</p>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl text-charcoal-deep leading-tight max-w-2xl">
                Trusted by the candidates and clients we&rsquo;ve placed.
              </h2>
            </div>
            <Link href="/testimonials" className="link-underline text-sm text-charcoal-deep">Read all recommendations</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line-strong border border-line-strong">
            {featured.map((t) => (
              <TestimonialCard key={t.name} t={t} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-px md:bg-line-strong md:border md:border-line-strong">
            <div className="bg-paper-deep md:bg-paper md:p-10 md:pr-14">
              <p className="eyebrow">For Clients</p>
              <h3 className="mt-5 font-serif text-2xl md:text-3xl text-charcoal-deep">
                Hire the lawyer who fits — not the lawyer who&rsquo;s available.
              </h3>
              <p className="mt-5 text-muted leading-relaxed">
                Tell us the gap and the timeline. We&rsquo;ll bring you a curated short list of attorneys whose
                track records, temperaments, and ambitions match your firm.
              </p>
              <Link href="/contact" className="mt-7 inline-flex link-underline text-charcoal-deep">Start a search →</Link>
            </div>
            <div className="bg-paper-deep md:bg-paper md:p-10 md:pl-14">
              <p className="eyebrow">For Candidates</p>
              <h3 className="mt-5 font-serif text-2xl md:text-3xl text-charcoal-deep">Your next move, handled with care.</h3>
              <p className="mt-5 text-muted leading-relaxed">
                Whether you&rsquo;re actively looking or just open to the right opportunity, we&rsquo;ll keep your
                search confidential and your goals at the center of every conversation.
              </p>
              <Link href="/careers" className="mt-7 inline-flex link-underline text-charcoal-deep">See open roles →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="container-x py-20 md:py-28 text-center">
          <p className="eyebrow text-cream/70">Get in touch</p>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl text-cream leading-tight max-w-3xl mx-auto">
            Ready to move at <span className="italic text-slate-soft">Haraka</span> speed?
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 group">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide bg-cream text-charcoal-deep hover:bg-paper transition-colors"
            >
              Contact Tiffany
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="https://www.linkedin.com/company/haraka-headhunters/jobs/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide border border-cream/40 text-cream hover:bg-cream/10 transition-colors"
            >
              See open roles on LinkedIn
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
