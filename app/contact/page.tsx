import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="container-x pt-20 md:pt-28 pb-12">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight max-w-4xl">
            Tell us what you&rsquo;re looking for.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            Hiring, looking, or just exploring — start the conversation here. Tiffany reads every message
            personally, usually within one business day.
          </p>
        </div>
      </section>

      <section className="bg-paper-deep border-y border-line-strong">
        <div className="container-x py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5 space-y-10">
              <div>
                <p className="eyebrow">Direct</p>
                <p className="mt-4 text-lg">
                  <a href="mailto:Tiffany.Meikle@HarakaHeadhunters.com" className="link-underline text-charcoal-deep">
                    Tiffany.Meikle@HarakaHeadhunters.com
                  </a>
                </p>
              </div>
              <div>
                <p className="eyebrow">LinkedIn</p>
                <p className="mt-4 text-lg">
                  <a
                    href="https://www.linkedin.com/company/haraka-headhunters/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline text-charcoal-deep"
                  >
                    Haraka Headhunters
                  </a>
                </p>
              </div>
              <div>
                <p className="eyebrow">Open roles</p>
                <p className="mt-4 text-lg">
                  <a
                    href="https://www.linkedin.com/company/haraka-headhunters/jobs/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline text-charcoal-deep"
                  >
                    View on LinkedIn
                  </a>
                </p>
              </div>
              <div className="border-t border-line pt-8">
                <p className="text-sm text-muted leading-relaxed">
                  Every search begins with a confidential conversation. Whether you&rsquo;re actively hiring,
                  quietly exploring, or somewhere in between — your privacy is the first thing we protect.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
