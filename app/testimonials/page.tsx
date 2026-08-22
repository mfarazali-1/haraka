import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Recommendations",
};

const candidateCount = 10;
const clientCount = 9;

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="container-x pt-20 md:pt-28 pb-12">
          <p className="eyebrow">Recommendations</p>
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight max-w-4xl">
            Words from the candidates and clients we&rsquo;ve placed.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            Every recommendation below was given on LinkedIn. We&rsquo;ve transcribed them in full so they&rsquo;re
            searchable, accessible, and credited to the person who wrote them — newest first.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
            <span><span className="text-charcoal-deep font-medium">{testimonials.length}</span> recommendations</span>
            <span aria-hidden="true">·</span>
            <span><span className="text-charcoal-deep font-medium">{candidateCount}</span> from placed candidates</span>
            <span aria-hidden="true">·</span>
            <span><span className="text-charcoal-deep font-medium">{clientCount}</span> from clients</span>
          </div>
        </div>
      </section>

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-16 md:py-20">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line-strong border border-line-strong">
            {testimonials.map((t) => (
              <li key={t.name} className="contents">
                <TestimonialCard t={t} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
