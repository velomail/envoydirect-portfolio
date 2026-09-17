import { heroCopy, heroNameLines } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="top"
      className="page-wrap flex flex-col pb-10 pt-8 sm:pb-12 sm:pt-10 lg:min-h-[min(88svh,54rem)] lg:pb-24 lg:pt-20"
    >
      <h1 className="hero-mark t-display text-[clamp(3.4rem,16vw,14rem)]">
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
        className="hero-in mt-8 max-w-[36rem] lg:mt-16"
        style={{ animationDelay: "260ms" }}
      >
        <p className="text-[clamp(1.25rem,3.4vw,1.75rem)] leading-[1.3] tracking-[-0.015em]">
          {heroCopy.headline}
        </p>
        <p className="mt-4 text-[17px] leading-[1.55] text-muted-foreground">{heroCopy.lede}</p>
        <p className="mt-6 text-[15px] md:mt-8">
          <a href="#work" className="link">
            See the work
          </a>
        </p>
      </div>
      <p
        className="hero-in mt-8 hidden lg:mt-auto lg:block lg:pt-16"
        style={{ animationDelay: "420ms" }}
      >
        <a href="#work" className="t-label inline-flex flex-col text-muted-foreground">
          Scroll
          <span className="scroll-cue" aria-hidden="true" />
        </a>
      </p>
    </section>
  );
}
