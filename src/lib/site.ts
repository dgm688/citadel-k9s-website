/**
 * Single source of truth for brand, contact, navigation and trust content.
 * Update values here and they propagate across the entire site.
 */

/**
 * Production URL. When the custom domain (citadelk9s.com) is purchased,
 * set NEXT_PUBLIC_SITE_URL in Vercel (or change the fallback below) —
 * canonicals, sitemap, robots and Open Graph all follow automatically.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://citadel-k9s-website.vercel.app";

export const SITE = {
  name: "Citadel K9s",
  legalName: "Citadel K9s",
  tagline: "Structure • Health • Temperament",
  positioning: "Elite German Shepherds · Kenya",
  shortDescription:
    "Citadel K9s is a German Shepherd kennel in Kenya breeding for structure, health and temperament — with transparency at every step, from enquiry to lifetime support.",
  url: SITE_URL,
  locale: "en_KE",
  country: "Kenya",
  city: "Nairobi",
  region: "Kenya",
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

/** Build a pre-filled WhatsApp link. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Primary navigation — kept deliberately small to reduce cognitive load. */
export const NAV_PRIMARY: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Puppies", href: "/available-puppies" },
  { label: "Our Dogs", href: "/our-dogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Secondary content, grouped under a single "Resources" menu. */
export const NAV_RESOURCES: { label: string; href: string }[] = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Puppy Care", href: "/puppy-care" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
];

/** Flat list used by the footer, sitemap and 404 quick links. */
export const NAV_ALL = [...NAV_PRIMARY, ...NAV_RESOURCES];

export const LEGAL_NAV: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const BRAND_PILLARS = [
  {
    title: "Structure",
    description:
      "Sound conformation and correct movement — the foundation of a dog that stays athletic and comfortable for life.",
  },
  {
    title: "Health",
    description:
      "Health-first rearing: veterinary checks, scheduled deworming and vaccination, with records handed to every family.",
  },
  {
    title: "Temperament",
    description:
      "Confident, stable, biddable dogs — raised underfoot and socialised early, suited to family life and serious work.",
  },
] as const;

/**
 * Truthful trust commitments. Every entry is something a visitor can
 * verify in person or that we put in writing — no certifications are
 * claimed here that we cannot currently document.
 */
export const TRUST_COMMITMENTS = [
  {
    title: "Meet the parents",
    description:
      "Visit by appointment and meet your puppy's mother — temperament you can see for yourself, not just read about.",
  },
  {
    title: "Records handed over",
    description:
      "Every puppy leaves with its veterinary check, deworming and vaccination record. What we've done is written down.",
  },
  {
    title: "Raised underfoot",
    description:
      "Our puppies grow up handled daily inside a working household — not in an isolated run.",
  },
  {
    title: "One breeder, direct line",
    description:
      "You speak directly with the breeder on WhatsApp — before, during and long after the sale. No middlemen.",
  },
  {
    title: "Small, planned litters",
    description:
      "We breed a small number of carefully planned litters. Quality over volume, every time.",
  },
  {
    title: "Lifetime support",
    description:
      "Guidance on feeding, training and health for the life of your dog. Our families never lose our number.",
  },
] as const;

/**
 * Transparency ledger — documentation we publish as it becomes available.
 * To publish a document: set `href` to the file path (e.g. a PDF in
 * /public/docs) and it renders as a link instead of the pending state.
 */
export interface LedgerItem {
  title: string;
  note: string;
  href: string | null;
}

export const TRANSPARENCY_LEDGER: LedgerItem[] = [
  {
    title: "Vaccination & deworming records",
    note: "Provided with every puppy at collection; sample records shared with serious enquiries.",
    href: null,
  },
  {
    title: "Veterinary health checks",
    note: "Each puppy is examined by a licensed vet before going home.",
    href: null,
  },
  {
    title: "Pedigree & registration",
    note: "Registration paperwork accompanies each puppy; lineage discussed openly during enquiry.",
    href: null,
  },
  {
    title: "Health screening & DNA",
    note: "Published here as our documentation library grows.",
    href: null,
  },
  {
    title: "Kennel visits",
    note: "By appointment — see how our dogs live before you commit to anything.",
    href: null,
  },
] as const;
