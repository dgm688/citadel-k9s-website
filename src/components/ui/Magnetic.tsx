"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

/**
 * Magnetic interaction — the element eases toward the cursor, then springs
 * back on leave. A signature "Apple/Linear" micro-interaction that reads as
 * premium without being distracting.
 *
 * Guardrails:
 *  - Disabled entirely for `prefers-reduced-motion`.
 *  - Only engages for fine pointers (mouse); touch users get a normal button.
 *  - Transform-only (GPU) so it never triggers layout / hurts INP.
 */
function useMagnet(strength: number) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springCfg = { stiffness: 220, damping: 18, mass: 0.4 };
  const sx = useSpring(x, springCfg);
  const sy = useSpring(y, springCfg);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce) return;
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(pointer: fine)").matches
    )
      return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }
  return { sx, sy, onMove, reset };
}

const MotionLink = motion(Link);

/** Magnetic internal navigation button (Next.js Link). */
export function MagneticLink({
  href,
  children,
  className = "",
  strength = 0.4,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const { sx, sy, onMove, reset } = useMagnet(strength);
  return (
    <MotionLink
      href={href}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </MotionLink>
  );
}

/** Magnetic external link (e.g. WhatsApp deep link). */
export function MagneticAnchor({
  strength = 0.4,
  className = "",
  children,
  ...rest
}: HTMLMotionProps<"a"> & { strength?: number }) {
  const { sx, sy, onMove, reset } = useMagnet(strength);
  return (
    <motion.a
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

/** Magnetic native button. */
export function MagneticButton({
  strength = 0.4,
  className = "",
  children,
  ...rest
}: HTMLMotionProps<"button"> & { strength?: number }) {
  const { sx, sy, onMove, reset } = useMagnet(strength);
  return (
    <motion.button
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
