import { faqItems } from "@/lib/site-config";
import {
  cardShell,
  sectionEyebrow,
  sectionHeading,
  sectionPadding,
  sectionShell,
  sectionTitle,
} from "@/lib/layout-classes";

export function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className={`${sectionShell} ${sectionPadding}`}
    >
      <div className={sectionHeading}>
        <p className={sectionEyebrow}>// Product & Services FAQ</p>
        <h2 id="faq-heading" className={sectionTitle}>
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground md:mx-0">
          Clear answers for founders, hiring managers, and teams evaluating custom software
          development, SaaS product work, and startup landing page builds.
        </p>
      </div>

      <div className={`${cardShell} divide-y divide-glass-border p-0`}>
        {faqItems.map((item, index) => (
          <details
            key={item.question}
            className="group px-4 py-4 sm:px-6 sm:py-5"
            {...(index === 0 ? { open: true } : {})}
          >
            <summary className="cursor-pointer list-none text-base font-medium leading-7 text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 font-mono text-xs text-accent-neon transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-pretty text-sm leading-7 text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
