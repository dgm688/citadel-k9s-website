import type { Testimonial } from "@/lib/types";

/**
 * GENUINE testimonials only — every entry is a real, public Google review
 * from an actual Citadel K9s customer. Never add invented praise, and
 * never add reviews from the owner or family (Google removes those and
 * they undermine trust).
 *
 * To add a new one: copy a real Google review's exact words + reviewer
 * name, set source: "google". Sections that use this list reappear
 * automatically once it is non-empty.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Irungu",
    quote:
      "Excellent service and exceptional German Shepherds. You can tell the dogs are well cared for and raised in a clean, loving environment. Communication was excellent throughout the process, and I couldn't be happier with my puppy. Highly recommended!",
    rating: 5,
    source: "google",
  },
  {
    name: "4k Wrld",
    quote:
      "If you're looking for a German Shepherd breeder that prioritizes structure, health, and temperament, Citadel K9s is an excellent choice. The attention to detail and passion for the breed are evident throughout the process. We couldn't be happier with our puppy and the support we've received.",
    rating: 5,
    source: "google",
  },
  {
    name: "Peter Kinyanjui",
    quote:
      "Amazing experience from start to finish. Professional service, healthy puppies, and excellent communication. Highly recommend Citadel K9s!",
    rating: 5,
    source: "google",
  },
];

export const HAS_TESTIMONIALS = TESTIMONIALS.length > 0;
