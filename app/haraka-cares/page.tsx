import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Haraka Cares",
};

const commitments = [
  {
    num: "01",
    title: "Pro Bono Placement Support",
    body: "[Placeholder] We help place attorneys at non-profit and legal-aid organizations on a reduced or pro bono basis — getting talented lawyers to the people who need them most.",
  },
  {
    num: "02",
    title: "Mentorship for Early-Career Lawyers",
    body: "[Placeholder] Coaching, resume reviews, and interview prep for first-generation law students and junior associates from underrepresented backgrounds.",
  },
  {
    num: "03",
    title: "Community Partnerships",
    body: "[Placeholder] Sponsorships and volunteer hours with [organization names], focused on access-to-justice and youth education in New York City.",
  },
];

export default function HarakaCaresPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="container-x pt-20 md:pt-28 pb-12">
          <p className="eyebrow">Haraka Cares</p>
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight max-w-4xl">
            Speed is our craft. Service is our value.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            [Placeholder] Haraka Cares is the philanthropic arm of our firm — the causes, partners, and people we
            invest in beyond the work of recruiting. The full story will live here. The placeholder copy below is
            a sketch of where we&rsquo;re headed.
          </p>
        </div>
      </section>

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">Our commitments</p>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl leading-tight">Three areas where we put our time and resources.</h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid grid-cols-1 gap-px bg-line-strong border border-line-strong">
                {commitments.map((c) => (
                  <li key={c.num} className="bg-paper p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                    <div className="md:col-span-3">
                      <span className="text-xs tracking-[0.18em] text-slate-deep">{c.num}</span>
                      <h3 className="mt-2 font-serif text-2xl text-charcoal-deep">{c.title}</h3>
                    </div>
                    <p className="md:col-span-9 text-base text-charcoal-deep leading-relaxed">{c.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-20 md:py-24 text-center max-w-3xl mx-auto">
          <p className="eyebrow">Get involved</p>
          <h2 className="mt-5 font-serif text-3xl md:text-4xl text-charcoal-deep leading-tight">
            Know an organization we should partner with?
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            [Placeholder] We&rsquo;re always looking for new ways to plug talent into causes that need it. If
            you&rsquo;re building one, we want to hear about it.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 bg-charcoal-deep text-cream hover:bg-slate-deep border border-charcoal-deep hover:border-slate-deep"
            >
              Tell us about it <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
