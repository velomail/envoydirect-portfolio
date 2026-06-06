import Link from "next/link";
import { CopyEmailButton } from "@/components/copy-email-button";
import { cardShell, focusRing, sectionShell } from "@/lib/layout-classes";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "Upwork", href: siteConfig.links.upwork },
  { label: "Fiverr", href: siteConfig.links.fiverr },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
] as const;

export function SiteFooter() {
  return (
    <footer className={`${sectionShell} pb-12 pt-10 sm:pb-16 sm:pt-12`}>
      <div className={`${cardShell} px-5 py-8 sm:px-8 sm:py-10 md:p-12`}>
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-neon sm:tracking-widest">
              // Terminal Connect Block
            </p>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              INITIATE PROJECT SCOPING
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-sm leading-7 text-muted-foreground">
              Ready to scope a SaaS MVP, automation pipeline, or startup product page? Reach out
              for availability, timeline, and technical fit.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className={`inline-flex min-h-11 items-center justify-center rounded-lg px-2 font-mono text-sm tracking-tight text-muted-foreground transition-colors hover:text-foreground ${focusRing}`}
            >
              {siteConfig.email}
            </a>
            <CopyEmailButton />
          </div>
        </div>

        <nav
          aria-label="Social and freelance profiles"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-glass-border pt-8 sm:gap-x-6"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-11 min-w-11 items-center justify-center font-mono text-xs tracking-tight text-muted-foreground transition-colors hover:text-foreground ${focusRing}`}
            >
              {link.label}
              <span className="sr-only"> (opens in new tab)</span>
            </Link>
          ))}
        </nav>
      </div>

      <p className="mt-6 text-center font-mono text-[11px] leading-5 tracking-tight text-muted-foreground sm:mt-8">
        © {new Date().getFullYear()} ENVOYDIRECT // ALL SYSTEMS OPERATIONAL
      </p>
    </footer>
  );
}
