"use client";

import { useState } from "react";
import { Field, inputBase } from "./Field";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";

/**
 * Contact form. No backend is wired by default — on submit it composes a
 * WhatsApp message so enquiries reach the kennel instantly. Swap `handleSubmit`
 * for a server action / email API (Resend, Formspree, etc.) when ready.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Available puppy",
    message: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hello Citadel K9s,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AInterest: ${form.interest}%0A%0A${form.message}`;
    window.open(whatsappLink(decodeURIComponent(msg)), "_blank", "noopener");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="panel flex flex-col items-center gap-4 p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/40 text-emerald-300">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-light">Thank you — your enquiry is on its way.</h3>
        <p className="max-w-sm text-sm text-bone-muted">
          We&apos;ve opened WhatsApp so you can send your message directly. We
          respond to every enquiry personally, usually within a day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="panel flex flex-col gap-5 p-7 lg:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required>
          <input
            id="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            className={inputBase}
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone" htmlFor="phone" required>
          <input
            id="phone"
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
        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            className={inputBase}
            placeholder="you@email.com"
          />
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
            <option>Our breeding dogs</option>
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
          className={inputBase}
          placeholder="Tell us a little about your home and what you're looking for…"
        />
      </Field>

      <Button type="submit" className="self-start">
        Send enquiry
        <ArrowRight className="h-4 w-4" />
      </Button>
      <p className="text-xs text-bone-faint">
        By sending, you agree to be contacted about your enquiry. We never share
        your details.
      </p>
    </form>
  );
}
