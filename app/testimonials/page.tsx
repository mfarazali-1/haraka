import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";
import LinkedInBadge from "@/components/LinkedInBadge";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Recommendations",
};

const candidateCount = 10;
const clientCount = 9;

const stats = [
  { value: String(testimonials.length), label: "Recommendations, transcribed in full" },
  { value: String(candidateCount), label: "From placed candidates" },
  { value: String(clientCount), label: "From hiring clients" },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="container-x pt-20 md:pt-28 pb-12">
          <p className="eyebrow">Recommendations</p>
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight max-w-4xl">
            Words from the candidates and clients we&rsquo;ve placed.
          </h1>
          <div className="mt-8 max-w-2xl flex items-start gap-3">
            <LinkedInBadge className="mt-1 shrink-0" />
            <p className="text-lg text-muted leading-relaxed">
              Every recommendation below was posted publicly on LinkedIn. We&rsquo;ve transcribed them in full so
              they&rsquo;re searchable and accessible, and credited each one to the person who wrote it — newest
              first.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-10 md:py-12">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
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
        <div className="container-x py-16 md:py-20">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} variant="masonry" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
