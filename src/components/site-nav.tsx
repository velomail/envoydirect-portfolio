"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { homeSectionIds, siteConfig } from "@/lib/site-config";
import { useActiveSection } from "@/hooks/use-active-section";

const links = [
  { label: "Work", href: "/#work", section: "work" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Services", href: "/services", section: null },
  { label: "Blog", href: "/blog", section: null },
  { label: "Contact", href: "/#contact", section: "contact" },
] as const;

const idleSectionIds: string[] = [];

export function SiteNav() {
  const pathname = usePathname();
  const activeSection = useActiveSection(pathname === "/" ? homeSectionIds : idleSectionIds);

  return (
    <header className="page-wrap flex flex-wrap items-center justify-between gap-x-4 gap-y-3 pt-14 md:pt-20">
      <a
        href="/#top"
        className="text-[15px] font-semibold tracking-[-0.01em] transition-colors hover:text-accent"
      >
        {siteConfig.navBrand}
      </a>
      <nav
        aria-label="Primary"
        className="flex flex-wrap justify-end gap-4 text-[13px] text-muted-foreground sm:gap-7 sm:text-[14px] md:gap-9"
      >
        {links.map((link) => {
          const active =
            link.section && pathname === "/"
              ? activeSection === link.section
              : link.href === "/blog"
                ? pathname === "/blog" || pathname.startsWith("/blog/")
                : link.href.startsWith("/") &&
                  !link.href.includes("#") &&
                  pathname === link.href;

          return (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-foreground",
                active && "text-foreground",
              )}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
