"use client";

import { useEffect, useState } from "react";
import { whatsappLink, SITE } from "@/lib/site";
import { WhatsApp } from "@/components/ui/Icons";

/**
 * Floating WhatsApp action — appears after a short scroll so it never
 * competes with the hero. Pre-fills a friendly enquiry message.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(
        `Hello ${SITE.name}, I'd like to enquire about your German Shepherds.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Citadel K9s on WhatsApp"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500 px-4 py-3 text-ink shadow-luxe transition-all duration-500 hover:bg-emerald-400 sm:bottom-7 sm:right-7 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <WhatsApp className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
