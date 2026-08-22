import type { Metadata } from "next";
import RoleAccordion from "@/components/RoleAccordion";
import { roles } from "@/lib/careers";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="container-x pt-20 md:pt-28 pb-12">
          <p className="eyebrow">Careers</p>
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight max-w-4xl">
            Open roles, kept short and curated.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            Every search we&rsquo;re running right now, with full descriptions — no LinkedIn account required.
            Click a role to see what we&rsquo;re looking for, what the firm offers, and how to apply.
          </p>
        </div>
      </section>

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-16 md:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-deep">Open roles</h2>
            <p className="text-sm text-muted">{roles.length} positions open</p>
          </div>
          <ul className="border-t border-line-strong">
            {roles.map((role, i) => (
              <RoleAccordion key={`${role.title}-${i}`} role={role} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
