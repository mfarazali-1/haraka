"use client";

import Image from "next/image";
import { useRef } from "react";
import type { TeamMember } from "@/lib/team";
import PlaceholderPortrait from "./PlaceholderPortrait";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={`transition-transform group-hover:translate-x-0.5 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  const dialogRefs = useRef<Record<string, HTMLDialogElement | null>>({});

  const open = (id: string) => dialogRefs.current[id]?.showModal();
  const close = (id: string) => dialogRefs.current[id]?.close();

  return (
    <>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {members.map((m) => (
          <li key={m.id}>
            <button
              type="button"
              aria-label={`Read ${m.name}'s full bio`}
              onClick={() => open(m.id)}
              className="member-card group w-full text-left bg-paper border border-line-strong hover:border-slate-deep transition-all duration-300 hover:shadow-[0_16px_40px_rgba(26,29,30,0.09)] flex flex-col h-full"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
                {m.img ? (
                  <Image
                    src={m.img}
                    alt={m.alt}
                    width={640}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderPortrait className="w-full h-full" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-charcoal-deep/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-4 left-5 flex items-center gap-1.5 text-xs font-medium text-cream opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Read full bio
                  <ArrowIcon className="text-cream" />
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h4 className="font-serif text-lg md:text-xl text-charcoal-deep">{m.name}</h4>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-deep">{m.role}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {members.map((m) => (
        <dialog
          key={m.id}
          ref={(el) => {
            dialogRefs.current[m.id] = el;
          }}
          className="member-dialog"
          aria-labelledby={`member-${m.id}-heading`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close(m.id);
          }}
        >
          <div className="relative">
            <button
              type="button"
              aria-label="Close"
              onClick={() => close(m.id)}
              className="absolute top-4 right-4 z-10 w-10 h-10 inline-flex items-center justify-center bg-paper hover:bg-paper-deep border border-line-strong text-charcoal-deep transition-colors"
            >
              <CloseIcon />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 md:self-center bg-paper-deep">
                {m.img ? (
                  <Image
                    src={m.img}
                    alt={m.alt}
                    width={640}
                    height={800}
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                ) : (
                  <PlaceholderPortrait className="w-full aspect-[4/5]" />
                )}
              </div>
              <div className="md:col-span-7 p-7 md:p-9">
                <header>
                  <h3 id={`member-${m.id}-heading`} className="font-serif text-2xl md:text-3xl text-charcoal-deep">{m.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-deep">{m.role}</p>
                </header>
                <div className="mt-6 space-y-4 text-[15px] md:text-base leading-relaxed text-charcoal-deep">
                  {m.paras.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {m.email && (
                  <div className="mt-6 pt-5 border-t border-line-strong flex flex-wrap gap-4">
                    <a href={`mailto:${m.email}`} className="text-xs text-charcoal-deep link-underline">Email</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </dialog>
      ))}
    </>
  );
}
