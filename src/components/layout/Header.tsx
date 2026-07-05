"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_PRIMARY, NAV_RESOURCES, whatsappLink } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Menu, Close, WhatsApp, ChevronDown } from "@/components/ui/Icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + Escape-to-close for the mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the resources dropdown on outside click / Escape.
  useEffect(() => {
    if (!resourcesOpen) return;
    function onDocClick(e: MouseEvent) {
      if (!resourcesRef.current?.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setResourcesOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [resourcesOpen]);

  // Close menus on route change.
  useEffect(() => {
    setOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const resourcesActive = NAV_RESOURCES.some((r) => isActive(r.href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-ink/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Logo variant="horizontal" priority className="shrink-0" />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm">
            {NAV_PRIMARY.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`link-underline tracking-wide transition-colors ${
                    isActive(item.href)
                      ? "text-gold after:w-full"
                      : "text-bone-muted hover:text-bone"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Resources dropdown */}
            <li ref={resourcesRef} className="relative">
              <button
                type="button"
                onClick={() => setResourcesOpen((v) => !v)}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 tracking-wide transition-colors ${
                  resourcesActive || resourcesOpen
                    ? "text-gold"
                    : "text-bone-muted hover:text-bone"
                }`}
              >
                Resources
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute right-0 top-full mt-3 w-52 origin-top-right rounded-xl border border-white/10 bg-ink-800/95 p-2 shadow-luxe backdrop-blur-xl transition-all duration-200 ${
                  resourcesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <ul>
                  {NAV_RESOURCES.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                          isActive(item.href)
                            ? "bg-gold/10 text-gold"
                            : "text-bone-muted hover:bg-white/5 hover:text-bone"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink("Hello Citadel K9s, I'd like to enquire about a puppy.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <WhatsApp className="h-4 w-4" />
            Enquire
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bone lg:hidden"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu — grouped for low cognitive load */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-20 z-40 origin-top overflow-y-auto bg-ink/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-site flex flex-col gap-8 py-8">
          <ul className="flex flex-col divide-y divide-white/5">
            {NAV_PRIMARY.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between py-4 text-lg ${
                    isActive(item.href) ? "text-gold" : "text-bone"
                  }`}
                >
                  {item.label}
                  <span aria-hidden className="text-bone-faint">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <p className="text-xs uppercase tracking-luxe text-bone-faint">
              Resources
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6">
              {NAV_RESOURCES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2.5 ${
                      isActive(item.href) ? "text-gold" : "text-bone-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappLink("Hello Citadel K9s, I'd like to enquire about a puppy.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            <WhatsApp className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
