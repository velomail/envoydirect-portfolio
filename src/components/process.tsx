import { SectionFrame } from "@/components/section-frame";
import { processIntro, processSteps } from "@/lib/site-config";

type ProcessProps = {
  headingAs?: "h1" | "h2";
  nextHref?: string;
  nextLabel?: string;
};

export function Process({
  headingAs: Heading = "h1",
  nextHref,
  nextLabel,
}: ProcessProps) {
  return (
    <SectionFrame id="process" label="Process" className="lg:pt-20">
      <Heading className="t-title text-[clamp(1.5rem,4vw,2rem)]">How we&apos;d work together.</Heading>
      <p className="mt-3 max-w-[32rem] text-[15px] leading-[1.55] text-muted-foreground md:mt-4">
        {processIntro}
      </p>
      <ol className="mt-6 max-w-[36rem] border-t border-border md:mt-8">
        {processSteps.map((step) => (
          <li
            key={step.step}
            className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-border py-3 text-[15px] sm:grid-cols-[3rem_1fr]"
          >
            <span className="t-num pt-[2px] text-[13px] text-muted-foreground">{step.step}</span>
            <span>
              <span className="font-medium">{step.title}</span>
              <span className="text-muted-foreground"> — {step.description}</span>
            </span>
          </li>
        ))}
      </ol>
      {nextHref && nextLabel ? (
        <p className="mt-6 text-[15px]">
          <a href={nextHref} className="link">
            {nextLabel}
          </a>
        </p>
      ) : null}
    </SectionFrame>
  );
}
