import Link from "next/link";
import { ProjectVisual } from "@/components/project-visuals";
import { featuredProjects } from "@/lib/site-config";

function ProjectCard({
  project,
}: {
  project: (typeof featuredProjects)[number];
}) {
  const visual = (
    <div className="overflow-hidden rounded-2xl bg-cream-dark transition-transform duration-300 group-hover:-translate-y-0.5">
      <ProjectVisual type={project.visual} />
    </div>
  );

  return (
    <article className="group">
      {project.href.startsWith("http") ? (
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
          {visual}
        </a>
      ) : (
        <Link href={project.href} className="block">
          {visual}
        </Link>
      )}
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="text-base font-semibold text-ink">{project.name}</h3>
        <span className="section-label shrink-0 text-[10px]">{project.tag}</span>
      </div>
      <p className="mt-2 text-sm leading-6 text-body">{project.description}</p>
    </article>
  );
}

export function FeaturedSoftware() {
  return (
    <section id="software" aria-labelledby="software-heading" className="container-page border-t border-border/70 pb-16 pt-16 sm:pb-20 sm:pt-20">
      <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <h2 id="software-heading" className="heading-serif text-[clamp(2rem,4vw,2.75rem)] leading-tight">
          Featured Software
        </h2>
        <p className="section-label sm:pb-1">01 — PROPRIETARY TOOLS</p>
      </div>

      <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
