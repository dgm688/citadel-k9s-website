# Citadel K9s — Official Website

The digital headquarters of **Citadel K9s**, a premium German Shepherd kennel in Kenya.
A fast, accessible, luxury-grade website built with Next.js.

> **Tagline:** Structure • Health • Temperament

---

## ✨ Highlights

- **Luxury dark theme** — black + gold (`#0B0B0B` / `#D4AF37`) with elegant serif display typography.
- **13 pages** — Home, About, Our Dogs (+ profiles), Available Puppies (+ profiles), Gallery, Testimonials, Puppy Care, Blog (+ articles), FAQ, Contact, Privacy, Terms, 404.
- **Cinematic motion** — Framer Motion scroll reveals that fully respect `prefers-reduced-motion`.
- **Content-driven** — every dog, puppy, article, testimonial and FAQ lives in a typed data layer. No design files to touch to add content.
- **Swap-in-one-line images** — placeholders render automatically until you add real photos (see below).
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
| Navigation              | `src/lib/site.ts` (`NAV`)          |
| Sires & dams            | `src/lib/data/dogs.ts`             |
| Available puppies       | `src/lib/data/puppies.ts`          |
| Blog articles           | `src/lib/data/blog.ts`             |
| Testimonials            | `src/lib/data/testimonials.ts`     |
| FAQ                     | `src/lib/data/faq.ts`              |
| Gallery                 | `src/lib/data/gallery.ts`          |

**Mark a puppy as taken:** set its `status` to `"Reserved"` or `"Sold"` in `puppies.ts`.

---

## 🖼️ Replacing Placeholder Images (important)

Until real photography is ready, every photo slot renders an elegant on-brand
placeholder automatically. To use a real photo:

1. Drop the file into `public/images/` (e.g. `public/images/dogs/zeus-1.jpg`).
2. In the relevant data file, set the `src`:

   ```ts
   // Before
   hero: { src: null, alt: "Zeus …", label: "Zeus — Sire" }
   // After
   hero: { src: "/images/dogs/zeus-1.jpg", alt: "Zeus …" }
   ```

That's it — `ImageFrame` switches from placeholder to optimised `next/image`
automatically. Recommended hero aspect ratio is **4:5**; gallery tiles are square.

The social share image (`/opengraph-image`) is generated from text — no file
needed — but you can replace it by editing `src/app/opengraph-image.tsx`.

---

## 🔧 Before You Deploy

1. **Set the real domain** in `src/lib/site.ts` → `SITE.url`. This drives canonical
   URLs, the sitemap and structured data.
2. Confirm contact details in `src/lib/site.ts` → `CONTACT`.
3. (Optional) Wire the newsletter and form submissions to a backend — see
   `src/components/ui/Newsletter.tsx` and `src/components/forms/*` (each has a
   clearly marked `TODO`). By default, forms open a pre-filled WhatsApp message.

---

## ☁️ Deployment

### Vercel (recommended)

1. Push this repo to GitHub/GitLab.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected.
3. Deploy. Add your custom domain in **Project → Settings → Domains**.

No environment variables are required for the base site.

### Any Node host

```bash
npm install
npm run build
npm run start    # serves on $PORT (default 3000)
```

### Static export

This site uses a dynamic (edge) OG image and is intended to run on a Next.js
runtime (Vercel/Node). If you need a fully static export, replace
`src/app/opengraph-image.tsx` with a static `public/og.png` first.

---

## ♿ Accessibility & ⚡ Performance Notes

- Respects `prefers-reduced-motion`, `prefers-color-scheme`.
- All interactive widgets are keyboard operable (menu, accordion, gallery lightbox).
- Fonts are self-hosted via `next/font` (no layout shift, no external requests).
- Security headers are set in `next.config.mjs`.

---

© Citadel K9s. Built to a world-class standard.
