import { heroCopy } from "@/lib/site-config";

function ProductChrome() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-lg border border-border bg-panel shadow-[0_0_0_1px_rgba(45,212,191,0.06)]"
    >
      <div className="flex items-center gap-2 border-b border-border bg-panel-raised/80 px-3 py-2.5">
        <span className="size-2 rounded-full bg-[#3a404c]" />
        <span className="size-2 rounded-full bg-[#3a404c]" />
        <span className="size-2 rounded-full bg-[#3a404c]" />
        <span className="ml-2 truncate text-[11px] text-muted-foreground/80">
          site · quote flow · inbox
        </span>
      </div>
      <div className="chrome-grid relative p-4 sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,color-mix(in_srgb,var(--accent)_12%,transparent)_0%,transparent_55%)]" />
        <div className="relative space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="h-2.5 w-24 rounded-sm bg-foreground/80" />
            <div className="h-7 rounded-md bg-accent px-3 text-[11px] font-semibold leading-7 text-accent-foreground">
              Get a quote
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {["Services", "Photos", "Quote"].map((label) => (
              <div
                key={label}
                className="rounded-md border border-border bg-background/70 px-3 py-3"
              >
                <div className="h-1.5 w-10 rounded-sm bg-muted-foreground/50" />
                <div className="mt-2 h-1.5 w-full rounded-sm bg-border" />
                <div className="mt-1.5 h-1.5 w-2/3 rounded-sm bg-border" />
                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-md border border-border bg-background/80 p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-medium text-foreground">Lead inbox</span>
              <span className="rounded-sm bg-accent/15 px-1.5 py-0.5 text-[10px] font-medium text-accent">
                new
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {["Quote · lawn care", "Book · consult", "Quote · cleanup"].map((row) => (
                <div
                  key={row}
                  className="flex items-center justify-between gap-2 border-t border-border/80 pt-2 text-[11px] text-muted-foreground"
                >
                  <span>{row}</span>
                  <span className="h-1.5 w-8 rounded-sm bg-border" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md border border-dashed border-border/90 bg-panel-raised/40 px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Reactivation
              </p>
              <p className="mt-1 text-[12px] text-foreground/90">Quiet-hours SMS</p>
            </div>
            <div className="rounded-md border border-dashed border-border/90 bg-panel-raised/40 px-3 py-2.5">
              <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Review Engine
              </p>
              <p className="mt-1 text-[12px] text-foreground/90">Ask · private lows</p>
            </div>
          </div>
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
          <p
            className="hero-in font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.35rem)] font-bold tracking-[-0.03em] text-foreground"
          >
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
          <ProductChrome />
        </div>
      </div>
    </section>
  );
}
