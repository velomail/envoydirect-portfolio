import { heroCopy, heroNameLines } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="page-wrap flex flex-col pb-8 pt-6 sm:pb-10 sm:pt-8 lg:pb-14 lg:pt-12">
      <h1 className="hero-mark t-display text-[clamp(2.25rem,9vw,4.5rem)] leading-[0.95]">
        {heroNameLines.map((line, index) => (
          <span
            key={line}
            className="hero-in block"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            {line}
          </span>
        ))}
      </h1>
      <div className="hero-in mt-6 max-w-[36rem] lg:mt-8" style={{ animationDelay: "220ms" }}>
        <p className="text-[clamp(1.25rem,3.2vw,1.65rem)] leading-[1.3] tracking-[-0.015em]">
          {heroCopy.headline}
        </p>
        <p className="mt-3 text-[17px] leading-[1.55] text-muted-foreground">{heroCopy.lede}</p>
        <p className="mt-4 text-[15px] font-medium">{heroCopy.price}</p>
        <p className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[15px]">
          <a href={heroCopy.primaryCta.href} className="link">
            {heroCopy.primaryCta.label}
          </a>
          <a href={heroCopy.secondaryCta.href} className="text-muted-foreground transition-colors hover:text-foreground">
            {heroCopy.secondaryCta.label}
          </a>
        </p>
      </div>
    </section>
  );
}
