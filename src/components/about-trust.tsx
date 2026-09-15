import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AboutPortrait } from "@/components/about-portrait";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { sectionSplitAsideClass } from "@/components/section-intro";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function AboutTrustColumn() {
  return (
    <div id="about" className={cn("scroll-mt-20 text-center", sectionSplitAsideClass)}>
      <Reveal>
        <SectionLabel centered>About</SectionLabel>
      </Reveal>

      <Reveal delay={60} className="mt-6 w-full">
        <AboutPortrait priority className="max-w-[260px]" />
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          I&apos;m Jesse, an independent designer and developer serving {siteConfig.location}. You
          work directly with me — no account managers, no agency hand-offs — with preview links shared
          early and a reply within 48 hours.
        </p>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Scope → Preview → Launch → Refine
        </p>
      </Reveal>

      <Reveal delay={200}>
        <Link
          href="/about"
          className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground"
        >
          More about me
          <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Reveal>
    </div>
  );
}
