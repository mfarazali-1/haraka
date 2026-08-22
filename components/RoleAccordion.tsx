import type { Role } from "@/lib/careers";

function CaretIcon() {
  return (
    <svg className="role-caret w-5 h-5 text-muted transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function RoleAccordion({ role }: { role: Role }) {
  return (
    <li className="border-b border-line-strong">
      <details className="role group">
        <summary className="role-summary list-none cursor-pointer select-none grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-7 md:py-8 px-2 -mx-2 items-start hover:bg-paper transition-colors">
          <div className="md:col-span-5">
            <h3 className="font-serif text-xl md:text-2xl text-charcoal-deep group-hover:text-slate-deep transition-colors">
              {role.title}
            </h3>
            {role.subtitle && <p className="mt-1 text-xs text-muted">{role.subtitle}</p>}
            <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-deep">{role.category}</p>
          </div>
          <div className="md:col-span-3 text-sm text-muted">
            <span className="md:hidden text-[11px] uppercase tracking-[0.18em] text-slate-deep mr-2">Location:</span>
            {role.location}
          </div>
          <div className="md:col-span-3 text-sm text-charcoal-deep">
            <span className="md:hidden text-[11px] uppercase tracking-[0.18em] text-slate-deep mr-2">Salary:</span>
            {role.salary}
          </div>
          <div className="hidden md:flex md:col-span-1 justify-end pt-1">
            <CaretIcon />
          </div>
        </summary>

        <div className="role-body grid grid-cols-1 md:grid-cols-12 gap-4 pb-12 md:pb-14 pt-2">
          <div className="md:col-span-10 md:col-start-2 space-y-10">
            <p className="text-base md:text-[17px] leading-relaxed text-charcoal-deep whitespace-pre-line">{role.intro}</p>

            {role.sections.map((s) => (
              <div key={s.heading}>
                <h4 className="eyebrow">{s.heading}</h4>
                {s.para && <p className="mt-3 text-base text-charcoal-deep leading-relaxed">{s.para}</p>}
                {s.items.length > 0 && (
                  <ul className="mt-3 space-y-2 list-none">
                    {s.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-charcoal-deep">
                        <span className="mt-2 w-1.5 h-1.5 bg-slate shrink-0" aria-hidden="true" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="pt-2 border-t border-line-strong">
              <h4 className="eyebrow mt-6">How to apply</h4>
              <div className="mt-4 flex flex-wrap gap-3">
                {role.applyHref && (
                  <a
                    href={role.applyHref}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide bg-charcoal-deep text-cream hover:bg-slate-deep transition-colors"
                  >
                    Email your resume
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
              <p className="mt-4 text-xs text-muted">
                Send to:{" "}
                {role.sendTo.map((email, i) => (
                  <span key={email}>
                    <a href={`mailto:${email}`} className="text-charcoal-deep link-underline">{email}</a>
                    {i < role.sendTo.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
              {role.referral && (
                <p className="mt-3 text-xs text-muted">
                  <span className="text-slate-deep font-medium">{role.referral.split(" if ")[0]}</span>
                  {" if " + role.referral.split(" if ")[1]}
                </p>
              )}
            </div>
          </div>
        </div>
      </details>
    </li>
  );
}
