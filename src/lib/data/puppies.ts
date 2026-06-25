import type { Puppy } from "@/lib/types";

/**
 * Available puppies. Currently one puppy is available.
 * To add a puppy, copy an entry and update the fields.
 * To mark as taken, change `status` to "Reserved" or "Sold".
 */
export const PUPPIES: Puppy[] = [
  {
    slug: "citadel-prince",
    name: "Prince",
    litter: "Zeus × Hera — Spring Litter",
    sex: "Male",
    dob: "2026-04-18",
    color: "Black & Red",
    status: "Available",
    price: "On request",
    temperament:
      "Confident and outgoing with a calm, biddable core — early signs of a stable, people-focused dog suited to family life or structured work.",
    description:
      "Prince is the standout male of the Spring litter: rich pigment, heavy bone and a bold, curious temperament. Raised underfoot with daily handling, age-appropriate socialisation and early neurological stimulation, he is being prepared to step confidently into his new home.",
    sire: "Zeus vom Citadel",
    dam: "Hera vom Citadel",
    health: [
      "Hip & elbow screened parents",
      "Veterinary health check passed",
      "Dewormed on schedule",
      "Written health guarantee",
    ],
    vaccination: [
      "First core vaccination administered",
      "Deworming at 2, 4, 6 & 8 weeks",
      "Vaccination & deworming record provided",
    ],
    registration: "KSHA registration paperwork included",
    hero: {
      src: null,
      alt: "Prince, a black and red German Shepherd puppy, sitting alertly",
      label: "Prince — Available",
    },
    gallery: [
      { src: null, alt: "Prince the puppy sitting", label: "Sitting" },
      { src: null, alt: "Prince the puppy playing", label: "Play" },
      { src: null, alt: "Prince the puppy portrait", label: "Portrait" },
      { src: null, alt: "Prince the puppy exploring outdoors", label: "Outdoors" },
    ],
  },
];

export const AVAILABLE_PUPPIES = PUPPIES.filter((p) => p.status === "Available");

export function getPuppy(slug: string): Puppy | undefined {
  return PUPPIES.find((p) => p.slug === slug);
}
