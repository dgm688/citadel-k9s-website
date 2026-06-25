"use client";

import { useState } from "react";
import { Field, inputBase } from "./Field";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";

/**
 * Waiting-list / reservation enquiry. Composes a WhatsApp message on submit.
 * Replace `handleSubmit` with a server action when you add a backend.
 */
export function WaitingListForm({ puppyName }: { puppyName?: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    preference: "No preference",
    notes: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = puppyName
      ? `Enquiry about ${puppyName}`
      : "Waiting list enquiry";
    const msg = `Hello Citadel K9s,%0A%0A${subject}%0AName: ${form.name}%0APhone: ${form.phone}%0ALocation: ${form.location}%0APreference: ${form.preference}%0A%0A${form.notes}`;
    window.open(whatsappLink(decodeURIComponent(msg)), "_blank", "noopener");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-8 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 text-emerald-300">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-light">You&apos;re on the list.</h3>
        <p className="max-w-sm text-sm text-bone-muted">
          We&apos;ve opened WhatsApp to confirm your details. We&apos;ll be in
          touch personally about availability.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="wl-name" required>
          <input
            id="wl-name"
            required
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            className={inputBase}
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="wl-phone" required>
          <input
            id="wl-phone"
            required
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update("phone")}
            className={inputBase}
            placeholder="+254 …"
          />
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
      <Button type="submit" className="self-start">
        Join the waiting list
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
