"use client";

import { FormEvent, useState } from "react";

const roleOptions = [
  {
    value: "client",
    label: "A firm hiring talent",
    hint: "You're looking to fill a role",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13M3 21h18M9 21V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14" />
      </svg>
    ),
  },
  {
    value: "candidate",
    label: "A candidate",
    hint: "You're exploring a move",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.5-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    value: "other",
    label: "Something else",
    hint: "Anything else on your mind",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const inputClass =
  "w-full border border-line bg-paper px-4 py-3 text-base text-charcoal-deep placeholder:text-muted/50 focus:outline-none focus:border-charcoal-deep focus:bg-cream-soft/40 transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
      message: formData.get("message"),
    };

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line-strong bg-paper p-8 md:p-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-slate-deep text-cream flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="mt-6 font-serif text-2xl text-charcoal-deep">Message received.</p>
        <p className="mt-2 text-sm text-muted max-w-xs mx-auto">
          Tiffany will be in touch within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 inline-flex items-center gap-2 text-sm text-charcoal-deep link-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="border border-line-strong bg-paper p-8 md:p-10">
      <p className="eyebrow">Send a message</p>
      <h2 className="mt-3 font-serif text-2xl md:text-3xl text-charcoal-deep">Let&rsquo;s start the conversation.</h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-charcoal-deep">Name</span>
            <input type="text" name="name" required autoComplete="name" placeholder="Jane Doe" className={inputClass} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-charcoal-deep">Email</span>
            <input type="email" name="email" required autoComplete="email" placeholder="jane@yourfirm.com" className={inputClass} />
          </label>
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className="text-xs uppercase tracking-[0.18em] text-charcoal-deep mb-1">I&rsquo;m reaching out as</legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {roleOptions.map((opt, i) => (
              <label
                key={opt.value}
                className="group flex items-start gap-3 border border-line px-4 py-3 cursor-pointer transition-colors has-[:checked]:border-charcoal-deep has-[:checked]:bg-paper-deep/50 hover:border-slate"
              >
                <input type="radio" name="role" value={opt.value} required={i === 0} defaultChecked={i === 0} className="sr-only peer" />
                <span className="mt-0.5 shrink-0 text-slate-deep peer-checked:text-charcoal-deep transition-colors">{opt.icon}</span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-charcoal-deep leading-tight">{opt.label}</span>
                  <span className="mt-0.5 text-xs text-muted leading-snug">{opt.hint}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.18em] text-charcoal-deep">Message</span>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Tell us about the role, the timeline, or what you're looking for…"
            className={`${inputClass} resize-y`}
          />
        </label>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide bg-charcoal-deep text-cream hover:bg-slate-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
            <span aria-hidden="true">→</span>
          </button>
          <p className="text-xs text-muted">Tiffany reads every message personally.</p>
        </div>

        {status === "error" && (
          <p className="text-sm text-red-700">
            Something went wrong. Please email Tiffany directly at{" "}
            <a href="mailto:Tiffany.Meikle@HarakaHeadhunters.com" className="link-underline">Tiffany.Meikle@HarakaHeadhunters.com</a>.
          </p>
        )}
      </form>
    </div>
  );
}
