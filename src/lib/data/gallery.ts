import type { GalleryItem } from "@/lib/types";

/**
 * Real photography and video of Citadel K9s dogs.
 * All media is genuine — the actual dogs, no stock or AI-generated imagery.
 */

export const GALLERY_CATEGORIES = [
  "All",
  "Adults",
  "Puppies",
  "Families",
  "Video",
] as const;

export const GALLERY: GalleryItem[] = [
  // ── Adults ──
  {
    type: "image",
    category: "Adults",
    media: {
      src: "/images/gallery/adult-stack.jpg",
      alt: "Citadel K9s long-coat black and red German Shepherd standing stacked in profile on grass",
    },
  },
  {
    type: "image",
    category: "Adults",
    media: {
      src: "/images/gallery/adult-portrait-2.jpg",
      alt: "Long-coat German Shepherd lying calmly on a tiled veranda",
    },
  },
  {
    type: "image",
    category: "Adults",
    media: {
      src: "/images/gallery/adult-portrait-1.jpg",
      alt: "Richly coated black and red German Shepherd resting in a green garden",
    },
  },
  {
    type: "image",
    category: "Adults",
    media: {
      src: "/images/gallery/adult-portrait-3.jpg",
      alt: "German Shepherd lying in the grass with an alert, friendly expression",
    },
  },
  {
    type: "image",
    category: "Adults",
    media: {
      src: "/images/gallery/adult-indoor.jpg",
      alt: "Long-coat German Shepherd relaxing indoors at home",
    },
  },
  {
    type: "image",
    category: "Adults",
    media: {
      src: "/images/gallery/adult-handler.jpg",
      alt: "Citadel K9s German Shepherd standing beside its handler",
    },
  },

  // ── Puppies / young dogs ──
  {
    type: "image",
    category: "Puppies",
    media: {
      src: "/images/gallery/young-sit-1.jpg",
      alt: "Young long-coat German Shepherd sitting attentively on a veranda",
    },
  },
  {
    type: "image",
    category: "Puppies",
    media: {
      src: "/images/gallery/young-sit-2.jpg",
      alt: "Young German Shepherd sitting proudly in front of potted plants",
    },
  },
  {
    type: "image",
    category: "Puppies",
    media: {
      src: "/images/gallery/young-front.jpg",
      alt: "German Shepherd puppy sitting front-on with ears up",
    },
  },

  // ── Families (published with permission) ──
  {
    type: "image",
    category: "Families",
    media: {
      src: "/images/family/handover.jpg",
      alt: "A family collecting their new Citadel K9s German Shepherd puppy",
      label: "Heading to a new home",
    },
  },

  // ── Video ──
  {
    type: "video",
    category: "Video",
    videoSrc: "/videos/reel.mp4",
    media: {
      src: "/images/gallery/vid-reel.jpg",
      alt: "Citadel K9s promotional reel featuring a long-coat German Shepherd puppy",
      label: "Our reel",
    },
  },
  {
    type: "video",
    category: "Video",
    videoSrc: "/videos/puppy-portrait.mp4",
    media: {
      src: "/images/gallery/vid-puppy-portrait.jpg",
      alt: "Video of a Citadel K9s German Shepherd puppy resting outdoors",
      label: "Puppy",
    },
  },
  {
    type: "video",
    category: "Video",
    videoSrc: "/videos/puppy-garden.mp4",
    media: {
      src: "/images/gallery/vid-puppy-garden.jpg",
      alt: "Video of a young German Shepherd sitting in a garden",
      label: "Young dog",
    },
  },
  {
    type: "video",
    category: "Video",
    videoSrc: "/videos/adult-stack.mp4",
    media: {
      src: "/images/gallery/vid-adult-stack.jpg",
      alt: "Video of a Citadel K9s adult German Shepherd standing on a lead",
      label: "Adult",
    },
  },
];
