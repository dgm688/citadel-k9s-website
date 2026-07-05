"use client";

import { useState } from "react";
import { Field, inputBase } from "./Field";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";
import { submitLead, validators } from "@/lib/leads";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Waiting-list / reservation form. Same guarantees as the contact
 * form: validated, spam-filtered, stored in Supabase, WhatsApp
 * fallback on failure — an enquiry is never lost.
 */
export function WaitingListForm({ puppyName }: { puppyName?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    preference: "No preference",
    notes: "",
    company: "", // honeypot
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!validators.required(form.name)) next.name = "Please enter your name.";
    if (!validators.phone(form.phone))
      next.phone = "Please enter a valid phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const result = await submitLead({
      form: "waiting-list",
      name: form.name,
      phone: form.phone,
      location: form.location,
      preference: form.preference,
      message: form.notes,
      puppy: puppyName,
      company: form.company,
    });
    setStatus(result.ok ? "sent" : "error");
  }

  const fallbackWhatsApp = whatsappLink(
    `Hello Citadel K9s,\n\n${puppyName ? `Enquiry about ${puppyName}` : "Waiting list enquiry"}\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nPreference: ${form.preference}\n\n${form.notes}`,
  );

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-8 text-center"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 text-emerald-300">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-light">You&apos;re on the list.</h3>
        <p className="max-w-sm text-sm text-bone-muted">
          We&apos;ll be in touch personally about availability and next steps.
          Want to talk sooner?
        </p>
        <a
          href={fallbackWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <WhatsApp className="h-4 w-4" />
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="wl-name" required>
          <input
            id="wl-name"
            required
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "wl-name-error" : undefined}
            className={inputBase}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="wl-name-error" className="text-xs text-red-400">{errors.name}</p>
          )}
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="wl-phone" required>
          <input
            id="wl-phone"
            required
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "wl-phone-error" : undefined}
            className={inputBase}
            placeholder="+254 …"
          />
          {errors.phone && (
            <p id="wl-phone-error" className="text-xs text-red-400">{errors.phone}</p>
          )}
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your location" htmlFor="wl-location">
          <input
            id="wl-location"
            value={form.location}
            onChange={update("location")}
            className={inputBase}
            placeholder="City / town"
          />
        </Field>
        <Field label="Preference" htmlFor="wl-pref">
          <select
            id="wl-pref"
            value={form.preference}
            onChange={update("preference")}
            className={inputBase}
          >
            <option>No preference</option>
            <option>Male</option>
            <option>Female</option>
            <option>Working prospect</option>
            <option>Family companion</option>
          </select>
        </Field>
      </div>
      <Field label="Notes" htmlFor="wl-notes">
        <textarea
          id="wl-notes"
          rows={4}
          value={form.notes}
          onChange={update("notes")}
          className={inputBase}
          placeholder="Anything you'd like us to know…"
        />
      </Field>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="wl-company">Company</label>
        <input
          id="wl-company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={update("company")}
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex flex-col gap-3 rounded-xl border border-red-400/30 bg-red-400/5 p-4 text-sm text-red-300"
        >
          <p>
            We couldn&apos;t save your details just now — send them straight to
            us on WhatsApp instead:
          </p>
          <a
            href={fallbackWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline self-start"
          >
            <WhatsApp className="h-4 w-4" />
            Send via WhatsApp
          </a>
        </div>
      )}

      <Button type="submit" disabled={status === "sending"} className="self-start">
        {status === "sending" ? "Sending…" : "Join the waiting list"}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
