import { Reveal } from "@/components/reveal";
import { SectionFrame } from "@/components/section-frame";
import { liveSystems, systemsTeaser } from "@/lib/site-config";

export function SystemsTeaser() {
  return (
    <SectionFrame id="systems-teaser" label="Systems" className="lg:pt-16">
      <Reveal>
        <h2 className="t-title max-w-[24rem] text-[clamp(1.45rem,3.8vw,1.9rem)]">
          {systemsTeaser.heading}
        </h2>
        <p className="mt-3 max-w-[36rem] text-[16px] leading-[1.55] text-muted-foreground">
          {systemsTeaser.lede}
        </p>
      </Reveal>

      <ul className="mt-7 border-t border-border md:mt-8">
        {liveSystems.map((system, index) => (
          <Reveal key={system.id} as="li" delay={index * 60}>
            <div className="grid gap-2 border-b border-border py-4 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)_auto] sm:items-baseline sm:gap-4">
              <p className="font-medium text-foreground">{system.name}</p>
              <p className="text-[14px] text-muted-foreground">{system.priceShape}</p>
              <a href={system.askHref} className="link text-[14px] sm:justify-self-end">
                {system.askLabel}
              </a>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={80}>
        <p className="mt-6 max-w-[36rem] text-[14px] leading-[1.55] text-muted-foreground">
          {systemsTeaser.buildingNext}
        </p>
        <p className="mt-5 text-[15px]">
          <a href={systemsTeaser.ctaHref} className="link">
            {systemsTeaser.ctaLabel}
          </a>
        </p>
      </Reveal>
    </SectionFrame>
  );
}
