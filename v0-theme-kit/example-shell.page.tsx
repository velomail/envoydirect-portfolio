/**
 * Reference page shell — adapt for your app's entry page.
 */
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/section-label";

export default function ExamplePage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <span className="text-sm font-semibold tracking-[0.12em]">YOUR APP</span>
          <a
            href="#cta"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get started
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-accent/40 blur-3xl"
          />
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionLabel>Product</SectionLabel>
            <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              Headline that ships.{" "}
              <span className="text-muted-foreground">Not slideware.</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-relaxed">
              Supporting copy in muted sans. One clear value prop, no fluff.
            </p>
          </div>
        </section>

        <section id="cta" className="border-t border-border bg-secondary/40 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
            <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              Ready to start?
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
