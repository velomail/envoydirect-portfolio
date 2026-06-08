import { services } from "@/lib/site-config";

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="container-page border-t border-border/70 pb-16 pt-16 sm:pb-20 sm:pt-20">
      <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <h2 id="services-heading" className="heading-serif text-[clamp(2rem,4vw,2.75rem)] leading-tight">
          Services
        </h2>
        <p className="section-label sm:pb-1">02 — FREELANCE ENGINEERING</p>
      </div>

      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {services.map((service) => (
          <article key={service.title}>
            <h3 className="flex items-start gap-2 text-[15px] font-semibold leading-6 text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-body">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
