# Citadel K9s — V2 Audit & Implementation Plan

Audited: repository `main` @ `23911c6` **and** live production
(https://dgm688.github.io/citadel-k9s-website/). Repo and live are in sync,
so one audit covers both.

Guiding question for every decision:
**"Would this make a cautious Kenyan buyer trust Citadel K9s enough to start
a WhatsApp conversation?"**

---

## CRITICAL — credibility & correctness (all must be fixed)

| # | Finding | Why it matters | Fix |
|---|---------|----------------|-----|
| C1 | **Fabricated testimonials live in production** — four invented reviewers incl. a fake veterinarian endorsement ("Dr. Aisha O."), fake "5.0 average / 100% would recommend" stats. | The single fastest way to destroy trust. A cautious buyer who senses one fake review distrusts everything else. Also unethical. | Remove all. Testimonial system becomes data-driven and renders **nothing** until genuine reviews exist. Honest "verified reviews only" empty state. |
| C2 | **Invented dog credentials** — titles (IGP I, "V-rated"), achievement lists, fake pedigree ancestors, unverified health-screening claims on four fictional dog profiles. | Fabricated championships are the classic puppy-scam pattern the buyer is trained to detect. | Strip every unverifiable claim. Our Dogs becomes an honest "profiles in preparation" page whose structure accepts real data (pedigree, health, photos) as it becomes available. |
| C3 | **Invented statistics** — "7+ years" (no founding year was ever provided), "100% health-screened", "24/7", animated counters that also render `0` before hydration. | Unprovable numbers + visible zeros = double credibility hit. | Replace the stats band with a truthful **"Why families trust Citadel K9s"** section (commitments, not certifications). Counters removed entirely → SSR-zero bug eliminated. |
| C4 | **Comparison table claims certifications** (hip/elbow screening, written guarantee) that cannot currently be evidenced. | Claims without documents read as marketing noise to a cautious buyer. | Reframe every row as a verifiable commitment: meet the parents, visit by appointment, vaccination records handed over, direct breeder line, small planned litters, lifetime support. |
| C5 | **Placeholder logo everywhere.** The official brand identity now exists. | Brand consistency is a trust signal; mismatched marks look improvised. | New logo across header, footer, favicons (.ico/.svg/PNG set), apple-touch icon, manifest, social avatar, placeholders, 404/loading. |
| C6 | **Forms don't persist enquiries** — they only deep-link to WhatsApp; if the visitor closes the tab, the lead is lost. | "Never lose enquiries" is a business requirement. | Production lead capture: validation → honeypot spam trap → **Supabase** (`citadel_leads`, insert-only RLS) → success state, with WhatsApp fallback if the network fails. n8n/email hook prepared via a single webhook constant. |
| C7 | **Wrong canonical domain** — site claims `www.citadelk9s.com` (not owned); live URL is GitHub Pages. Canonicals, OG URLs and sitemap all point at a domain that 404s. | Search engines and buyers both lose. | Single-value config: `SITE_URL` constant overridable by `NEXT_PUBLIC_SITE_URL`. Future domain switch = one line. |
| C8 | **Production on GitHub Pages** — static export loses image optimization, security headers, and confuses canonical identity. | Directive: Vercel is production. | Deploy to Vercel; decommission the Pages workflow and site; remove static-export config complexity. |

## HIGH

| # | Finding | Fix |
|---|---------|-----|
| H1 | Navigation overload: 10 top-level items. | Desktop: Home, Puppies, Our Dogs, About, Contact + **Resources** dropdown (Blog, FAQ, Puppy Care, Gallery, Testimonials). Grouped mobile menu. |
| H2 | Missing trust-architecture sections. | "Why families trust" pillars + **Transparency ledger** — labelled slots for health records, vaccination logs, pedigree, DNA, vet checks that gracefully accept future documents. |
| H3 | FAQ ignores the scam-wary buyer's real questions. | Add truthful entries: Can I visit? Video call first? How do I verify you're legitimate? What documents come with the puppy? |
| H4 | Blog missing local-SEO content. | Add truthful educational articles: GSD price factors in Kenya, avoiding puppy scams, working vs show line, long coat vs stock coat. |
| H5 | Hero makes a grand continental claim ("The standard … in Africa"). | Align with the brand: "Elite German Shepherds, raised in Kenya" — locally credible, matches the new logo tagline. |
| H6 | Obsolete `keywords` metadata; OG/canonical inconsistencies. | Remove keywords; env-driven metadataBase; verify JSON-LD (LocalBusiness, Product, FAQ, Breadcrumb) against truth rules. |

## MEDIUM

- Typography: tighten hero scale on small screens, consistent measure (~65ch), tracking audit.
- Focus-visible states on filter pills, accordion, dropdown.
- NAP consistency block in footer (name, phone, service area) to prepare Google Business Profile.
- `next.config` static-export branch removed with Pages (simpler config = fewer failure modes).

## LOW

- Button press micro-interactions; branded `loading.tsx`; README V2 refresh.

---

## Explicitly deferred (honest constraints)

- **n8n → email notification**: no n8n instance is connected. The form pipeline
  posts to Supabase and exposes `LEAD_WEBHOOK_URL` in `src/lib/leads.ts`; point
  it at an n8n webhook to enable email alerts without code changes.
- **hello@citadelk9s.com via Cloudflare Email Routing**: requires owning
  `citadelk9s.com` first. Steps documented in README; nothing to configure yet.
- **Custom domain**: production runs on the Vercel URL until purchase; the
  switch is `NEXT_PUBLIC_SITE_URL` (one value).
