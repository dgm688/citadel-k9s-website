import type { Dog } from "@/lib/types";

/**
 * Sires & dams. Replace `hero.src` / gallery `src` with real photo paths
 * (e.g. "/images/dogs/zeus-1.jpg") when professional photography is ready.
 */
export const DOGS: Dog[] = [
  {
    slug: "zeus-vom-citadel",
    name: "Zeus vom Citadel",
    callName: "Zeus",
    role: "Sire",
    titles: "IGP I • KSHA Registered",
    sex: "Male",
    dob: "2020-03-14",
    color: "Black & Red Saddle",
    description:
      "A commanding working-line male with exceptional bone, pigment and presence. Zeus combines a powerful, ground-covering gait with the clear head and stable nerves that define the Citadel programme. He passes on confidence, drive and an unmistakably noble silhouette.",
    bloodline: "West German Working Line",
    pedigree: {
      sire: "Falk vom Königsbach",
      dam: "Hera vom Adlerhorst",
      kennel: "vom Citadel",
    },
    health: [
      "Hips: 'a' normal (screened)",
      "Elbows: normal",
      "DM clear (carrier-free)",
      "Full veterinary health record",
    ],
    achievements: [
      "IGP I — protection, tracking & obedience",
      "Breed survey: V-rated conformation",
      "Sire of multiple titled offspring",
    ],
    hero: {
      src: null,
      alt: "Zeus vom Citadel, black and red German Shepherd sire, standing in profile",
      label: "Zeus — Sire",
    },
    gallery: [
      { src: null, alt: "Zeus standing stacked in profile", label: "Stack" },
      { src: null, alt: "Zeus in motion across a field", label: "Movement" },
      { src: null, alt: "Portrait of Zeus's head and expression", label: "Head study" },
    ],
  },
  {
    slug: "atlas-vom-citadel",
    name: "Atlas vom Citadel",
    callName: "Atlas",
    role: "Sire",
    titles: "Show & Working Prospect",
    sex: "Male",
    dob: "2021-07-02",
    color: "Solid Sable",
    description:
      "Atlas is a richly pigmented sable male with effortless reach and drive. Sociable and intensely focused, he is the embodiment of a versatile German Shepherd — equally at home as a devoted family guardian or a capable working partner.",
    bloodline: "West German Working Line",
    pedigree: {
      sire: "Dux vom Frankengold",
      dam: "Nala vom Citadel",
      kennel: "vom Citadel",
    },
    health: [
      "Hips: 'a' normal (screened)",
      "Elbows: normal",
      "DM clear",
      "Annual veterinary clearance",
    ],
    achievements: [
      "Junior class winner — regional show",
      "Certified temperament evaluation",
      "Active scent-work & obedience",
    ],
    hero: {
      src: null,
      alt: "Atlas vom Citadel, sable German Shepherd sire, alert and stacked",
      label: "Atlas — Sire",
    },
    gallery: [
      { src: null, alt: "Atlas stacked in profile", label: "Stack" },
      { src: null, alt: "Atlas trotting", label: "Movement" },
      { src: null, alt: "Atlas head portrait", label: "Head study" },
    ],
  },
  {
    slug: "hera-vom-citadel",
    name: "Hera vom Citadel",
    callName: "Hera",
    role: "Dam",
    titles: "Foundation Dam • KSHA Registered",
    sex: "Female",
    dob: "2020-09-21",
    color: "Black & Tan",
    description:
      "Hera is the elegant foundation dam of the Citadel programme — feminine, sound and exceptionally maternal. She produces structurally correct, confident puppies with the gentle stability that makes a German Shepherd a trustworthy companion for life.",
    bloodline: "West German Show Line",
    pedigree: {
      sire: "Quanto vom Hasenborn",
      dam: "Bella vom Lindenhof",
      kennel: "vom Citadel",
    },
    health: [
      "Hips: 'a' normal (screened)",
      "Elbows: normal",
      "DM clear",
      "Full reproductive & wellness panel",
    ],
    achievements: [
      "V-rated conformation",
      "Excellent maternal scores",
      "Dam of the current Citadel litter",
    ],
    hero: {
      src: null,
      alt: "Hera vom Citadel, black and tan German Shepherd dam, standing gracefully",
      label: "Hera — Dam",
    },
    gallery: [
      { src: null, alt: "Hera stacked in profile", label: "Stack" },
      { src: null, alt: "Hera with her litter", label: "With litter" },
      { src: null, alt: "Hera head portrait", label: "Head study" },
    ],
  },
  {
    slug: "nala-vom-citadel",
    name: "Nala vom Citadel",
    callName: "Nala",
    role: "Dam",
    titles: "Working Dam",
    sex: "Female",
    dob: "2021-02-11",
    color: "Dark Sable",
    description:
      "Nala is a dark, athletic sable dam with sharp focus and a deeply affectionate nature. She brings working drive and resilience to the programme while remaining soft and devoted in the home — a true dual-purpose German Shepherd.",
    bloodline: "West German Working Line",
    pedigree: {
      sire: "Orry vom Haus Antverpa",
      dam: "Greta vom Citadel",
      kennel: "vom Citadel",
    },
    health: [
      "Hips: 'a' normal (screened)",
      "Elbows: normal",
      "DM clear",
      "Full wellness panel",
    ],
    achievements: [
      "Obedience & tracking foundation",
      "Stable temperament certification",
      "Producing strong working prospects",
    ],
    hero: {
      src: null,
      alt: "Nala vom Citadel, dark sable German Shepherd dam, alert in a field",
      label: "Nala — Dam",
    },
    gallery: [
      { src: null, alt: "Nala stacked in profile", label: "Stack" },
      { src: null, alt: "Nala working a track", label: "Working" },
      { src: null, alt: "Nala head portrait", label: "Head study" },
    ],
  },
];

export const SIRES = DOGS.filter((d) => d.role === "Sire");
export const DAMS = DOGS.filter((d) => d.role === "Dam");

export function getDog(slug: string): Dog | undefined {
  return DOGS.find((d) => d.slug === slug);
}
