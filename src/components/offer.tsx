import { offerBullets, offerLocalNote } from "@/lib/site-config";

export function Offer() {
  return (
    <section id="offer" aria-label="What you get" className="page-wrap pb-2 pt-2 md:pb-4">
      <div className="border-t border-border pt-6 md:pt-8">
        <p className="text-[13px] font-medium text-muted-foreground">What you get</p>
        <ul className="mt-4 max-w-[36rem] space-y-2 text-[17px] leading-[1.45]">
          {offerBullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[15px] text-muted-foreground">{offerLocalNote}</p>
      </div>
    </section>
  );
}
