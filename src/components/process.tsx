import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { processSteps } from "@/lib/site-config";

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Process</SectionLabel>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            How we&apos;d work together
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Scoped timelines, preview links early, and direct communication — no hand-offs, no
            surprises.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.step} delay={140 + index * 80}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-foreground/20">
                <span className="font-mono text-xs text-muted-foreground">{step.step}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="text-sm text-muted-foreground">
              Receive a Reply in Less Than 48 Hours
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
