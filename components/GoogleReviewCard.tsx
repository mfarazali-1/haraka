"use client";

import { useRef } from "react";
import GoogleBadge from "./GoogleBadge";
import GoogleIcon from "./GoogleIcon";
import StarRating from "./StarRating";
import type { Testimonial } from "@/lib/testimonials";

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}

export default function GoogleReviewCard({ t }: { t: Testimonial }) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const headingId = `google-review-${t.name.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <>
      <article className="group relative bg-paper border border-line-strong p-7 md:p-8 flex flex-col h-[340px] transition-colors duration-300 hover:border-slate">
        <GoogleBadge className="absolute top-6 right-6 md:top-7 md:right-7" />
        <header className="pr-10">
          <p className="text-sm font-medium text-charcoal-deep leading-tight">{t.name}</p>
          <StarRating className="mt-1.5" />
        </header>

        <p className="mt-5 flex-1 overflow-hidden text-sm leading-relaxed text-charcoal-deep line-clamp-6">
          {t.quote}
        </p>

        <footer className="mt-4 pt-4 border-t border-line-strong flex items-center justify-between gap-4">
          <span className="text-xs text-muted">{t.date}</span>
          <button
            type="button"
            onClick={() => dialogRef.current?.showModal()}
            className="text-xs font-medium text-charcoal-deep link-underline"
          >
            View more
          </button>
        </footer>
      </article>

      <dialog
        ref={dialogRef}
        className="review-dialog"
        aria-labelledby={headingId}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className="relative p-7 md:p-9">
          <button
            type="button"
            aria-label="Close"
            onClick={() => dialogRef.current?.close()}
            className="absolute top-4 right-4 w-10 h-10 inline-flex items-center justify-center bg-paper hover:bg-paper-deep border border-line-strong text-charcoal-deep transition-colors"
          >
            <CloseIcon />
          </button>

          <header className="pr-12">
            <h3 id={headingId} className="font-serif text-xl md:text-2xl text-charcoal-deep leading-tight">
              {t.name}
            </h3>
            <StarRating className="mt-2" size={16} />
          </header>

          <p className="mt-6 text-[15px] md:text-base leading-relaxed text-charcoal-deep whitespace-pre-line">
            {t.quote}
          </p>

          <div className="mt-7 pt-5 border-t border-line-strong flex items-center justify-between gap-4 text-xs text-muted">
            <span>{t.date}</span>
            <span className="inline-flex items-center gap-1.5">
              <span>via Google</span>
              <GoogleIcon />
            </span>
          </div>
        </div>
      </dialog>
    </>
  );
}
