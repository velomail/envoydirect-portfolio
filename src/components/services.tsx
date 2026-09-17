import { SectionFrame } from "@/components/section-frame";
import { quoteBookingHow, services } from "@/lib/site-config";

export function Services() {
  return (
    <SectionFrame id="services" label="Services">
      <h1 className="t-title text-[2.5rem] md:text-[3.25rem]">What I take on.</h1>
      <p className="mt-6 max-w-[32rem] text-[17px] leading-[1.6] text-muted-foreground">
        A website for the business, and a way for people to request a quote or book a time on that
        site. If it&apos;s not a fit, I&apos;ll tell you honestly and point you somewhere better.
      </p>

      <div id="quotes-booking-how" className="mt-14 scroll-mt-8">
        <h2 className="t-title text-[2rem] md:text-[2.5rem]">{quoteBookingHow.heading}</h2>
        <p className="mt-5 max-w-[32rem] text-[17px] leading-[1.6] text-muted-foreground">
          {quoteBookingHow.lede}
        </p>
        <ol className="mt-10 border-t border-border">
          {quoteBookingHow.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-border py-5 text-[15px] md:grid-cols-[5rem_1fr]"
            >
              <span className="t-num pt-[3px] text-[14px] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-medium">{step.title}</span>
                <span className="mt-1 block text-muted-foreground">{step.body}</span>
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {quoteBookingHow.paths.map((path) => (
            <div key={path.title} className="max-w-[26rem]">
              <p className="text-[15px] font-medium">{path.title}</p>
              <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">{path.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-16 text-[13px] font-medium text-muted-foreground">What you get</p>
      <ul className="mt-4 border-t border-border">
        {services.map((service) => (
          <li
            key={service.title}
            id={"id" in service ? service.id : undefined}
            className="grid scroll-mt-8 gap-3 border-b border-border py-6 md:grid-cols-12"
          >
            <h2 className="text-[15px] font-medium md:col-span-4">{service.title}</h2>
            <div className="md:col-span-8">
              <p className="text-[15px] leading-[1.55] text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-3 text-[14px] text-muted-foreground">
                {service.deliverables.join(" · ")}
              </p>
              <a href={service.workHref} className="link mt-3 inline-block text-[14px]">
                {service.workLabel}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-[15px]">
        <a href="/#contact" className="link">
          Get a quote
        </a>
      </p>
      <p className="mt-6 max-w-[32rem] text-[15px] leading-[1.55] text-muted-foreground">
        More on{" "}
        <a href="/blog/why-you-need-a-quote-system" className="link">
          why you need a quote system
        </a>{" "}
        and{" "}
        <a href="/blog/benefits-of-a-website-booking-system" className="link">
          the benefits of a booking system
        </a>
        .
      </p>
    </SectionFrame>
  );
}
