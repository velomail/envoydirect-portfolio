import Image from "next/image";
import { featuredProjects, heroCopy } from "@/lib/site-config";

const proofSites = featuredProjects.slice(0, 2).map((project) => ({
  id: project.id,
  name: project.name,
  image: project.previewImage,
  outcome: project.id === "gunning-grounds" ? "Quote on phone" : "Book on page",
}));

function HeroOutcome() {
  return (
    <div aria-hidden="true" className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[1.25rem] bg-[radial-gradient(ellipse_at_70%_20%,color-mix(in_srgb,var(--accent)_14%,transparent)_0%,transparent_55%),radial-gradient(ellipse_at_20%_90%,color-mix(in_srgb,#4b5568_18%,transparent)_0%,transparent_50%)]" />

      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        Sites that bring work in
      </p>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {proofSites.map((site) => (
          <div key={site.id} className="min-w-0">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-panel shadow-[0_0_0_1px_rgba(45,212,191,0.05)]">
              <Image
                src={site.image}
                alt=""
                fill
                priority
                quality={85}
                sizes="(min-width: 1024px) 18vw, 42vw"
                className="object-cover object-top"
              />
            </div>
            <p className="mt-2 truncate text-[12px] font-medium text-foreground/90">
              {site.name}
            </p>
            <p className="mt-0.5 text-[11px] text-accent">{site.outcome}</p>
          </div>
        ))}
      </div>

      <div className="my-5 flex items-center gap-3" aria-hidden="true">
        <div className="h-px flex-1 bg-border" />
        <div className="flex size-7 items-center justify-center rounded-full border border-border bg-panel text-accent">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M6 1.5v7.5M6 9l-2.5-2.5M6 9l2.5-2.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="h-px flex-1 bg-border" />
      </div>

      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        Systems that follow up
      </p>

      <div className="mt-3 space-y-2.5">
        <div className="rounded-md border border-border bg-panel/90 px-3.5 py-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[12px] font-medium text-foreground">Reactivation</span>
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              SMS
            </span>
          </div>
          <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">
            Quiet-hours text with a personal reason to come back.
          </p>
        </div>
        <div className="rounded-md border border-border bg-panel/90 px-3.5 py-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[12px] font-medium text-foreground">Review Engine</span>
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              SMS
            </span>
          </div>
          <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">
            Ask after the job — happy scores get your Google link.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12"
    >
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_-10%,color-mix(in_srgb,var(--accent)_16%,transparent)_0%,transparent_42%),radial-gradient(ellipse_at_88%_8%,color-mix(in_srgb,#4b5568_22%,transparent)_0%,transparent_48%),linear-gradient(180deg,color-mix(in_srgb,var(--panel)_55%,transparent)_0%,transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="page-wrap relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <div>
          <p className="hero-in font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.35rem)] font-bold tracking-[-0.03em] text-foreground">
            {heroCopy.brand}
          </p>

          <h1
            className="hero-in mt-5 max-w-[18ch] text-[clamp(2.15rem,5.2vw,3.35rem)] font-[family-name:var(--font-heading)] font-bold leading-[1.05] tracking-[-0.03em]"
            style={{ animationDelay: "70ms" }}
          >
            {heroCopy.headline}
          </h1>

          <div className="hero-in mt-5 max-w-[34rem]" style={{ animationDelay: "140ms" }}>
            <p className="text-[16px] leading-[1.6] text-muted-foreground sm:text-[17px]">
              {heroCopy.lede}
            </p>
            <p className="mt-5 text-[15px] font-medium text-foreground">{heroCopy.price}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href={heroCopy.primaryCta.href} className="btn-primary">
                {heroCopy.primaryCta.label}
              </a>
              <a href={heroCopy.secondaryCta.href} className="btn-ghost">
                {heroCopy.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        <div className="hero-in" style={{ animationDelay: "200ms" }}>
          <HeroOutcome />
        </div>
      </div>
    </section>
  );
}
