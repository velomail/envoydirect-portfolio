import { remoteGigLink, siteConfig, socialLinks } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="page-wrap pt-12 md:pt-20"
      style={{ paddingBottom: "max(2.5rem, calc(2.5rem + env(safe-area-inset-bottom)))" }}
    >
      <div className="flex flex-col gap-4 border-t border-border pt-6 text-[13px] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>
          {siteConfig.name}. {year}.
        </span>
        <span className="flex flex-wrap gap-x-5 gap-y-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {social.label}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
          <a href="/systems" className="transition-colors hover:text-accent">
            Systems
          </a>
          <a href="/services" className="transition-colors hover:text-accent">
            Services
          </a>
          <a href="/blog" className="transition-colors hover:text-accent">
            Blog
          </a>
          <a href="/other-builds" className="transition-colors hover:text-accent">
            Other builds
          </a>
        </span>
      </div>
      <p className="mt-3 text-[12px] text-muted-foreground/80">
        <a
          href={remoteGigLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          {remoteGigLink.label}
        </a>
        {" — "}separate from core site + systems work.
      </p>
    </footer>
  );
}
