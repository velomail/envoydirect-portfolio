import { Boxes, Gauge, Workflow } from "lucide-react";
import {
  cardShell,
  mobileStackCenter,
  sectionEyebrow,
  sectionHeading,
  sectionPadding,
  sectionShell,
  sectionTitle,
} from "@/lib/layout-classes";
import { services } from "@/lib/site-config";

const icons = {
  boxes: Boxes,
  workflow: Workflow,
  gauge: Gauge,
} as const;

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className={`${sectionShell} ${sectionPadding}`}
    >
      <div className={sectionHeading}>
        <p className={sectionEyebrow}>// Freelance Funnel</p>
        <h2 id="services-heading" className={sectionTitle}>
          Available Commercial Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground md:mx-0">
          Hire EnvoyDirect for startup MVP development, automation consulting, and product
          marketing sites optimized for search and conversion.
        </p>
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <article
              key={service.title}
              className={`${cardShell} group ${mobileStackCenter} transition-all duration-300 hover:border-accent-neon/30 hover:bg-foreground/[0.02] md:items-start md:text-left`}
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-glass-border bg-accent-neon/10 transition-colors group-hover:bg-accent-neon/20 sm:mb-5"
                aria-hidden="true"
              >
                <Icon className="h-5 w-5 text-accent-neon" />
              </div>
              <h3 className="text-lg font-medium leading-7 tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
