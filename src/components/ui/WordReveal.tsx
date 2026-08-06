"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface Word {
  text: string;
  /** Extra classes for styled emphasis words (e.g. gold gradient / italic). */
  className?: string;
}

interface WordRevealProps {
  words: Word[];
  className?: string;
  /** Delay before the sequence starts (lets the hero settle). */
  delay?: number;
  stagger?: number;
}

/**
 * Editorial headline reveal — each word rises from behind a mask, staggered.
 * The signature luxury type entrance (Awwwards / fashion-house style).
 * Falls back to a plain heading under prefers-reduced-motion.
 */
export function WordReveal({
  words,
  className = "",
  delay = 0.15,
  stagger = 0.075,
}: WordRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className={className}>
        {words.map((w, i) => (
          <span key={i} className={w.className}>
            {w.text}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <span
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.08em" }}
          >
            <motion.span
              className={`inline-block ${w.className ?? ""}`}
              variants={{
                hidden: { y: "115%" },
                show: {
                  y: "0%",
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {w.text}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </motion.span>
  );
}
