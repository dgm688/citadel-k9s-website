# Citadel K9s — Getting Found on Google

> **Status (15 Jul 2026):** Search Console verified · sitemap submitted (22
> URLs) · homepage + key pages crawled by Googlebot · indexing requested ·
> Business Profile verified, linked to the site both ways, photos uploaded.
> Remaining: genuine reviews after handovers; Instagram bio link (mobile app).

Honest framing: ranking has two very different timelines.

- **Your brand ("Citadel K9s")** — days to a couple of weeks once Google indexes the site.
- **Competitive terms ("German Shepherd puppies Kenya", "dog breeder Kenya")** —
  months, and won mostly **off** the website. The site is now technically
  excellent for these terms; the rest is Google Business Profile, reviews and
  links. No code alone ranks a brand-new domain for competitive terms quickly.

---

## ✅ Already done in the site (technical / on-page SEO)

- Fast, mobile-first Next.js site, clean HTML, real photography (not stock).
- Canonical URLs, Open Graph + Twitter cards, `robots.txt`, `sitemap.xml`.
- Rich **LocalBusiness** structured data — name, geo (Nairobi), area served
  (Kenya + Nairobi), offer of German Shepherd puppies, logo, phone, email,
  Instagram. Plus Product, FAQ and Breadcrumb schema.
- Keyword-tuned titles/descriptions on the pages that matter:
  - Home → "Elite German Shepherds in Kenya"
  - Puppies → "German Shepherd Puppies for Sale in Kenya"
  - Our Dogs → "Our German Shepherd Dogs"
  - Contact → "Contact a German Shepherd Breeder in Kenya"
- Truthful, keyword-relevant blog articles (price factors, avoiding scams,
  working vs show line, coat types).
- Search Console verification hook wired in (see below).

---

## 🔴 DO THIS FIRST — Google Search Console (gets you indexed)

Without this, Google may take a long time to even find you.

1. Go to **https://search.google.com/search-console** and sign in with the
   business Google account.
2. Add a property → choose **URL prefix** → enter `https://citadelk9s.com`.
3. Verification — easiest is the **HTML tag** method. Google shows a tag like
   `<meta name="google-site-verification" content="ABC123..." />`.
   Send me the `content="..."` value and I'll deploy it (or you set
   `NEXT_PUBLIC_GOOGLE_VERIFICATION` in Vercel → Settings → Environment
   Variables and redeploy).
   - Alternative: **DNS TXT** method — the domain is on Vercel DNS, so you (or I)
     can add the TXT record in Vercel → Domains.
4. Once verified: **Sitemaps** → submit `sitemap.xml`.
5. **URL Inspection** → paste `https://citadelk9s.com` → **Request indexing**.
   Repeat for the Puppies and Contact pages.

Also add the site to **Bing Webmaster Tools** (https://www.bing.com/webmasters) —
you can import directly from Search Console in one click.

---

## 🔴 DO THIS SECOND — Google Business Profile (wins "dog breeder Kenya")

This is the single biggest lever for local/commercial searches and the Google
Maps "local pack". Code cannot replace it.

1. Go to **https://business.google.com** and create a profile for **Citadel K9s**.
2. Category: **Dog breeder** (add "Pet breeder", "Dog day care" if relevant).
3. Since you do visits by appointment, set it up as a **service-area business**
   (serve "Nairobi" / "Kenya") — you do **not** have to publish a home address.
4. Add the phone `+254 726 588 688`, the website `https://citadelk9s.com`, hours
   ("by appointment"), and **upload your real dog photos** (the more the better).
5. **Get reviews.** After each happy handover, send the family your Google review
   link. Reviews are one of the strongest local ranking signals — 5–10 genuine
   reviews meaningfully moves you up. (Never buy or fake reviews.)

**Keep NAP identical everywhere** (Name, Address/Area, Phone): the site footer,
Google Business Profile, Instagram and any directory must match exactly.

---

## 🟡 DO THIS THIRD — links & citations (builds authority)

- Put `https://citadelk9s.com` in your **Instagram bio** (you already link
  Instagram from the site — make it mutual).
- List the business in Kenyan directories: **BrighterMonday, PigiaMe, Jiji.ke,
  Yellow Pages Kenya, Google Maps** (via GBP above).
- Post on Instagram consistently and link back to the site; mention "Citadel
  K9s, Kenya" in captions.
- If any Kenyan pet blog, vet, or trainer will link to you, that's gold.

---

## 🟢 ONGOING — content & patience

- Publish a new honest article every few weeks targeting a real question
  (e.g. "German Shepherd price in Nairobi 2026", "Is a German Shepherd good for
  a Kenyan home?"). Add them in `src/lib/data/blog.ts`.
- When you have a puppy available, the Puppies page (with real photos, price on
  enquiry, Product schema) is your money page — keep it current.
- Re-request indexing in Search Console whenever you add major content.

---

## Realistic timeline

| When | What to expect |
|------|----------------|
| Days | Indexed; searching "Citadel K9s" shows your site. |
| 2–6 weeks | Ranking well for your brand + long-tail terms ("Citadel K9s German Shepherd"). |
| 1–3 months | Google Business Profile + reviews start surfacing you in the local pack. |
| 3–6 months+ | Competitive terms ("German Shepherd puppies Kenya") — depends on reviews, links and consistency. |

The website is ready. The two things only **you** can start — **Search Console**
and **Google Business Profile** — are what unlock the rest.
