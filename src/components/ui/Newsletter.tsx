"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/ui/Icons";

/**
 * Newsletter sign-up. Front-end only by design — wire `onSubmit` to your
 * provider (Mailchimp, ConvertKit, Resend, etc.) when ready.
 */
export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    // TODO: POST to your email provider here.
    setDone(true);
  }

  if (done) {
    return (
      <p className="inline-flex items-center gap-2 text-sm text-emerald-300">
        <Check className="h-4 w-4" /> You&apos;re on the list — welcome to Citadel K9s.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div
        className={`flex w-full gap-2 ${
          compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row"
        }`}
      >
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
        <button type="submit" className="btn btn-primary shrink-0">
          Subscribe
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}
