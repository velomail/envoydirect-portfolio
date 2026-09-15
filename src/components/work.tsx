import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  sectionSplitAsideClass,
  sectionSplitClass,
  sectionSplitStartClass,
  SectionIntro,
} from "@/components/section-intro";
import { featuredProjects, type Project } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type WorkProps = {
  id?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  projects?: readonly Project[];
  className?: string;
  compact?: boolean;
  sideBySide?: boolean;
};

export function Work({
  id = "work",
  label = "Work",
  title = "Sites built for real businesses",
  subtitle = "A local service company that now takes quotes online, and software designed so anyone can use it — not just tech people.",
  projects = featuredProjects,
  className,
  compact = false,
  sideBySide = false,
}: WorkProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 border-t border-border py-20 sm:py-28", className)}
    >
      <SectionIntro label={label} title={title} subtitle={subtitle} />

      <div
        className={cn(
          sideBySide
            ? sectionSplitClass
            : "mx-auto mt-10 max-w-5xl space-y-16 px-5 sm:space-y-20 sm:px-8",
        )}
      >
        {projects.map((project, projectIndex) => {
          const connected = compact && sideBySide;
          const hasLiveUrl = Boolean(project.appUrl);
          const previewClassName = cn(
            "group relative block aspect-[16/9] w-full overflow-hidden bg-secondary",
            connected ? "rounded-2xl" : "border-b border-border",
          );
          const previewImage = (
            <Image
              src={project.previewImage}
              alt={`${project.name} preview`}
              fill
              className={`object-cover object-top${hasLiveUrl ? " transition-transform duration-500 group-hover:scale-[1.02]" : ""}`}
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority={projectIndex === 0}
            />
          );
          const previewChip = (
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
              {hasLiveUrl ? (
                <>
                  Visit live site
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              ) : (
                "Coming soon"
              )}
            </span>
          );

          return (
            <Reveal key={project.id} delay={projectIndex * 80}>
              <article
                className={cn(
                  connected
                    ? cn(
                        projectIndex === 0 && sectionSplitStartClass,
                        projectIndex === 1 && sectionSplitAsideClass,
                      )
                    : "overflow-hidden rounded-3xl border border-border bg-card",
                )}
              >
                {hasLiveUrl ? (
                  <a
                    href={project.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${previewClassName} outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                    aria-label={`Open ${project.name} live site`}
                  >
                    {previewImage}
                    {previewChip}
                  </a>
                ) : (
                  <div className={previewClassName} aria-label={`${project.name} coming soon`}>
                    {previewImage}
                    {previewChip}
                  </div>
                )}

                <div
                  className={cn(
                    "flex w-full flex-col items-center text-center",
                    connected ? "px-0 pt-6 sm:pt-8" : "p-6 sm:p-8",
                  )}
                >
                  <div className="w-full">
                    {compact ? (
                      <>
                        <h3 className="font-serif text-2xl font-medium tracking-tight">
                          {project.name}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {project.tagline}
                        </p>
                        <Link
                          href={`/work/${project.id}`}
                          className="group mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                        >
                          Case study
                          <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-wrap items-center justify-center gap-3">
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
                        <ul className="mt-4 flex flex-wrap justify-center gap-2">
                          {project.outcomes.map((item) => (
                            <li
                              key={item}
                              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-xs text-muted-foreground">Built on {project.stackLine}</p>
                      </>
                    )}
                  </div>
                </div>
              </article>

              {compact ? null : (
                <div className="mt-12 grid gap-10 text-center sm:grid-cols-3 sm:gap-8">
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Problem
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.caseStudy.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Approach
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.caseStudy.approach}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Result
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.caseStudy.result}
                    </p>
                  </div>
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
