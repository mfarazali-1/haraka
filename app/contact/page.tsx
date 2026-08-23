import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
};

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 7 9-7M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
    </svg>
  );
}

function LinkedInGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13M3 21h18M9 21V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.16 21 3 14.84 3 7a2 2 0 0 1 1-1.73V4z" />
    </svg>
  );
}

const infoItems = [
  {
    label: "Direct",
    icon: <MailIcon />,
    href: "mailto:Tiffany.Meikle@HarakaHeadhunters.com",
    text: "Tiffany.Meikle@HarakaHeadhunters.com",
    external: false,
  },
  {
    label: "Phone",
    icon: <PhoneIcon />,
    href: "tel:+12122224265",
    text: "+1 (212) 222-4265",
    external: false,
  },
  {
    label: "Office",
    icon: <PinIcon />,
    href: "https://www.google.com/maps/search/?api=1&query=250+Park+Avenue+New+York+NY+10016",
    text: "250 Park Avenue, New York, NY 10016",
    external: true,
  },
  {
    label: "LinkedIn",
    icon: <LinkedInGlyph />,
    href: "https://www.linkedin.com/company/haraka-headhunters/",
    text: "Haraka Headhunters",
    external: true,
  },
  {
    label: "Open roles",
    icon: <BriefcaseIcon />,
    href: "https://www.linkedin.com/company/haraka-headhunters/jobs/",
    text: "View on LinkedIn",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="container-x pt-20 md:pt-28 pb-12">
          <p className="eyebrow">Contact Us</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="order-1 lg:order-2 lg:col-span-5 border border-line-strong bg-paper p-8 md:p-10 space-y-8">
              {infoItems.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3">
                  <span className="mt-0.5 shrink-0 w-8 h-8 inline-flex items-center justify-center border border-line-strong text-slate-deep">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow">{item.label}</p>
                    <p className="mt-1.5 text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer noopener" : undefined}
                        className="link-underline text-charcoal-deep"
                      >
                        {item.text}
                      </a>
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-t border-line pt-7">
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
