/**
 * Production lead capture.
 *
 * Pipeline:  form → validation → honeypot check → Supabase insert
 *            (→ optional n8n webhook) → success state.
 *
 * Storage is a Supabase table (`citadel_leads`) protected by row-level
 * security: the browser key below may ONLY insert rows — it can never
 * read, update or delete. Publishable keys are designed to ship in
 * client code, so no secret is exposed here.
 *
 * Enquiries are never lost: if the network call fails, callers fall
 * back to a pre-filled WhatsApp message.
 *
 * Email alerts: point LEAD_WEBHOOK_URL at an n8n (or Zapier/Make)
 * webhook and every lead is mirrored there for notification routing.
 * Leave it null until that workflow exists.
 */

const SUPABASE_URL = "https://pxwriuizxypkvkyhiwmy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_beOEL8Htq3L9Iymu-CRHfw_diejoD-Z";

/** Optional n8n webhook for email/Slack notifications. */
const LEAD_WEBHOOK_URL: string | null = null;

export interface LeadInput {
  form: "contact" | "waiting-list" | "newsletter";
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  interest?: string;
  preference?: string;
  message?: string;
  puppy?: string;
  /** Honeypot field — humans never fill this; bots do. */
  company?: string;
}

export interface LeadResult {
  ok: boolean;
  /** True when the submission was silently dropped as spam. */
  spam?: boolean;
}

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  // Honeypot: pretend success so bots don't adapt, store nothing.
  if (input.company && input.company.trim() !== "") {
    return { ok: true, spam: true };
  }

  const record = {
    form: input.form,
    name: input.name?.trim() || null,
    phone: input.phone?.trim() || null,
    email: input.email?.trim() || null,
    location: input.location?.trim() || null,
    interest: input.interest || null,
    preference: input.preference || null,
    message: input.message?.trim() || null,
    puppy: input.puppy || null,
    page: typeof window !== "undefined" ? window.location.pathname : null,
    user_agent:
      typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 250) : null,
  };

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/citadel_leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(record),
    });

    if (!res.ok) return { ok: false };

    // Fire-and-forget notification mirror; never blocks the user.
    if (LEAD_WEBHOOK_URL) {
      fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      }).catch(() => {});
    }

    return { ok: true };
  } catch {
    return { ok: false };
  }
}

/** Basic client-side validators shared by the forms. */
export const validators = {
  email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  /** Kenyan and international numbers: digits, spaces, +, min 9 digits. */
  phone: (v: string) => (v.match(/\d/g) ?? []).length >= 9,
  required: (v: string) => v.trim().length > 1,
};
