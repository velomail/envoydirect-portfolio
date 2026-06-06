import Link from "next/link";
import { ExternalLink, MonitorPlay } from "lucide-react";
import { MetroRateDemo } from "@/components/metrorate-demo";
import { VeloMailDemo } from "@/components/velomail-demo";
import {
  cardShell,
  focusRing,
  mobileStackCenter,
  sectionEyebrow,
  sectionHeading,
  sectionPadding,
  sectionShell,
  sectionTitle,
} from "@/lib/layout-classes";
import { projects, siteConfig, type Project } from "@/lib/site-config";

function statusClass(tone: Project["statusTone"]) {
  if (tone === "live") return "text-accent-neon";
  if (tone === "development") return "text-muted-foreground/80";
  return "text-muted-foreground";
}

function ProjectDemo({ project }: { project: Project }) {
  if (project.demo === "velomail") {
    return <VeloMailDemo />;
  }

  if (project.demo === "metrorate") {
    return <MetroRateDemo />;
  }

  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-glass-border bg-background/60 p-5 text-center sm:aspect-video sm:p-6`}
    >
      <MonitorPlay className="h-5 w-5 text-muted-foreground/60" aria-hidden="true" />
      <p className="max-w-xs text-pretty font-mono text-xs leading-6 tracking-tight text-muted-foreground">
        Live RadarAI deployment — semantic job matching and resume audit pipeline.
      </p>
      <Link
        href={siteConfig.links.radarai}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-11 items-center gap-2 rounded-lg border border-glass-border bg-background/40 px-4 py-2.5 font-mono text-xs tracking-tight text-foreground transition-colors hover:border-accent-neon/40 hover:bg-accent-neon/10 ${focusRing}`}
      >
        Launch RadarAI
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only"> (opens in new tab)</span>
      </Link>
    </div>
  );
}

export function ProjectMatrix() {
  return (
    <section
      aria-labelledby="projects-heading"
      className={`${sectionShell} ${sectionPadding}`}
    >
      <div className={sectionHeading}>
        <p className={sectionEyebrow}>// The Project Matrix</p>
        <h2 id="projects-heading" className={sectionTitle}>
          The Core Ecosystem
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground md:mx-0">
          Production software products and startup utilities built for sales operations,
          email deliverability, and AI-assisted job search workflows.
        </p>
      </div>

      <div className="flex flex-col gap-5 sm:gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            id={project.slug}
            aria-labelledby={`${project.slug}-title`}
            className={`${cardShell} group transition-all duration-300 hover:border-accent-neon/30`}
          >
            <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-8">
              <div className={`${mobileStackCenter} md:items-start md:text-left`}>
                <h3 id={`${project.slug}-title`} className="font-mono text-xs text-muted-foreground">
                  {project.name} // {project.number}
                </h3>
                <p className={`mt-3 font-mono text-xs tracking-tight ${statusClass(project.statusTone)}`}>
                  [ STATUS: {project.status} ]
                </p>

                <div className="mt-5 space-y-5 sm:mt-6">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:tracking-widest">
                      Core Utility
                    </h4>
                    <p className="mt-2 text-pretty text-sm leading-7 text-foreground/90">
                      {project.coreUtility}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:tracking-widest">
                      Functional Impact
                    </h4>
                    <p className="mt-2 text-pretty text-sm leading-7 text-muted-foreground">
                      {project.functionalImpact}
                    </p>
                  </div>
                </div>

                <ul
                  className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 md:justify-start"
                  aria-label={`${project.name} technology stack`}
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-glass-border bg-background/40 px-2.5 py-1.5 font-mono text-[11px] tracking-tight text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full transition-transform duration-300 group-hover:scale-[1.01]">
                <ProjectDemo project={project} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
