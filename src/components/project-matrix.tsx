import Link from "next/link";
import { ExternalLink, MonitorPlay } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { MetroRateDemo } from "@/components/metrorate-demo";
import { VeloMailDemo } from "@/components/velomail-demo";
import { projects, type Project } from "@/lib/site-config";

function statusClass(tone: Project["statusTone"]) {
  if (tone === "live") return "text-accent-neon";
  if (tone === "development") return "text-muted-foreground/70";
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
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-glass-border bg-background/60 p-6 text-center">
      <MonitorPlay className="h-5 w-5 text-muted-foreground/50" aria-hidden="true" />
      <p className="max-w-xs font-mono text-[11px] tracking-tight text-muted-foreground/60">
        Live RadarAI deployment — semantic job matching and resume audit pipeline.
      </p>
      <Link
        href={siteConfig.links.radarai}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-background/40 px-3 py-1.5 font-mono text-xs tracking-tight text-foreground transition-colors hover:border-accent-neon/40 hover:bg-accent-neon/10"
      >
        Launch RadarAI
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}

export function ProjectMatrix() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-neon">// The Project Matrix</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          The Core Ecosystem
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-glass-border glass-panel p-6 transition-all duration-300 hover:border-accent-neon/30 md:p-8"
          >
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="flex flex-col">
                <span className="font-mono text-xs text-muted-foreground">
                  {project.name} // {project.number}
                </span>
                <p className={`mt-3 font-mono text-xs tracking-tight ${statusClass(project.statusTone)}`}>
                  [ STATUS: {project.status} ]
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60">
                      Core Utility
                    </p>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90">
                      {project.coreUtility}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60">
                      Functional Impact
                    </p>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {project.functionalImpact}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-glass-border bg-background/40 px-2.5 py-1 font-mono text-[11px] tracking-tight text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="transition-transform duration-300 group-hover:scale-[1.01]">
                <ProjectDemo project={project} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
