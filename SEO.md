# Citadel K9s — SEO Playbook

Living reference for how search works on this site and how to grow it. Keep it
truthful: never add content, claims, prices, reviews or locations that aren't
real.

## Stack & architecture
- **Next.js 15 App Router**, React 19, TypeScript, Tailwind v3.
- Content lives in `src/lib/data/*` (blog, dogs, puppies, faq, gallery,
  testimonials) and `src/lib/site.ts` (brand, contact, nav). Editing data =
  editing the site; no design changes needed to publish.
- SEO utilities: `src/lib/seo.ts` — `pageMeta()`, `organizationJsonLd()`,
  `websiteJsonLd()`, `breadcrumbJsonLd()`, `faqJsonLd()`.
- Canonical domain: `https://citadelk9s.com` (from `NEXT_PUBLIC_SITE_URL`).

## Metadata
- Every route sets metadata via `pageMeta({ title, description, path })`, which
  produces title (with the `%s · Citadel K9s` template from `layout.tsx`),
  meta description, canonical (`alternates.canonical`), Open Graph and Twitter
  tags. Default OG image is a real dog photo.
- `<html lang="en-KE">`. Titles are keyword + location led, unique per page.

## Technical indexing
- `src/app/sitemap.ts` — dynamic sitemap: static nav pages, commercial landing
  pages (priority 0.9), published dogs, puppies, and all blog posts (with real
  `lastModified` = post date). New blog posts / dogs / puppies are included
  automatically.
- `src/app/robots.ts` — allows all, points to `/sitemap.xml`.
- `next.config.mjs` — www→apex 301, security headers, AVIF/WebP images, and
  per-page 301s for consolidated URLs.
- Real 404s: `blog/[slug]`, `our-dogs/[slug]`, `available-puppies/[slug]` use
  `dynamicParams = false` so unknown slugs 404 rather than soft-200.

## Structured data (JSON-LD)
- Site-wide (in `layout.tsx`): **LocalBusiness** (`#organization` — NAP, geo,
  hours, `hasMap`, `areaServed` [Kenya, Tanzania, Nairobi, East Africa],
  `memberOf` EAKC) + **WebSite**.
- Per page: **BreadcrumbList** on every inner page; **FAQPage** on `/faq` and
  the commercial landing pages (visible FAQs only); **BlogPosting** on posts;
  **VideoObject** on `/gallery` (uploadDate is full ISO 8601 with `+03:00`);
  **Product/Offer** on puppy detail pages — emitted **only** when a real price +
  image exist (never faked).

## Commercial landing pages
Dedicated, high-intent pages (registered in `COMMERCIAL_PAGES` in `site.ts`,
linked from the footer, in the sitemap at priority 0.9):
- `/german-shepherd-puppies-kenya` — flagship buyer hub (availability, process,
  what's included, FAQ).
- `/german-shepherd-breeder-kenya` — breeder trust / E-E-A-T (philosophy, health
  testing, EAKC, raising).
- `/german-shepherd-puppies-nairobi` — local intent (Ruaka/Kiambu location,
  visiting, transport). The older `/blog/german-shepherd-puppies-nairobi` post
  was consolidated into this page via a 301 (avoids cannibalisation).

## Internal linking
- Blog posts form a topic cluster and link to money pages
  (`/available-puppies`, `/our-dogs`, the commercial pages) and to each other
  with natural, varied anchor text (parsed from `[label](/path)` via
  `renderRich` in `blog/[slug]/page.tsx`).
- Commercial pages cross-link to each other, to blog guides, and to money pages.
- Footer surfaces the commercial pages site-wide ("Popular searches").

## Content system
- Add a blog post: append an object to `BLOG_POSTS` in `src/lib/data/blog.ts`
  (`slug, title, metaTitle?, excerpt, category, date, readingTime, author,
  cover{src,alt,label}, body[]`). Body blocks: `h2`, `p`, `note`, `table`.
  Inline links use markdown `[label](/path)` — internal paths render as
  `next/link`. It's auto-added to the sitemap and blog index.
- Standard: genuine, useful, Kenya-relevant, human-first. No fabricated stats,
  quotes, reviews, or medical claims. Health content recommends a vet.

## Google Search Console — recurring actions (owner)
1. Property: `https://citadelk9s.com`. Verified via `NEXT_PUBLIC_GOOGLE_VERIFICATION`.
2. Submit `sitemap.xml` (Indexing → Sitemaps) — resubmit after big changes.
3. New/updated URLs → URL Inspection → **Request Indexing**.
4. Monitor Performance (queries, position, CTR), Pages (indexing), Videos,
   Product snippets, Core Web Vitals.
5. Submitting a sitemap does **not** guarantee indexing — it's a request.

## Google Business Profile
Keep NAP identical to the site (name, Ruaka/Kiambu, phone, WhatsApp, hours).
Post weekly, add real photos, and — the #1 ranking lever — collect genuine
Google reviews. Never fabricate or incentivise reviews.

## Off-page (only the owner can do these — the real growth levers)
Reviews (6 → 25+), EAKC breeder-directory listing, directory citations
(Jiji, PigiaMe, BrighterMonday, Bing Places), social growth, YouTube. On-page is
effectively maxed; ranking for competitive money terms now depends on these.

## Ongoing checklist
- Publish genuinely useful content on real buyer questions.
- Every new article: one primary intent, link to ≥1 money page + 2–4 supporting
  articles, real imagery, complete metadata, added to sitemap (automatic).
- Keep claims truthful and verifiable.
- Re-check Search Console monthly.
