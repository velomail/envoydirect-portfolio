import Link from "next/link";
import { CopyEmailButton } from "@/components/copy-email-button";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "Upwork", href: siteConfig.links.upwork },
  { label: "Fiverr", href: siteConfig.links.fiverr },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
] as const;

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-16 pt-12">
      <div className="rounded-2xl border border-glass-border glass-panel p-8 md:p-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-neon">
              // Terminal Connect Block
            </p>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              INITIATE PROJECT SCOPING
            </h2>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-sm tracking-tight text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
            <CopyEmailButton />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-glass-border pt-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-tight text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-[11px] tracking-tight text-muted-foreground/50">
        © {new Date().getFullYear()} ENVOYDIRECT // ALL SYSTEMS OPERATIONAL
      </p>
    </footer>
  );
}
