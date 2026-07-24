"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex min-h-16 max-w-6xl flex-col items-center justify-center gap-3 px-5 py-3 sm:px-8 md:h-auto md:flex-row md:flex-wrap md:gap-x-8 md:gap-y-2 md:py-4"
      >
        <a href="#top" className="flex flex-col items-center text-center">
          <span className="text-lg font-semibold tracking-[0.14em] md:text-sm md:tracking-[0.12em]">
            ENVOY DIRECT
          </span>
          <span className="mt-1 max-w-[17rem] font-mono text-[0.625rem] uppercase leading-snug tracking-[0.14em] text-muted-foreground md:mt-0.5">
            Independent software studio
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-sm transition-colors hover:text-foreground",
                active === l.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {l.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-1/2 h-px -translate-x-1/2 bg-foreground transition-all duration-300",
                  active === l.href ? "w-full" : "w-0",
                )}
              />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <span className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground lg:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Open for work
          </span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a project
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
