import Link from "next/link";
import { heroCopy, makeOffers } from "@/lib/site-config";

const growthSystems = makeOffers.filter(
  (offer) => offer.id === "reactivation" || offer.id === "review-engine",
);

function HeroSystemsPanel() {
  return (
    <aside className="rounded-lg border border-border bg-panel px-5 py-6 sm:px-6 sm:py-7">
      <p className="font-[family-name:var(--font-heading)] text-[1.15rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.25rem]">
        After the site: growth systems
      </p>
      <p className="mt-2 text-[14px] leading-[1.5] text-muted-foreground">
        Optional SMS that keeps working after launch — win customers back or ask for the review.
      </p>

      <ul className="mt-5 space-y-4 border-t border-border pt-5">
        {growthSystems.map((offer) => (
          <li key={offer.id}>
            <p className="text-[14px] font-medium text-foreground">
              {offer.name}
              <span className="ml-2 font-normal text-muted-foreground">{offer.price}</span>
            </p>
            <p className="mt-1 text-[13px] leading-[1.45] text-muted-foreground">{offer.what}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link href="/systems" className="btn-primary">
          See systems
        </Link>
      </div>
    </aside>
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
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--panel)_40%,transparent)_0%,transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
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
          <HeroSystemsPanel />
        </div>
      </div>
    </section>
  );
}
