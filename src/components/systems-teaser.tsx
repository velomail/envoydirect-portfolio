import { systemsTeaser } from "@/lib/site-config";

export function SystemsTeaser() {
  return (
    <section id="systems-teaser" className="page-wrap scroll-mt-6 pt-8 md:pt-10 lg:pt-14">
      <p className="max-w-[40rem] border-t border-border pt-5 text-[15px] leading-[1.55] text-muted-foreground md:pt-6">
        {systemsTeaser.line}{" "}
        <a href={systemsTeaser.ctaHref} className="link text-foreground">
          {systemsTeaser.ctaLabel}
        </a>
      </p>
    </section>
  );
}
