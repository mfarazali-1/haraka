import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Recommendations",
};

export default function TestimonialsPage() {
  return (
    <section className="bg-paper">
      <div className="container-x pt-20 md:pt-28 pb-16 md:pb-20">
        <p className="eyebrow">Recommendations</p>
        <h1 className="mt-6 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight max-w-4xl">
          Words from the candidates and clients we&rsquo;ve placed.
        </h1>

        <div className="mt-14 columns-1 md:columns-2 lg:columns-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} variant="masonry" />
          ))}
        </div>
      </div>
    </section>
  );
}
