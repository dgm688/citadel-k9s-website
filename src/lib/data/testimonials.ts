import type { Testimonial } from "@/lib/types";

/**
 * GENUINE testimonials only.
 *
 * This list is intentionally EMPTY. While it is empty, every
 * testimonial section on the site hides itself automatically and the
 * testimonials page shows an honest "verified reviews only" state.
 *
 * When a real family gives permission to publish their words, add an
 * entry like the example below and the sections reappear on their own.
 *
 * @example
 * {
 *   name: "Jane W.",
 *   location: "Nairobi",
 *   quote: "Exactly what they promised…",
 *   rating: 5,
 *   source: "whatsapp",              // whatsapp | google | in-person
 *   dog: "Male — Black & Red",
 *   date: "2026-08-01",
 *   media: { src: "/images/reviews/jane-dog.jpg", alt: "Jane's shepherd at home" },
 * }
 */
export const TESTIMONIALS: Testimonial[] = [];

export const HAS_TESTIMONIALS = TESTIMONIALS.length > 0;
