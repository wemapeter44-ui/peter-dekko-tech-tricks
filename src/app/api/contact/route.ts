import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validators/contact";
import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY ?? "re_placeholder");

const recent = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const timestamps = (recent.get(ip) ?? []).filter((t) => t > windowStart);
  if (timestamps.length >= MAX_PER_WINDOW) return true;
  timestamps.push(now);
  recent.set(ip, timestamps);
  return false;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again in a minute." },
        { status: 429 }
      );
    }

    const json = await req.json().catch(() => null);
    if (!json) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Invalid input.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = parsed.data;

    const { error: insertError } = await supabaseAdmin
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        service: data.service || null,
        budget: data.budget || null,
        timeline: data.timeline || null,
        message: data.message,
        ip_address: ip,
        user_agent: req.headers.get("user-agent") ?? null,
      });

    if (insertError) {
      console.error("Supabase insert failed:", insertError);
      return NextResponse.json(
        { error: `DB error: ${insertError.message}` },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL;
    if (toEmail && process.env.RESEND_API_KEY) {
      await resend.emails
        .send({
          from: "Peter Dekko Tech Tricks <onboarding@resend.dev>",
          to: [toEmail],
          replyTo: data.email,
          subject: `New enquiry from ${data.name}`,
          html: `<p><b>${data.name}</b> (${data.email})</p><p>${data.message}</p>`,
        })
        .catch((e) => console.error("Resend failed:", e));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: `Server error: ${err instanceof Error ? err.message : "unknown"}` },
      { status: 500 }
    );
  }
}
