import { ArrowUpRight, Boxes, LayoutPanelTop, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { services } from "@/lib/site-config";

const serviceIcons = [Boxes, Workflow, LayoutPanelTop] as const;

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-border bg-secondary/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel>Services</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-6 text-balance font-serif text-4xl font-medium tracking-tight sm:text-5xl">
                What I take on
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                A focused set of services I can own end-to-end. If it&apos;s not a fit,
                I&apos;ll tell you honestly and point you somewhere better.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-medium text-foreground">Client work</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Taking on a limited number of projects. Preview links within the first week,
                  direct access throughout.
                </p>
                <a
                  href="#contact"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <Reveal key={service.title} delay={120 + index * 80}>
                  <article className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.4)]">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                      <p className="mt-1.5 text-muted-foreground">{service.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {service.deliverables.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
