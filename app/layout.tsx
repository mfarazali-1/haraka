import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://harakaheadhunters.example.com"),
  title: {
    default: "Haraka Headhunters — Top Legal Talent, Faster Than A New York Minute",
    template: "%s — Haraka Headhunters",
  },
  description:
    "Haraka Headhunters is a legal staffing & consulting firm placing top attorneys with speed and precision. 200+ lawyers placed since January 2023.",
  icons: {
    icon: "/haraka-logo.svg",
  },
  openGraph: {
    type: "website",
    title: "Haraka Headhunters — Top Legal Talent, Faster Than A New York Minute",
    description:
      "Haraka Headhunters is a legal staffing & consulting firm placing top attorneys with speed and precision. 200+ lawyers placed since January 2023.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-charcoal focus:text-cream focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
