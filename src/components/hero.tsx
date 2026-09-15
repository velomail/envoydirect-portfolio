import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AboutTrustColumn } from "@/components/about-trust";
import { Reveal } from "@/components/reveal";
import {
  sectionSplitClass,
  sectionSplitStartClass,
  SectionIntro,
} from "@/components/section-intro";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type HeroProps = {
  className?: string;
};

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="top"
      className={cn("scroll-mt-20 border-t border-border py-14 sm:py-20", className)}
    >
      <SectionIntro
        as="h1"
        title={
          <>
            A website that brings in customers.{" "}
            <span className="text-muted-foreground">Not just a nicer homepage.</span>
          </>
        }
        subtitle={
          <>
            I redesign sites for local businesses across Orillia and Simcoe County — so people can
            find you, trust you, and call or book. Serving {siteConfig.location}.
          </>
        }
      />

      <div className={sectionSplitClass}>
        <Reveal>
          <div
            className={cn(
              sectionSplitStartClass,
              "flex flex-col items-center justify-center py-2 text-center lg:py-6",
            )}
          >
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Get a quote
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60"
              >
                See the work
                <ArrowDown className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <AboutTrustColumn />
        </Reveal>
      </div>
    </section>
  );
}
