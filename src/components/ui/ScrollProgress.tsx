"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gold reading-progress bar pinned to the top of the viewport.
 * A subtle "you are here" cue used by Linear, Vercel and editorial sites.
 * Transform-only (scaleX) so it costs nothing on the main thread.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-soft"
    />
  );
}
