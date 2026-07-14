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
      {/* Cinematic background — real footage of our dog (identity preserved) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          poster="/images/gallery/adult-stack.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Legibility overlays: dark on the left where the text sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden>
          <defs>
            <pattern id="hero-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M64 0H0V64" fill="none" stroke="#C9A227" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
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
            {SITE.positioning}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-balance text-[2.75rem] font-light leading-[1.04] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Elite <span className="text-gold-gradient italic">German Shepherds</span>,
            raised in Kenya.
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-lg leading-relaxed text-bone-muted"
          >
            Bred for structure, health and temperament — and raised underfoot,
            with the records to show for it. Visit us, meet the parents, and
            judge our standards in person.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/available-puppies" variant="primary">
              View Available Puppy
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/about" variant="outline">
              Our Standards
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/5 pt-8"
          >
            {[
              { k: "Visit", v: "by appointment" },
              { k: "Meet", v: "the parents" },
              { k: "Records", v: "with every puppy" },
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

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-faint lg:flex">
        <span className="text-[0.6rem] uppercase tracking-luxe">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
