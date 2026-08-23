import Image from "next/image";
import LinkedInIcon from "./LinkedInIcon";
import LinkedInBadge from "./LinkedInBadge";
import type { Testimonial } from "@/lib/testimonials";

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function Avatar({ t, size, className = "" }: { t: Testimonial; size: number; className?: string }) {
  if (t.avatar) {
    return (
      <Image
        src={t.avatar}
        alt=""
        width={size}
        height={size}
        className={`rounded-full object-cover bg-paper-deep border border-line-strong shrink-0 ${className}`}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-full bg-paper-deep border border-line-strong text-slate-deep font-serif shrink-0 ${className}`}
    >
      {initials(t.name)}
    </span>
  );
}

export default function TestimonialCard({
  t,
  compact = false,
  variant = "grid",
}: {
  t: Testimonial;
  compact?: boolean;
  variant?: "grid" | "masonry" | "marquee" | "carousel";
}) {
  if (variant === "carousel") {
    return (
      <article className="relative bg-paper border border-line-strong p-8 md:p-12 flex flex-col items-center text-center">
        <LinkedInBadge className="absolute top-6 right-6" />
        <Avatar t={t} size={64} className="w-16 h-16 text-lg" />
        <p className="mt-5 text-sm font-medium text-charcoal-deep">{t.name}</p>
        <p className="mt-1 text-xs text-muted max-w-sm">{t.title}</p>
        <p className="mt-8 font-serif italic text-xl md:text-2xl leading-snug text-charcoal-deep line-clamp-6 max-w-2xl">
          &ldquo;{t.quote.replace(/\n+/g, " ")}&rdquo;
        </p>
        <div className="mt-8 flex items-center gap-3 text-xs text-muted">
          <span className="font-bold text-charcoal-deep">{t.date}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5 font-medium text-[#0A66C2]">
            <LinkedInIcon className="text-[#0A66C2] opacity-100" />
            LinkedIn
          </span>
        </div>
      </article>
    );
  }

  if (variant === "marquee") {
    return (
      <article className="group relative shrink-0 w-[320px] sm:w-[360px] h-[280px] bg-paper border border-line-strong p-6 md:p-7 flex flex-col transition-colors duration-300 hover:border-slate">
        <LinkedInBadge className="absolute top-6 right-6" />
        <header className="flex items-start gap-3 pr-10">
          <Avatar t={t} size={44} className="w-11 h-11 text-sm" />
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
          <Avatar t={t} size={52} className="w-[52px] h-[52px] text-base" />
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
          <Avatar t={t} size={44} className="w-11 h-11 text-sm" />
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
