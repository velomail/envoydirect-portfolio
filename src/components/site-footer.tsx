import { siteConfig, socialLinks } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="page-wrap pt-12 md:pt-28"
      style={{ paddingBottom: "max(2.5rem, calc(2.5rem + env(safe-area-inset-bottom)))" }}
    >
      <div className="flex flex-col gap-4 border-t border-border pt-6 text-[13px] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>
          {siteConfig.name}. {siteConfig.locationShort}, {year}.
        </span>
        <span className="flex flex-wrap gap-x-5 gap-y-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a href="/services" className="transition-colors hover:text-foreground">
            Services
          </a>
          <a href="/blog" className="transition-colors hover:text-foreground">
            Blog
          </a>
          <a href="/other-builds" className="transition-colors hover:text-foreground">
            Other builds
          </a>
        </span>
      </div>
    </footer>
  );
}
