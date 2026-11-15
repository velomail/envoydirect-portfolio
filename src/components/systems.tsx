import { Reveal } from "@/components/reveal";
import { SectionFrame } from "@/components/section-frame";
import { liveSystems, systemsPage } from "@/lib/site-config";

export function Systems() {
  return (
    <SectionFrame id="systems" label="Systems">
      <h1 className="t-title text-[clamp(1.85rem,6vw,3.25rem)]">{systemsPage.heading}</h1>
      <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.6] text-muted-foreground md:mt-6">
        {systemsPage.lede}
      </p>

      <p className="mt-12 text-[13px] font-medium text-muted-foreground md:mt-16">Live now</p>
      <ul className="mt-4 border-t border-border">
        {liveSystems.map((system, index) => (
          <Reveal key={system.id} as="li" delay={index * 80}>
            <div
              id={system.id}
              className="scroll-mt-8 grid gap-2 border-b border-border py-6 md:grid-cols-12 md:gap-3 md:py-8"
            >
              <div className="md:col-span-4">
                <h2 className="text-[15px] font-medium">{system.name}</h2>
                <p className="mt-1 text-[14px] text-muted-foreground">{system.tagline}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-[15px] leading-[1.55] text-muted-foreground">
                  {system.description}
                </p>
                <p className="mt-3 text-[14px] text-muted-foreground">
                  {system.outcomes.join(" · ")}
                </p>
                {system.href ? (
                  <p className="mt-3 text-[14px]">
                    <a
                      href={system.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {system.linkLabel}
                    </a>
                  </p>
                ) : (
                  <p className="mt-3 text-[14px] text-muted-foreground">
                    {system.linkLabel}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-12 max-w-[34rem] border-t border-border pt-6 md:mt-16 md:pt-8">
        <h2 className="text-[15px] font-medium">Built for your shop — more coming</h2>
        <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">
          {systemsPage.comingSoon}
        </p>
      </div>

      <p className="mt-8 max-w-[34rem] text-[14px] leading-[1.55] text-muted-foreground md:mt-10">
        {systemsPage.partnersNote}
      </p>

      <p className="mt-10 text-[15px]">
        <a href={systemsPage.ctaHref} className="link">
          {systemsPage.ctaLabel}
        </a>
      </p>
    </SectionFrame>
  );
}
