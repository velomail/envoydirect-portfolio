import { heroCopy, heroNameLines, offerBullets, offerLocalNote } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-10 pt-6 sm:pb-12 sm:pt-8 lg:pb-16 lg:pt-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_18%_0%,color-mix(in_srgb,var(--accent)_14%,transparent)_0%,transparent_58%),radial-gradient(ellipse_at_92%_8%,color-mix(in_srgb,var(--jewel)_8%,transparent)_0%,transparent_42%)]"
      />
      <div className="page-wrap relative">
        <p className="hero-in text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
          <span className="text-foreground">
            {heroNameLines[0]} {heroNameLines[1]}
          </span>
          <span className="mx-2 text-border" aria-hidden="true">
            ·
          </span>
          Orillia &amp; Simcoe County
        </p>

        <h1
          className="hero-in mt-5 max-w-[22ch] text-[clamp(2rem,5.6vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.03em]"
          style={{ animationDelay: "70ms", fontVariationSettings: '"wdth" 88' }}
        >
          {heroCopy.headline}
        </h1>

        <div className="hero-in mt-5 max-w-[36rem]" style={{ animationDelay: "150ms" }}>
          <p className="text-[17px] leading-[1.55] text-muted-foreground sm:text-[18px]">
            {heroCopy.lede}
          </p>
          <p className="mt-5 text-[15px] font-medium">{heroCopy.price}</p>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[15px]">
            <a href={heroCopy.primaryCta.href} className="link">
              {heroCopy.primaryCta.label}
            </a>
            <a
              href={heroCopy.secondaryCta.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {heroCopy.secondaryCta.label}
            </a>
          </p>
        </div>

        <div
          className="hero-in mt-10 max-w-[40rem] border border-border bg-[color-mix(in_srgb,var(--background)_72%,var(--panel))] p-5 sm:mt-12 sm:p-6"
          style={{ animationDelay: "240ms" }}
        >
          <p className="text-[13px] font-medium text-muted-foreground">What you get</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {offerBullets.map((bullet) => (
              <li key={bullet} className="text-[15px] leading-[1.4] sm:text-[16px]">
                <span
                  className="mb-2 block h-1.5 w-1.5 rounded-full bg-[var(--jewel)]"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-border pt-4 text-[14px] text-muted-foreground">
            {offerLocalNote}
          </p>
        </div>
      </div>
    </section>
  );
}
