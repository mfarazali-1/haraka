import Image from "next/image";
import LinkedInIcon from "./LinkedInIcon";
import type { Testimonial } from "@/lib/testimonials";

export default function TestimonialCard({ t, compact = false }: { t: Testimonial; compact?: boolean }) {
  return (
    <div className="bg-paper h-full">
      <article className="group relative bg-paper border border-line-strong p-7 md:p-8 transition-colors duration-300 hover:border-slate h-full flex flex-col">
        <header className="flex items-start gap-4">
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
