"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { SITE } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Cinematic background layers */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-ink" />
        {/* Slow drifting glow */}
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        {/* Architectural grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden>
          <defs>
            <pattern id="hero-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M64 0H0V64" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        {/* Oversized brand crest watermark */}
        <svg
          className="absolute -right-24 top-1/2 hidden h-[120%] -translate-y-1/2 text-gold/[0.05] lg:block"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden
        >
          <path
            d="M24 3l16 6v11c0 10.5-6.8 17.4-16 21C14.8 37.4 8 30.5 8 20V9l16-6z"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <path
            d="M16 17v-3h3v2h3v-2h4v2h3v-2h3v3"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path d="M16 17h16v8a8 8 0 0 1-8 7 8 8 0 0 1-8-7v-8z" fill="currentColor" />
        </svg>
        {/* Bottom fade into page */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-site w-full pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-4xl flex-col gap-8"
        >
          <motion.span variants={item} className="eyebrow">
            {SITE.country} · Est. {SITE.foundingYear}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-balance text-5xl font-light leading-[1.02] sm:text-6xl lg:text-8xl"
          >
            The standard for the{" "}
            <span className="text-gold-gradient italic">German Shepherd</span>{" "}
            in Africa.
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-lg leading-relaxed text-bone-muted"
          >
            Citadel K9s breeds exceptional German Shepherds to uncompromising
            standards of structure, health and temperament — dogs of substance,
            confidence and timeless nobility.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/available-puppies" variant="primary">
              View Available Puppy
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/our-dogs" variant="outline">
              Meet Our Dogs
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/5 pt-8"
          >
            {[
              { k: "Health-screened", v: "Bloodlines" },
              { k: "Written", v: "Health guarantee" },
              { k: "Lifetime", v: "Breeder support" },
            ].map((s) => (
              <div key={s.v} className="flex flex-col">
                <span className="font-display text-2xl text-gold">{s.k}</span>
                <span className="text-xs uppercase tracking-wide2 text-bone-faint">
                  {s.v}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-faint lg:flex">
        <span className="text-[0.6rem] uppercase tracking-luxe">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
