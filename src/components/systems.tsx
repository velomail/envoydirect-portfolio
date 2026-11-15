import { Reveal } from "@/components/reveal";
import { SectionFrame } from "@/components/section-frame";
import { liveSystems, systemsPage } from "@/lib/site-config";

export function Systems() {
  return (
    <SectionFrame id="systems" label="Systems" className="!pt-10 md:!pt-14 lg:!pt-16">
      <Reveal>
        <h1 className="t-title text-[clamp(1.85rem,5.5vw,3rem)]">{systemsPage.heading}</h1>
        <p className="mt-5 max-w-[36rem] text-[17px] leading-[1.6] text-muted-foreground md:mt-6">
          {systemsPage.lede}
        </p>
      </Reveal>

      <p className="mt-12 t-label md:mt-14">Live now</p>
      <ul className="mt-4 border-t border-border">
        {liveSystems.map((system, index) => (
          <Reveal key={system.id} as="li" delay={index * 80}>
            <div
              id={system.id}
              className="scroll-mt-24 grid gap-3 border-b border-border py-7 md:grid-cols-12 md:gap-4 md:py-9"
            >
              <div className="md:col-span-4">
                <h2 className="font-[family-name:var(--font-heading)] text-[1.15rem] font-semibold tracking-[-0.02em]">
                  {system.name}
                </h2>
                <p className="mt-1.5 text-[14px] text-muted-foreground">{system.tagline}</p>
                <p className="mt-4 text-[14px] font-medium text-accent">{system.priceShape}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-[15px] leading-[1.55] text-muted-foreground">
                  {system.description}
                </p>
                <p className="mt-3 text-[14px] text-muted-foreground">
                  {system.outcomes.join(" · ")}
                </p>
                <p className="mt-3 text-[14px] leading-[1.55] text-muted-foreground">
                  Live means: {system.doneMeans}
                </p>
                <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px]">
                  <a href={system.askHref} className="btn-primary !px-4 !py-2 text-[13px]">
                    {system.askLabel}
                  </a>
                  {system.href ? (
                    <a
                      href={system.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      {system.linkLabel}
                    </a>
                  ) : null}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-12 max-w-[36rem] rounded-lg border border-border bg-panel p-5 md:mt-14 md:p-6">
        <h2 className="text-[15px] font-medium">Built for your shop — more coming</h2>
        <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">
          {systemsPage.comingSoon}
        </p>
      </div>

      <p className="mt-8 max-w-[36rem] text-[14px] leading-[1.55] text-muted-foreground md:mt-10">
        {systemsPage.partnersNote}
      </p>

      <p className="mt-10 text-[15px]">
        <a href={systemsPage.ctaHref} className="btn-ghost">
          {systemsPage.ctaLabel}
        </a>
      </p>
    </SectionFrame>
  );
}
