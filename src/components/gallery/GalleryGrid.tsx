"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { GALLERY, GALLERY_CATEGORIES } from "@/lib/data/gallery";
import { Close, ArrowRight } from "@/components/ui/Icons";

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items =
    active === "All"
      ? GALLERY
      : GALLERY.filter((g) => g.category === active);

  // Keyboard controls for the lightbox
  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? i : (i - 1 + items.length) % items.length,
        );
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, items.length]);

  return (
    <div>
      {/* Filters */}
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="flex flex-wrap gap-2"
      >
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-5 py-2 text-sm tracking-wide transition-colors ${
              active === cat
                ? "border-gold bg-gold/10 text-gold"
                : "border-white/10 text-bone-muted hover:border-white/30 hover:text-bone"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.button
              key={`${item.media.label}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightbox(i)}
              className="group relative block overflow-hidden rounded-xl text-left focus-visible:outline-gold"
              aria-label={`Open ${item.media.alt}`}
            >
              <ImageFrame
                media={item.media}
                aspect="aspect-square"
                rounded="rounded-xl"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {item.type === "video" && (
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-ink/50 text-bone backdrop-blur">
                    ▶
                  </span>
                </span>
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && items[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={items[lightbox].media.alt}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-bone hover:border-gold hover:text-gold"
            >
              <Close />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) =>
                  i === null ? i : (i - 1 + items.length) % items.length,
                );
              }}
              aria-label="Previous"
              className="absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-bone hover:border-gold hover:text-gold sm:left-8"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {items[lightbox].type === "video" && items[lightbox].videoSrc ? (
                <video
                  key={items[lightbox].videoSrc}
                  src={items[lightbox].videoSrc}
                  poster={items[lightbox].media.src ?? undefined}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-h-[80vh] w-full rounded-2xl bg-ink"
                />
              ) : (
                <ImageFrame
                  media={items[lightbox].media}
                  aspect="aspect-[4/3]"
                  sizes="90vw"
                />
              )}
              <p className="mt-4 text-center text-sm text-bone-muted">
                {items[lightbox].media.alt}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) => (i === null ? i : (i + 1) % items.length));
              }}
              aria-label="Next"
              className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-bone hover:border-gold hover:text-gold sm:right-8"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
