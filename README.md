# Haraka Headhunters

A Next.js (App Router) rebuild of the Haraka Headhunters marketing site, ready to deploy on Vercel's free tier.

## What this is

The original site (`https://6a2b95d5acfeae0008adcc09--thriving-unicorn-7c06ac.netlify.app`) was built with
Astro + Tailwind CSS v4. This rebuild reproduces every page and all copy/images, using the site's own compiled
CSS (`app/globals.css`) for pixel-accurate styling, with the interactive bits (mobile nav, team-bio dialogs,
role accordions, the placed-lawyers counter, the contact form) reimplemented as React components.

## Pages

- `/` — home
- `/about` — team, with click-to-open bio dialogs
- `/testimonials` — all 20 LinkedIn recommendations
- `/careers` — 10 open roles, each an expandable `<details>` accordion
- `/about-us` — firm overview and office location (`/haraka-cares` redirects here)
- `/contact` — contact form

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Known gap: the contact form

The original site used **Netlify Forms**, which only works when hosted on Netlify. This rebuild instead posts to
a Next.js API route (`app/api/contact/route.ts`) that currently just logs the submission — it does **not** send
an email yet. Before relying on this in production, wire it up to a real provider, e.g.:

- [Resend](https://resend.com) (simplest with Vercel)
- [SendGrid](https://sendgrid.com)
- [Formspree](https://formspree.io) (no backend code needed — just point the form at their endpoint)

## Known gap: metadata

`app/layout.tsx` sets a placeholder `metadataBase` (`https://harakaheadhunters.example.com`). Update it to your
real domain once deployed, so Open Graph/Twitter card image URLs resolve correctly.

## Omitted from the original

The homepage had a one-time animated logo "reveal" intro (SVG draw-in + fade) that plays once per browser
session before the page appears. It was left out as a decorative, non-content feature — everything else is a
faithful port.

## Deploying to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no config needed. Deploy.

Or, from the CLI:

```bash
npx vercel
```
