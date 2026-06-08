"use client";

import { useState } from "react";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { featuredProjects } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ProjectId = (typeof featuredProjects)[number]["id"];

export function Work() {
  const [active, setActive] = useState<ProjectId>(featuredProjects[0].id);
  const current = featuredProjects.find((project) => project.id === active) ?? featuredProjects[0];

  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <SectionLabel centered>Work</SectionLabel>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Proof I ship
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Three studio products I&apos;ve designed, built, and shipped — real tools, real
            stacks.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div
            role="tablist"
            aria-label="Projects"
            className="relative z-20 mt-10 inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-border bg-card p-1"
          >
            {featuredProjects.map((project) => (
              <button
                key={project.id}
                id={`work-tab-${project.id}`}
                type="button"
                role="tab"
                aria-selected={active === project.id}
                aria-controls={`work-panel-${project.id}`}
                onClick={() => setActive(project.id)}
                className={cn(
                  "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === project.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {project.name}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-5 sm:px-8">
        {featuredProjects.map((project) => {
          const isActive = project.id === active;

          return (
            <article
              key={project.id}
              id={`work-panel-${project.id}`}
              role="tabpanel"
              aria-labelledby={`work-tab-${project.id}`}
              tabIndex={isActive ? 0 : -1}
              hidden={!isActive}
              className="overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-secondary">
                <div className="absolute inset-0 flex animate-in fade-in flex-col items-center justify-center gap-3 p-6 text-center duration-500">
                  <span className="flex size-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
                    <ImageIcon className="size-5" />
                  </span>
                  <p className="font-serif text-2xl font-medium tracking-tight text-foreground">
                    Preview coming soon
                  </p>
                  <p className="text-sm text-muted-foreground">{project.name}</p>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-4 rounded-2xl border border-dashed border-border"
                />
              </div>
              <div className="flex flex-col gap-5 p-6 text-left sm:flex-row sm:items-start sm:justify-between sm:p-8">
                <div className="max-w-lg">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-2xl font-medium tracking-tight">
                      {project.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 text-base font-medium text-foreground">{project.tagline}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Discuss yours
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
