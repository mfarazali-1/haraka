"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/lib/testimonials";

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export default function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  const go = (i: number) => setIndex(((i % items.length) + items.length) % items.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % items.length);
    }, 6000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((t) => (
            <div key={t.name} className="w-full shrink-0 px-0.5">
              <TestimonialCard t={t} variant="carousel" />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => go(index - 1)}
        className="absolute left-1 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 inline-flex items-center justify-center bg-paper border border-line-strong text-charcoal-deep hover:bg-paper-deep hover:border-slate-deep transition-colors rounded-full shadow-sm"
      >
        <ChevronIcon direction="left" />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => go(index + 1)}
        className="absolute right-1 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 inline-flex items-center justify-center bg-paper border border-line-strong text-charcoal-deep hover:bg-paper-deep hover:border-slate-deep transition-colors rounded-full shadow-sm"
      >
        <ChevronIcon direction="right" />
      </button>

      <div className="mt-8 flex items-center justify-center gap-2.5">
        {items.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`Go to testimonial from ${t.name}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-charcoal-deep" : "bg-line-strong hover:bg-slate"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
