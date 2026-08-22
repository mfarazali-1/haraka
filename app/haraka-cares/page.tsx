import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Haraka Cares",
};

const stats = [
  { value: "140+", label: "Pro bono hours contributed in 2025" },
  { value: "9", label: "Legal-aid & community partners" },
  { value: "$18,400", label: "Raised for access-to-justice causes since 2023" },
];

function ScaleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M7 21h10M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0zM5 7h14M12 3 5 7M12 3l7 4" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5zM6 10.5v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 8.5v6" />
    </svg>
  );
}

function HandsIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5 3 17a2 2 0 0 0 2.8 2.8l1-1M16 12.5l5 4.5a2 2 0 0 1-2.8 2.8l-1-1M8 12.5l2.3-2.3a2 2 0 0 1 2.8 0l.4.4a2 2 0 0 0 2.8 0L18 9M8 12.5 6 6l2.5-2M16 12.5 18 6l-2.5-2" />
    </svg>
  );
}

const commitments = [
  {
    num: "01",
    icon: <ScaleIcon />,
    title: "Pro Bono Placement Support",
    body: "We place attorneys with legal-aid clinics and nonprofit counsel offices at reduced or no fee, matching lawyers who want mission-driven work with the organizations that need it most. There's always at least one pro bono search open on our desk.",
  },
  {
    num: "02",
    icon: <CapIcon />,
    title: "Mentorship for Early-Career Lawyers",
    body: "Resume reviews, mock interviews, and one-on-one coaching for first-generation law students and junior associates navigating their first few years in practice — no fee, and no obligation to work with us afterward.",
  },
  {
    num: "03",
    icon: <HandsIcon />,
    title: "Community Partnerships",
    body: "We sponsor legal-aid fundraisers, staff know-your-rights clinics, and show up for the organizations doing access-to-justice and youth-education work across New York City.",
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
            Haraka Cares is how we give back what recruiting gives us: relationships, momentum, and a front-row
            seat to where the legal industry is headed. It&rsquo;s the philanthropic side of our work — pro bono
            placements, mentorship, and partnerships that put talent where it&rsquo;s needed most, not just where
            it pays best.
          </p>
        </div>
      </section>

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-12 md:py-16">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            {stats.map((s) => (
              <li key={s.label} className="flex flex-col">
                <span className="font-serif text-4xl md:text-5xl text-charcoal-deep tracking-tight">{s.value}</span>
                <span className="mt-3 flex items-center gap-3">
                  <span className="hairline w-8 bg-slate" style={{ height: "1px" }} />
                  <span className="text-sm text-muted leading-snug">{s.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-20 md:py-28">
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
                      <span className="text-slate-deep">{c.icon}</span>
                      <span className="mt-3 block text-xs tracking-[0.18em] text-slate-deep">{c.num}</span>
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

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-16 md:py-20">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-serif italic text-2xl md:text-3xl leading-snug text-charcoal-deep">
              &ldquo;Recruiting gave me a network faster than almost anyone I know. Haraka Cares is how we make
              sure that network moves in more directions than just billable hours.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-muted">
              <span className="text-charcoal-deep font-medium">Tiffany Meikle</span> — Founder &amp; CEO
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-20 md:py-24 text-center max-w-3xl mx-auto">
          <p className="eyebrow">Get involved</p>
          <h2 className="mt-5 font-serif text-3xl md:text-4xl text-charcoal-deep leading-tight">
            Know an organization we should partner with?
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            We&rsquo;re always looking for new ways to plug talent into causes that need it. If you run a
            legal-aid organization, mentorship program, or community initiative doing work we should know about,
            we&rsquo;d love to hear from you.
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
