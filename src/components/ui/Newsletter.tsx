"use client";

import { useState } from "react";
import { WhatsApp, Check } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";
import { validators } from "@/lib/leads";

type Status = "idle" | "sent";

/**
 * "Be first to know" sign-up — WhatsApp-first. On submit we open a WhatsApp
 * chat asking to be added to the litter-announcement list, with the email
 * included, so the breeder can follow up personally. Nothing stored server-side.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const joinWhatsApp = whatsappLink(
    `Hello Citadel K9s, I'd like to join the Citadel Circle and be first to hear when a litter is planned.\nEmail: ${email}`,
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validators.email(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    if (company.trim() !== "") {
      setStatus("sent");
      return;
    }
    window.open(joinWhatsApp, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p role="status" className="inline-flex flex-wrap items-center gap-2 text-sm text-emerald-300">
        <Check className="h-4 w-4" /> Opened WhatsApp — tap send and we&apos;ll
        keep you posted.
        <a
          href={joinWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-emerald-300/40 underline-offset-2 hover:decoration-emerald-300"
        >
          Didn&apos;t open?
        </a>
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "newsletter-error" : undefined}
          className="w-full rounded-full border border-white/10 bg-ink-800 px-5 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-gold/50"
        />
        {/* Honeypot */}
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <button type="submit" className="btn btn-primary shrink-0">
          <WhatsApp className="h-4 w-4" />
          Notify me
        </button>
      </div>
      {error && (
        <p id="newsletter-error" role="alert" className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}
