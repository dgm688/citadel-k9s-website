import type { Metadata } from "next";
import { SITE, CONTACT } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  path?: string;
  /** Optional explicit OG image. Omit to use the generated default. */
  image?: string;
}

/**
 * Build consistent, SEO-complete metadata for any page.
 * When no image is supplied, Next's file-based opengraph-image is used.
 */
export function pageMeta({
  title,
  description,
  path = "/",
  image,
}: PageMetaInput): Metadata {
  const url = new URL(path, SITE.url).toString();
  // `title` stays bare so the root layout's title template appends the brand
  // exactly once. Open Graph/Twitter ignore the template, so use the full form.
  const fullTitle = `${title} · ${SITE.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      locale: SITE.locale,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: SITE.name }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/** Organization / LocalBusiness structured data for the whole site. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    description: SITE.shortDescription,
    url: SITE.url,
    telephone: CONTACT.phoneE164,
    email: CONTACT.email,
    slogan: SITE.tagline,
    image: `${SITE.url}/og.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressCountry: "KE",
    },
    areaServed: SITE.country,
    sameAs: [CONTACT.instagram],
    knowsAbout: ["German Shepherd Dogs", "Dog breeding", "Puppy care"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).toString(),
    })),
  };
}
