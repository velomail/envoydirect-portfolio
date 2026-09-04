import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { featuredProjects } from "@/lib/site-config";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <SectionLabel centered>Work</SectionLabel>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Work that shipped — and what&apos;s next
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Client sites, a live Chrome product, and a mobile job-matching app on the way —
            scoped builds with clear outcomes.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 max-w-5xl space-y-16 px-5 sm:px-8 sm:space-y-20">
        {featuredProjects.map((project, projectIndex) => {
          const hasLiveUrl = "appUrl" in project && Boolean(project.appUrl);
          const previewClassName =
            "group relative block aspect-[16/9] w-full overflow-hidden border-b border-border bg-secondary";
          const previewImage = (
            <Image
              src={project.previewImage}
              alt={`${project.name} app preview`}
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
                  Visit live app
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              ) : (
                "Coming soon"
              )}
            </span>
          );

          return (
            <div key={project.id}>
              <article className="overflow-hidden rounded-3xl border border-border bg-card">
                {hasLiveUrl ? (
                  <a
                    href={project.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${previewClassName} outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                    aria-label={`Open ${project.name} live app`}
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

                <div className="flex flex-col items-center p-6 text-center sm:p-8">
                  <div className="max-w-lg">
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
                </div>
              </article>

              <div className="mt-12 grid gap-10 text-center sm:grid-cols-3 sm:gap-8">
                <Reveal delay={60 + projectIndex * 40}>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Problem
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.caseStudy.problem}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={120 + projectIndex * 40}>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Approach
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.caseStudy.approach}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={180 + projectIndex * 40}>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Shipped
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.caseStudy.shipped}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
