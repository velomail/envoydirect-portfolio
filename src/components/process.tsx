import { ProcessTrack } from "@/components/process-track";
import { SectionFrame } from "@/components/section-frame";

type ProcessProps = {
  headingAs?: "h1" | "h2";
  nextHref?: string;
  nextLabel?: string;
};

export function Process({
  headingAs: Heading = "h1",
  nextHref = "/#contact",
  nextLabel = "Get a quote",
}: ProcessProps) {
  return (
    <SectionFrame id="process" label="Process">
      <Heading className="t-title text-[2.5rem] md:text-[3.25rem]">How we&apos;d work together.</Heading>
      <p className="mt-6 max-w-[32rem] text-[17px] leading-[1.6] text-muted-foreground">
        Scoped timelines, preview links early, and direct communication — no hand-offs, no surprises.
      </p>
      <ProcessTrack />
      <p className="mt-10 text-[15px]">
        <a href={nextHref} className="link">
          {nextLabel}
        </a>
      </p>
    </SectionFrame>
  );
}
