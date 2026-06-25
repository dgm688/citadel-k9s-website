/**
 * Single source of truth for brand, contact, and navigation data.
 * Update values here and they propagate across the entire site
 * (header, footer, contact page, structured data, metadata).
 */

export const SITE = {
  name: "Citadel K9s",
  legalName: "Citadel K9s",
  tagline: "Structure • Health • Temperament",
  shortDescription:
    "A premium German Shepherd kennel in Kenya, breeding to uncompromising standards of structure, health and temperament.",
  // Update to the real production domain before deploying.
  url: "https://www.citadelk9s.com",
  locale: "en_KE",
  country: "Kenya",
  city: "Nairobi",
  region: "Kenya",
  foundingYear: 2019,
  breed: "German Shepherd Dog",
} as const;

export const CONTACT = {
  phoneDisplay: "+254 726 588 688",
  phoneE164: "+254726588688",
  whatsappDisplay: "+254 726 588 688",
  // wa.me requires the number with no plus sign or spaces.
  whatsappNumber: "254726588688",
  email: "citadelk9s@gmail.com",
  instagram:
    "https://www.instagram.com/citadel_k9s?igsh=d2FsaHZ2OGptbG0=",
  instagramHandle: "@citadel_k9s",
  maps: "https://share.google/gmp7Lknw03fypkSdn",
} as const;

/**
 * Build a pre-filled WhatsApp link.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Dogs", href: "/our-dogs" },
  { label: "Available Puppies", href: "/available-puppies" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Puppy Care", href: "/puppy-care" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_NAV: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const BRAND_PILLARS = [
  {
    title: "Structure",
    description:
      "Sound conformation and correct angulation bred for a lifetime of effortless, athletic movement.",
  },
  {
    title: "Health",
    description:
      "Hip and elbow screened lines, full vaccination and a written health guarantee on every puppy.",
  },
  {
    title: "Temperament",
    description:
      "Confident, stable, biddable dogs — equally suited to family life and serious working roles.",
  },
] as const;
