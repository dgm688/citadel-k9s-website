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
  {
    slug: "available-male-puppy",
    name: "Available Male Puppy", // EDIT: your puppy's call name if you use one
    litter: undefined, // EDIT e.g. "Current litter" — only real litter info
    sex: "Male", // EDIT if female
    dob: null, // EDIT: real date of birth, e.g. "2026-05-02"
    color: null, // EDIT: real colour, e.g. "Black & Red"
    status: "Available",
    price: "On request",
    temperament:
      "Confident and people-focused, raised underfoot with daily handling. Ask us on WhatsApp and we'll describe him honestly — including the things a listing can't show you.",
    description:
      "One male German Shepherd puppy is currently available to a well-prepared home. He is being raised inside our household with early socialisation, scheduled deworming and veterinary care. We'd rather tell you about him directly than oversell him here — message us and ask anything.",
    sire: null, // EDIT: real sire name — renders "shared on enquiry" while null
    dam: null, // EDIT: real dam name
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
    hero: {
      src: null,
      alt: "Available male German Shepherd puppy",
      label: "Available Male",
    },
    gallery: [
      { src: null, alt: "Puppy portrait", label: "Portrait" },
      { src: null, alt: "Puppy standing", label: "Standing" },
      { src: null, alt: "Puppy at play", label: "Play" },
      { src: null, alt: "Puppy outdoors", label: "Outdoors" },
    ],
  },
];

export const AVAILABLE_PUPPIES = PUPPIES.filter((p) => p.status === "Available");

export function getPuppy(slug: string): Puppy | undefined {
  return PUPPIES.find((p) => p.slug === slug);
}
