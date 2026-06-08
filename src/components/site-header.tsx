"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Software", href: "#software" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border/80 bg-cream/95 backdrop-blur-sm">
      <div className="container-page grid h-[72px] grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link href="/" className="shrink-0 text-sm font-bold tracking-[0.08em] text-ink">
          {siteConfig.brand}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-body transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link href="#contact" className="btn-orange hidden px-5 text-[13px] sm:inline-flex">
            + Work with me
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1">
              <span className={`block h-px w-4 bg-ink transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-4 bg-ink transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm text-body"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="btn-orange mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                + Work with me
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
