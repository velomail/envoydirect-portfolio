import { Reveal } from "@/components/reveal";
import { SectionFrame } from "@/components/section-frame";
import { systemsTeaser } from "@/lib/site-config";

export function SystemsTeaser() {
  return (
    <SectionFrame id="systems-teaser" label="Systems">
      <Reveal>
        <h2 className="t-title max-w-[32rem] text-[clamp(1.75rem,5vw,2.5rem)]">
          {systemsTeaser.heading}
        </h2>
        <p className="mt-4 max-w-[32rem] text-[17px] leading-[1.6] text-muted-foreground md:mt-5">
          {systemsTeaser.lede}
        </p>
        <p className="mt-6 text-[15px] md:mt-8">
          <a href={systemsTeaser.ctaHref} className="link">
            {systemsTeaser.ctaLabel}
          </a>
        </p>
      </Reveal>
    </SectionFrame>
  );
}
