import type { Dog } from "@/lib/types";

/**
 * Breeding dog profiles.
 *
 * TRUTH RULE: nothing appears on the site unless `published: true`,
 * and nothing should be published that cannot be evidenced — no
 * invented titles, pedigrees, or health claims. The template below
 * shows the full structure a real profile supports.
 *
 * To publish a real dog:
 *  1. Duplicate DOG_TEMPLATE and fill in the real details.
 *  2. Add photo paths (drop files in /public/images/dogs/).
 *  3. Set `published: true`.
 *
 * The Our Dogs page shows an honest "profiles in preparation" state
 * while this list has no published entries.
 */
export const DOGS: Dog[] = [
  {
    slug: "desouza-wren",
    published: true,
    name: "Desouza Wren",
    callName: "Queen",
    role: "Dam",
    sex: "Female",
    dob: "2024-02-10",
    color: "Long-coat black & tan",
    description:
      "Queen — registered as Desouza Wren — is a long-coat black-and-tan German Shepherd from Serbian and German lines. Calm and confident, and wonderful with children, she has exactly the steady, trustworthy temperament we want at the heart of our breeding. EAKC registered and hip scored, she passes her balance of sound structure and easy nature on to her puppies.",
    bloodline: "Serbian & German lines",
    pedigree: {
      sire: "Gishka Team Carrera",
      dam: "Didi vom Zwingerwalder",
    },
    health: [
      "Hip scored under the EAKC / KESCAVA Hip Dysplasia Scheme",
      "Microchipped",
      "EAKC registered with full pedigree (Class 1)",
    ],
    hero: {
      src: "/images/dogs/desouza-wren.jpg",
      alt: "Desouza Wren (Queen), a long-coat black and tan German Shepherd dam",
    },
    gallery: [
      {
        src: "/images/dogs/desouza-wren-full.jpg",
        alt: "Queen, a Citadel K9s German Shepherd dam, relaxing in the garden",
      },
    ],
  },

  // ── TEMPLATE — copy, fill with real data, set published: true ──
  {
    slug: "example-dog",
    published: false,
    name: "Registered Name",
    callName: "Call Name",
    role: "Dam",
    sex: "Female",
    dob: undefined, // "2021-05-10"
    color: undefined, // "Black & Tan"
    description:
      "Two or three honest sentences about this dog: temperament in the home, how she works, what she passes to her puppies.",
    bloodline: undefined, // only if documented
    pedigree: undefined, // { sire: "...", dam: "..." } — only from real papers
    health: undefined, // ["Vaccination record up to date", ...] — only what exists
    achievements: undefined, // only titles you hold certificates for
    hero: { src: null, alt: "German Shepherd dam standing in profile" },
    gallery: [],
  },
];

export const PUBLISHED_DOGS = DOGS.filter((d) => d.published);
export const SIRES = PUBLISHED_DOGS.filter((d) => d.role === "Sire");
export const DAMS = PUBLISHED_DOGS.filter((d) => d.role === "Dam");
export const HAS_DOGS = PUBLISHED_DOGS.length > 0;

export function getDog(slug: string): Dog | undefined {
  return PUBLISHED_DOGS.find((d) => d.slug === slug);
}
