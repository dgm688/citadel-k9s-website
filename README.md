# Citadel K9s — Official Website

The digital headquarters of **Citadel K9s**, a premium German Shepherd kennel in Kenya.
A fast, accessible, luxury-grade website built with Next.js.

> **Tagline:** Structure • Health • Temperament

---

## ✨ Highlights

- **Luxury dark theme** — black + official brand gold (`#0B0B0B` / `#C9A227`) with elegant serif display typography.
- **Live at [citadelk9s.com](https://citadelk9s.com)** — 22 indexed routes: Home, About, Our Dogs, Puppies, Gallery, Testimonials, Puppy Care, Blog (10 articles), FAQ, Contact, legal pages, 404.
- **Cinematic motion** — Framer Motion scroll reveals that fully respect `prefers-reduced-motion`.
- **Content-driven** — every dog, puppy, article, testimonial and FAQ lives in a typed data layer. No design files to touch to add content.
- **Real media** — genuine photography and 4K video of the actual dogs (gallery, cinematic hero clip, promo reel). Any slot without a photo yet renders an elegant branded placeholder.
- **SEO complete** — metadata, Open Graph, Twitter cards, canonical URLs, dynamic OG image, JSON-LD structured data (LocalBusiness, Product, FAQPage, BlogPosting, Breadcrumbs), `sitemap.xml` and `robots.txt`.
- **Accessible** — semantic HTML, skip link, keyboard-navigable menus, accordions and lightbox, ARIA labels, visible focus rings, WCAG-minded contrast.
- **WhatsApp-first** — forms and CTAs deep-link to WhatsApp with pre-filled messages.

---

## 🧱 Tech Stack

| Concern        | Choice                          |
| -------------- | ------------------------------- |
| Framework      | Next.js 15 (App Router)         |
| Language       | TypeScript                      |
| Styling        | Tailwind CSS 3                  |
| Animation      | Framer Motion 11                |
| Fonts          | Cormorant Garamond + Inter (`next/font`) |
| Images         | `next/image` (AVIF/WebP)        |

---

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000  (this project uses :3200 via launch.json)
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

> ⚠️ Do **not** run `npm run build` while `npm run dev` is running — they share the
> `.next` folder and it will corrupt the dev server. Stop dev first, or build in a
> clean checkout.

---

## 🔒 Truth Policy (V2)

This site publishes **only verifiable content**. No invented testimonials,
titles, certificates or statistics — ever. See `docs/V2-AUDIT.md` for the
full specification. Practical rules:

- Testimonial sections stay hidden until `src/lib/data/testimonials.ts` has
  genuine entries (each states its source).
- Dog profiles render only with `published: true`, and only documented
  credentials.
- The puppy entry in `src/lib/data/puppies.ts` has fields marked `EDIT` —
  fill them with the real puppy's details; null fields render an honest
  "confirmed on enquiry" state.
- The Transparency Ledger (`TRANSPARENCY_LEDGER` in `src/lib/site.ts`)
  accepts document links (PDFs in /public/docs) as they become available.

## 📥 Lead Capture (V2)

Forms validate, block spam (honeypot) and store to **Supabase**
(`citadel_leads` table, insert-only row-level security). If the network
fails, the visitor is routed to WhatsApp with their message pre-filled —
enquiries are never lost. View leads in the Supabase dashboard.

Email/Slack alerts: set `LEAD_WEBHOOK_URL` in `src/lib/leads.ts` to an
n8n/Make/Zapier webhook; every lead is mirrored there.

## 🌐 Domain (live)

Production runs on **https://citadelk9s.com** (bought via Vercel; apex + www
attached, www 308-redirects to apex). `NEXT_PUBLIC_SITE_URL` in Vercel prod
env drives canonicals, sitemap, robots and Open Graph — change the domain by
changing that one value.

Still to do when wanted — branded email: add the domain to Cloudflare, enable
**Email Routing**, create `hello@citadelk9s.com` → forward to
citadelk9s@gmail.com.

---

## 📁 Project Structure

```
src/
├── app/                      # App Router pages, routes & SEO files
│   ├── layout.tsx            # Root layout: fonts, metadata, header/footer
│   ├── page.tsx              # Home
│   ├── about/ our-dogs/ ...  # One folder per page
│   ├── opengraph-image.tsx   # Dynamic OG image
│   ├── robots.ts  sitemap.ts # SEO routes
│   └── globals.css           # Design system & Tailwind layers
├── components/
│   ├── layout/               # Header, Footer, WhatsApp FAB
│   ├── home/                 # Home-page sections
│   ├── sections/             # Reusable page sections (Hero, CTA, Legal)
│   ├── cards/                # Dog, Puppy, Blog, Testimonial cards
│   ├── forms/                # Contact & waiting-list forms
│   ├── gallery/ faq/         # Interactive widgets (lightbox, accordion)
│   └── ui/                   # Buttons, Icons, ImageFrame, Badge, etc.
└── lib/
    ├── site.ts               # ⭐ Brand, contact & navigation — edit here
    ├── seo.ts                # Metadata + JSON-LD helpers
    ├── types.ts              # Shared content types
    └── data/                 # ⭐ Content: dogs, puppies, blog, faq, testimonials, gallery
```

---

## 🛠️ Editing Content

Everything lives in **`src/lib/`** — no component edits required.

| To change…              | Edit…                              |
| ----------------------- | ---------------------------------- |
| Phone / email / socials | `src/lib/site.ts` (`CONTACT`)      |
| Navigation              | `src/lib/site.ts` (`NAV_PRIMARY` / `NAV_RESOURCES`) |
| Sires & dams            | `src/lib/data/dogs.ts`             |
| Available puppies       | `src/lib/data/puppies.ts`          |
| Blog articles           | `src/lib/data/blog.ts`             |
| Testimonials            | `src/lib/data/testimonials.ts`     |
| FAQ                     | `src/lib/data/faq.ts`              |
| Gallery                 | `src/lib/data/gallery.ts`          |

**Mark a puppy as taken:** set its `status` to `"Reserved"` or `"Sold"` in `puppies.ts`.

---

## 🖼️ Replacing Placeholder Images (important)

Most slots already use real photography. Any slot left as `src: null` renders
an elegant on-brand placeholder automatically. To point a slot at a photo:

1. Drop the file into `public/images/` (e.g. `public/images/dogs/dam-1.jpg`).
2. In the relevant data file, set the `src`:

   ```ts
   // Before
   hero: { src: null, alt: "…", label: "…" }
   // After
   hero: { src: "/images/dogs/dam-1.jpg", alt: "…" }
   ```

That's it — `ImageFrame` switches from placeholder to optimised `next/image`
automatically. Recommended hero aspect ratio is **4:5**; gallery tiles are square.

The social share image (`/opengraph-image`) is generated from text — no file
needed — but you can replace it by editing `src/app/opengraph-image.tsx`.

---

## 🔧 Current Status & Next Content Tasks

- **No puppies available right now** — `PUPPIES` is an empty array (honest
  empty state renders). When a litter is ready, copy `PUPPY_TEMPLATE` in
  `src/lib/data/puppies.ts` into the array and fill the real details.
- Publish real dog profiles: fill `src/lib/data/dogs.ts` and set
  `published: true` per dog.
- Add genuine testimonials to `src/lib/data/testimonials.ts` as families
  give permission — hidden sections reappear automatically.
- Leads arrive in Supabase (`citadel_leads`); check the dashboard.

---

## ☁️ Deployment

### Vercel (current setup)

Already live. Deploy updates from the repo root with:

```bash
vercel deploy --prod --yes
```

Prod env vars in use: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GOOGLE_VERIFICATION`.

### Any Node host

```bash
npm install
npm run build
npm run start    # serves on $PORT (default 3000)
```

### Note

This site is intended to run on a Next.js runtime (Vercel/Node). If you ever
need a fully static export, replace
`src/app/opengraph-image.tsx` with a static `public/og.png` first.

---

## ♿ Accessibility & ⚡ Performance Notes

- Respects `prefers-reduced-motion`, `prefers-color-scheme`.
- All interactive widgets are keyboard operable (menu, accordion, gallery lightbox).
- Fonts are self-hosted via `next/font` (no layout shift, no external requests).
- Security headers are set in `next.config.mjs`.

---

© Citadel K9s. Built to a world-class standard.
