"use client";

import { useMemo, useState } from "react";
import { Accordion } from "./Accordion";
import { FAQS, FAQ_CATEGORIES } from "@/lib/data/faq";

/**
 * Searchable FAQ. Filters questions and answers live; groups results by
 * category and shows a graceful empty state.
 */
export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      const matchesCategory = category === "All" || f.category === category;
      const matchesQuery =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const categories = ["All", ...FAQ_CATEGORIES];
  const grouped = FAQ_CATEGORIES.map((cat) => ({
    cat,
    items: filtered.filter((f) => f.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="flex flex-col gap-10">
      {/* Search + filters */}
      <div className="flex flex-col gap-5">
        <div className="relative">
          <label htmlFor="faq-search" className="sr-only">
            Search questions
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            className="w-full rounded-full border border-white/10 bg-ink-800 px-6 py-4 pl-12 text-sm text-bone placeholder:text-bone-faint focus:border-gold/50"
          />
          <svg
            aria-hidden
            className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-bone-faint"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" />
          </svg>
        </div>

        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={category === cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wide2 transition-colors ${
                category === cat
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-white/10 text-bone-muted hover:border-white/30 hover:text-bone"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {grouped.length > 0 ? (
        <div className="flex flex-col gap-12">
          {grouped.map((g) => (
            <div key={g.cat}>
              <h2 className="eyebrow mb-2">{g.cat}</h2>
              <Accordion items={g.items} />
            </div>
          ))}
        </div>
      ) : (
        <div className="panel p-10 text-center">
          <p className="text-lg font-light text-bone">No matching questions.</p>
          <p className="mt-2 text-sm text-bone-muted">
            Try a different search, or reach out — we&apos;re happy to help
            directly.
          </p>
        </div>
      )}
    </div>
  );
}
