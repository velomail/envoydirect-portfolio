import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

/** Two-column section body — open layout, no card chrome */
export const sectionSplitClass =
  "mx-auto mt-10 max-w-6xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-y-12 gap-10";

/** Same grid as sectionSplitClass, but columns share one row height */
export const sectionSplitStretchClass =
  "mx-auto mt-10 max-w-6xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-y-12 gap-10";

export const sectionSplitStartClass = "min-w-0 lg:pr-14";

export const sectionSplitAsideClass =
  "min-w-0 lg:border-l lg:border-border/70 lg:pl-14";

type SectionIntroProps = {
  label?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionIntro({
  label,
  title,
  subtitle,
  as = "h2",
  className,
}: SectionIntroProps) {
  const Heading = as;
  const titleDelay = label ? 60 : 0;
  const subtitleDelay = label ? 120 : 60;

  return (
    <div className={cn("mx-auto max-w-6xl px-5 text-center sm:px-8", className)}>
      {label ? (
        <Reveal>
          <SectionLabel centered>{label}</SectionLabel>
        </Reveal>
      ) : null}
      <Reveal delay={titleDelay}>
        <Heading
          className={cn(
            "text-balance font-serif font-medium tracking-tight",
            as === "h1"
              ? "mt-0 text-4xl leading-[1.08] sm:text-5xl md:text-6xl"
              : "mt-6 text-4xl sm:text-5xl",
          )}
        >
          {title}
        </Heading>
      </Reveal>
      {subtitle ? (
        <Reveal delay={subtitleDelay}>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
