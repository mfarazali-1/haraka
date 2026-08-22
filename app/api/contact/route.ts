import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, role, message } = data ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // NOTE: this currently only logs the submission. Wire up a real email/CRM
  // provider (e.g. Resend, SendGrid, Formspree) before relying on this in
  // production — Netlify Forms (used by the original site) does not work
  // once this is hosted on Vercel.
  console.log("Contact form submission:", { name, email, role, message });

  return NextResponse.json({ ok: true });
}
