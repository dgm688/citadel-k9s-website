import type { Puppy } from "@/lib/types";

/**
 * Available puppies.
 *
 * ⚠️ ACTION REQUIRED — EDIT WITH REAL DETAILS.
 * The entry below is a structural placeholder for your one available
 * puppy. Replace every "EDIT" note with the true value. Fields left
 * as null render an honest "confirmed on enquiry" state — never an
 * invented fact.
 *
 * To mark the puppy as taken: change `status` to "Reserved" or "Sold".
 * To add a puppy: copy the entry.
 */
export const PUPPIES: Puppy[] = [
  // No puppies are available right now. When a litter is ready, copy the
  // PUPPY_TEMPLATE below into this array and fill in the real details.
];

/**
 * Template for a future available puppy. Copy into PUPPIES and replace every
 * "EDIT" value with the truth. Fields left as null render an honest
 * "confirmed on enquiry" state — never an invented fact. Add real photos to
 * /public/images/puppies/ and reference them in `hero` / `gallery`.
 */
export const PUPPY_TEMPLATE: Puppy = {
  slug: "available-male-puppy",
  name: "Available Puppy", // EDIT: call name
  litter: undefined, // EDIT e.g. "Current litter"
  sex: "Male", // EDIT
  dob: null, // EDIT e.g. "2026-05-02"
  color: null, // EDIT e.g. "Black & Red"
  status: "Available",
  price: "On request",
  temperament:
    "Confident and people-focused, raised underfoot with daily handling. Ask us on WhatsApp and we'll describe them honestly.",
  description:
    "Being raised inside our household with early socialisation, scheduled deworming and veterinary care. Message us and ask anything.",
  sire: null, // EDIT
  dam: null, // EDIT
  health: [
    "Veterinary health check before going home",
    "Deworming on schedule",
    "Vaccination started, record handed over",
  ],
  vaccination: [
    "Age-appropriate vaccinations administered",
    "Full vaccination & deworming record provided at collection",
  ],
  registration: "Registration paperwork accompanies the puppy",
  hero: { src: null, alt: "Available German Shepherd puppy", label: "Available" },
  gallery: [{ src: null, alt: "Puppy portrait", label: "Portrait" }],
};

export const AVAILABLE_PUPPIES = PUPPIES.filter((p) => p.status === "Available");

export function getPuppy(slug: string): Puppy | undefined {
  return PUPPIES.find((p) => p.slug === slug);
}
