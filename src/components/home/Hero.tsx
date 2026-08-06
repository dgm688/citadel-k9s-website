"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { MagneticLink } from "@/components/ui/Magnetic";
import { WordReveal } from "@/components/ui/WordReveal";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { SITE } from "@/lib/site";

const gold = "text-gold-gradient italic";

export function Hero() {
  const reduce = useReducedMotion();

  // Lightweight scroll parallax on the background (transform-only).
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 900], [0, 130]);
  const bgY = reduce ? 0 : parallax;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.55 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Cinematic background — real footage of our dog (identity preserved).
          Reduced-motion users get the still photograph instead of autoplay. */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[8%] h-[116%]">
          {reduce ? (
            // eslint-disable-next-line @next/next/no-img-element -- decorative full-bleed background
            <img
              src="/images/gallery/adult-stack.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <video
              className="h-full w-full object-cover object-center"
              poster="/images/gallery/adult-stack.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          )}
        </motion.div>
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
        <div className="flex max-w-4xl flex-col gap-8">
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            {SITE.positioning}
          </motion.span>

          <h1 className="text-balance text-[2.75rem] font-light leading-[1.04] sm:text-6xl lg:text-7xl xl:text-8xl">
            <WordReveal
              words={[
                { text: "Elite" },
                { text: "German", className: gold },
                { text: "Shepherds,", className: gold },
                { text: "raised" },
                { text: "in" },
                { text: "Kenya." },
              ]}
            />
          </h1>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8"
          >
            <motion.p
              variants={item}
              className="max-w-xl text-lg leading-relaxed text-bone-muted"
            >
              Bred for structure, health and temperament — and raised underfoot,
              with the records to show for it. Visit us, meet the parents, and
              judge our standards in person.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <MagneticLink href="/available-puppies" className="btn btn-primary">
                View Available Puppy
                <ArrowRight className="h-4 w-4" />
              </MagneticLink>
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-faint lg:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-luxe">Scroll</span>
        <motion.span
          animate={reduce ? {} : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px origin-top bg-gradient-to-b from-gold/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
