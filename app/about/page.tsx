import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TeamGrid from "@/components/TeamGrid";
import { teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "About",
};

const tiffanyBio = [
  "Tiffany is the Founder and CEO of Haraka Headhunters LLC, bringing a strong foundation in business and a proven track record in recruitment. She holds a Bachelor’s degree in Business Administration from City College and an MBA from Thomas Edison State University. She also pursued an Associate’s degree in journalism at Herkimer County Community College directly after graduating high school.",
  "Her career spans leading staffing and corporate environments, including Brook Street (UK), where she specialized in business development, and Robert Half, where she worked as an Attorney Recruiter. Tiffany has also held technical recruiting roles with The Depository Trust & Clearing Corporation and Panasonic Avionics, giving her a well-rounded perspective across industries.",
  "Outside of work, Tiffany enjoys swimming and unwinding with great stories — whether it’s binge-watching series like Game of Thrones or reading her favorite novel, Sycamore Row. She’s equally drawn to compelling true stories, with All the Money in the World among her favorite films.",
  "With a sharp eye for talent and a passion for connecting people with opportunity, Tiffany leads Haraka Headhunters with energy, insight, and purpose.",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="container-x pt-20 md:pt-28 pb-16">
          <p className="eyebrow">About</p>
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight max-w-4xl">
            A boutique legal recruiting firm built on speed, specialization, and care.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            Haraka Headhunters partners with law firms and in-house teams to place attorneys whose track records,
            temperaments, and ambitions match the brief. We do one thing — and we do it faster than a New York
            minute.
          </p>
        </div>
      </section>

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">Our story</p>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl leading-tight">Built for how legal hiring really works.</h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base md:text-lg leading-relaxed text-charcoal-deep">
              <p>
                We launched Haraka Headhunters in early 2023 with a deliberately narrow focus: legal recruiting,
                end to end, with a velocity the industry rarely delivers. Two interviews in a single week. Offers
                negotiated in days. Long relationships protected through every search.
              </p>
              <p>
                Today we partner with boutiques and growing firms across the country — from immigration and IP to
                litigation, estate planning, and insurance defense — matching attorneys to the practices where
                they&rsquo;ll do their best work. We measure success not by transactions closed, but by placements
                that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-20 md:py-28">
          <p className="eyebrow">Our team</p>
          <h2 className="mt-5 font-serif text-3xl md:text-4xl leading-tight max-w-2xl">The people behind every placement.</h2>

          <div className="mt-12 border border-line-strong bg-paper">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-4 lg:col-span-3 p-7 md:p-8 md:border-r border-line-strong flex flex-col">
                <Image
                  src="/about/tiffany-meikle.jpg"
                  alt="Tiffany Meikle, Founder & CEO of Haraka Headhunters"
                  width={640}
                  height={800}
                  className="aspect-[4/5] w-full object-cover border border-line-strong"
                />
                <h3 className="mt-6 font-serif text-2xl text-charcoal-deep">Tiffany Meikle</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-deep mt-1">Founder &amp; CEO</p>
                <div className="mt-6 pt-5 border-t border-line-strong flex flex-wrap gap-3">
                  <a
                    href="/tiffany-meikle.vcf"
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal-deep border border-charcoal-deep px-3 py-2 hover:bg-charcoal-deep hover:text-cream transition-colors"
                    aria-label="Download Tiffany Meikle's contact card"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                    </svg>
                    Save contact
                  </a>
                  <a href="mailto:Tiffany.Meikle@HarakaHeadhunters.com" className="inline-flex items-center text-xs text-charcoal-deep link-underline">Email</a>
                  <a
                    href="https://www.linkedin.com/company/haraka-headhunters/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center text-xs text-charcoal-deep link-underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9 p-7 md:p-10 space-y-5 text-base leading-relaxed text-charcoal-deep">
                {tiffanyBio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <p className="eyebrow">The team</p>
            <h3 className="mt-3 font-serif text-2xl md:text-3xl text-charcoal-deep">Click a profile to read the full bio.</h3>
          </div>

          <TeamGrid members={teamMembers} />
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="container-x py-20 md:py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream max-w-2xl mx-auto leading-tight">
            Hiring? Looking? Either way, let&rsquo;s talk.
          </h2>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 !bg-cream !text-charcoal-deep !border-cream hover:!bg-paper border"
            >
              Contact us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
