import type { MetadataRoute } from "next";
import { SITE, NAV_ALL, LEGAL_NAV } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/data/blog";
import { PUBLISHED_DOGS } from "@/lib/data/dogs";
import { PUPPIES } from "@/lib/data/puppies";

// Required so the route can be emitted during static export.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [...NAV_ALL, ...LEGAL_NAV].map((item) => ({
    url: new URL(item.href, SITE.url).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.7,
  }));

  const dogPages = PUBLISHED_DOGS.map((d) => ({
    url: new URL(`/our-dogs/${d.slug}`, SITE.url).toString(),
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const puppyPages = PUPPIES.map((p) => ({
    url: new URL(`/available-puppies/${p.slug}`, SITE.url).toString(),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages = BLOG_POSTS.map((p) => ({
    url: new URL(`/blog/${p.slug}`, SITE.url).toString(),
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...dogPages, ...puppyPages, ...blogPages];
}
