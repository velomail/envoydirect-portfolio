import { Reveal } from "@/components/reveal";
import { SectionFrame } from "@/components/section-frame";
import { processIntro, processSteps } from "@/lib/site-config";

type ProcessProps = {
  headingAs?: "h1" | "h2";
  nextHref?: string;
  nextLabel?: string;
};

export function Process({
  headingAs: Heading = "h2",
  nextHref,
  nextLabel,
}: ProcessProps) {
  return (
    <SectionFrame id="process" label="How I build" className="lg:pt-16">
      <Reveal>
        <Heading className="t-title text-[clamp(1.45rem,3.8vw,1.9rem)]">
          Scope → preview → launch → refine.
        </Heading>
        <p className="mt-3 max-w-[36rem] text-[15px] leading-[1.55] text-muted-foreground">
          {processIntro}
        </p>
      </Reveal>
      <ol className="mt-6 max-w-[40rem] border-t border-border md:mt-7">
        {processSteps.map((step, index) => (
          <Reveal key={step.step} as="li" delay={index * 50}>
            <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-border py-3 text-[15px] sm:grid-cols-[3rem_1fr]">
              <span className="t-num pt-[2px] text-[13px] text-muted-foreground">{step.step}</span>
              <span>
                <span className="font-medium text-foreground">{step.title}</span>
                <span className="text-muted-foreground"> — {step.description}</span>
              </span>
            </div>
          </Reveal>
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
