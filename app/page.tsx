import Link from "next/link";
import Counter from "@/components/Counter";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TextMarquee from "@/components/TextMarquee";
import { testimonials } from "@/lib/testimonials";

const marqueeRow1 = testimonials.filter((_, i) => i % 2 === 0);
const marqueeRow2 = testimonials.filter((_, i) => i % 2 !== 0);

const carouselNames = ["Glenn Dopf", "Mario I. Molina, Esq.", "Robert Gonzalez"];
const carouselItems = carouselNames
  .map((name) => testimonials.find((t) => t.name === name))
  .filter((t): t is (typeof testimonials)[number] => Boolean(t));

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

      <TextMarquee text="Providing Top Candidates Faster Than A New York Minute!" bg="bg-charcoal-deep" />

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-20 md:py-28">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow">Recommendations · Option A</p>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl text-charcoal-deep leading-tight">
              In their own words.
            </h2>
            <p className="mt-3 text-sm text-muted">A carousel, click-through — for comparison against the auto-scroll version below.</p>
          </div>
          <TestimonialsCarousel items={carouselItems} />
        </div>
      </section>

      <section className="bg-paper overflow-hidden">
        <div className="container-x pt-20 md:pt-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-8 md:mb-10">
            <div>
              <p className="eyebrow">Recommendations · Option B</p>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl text-charcoal-deep leading-tight max-w-2xl">
                Trusted by the candidates and clients we&rsquo;ve placed.
              </h2>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <TestimonialsMarquee items={marqueeRow1} direction="forward" duration={70} />
          <TestimonialsMarquee items={marqueeRow2} direction="reverse" duration={80} />
        </div>

        <div className="container-x pb-20 md:pb-28 mt-14 md:mt-16 flex justify-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 border border-charcoal-deep text-charcoal-deep hover:bg-charcoal-deep hover:text-cream group"
          >
            View all testimonials
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
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
