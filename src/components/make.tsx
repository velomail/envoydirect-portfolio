import { Reveal } from "@/components/reveal";
import { SectionFrame } from "@/components/section-frame";
import { makeOffers } from "@/lib/site-config";

export function Make() {
  return (
    <SectionFrame id="make" label="What I make">
      <Reveal>
        <h2 className="t-title max-w-[22rem] text-[clamp(1.55rem,4vw,2.1rem)]">
          Sites and systems. One stack.
        </h2>
        <p className="mt-3 max-w-[36rem] text-[16px] leading-[1.55] text-muted-foreground">
          Website first. Follow-up systems when you have a list or live traffic — same person,
          same theme: bring work in and keep it moving.
        </p>
      </Reveal>

      <ul className="mt-8 grid gap-0 border-t border-border md:mt-10 md:grid-cols-3">
        {makeOffers.map((offer, index) => (
          <Reveal key={offer.id} as="li" delay={index * 70}>
            <a
              href={offer.href}
              className="group block h-full border-b border-border py-6 transition-colors md:border-b-0 md:border-r md:px-5 md:py-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="t-label text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-[family-name:var(--font-heading)] text-[1.2rem] font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent">
                {offer.name}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.45] text-muted-foreground">
                {offer.forWhom}
              </p>
              <p className="mt-4 text-[15px] leading-[1.55] text-foreground/90">{offer.what}</p>
              <p className="mt-5 text-[14px] font-medium text-accent">{offer.price}</p>
            </a>
          </Reveal>
        ))}
      </ul>
    </SectionFrame>
  );
}
