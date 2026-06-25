import type { GalleryItem } from "@/lib/types";

export const GALLERY_CATEGORIES = [
  "All",
  "Adults",
  "Puppies",
  "Working",
  "Candid",
] as const;

/**
 * Gallery items. Replace `media.src` with real image/video paths.
 * Videos can point to an MP4 path or a poster image for now.
 */
export const GALLERY: GalleryItem[] = [
  { type: "image", category: "Adults", media: { src: null, alt: "Adult German Shepherd stacked in profile", label: "Adult — Profile" } },
  { type: "image", category: "Puppies", media: { src: null, alt: "Litter of German Shepherd puppies", label: "Litter" } },
  { type: "image", category: "Working", media: { src: null, alt: "German Shepherd in protection work", label: "Working" } },
  { type: "image", category: "Candid", media: { src: null, alt: "German Shepherd relaxing at home", label: "Candid" } },
  { type: "image", category: "Adults", media: { src: null, alt: "Adult German Shepherd head study", label: "Head Study" } },
  { type: "image", category: "Puppies", media: { src: null, alt: "Single German Shepherd puppy portrait", label: "Puppy" } },
  { type: "video", category: "Working", media: { src: null, alt: "Video of German Shepherd obedience routine", label: "Obedience — Video" } },
  { type: "image", category: "Candid", media: { src: null, alt: "German Shepherd running outdoors", label: "Outdoors" } },
  { type: "image", category: "Adults", media: { src: null, alt: "Sable German Shepherd in motion", label: "Movement" } },
  { type: "video", category: "Puppies", media: { src: null, alt: "Video of puppies playing", label: "Puppy Play — Video" } },
  { type: "image", category: "Working", media: { src: null, alt: "German Shepherd tracking", label: "Tracking" } },
  { type: "image", category: "Candid", media: { src: null, alt: "German Shepherd with family", label: "Family" } },
];
