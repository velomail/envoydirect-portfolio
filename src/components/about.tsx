import { AboutPortrait } from "@/components/about-portrait";
import { SectionFrame } from "@/components/section-frame";
import { aboutHeading, aboutParagraphs, faqItems } from "@/lib/site-config";

type AboutProps = {
  className?: string;
  nextHref?: string;
  nextLabel?: string;
};

export function About({ className, nextHref, nextLabel }: AboutProps) {
  return (
    <SectionFrame id="about" label="About" className={className}>
      <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(10rem,14rem)] md:gap-10">
        <div className="min-w-0">
          <h2 className="t-title text-[clamp(1.5rem,4vw,2rem)]">{aboutHeading}</h2>
          {aboutParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-4 max-w-[32rem] text-[17px] leading-[1.6] text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="w-full max-w-[14rem] md:justify-self-end">
          <AboutPortrait priority />
        </div>
      </div>

      <p className="mt-8 text-[13px] font-medium text-muted-foreground md:mt-10">Common questions</p>
      <dl className="mt-3 border-t border-border">
        {faqItems.map((item) => (
          <div key={item.question} className="border-b border-border py-4">
            <dt className="text-[15px] font-medium">{item.question}</dt>
            <dd className="mt-1 max-w-[40rem] text-[15px] leading-[1.55] text-muted-foreground">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>

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
