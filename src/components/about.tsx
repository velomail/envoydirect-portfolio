import { AboutPortrait } from "@/components/about-portrait";
import { SectionFrame } from "@/components/section-frame";
import { aboutHeading, aboutParagraphs, faqItems } from "@/lib/site-config";

type AboutProps = {
  className?: string;
  nextHref?: string;
  nextLabel?: string;
};

export function About({
  className,
  nextHref = "#contact",
  nextLabel = "Next — get a quote",
}: AboutProps) {
  return (
    <SectionFrame id="about" label="About" className={className}>
      <h2 className="t-title text-[2.5rem] md:text-[3.25rem]">{aboutHeading}</h2>
      {aboutParagraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 32)}
          className="mt-6 max-w-[32rem] text-[17px] leading-[1.6] text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}
      <div className="mt-10 max-w-[280px]">
        <AboutPortrait priority />
      </div>

      <p className="mt-12 text-[13px] font-medium text-muted-foreground">Common questions</p>
      <dl className="mt-4 border-t border-border">
        {faqItems.map((item) => (
          <div key={item.question} className="border-b border-border py-5">
            <dt className="text-[15px] font-medium">{item.question}</dt>
            <dd className="mt-1 max-w-[40rem] text-[15px] leading-[1.55] text-muted-foreground">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 text-[15px]">
        <a href={nextHref} className="link">
          {nextLabel}
        </a>
      </p>
    </SectionFrame>
  );
}
