import { ArrowUpRight, Check } from "lucide-react";
import { AboutPortrait } from "@/components/about-portrait";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { aboutParagraphs, aboutPoints, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type AboutProps = {
  className?: string;
  hidePortrait?: boolean;
  align?: "center" | "start";
};

export function About({ className, hidePortrait = false, align = "center" }: AboutProps) {
  const centered = align === "center";

  return (
    <section className={cn("scroll-mt-20 border-t border-border py-20 sm:py-28", className)}>
      <div
        className={cn(
          "mx-auto max-w-6xl px-5 sm:px-8",
          centered ? "text-center" : "text-left",
        )}
      >
        <Reveal>
          <SectionLabel centered={centered}>About</SectionLabel>
        </Reveal>

        <Reveal delay={60}>
          <h2
            className={cn(
              "mt-6 max-w-xl text-balance font-serif text-4xl font-medium tracking-tight sm:text-5xl",
              centered && "mx-auto",
            )}
          >
            Hi, I&apos;m Jesse.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        {hidePortrait ? null : (
          <Reveal delay={180} className="mx-auto mt-10 max-w-sm">
            <AboutPortrait priority />
          </Reveal>
        )}

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
          {aboutPoints.map((point, index) => (
            <Reveal as="li" key={point} delay={200 + index * 60}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="text-sm leading-snug text-foreground">{point}</span>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={420}>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-1 text-sm font-medium text-foreground"
          >
            LinkedIn
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
