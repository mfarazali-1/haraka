"use client";

import { FormEvent, useState } from "react";

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
      <div className="mt-8 p-6 border border-slate bg-cream-soft/50">
        <p className="font-serif text-xl text-charcoal-deep">Message received.</p>
        <p className="mt-1 text-sm text-muted">Tiffany will be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.18em] text-charcoal-deep">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="border-0 border-b border-line bg-transparent py-2 text-base text-charcoal-deep focus:outline-none focus:border-charcoal-deep transition-colors"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.18em] text-charcoal-deep">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="border-0 border-b border-line bg-transparent py-2 text-base text-charcoal-deep focus:outline-none focus:border-charcoal-deep transition-colors"
          />
        </label>
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-xs uppercase tracking-[0.18em] text-charcoal-deep mb-1">I&rsquo;m reaching out as</legend>
        <div className="flex flex-wrap gap-3">
          <label className="inline-flex items-center gap-2 border border-line px-4 py-2 cursor-pointer has-[:checked]:border-charcoal-deep has-[:checked]:bg-paper-deep/50 transition-colors">
            <input type="radio" name="role" value="client" className="accent-slate-deep" required />
            <span className="text-sm">A firm hiring talent</span>
          </label>
          <label className="inline-flex items-center gap-2 border border-line px-4 py-2 cursor-pointer has-[:checked]:border-charcoal-deep has-[:checked]:bg-paper-deep/50 transition-colors">
            <input type="radio" name="role" value="candidate" className="accent-slate-deep" />
            <span className="text-sm">A candidate looking for a role</span>
          </label>
          <label className="inline-flex items-center gap-2 border border-line px-4 py-2 cursor-pointer has-[:checked]:border-charcoal-deep has-[:checked]:bg-paper-deep/50 transition-colors">
            <input type="radio" name="role" value="other" className="accent-slate-deep" />
            <span className="text-sm">Something else</span>
          </label>
        </div>
      </fieldset>

      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-charcoal-deep">Message</span>
        <textarea
          name="message"
          rows={6}
          required
          className="border border-line bg-transparent p-3 text-base text-charcoal-deep focus:outline-none focus:border-charcoal-deep transition-colors resize-y"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide bg-charcoal-deep text-cream hover:bg-slate-deep transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <span aria-hidden="true">→</span>
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please email Tiffany directly instead.</p>
      )}
    </form>
  );
}
