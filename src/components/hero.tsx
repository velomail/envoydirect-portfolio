import { heroCopy, heroNameLines } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="page-wrap flex min-h-[min(88svh,54rem)] flex-col pb-16 pt-16 md:pb-24 md:pt-20"
    >
      <h1 className="hero-mark t-display text-[clamp(4.25rem,16vw,14rem)]">
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
      <div
        className="hero-in mt-12 max-w-[36rem] md:mt-16"
        style={{ animationDelay: "260ms" }}
      >
        <p className="text-[clamp(1.35rem,2.4vw,1.75rem)] leading-[1.25] tracking-[-0.015em]">
          {heroCopy.headline}
        </p>
        <p className="mt-4 text-[17px] leading-[1.55] text-muted-foreground">{heroCopy.lede}</p>
        <p className="mt-8 text-[15px]">
          <a href="#work" className="link">
            See the work
          </a>
        </p>
      </div>
      <p className="hero-in mt-auto pt-16" style={{ animationDelay: "420ms" }}>
        <a href="#work" className="t-label inline-flex flex-col text-muted-foreground">
          Scroll
          <span className="scroll-cue" aria-hidden="true" />
        </a>
      </p>
    </section>
  );
}
