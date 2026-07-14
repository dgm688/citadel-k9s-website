/** Shared content types for the Citadel K9s content layer. */

/** A photo reference. `src: null` renders an elegant branded placeholder. */
export interface Media {
  src: string | null;
  alt: string;
  /** Short label shown on the placeholder until a real photo is supplied. */
  label?: string;
}

/**
 * A breeding dog. Only `published: true` profiles appear on the site —
 * keep a profile unpublished until its real details (and ideally
 * photography) are ready. Never publish credentials that cannot be
 * documented.
 */
export interface Dog {
  slug: string;
  published: boolean;
  name: string;
  callName?: string;
  role: "Sire" | "Dam";
  /** Only list titles that can be evidenced with paperwork. */
  titles?: string;
  sex: "Male" | "Female";
  dob?: string;
  color?: string;
  description: string;
  bloodline?: string;
  pedigree?: { sire: string; dam: string; kennel?: string };
  health?: string[];
  achievements?: string[];
  hero: Media;
  gallery: Media[];
}

/**
 * An available puppy. Fields set to null render an honest
 * "confirmed on enquiry" state instead of an invented value.
 */
export interface Puppy {
  slug: string;
  name: string;
  litter?: string;
  sex: "Male" | "Female";
  dob: string | null;
  color: string | null;
  status: "Available" | "Reserved" | "Sold";
  price?: string;
  temperament: string;
  description: string;
  sire: string | null;
  dam: string | null;
  health: string[];
  vaccination: string[];
  registration: string;
  hero: Media;
  gallery: Media[];
}

/**
 * A genuine customer testimonial. NEVER add entries that are not real —
 * the entire testimonial system stays hidden while this list is empty.
 */
export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating?: number;
  dog?: string;
  /** Where the review came from — displayed for credibility. */
  source: "whatsapp" | "google" | "in-person";
  /** Optional proof media (photo/video of the dog or review screenshot). */
  media?: Media;
  videoUrl?: string;
  date?: string;
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
  /** Simple paragraph/heading content blocks. */
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
  /** For video items: the web-optimized MP4 path (poster lives in `media.src`). */
  videoSrc?: string;
}
