"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { homeSectionIds, siteConfig } from "@/lib/site-config";
import { useActiveSection } from "@/hooks/use-active-section";

const links = [
  { label: "Work", href: "/#work", section: "work" },
  { label: "Systems", href: "/systems", section: null },
  { label: "About", href: "/#about", section: "about" },
  { label: "Contact", href: "/#contact", section: "contact" },
] as const;

const idleSectionIds: string[] = [];

export function SiteNav() {
  const pathname = usePathname();
  const activeSection = useActiveSection(pathname === "/" ? homeSectionIds : idleSectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="page-wrap flex flex-col items-start gap-3 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-4">
        <a
          href="/#top"
          className="font-[family-name:var(--font-heading)] text-[15px] font-semibold tracking-[-0.02em] transition-colors hover:text-accent"
        >
          {siteConfig.navBrand}
        </a>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted-foreground sm:justify-end sm:gap-x-6 sm:text-[14px]"
        >
          {links.map((link) => {
            const active =
              link.section && pathname === "/"
                ? activeSection === link.section
                : link.href === "/systems"
                  ? pathname === "/systems" || pathname.startsWith("/systems/")
                  : link.href.startsWith("/") &&
                    !link.href.includes("#") &&
                    pathname === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "py-1 transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {link.label}
              </a>
            );
          })}
          <a href="/#contact" className="btn-primary !px-3.5 !py-1.5 text-[13px]">
            Get a quote
          </a>
        </nav>
      </div>
    </header>
  );
}
