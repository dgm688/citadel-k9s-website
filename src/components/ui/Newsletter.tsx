"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { submitLead, validators } from "@/lib/leads";

type Status = "idle" | "sending" | "sent" | "error";

/** Newsletter sign-up — stored in Supabase like every other lead. */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validators.email(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("sending");
    const result = await submitLead({ form: "newsletter", email, company });
    if (result.ok) {
      setStatus("sent");
    } else {
      setStatus("error");
      setError("Something went wrong — please try again in a moment.");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="inline-flex items-center gap-2 text-sm text-emerald-300">
        <Check className="h-4 w-4" /> You&apos;re on the list — welcome to the
        Citadel Circle.
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
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary shrink-0"
        >
          {status === "sending" ? "Joining…" : "Subscribe"}
          <ArrowRight className="h-4 w-4" />
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
