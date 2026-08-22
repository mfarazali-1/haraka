import Image from "next/image";
import LinkedInIcon from "./LinkedInIcon";
import LinkedInBadge from "./LinkedInBadge";
import type { Testimonial } from "@/lib/testimonials";

export default function TestimonialCard({
  t,
  compact = false,
  variant = "grid",
}: {
  t: Testimonial;
  compact?: boolean;
  variant?: "grid" | "masonry" | "marquee";
}) {
  if (variant === "marquee") {
    return (
      <article className="group relative shrink-0 w-[320px] sm:w-[360px] h-[280px] bg-paper border border-line-strong p-6 md:p-7 flex flex-col transition-colors duration-300 hover:border-slate">
        <LinkedInBadge className="absolute top-6 right-6" />
        <header className="flex items-start gap-3 pr-10">
          <Image
            src={t.avatar}
            alt=""
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover bg-paper-deep border border-line-strong shrink-0"
          />
          <div className="min-w-0 pt-0.5">
            <p className="text-sm font-medium text-charcoal-deep leading-tight">{t.name}</p>
            <p className="mt-1 text-xs text-muted leading-snug line-clamp-2">{t.title}</p>
          </div>
        </header>
        <p className="mt-5 flex-1 text-sm leading-relaxed text-charcoal-deep line-clamp-5">{t.quote}</p>
        <footer className="mt-4 pt-4 border-t border-line-strong flex items-center justify-between gap-4">
          <span className="text-xs text-muted">{t.date}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0A66C2]">
            <LinkedInIcon className="text-[#0A66C2] opacity-100" />
            LinkedIn
          </span>
        </footer>
      </article>
    );
  }

  if (variant === "masonry") {
    return (
      <article className="group relative mb-6 break-inside-avoid bg-paper border border-line-strong p-7 md:p-8 transition-all duration-300 hover:border-slate hover:shadow-[0_8px_30px_rgba(26,29,30,0.07)]">
        <LinkedInBadge className="absolute top-6 right-6 md:top-7 md:right-7" />
        <header className="flex items-start gap-4 pr-10">
          <Image
            src={t.avatar}
            alt=""
            width={52}
            height={52}
            className="w-[52px] h-[52px] rounded-full object-cover bg-paper-deep border border-line-strong shrink-0"
          />
          <div className="min-w-0 pt-0.5">
            <p className="text-sm font-medium text-charcoal-deep leading-tight">{t.name}</p>
            <p className="mt-1 text-xs text-muted leading-snug">{t.title}</p>
          </div>
        </header>

        <div className="mt-6 relative">
          <span aria-hidden="true" className="absolute -top-3 -left-1 font-serif text-6xl leading-none text-line-strong select-none">
            &ldquo;
          </span>
          <p className="relative text-base md:text-[17px] leading-relaxed text-charcoal-deep whitespace-pre-line">
            {t.quote}
          </p>
        </div>

        <footer className="mt-7 pt-5 border-t border-line-strong flex items-center justify-between gap-4">
          <span className="text-xs text-muted">{t.date}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0A66C2]">
            <LinkedInIcon className="text-[#0A66C2] opacity-100" />
            LinkedIn Recommendation
          </span>
        </footer>
      </article>
    );
  }

  return (
    <div className="bg-paper h-full">
      <article className="group relative bg-paper border border-line-strong p-7 md:p-8 transition-colors duration-300 hover:border-slate h-full flex flex-col">
        <LinkedInBadge className="absolute top-6 right-6 md:top-7 md:right-7" />
        <header className="flex items-start gap-4 pr-10">
          <Image
            src={t.avatar}
            alt=""
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover bg-paper-deep border border-line-strong shrink-0"
          />
          <div className="min-w-0 pt-0.5">
            <p className="text-sm font-medium text-charcoal-deep leading-tight">{t.name}</p>
            <p className="mt-1 text-xs text-muted leading-snug line-clamp-2">{t.title}</p>
          </div>
        </header>
        <div className="flex-1 flex flex-col justify-between mt-6">
          {compact ? (
            <p className="font-serif italic text-lg md:text-xl leading-snug text-charcoal-deep">“{t.quote}”</p>
          ) : (
            <p className="text-base md:text-[17px] leading-relaxed text-charcoal-deep whitespace-pre-line">{t.quote}</p>
          )}
          <footer className="mt-7 pt-5 border-t border-line-strong flex items-center justify-between gap-4">
            <span className="text-xs text-muted">{t.date}</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted" aria-label="Sourced from LinkedIn">
              <span>via LinkedIn</span>
              <LinkedInIcon />
            </span>
          </footer>
        </div>
      </article>
    </div>
  );
}
