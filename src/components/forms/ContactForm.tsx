"use client";

import { useState } from "react";
import { Field, inputBase } from "./Field";
import { Button } from "@/components/ui/Button";
import { Check, WhatsApp } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";
import { validators } from "@/lib/leads";

type Status = "idle" | "sent";

/**
 * Contact form — WhatsApp-first. On submit we validate, filter spam
 * (honeypot), then open a WhatsApp chat pre-filled with the enquiry so it
 * reaches the breeder instantly. Nothing is stored server-side.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Available puppy",
    message: "",
    company: "", // honeypot — humans never see or fill this
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!validators.required(form.name)) next.name = "Please enter your name.";
    if (!validators.phone(form.phone))
      next.phone = "Please enter a valid phone number.";
    if (!validators.email(form.email))
      next.email = "Please enter a valid email address.";
    if (!validators.required(form.message))
      next.message = "Please tell us a little about your enquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const enquiryWhatsApp = whatsappLink(
    `Hello Citadel K9s,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterest: ${form.interest}\n\n${form.message}`,
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // Honeypot: quietly pretend success so bots don't adapt.
    if (form.company.trim() !== "") {
      setStatus("sent");
      return;
    }
    // Open WhatsApp with the enquiry pre-filled (direct user gesture — no await).
    window.open(enquiryWhatsApp, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="panel flex flex-col items-center gap-4 p-10 text-center" role="status">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/40 text-emerald-300">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-light">Your message is ready on WhatsApp.</h3>
        <p className="max-w-sm text-sm text-bone-muted">
          We&apos;ve opened WhatsApp with your enquiry filled in — just tap send
          to reach us. Didn&apos;t open? Use the button below.
        </p>
        <a
          href={enquiryWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <WhatsApp className="h-4 w-4" />
          Open WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="panel flex flex-col gap-5 p-7 lg:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required>
          <input
            id="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputBase}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-400">{errors.name}</p>
          )}
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="phone" required>
          <input
            id="phone"
            required
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputBase}
            placeholder="+254 …"
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-red-400">{errors.phone}</p>
          )}
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputBase}
            placeholder="you@email.com"
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-400">{errors.email}</p>
          )}
        </Field>
        <Field label="I'm interested in" htmlFor="interest">
          <select
            id="interest"
            value={form.interest}
            onChange={update("interest")}
            className={inputBase}
          >
            <option>Available puppy</option>
            <option>Joining the waiting list</option>
            <option>Arranging a visit or video call</option>
            <option>General enquiry</option>
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" required>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputBase}
          placeholder="Tell us a little about your home and what you're looking for…"
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-400">{errors.message}</p>
        )}
      </Field>

      {/* Honeypot — hidden from humans, tab order and screen readers */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={update("company")}
        />
      </div>

      <Button type="submit" className="self-start">
        <WhatsApp className="h-4 w-4" />
        Send on WhatsApp
      </Button>
      <p className="text-xs text-bone-faint">
        Your enquiry opens in WhatsApp so we can reply to you personally and
        fast. We use your details only to respond — never shared.
      </p>
    </form>
  );
}
