/** Shared content types for the Citadel K9s content layer. */

/** A photo reference. `src: null` renders an elegant branded placeholder. */
export interface Media {
  src: string | null;
  alt: string;
  /** Short label shown on the placeholder until a real photo is supplied. */
  label?: string;
}

export interface Dog {
  slug: string;
  name: string;
  callName?: string;
  role: "Sire" | "Dam";
  titles?: string;
  sex: "Male" | "Female";
  dob?: string;
  color: string;
  description: string;
  bloodline: string;
  pedigree: { sire: string; dam: string; kennel?: string };
  health: string[];
  achievements: string[];
  hero: Media;
  gallery: Media[];
}

export interface Puppy {
  slug: string;
  name: string;
  litter: string;
  sex: "Male" | "Female";
  dob: string;
  color: string;
  status: "Available" | "Reserved" | "Sold";
  price?: string;
  temperament: string;
  description: string;
  sire: string;
  dam: string;
  health: string[];
  vaccination: string[];
  registration: string;
  hero: Media;
  gallery: Media[];
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  dog?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  author: string;
  cover: Media;
  /** Simple paragraph/heading content blocks for placeholder articles. */
  body: { type: "h2" | "p"; text: string }[];
}

export interface Faq {
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  type: "image" | "video";
  category: string;
  media: Media;
}
