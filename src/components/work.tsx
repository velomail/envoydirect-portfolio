import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionFrame } from "@/components/section-frame";
import { featuredProjects, workIntro, type Project } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type WorkProps = {
  id?: string;
  label?: string;
  projects?: readonly Project[];
  className?: string;
  showStory?: boolean;
};

function hostFromUrl(url?: string) {
  return url ? url.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : null;
}

function shortQuote(quote: string, max = 110) {
  const trimmed = quote.trim();
  if (trimmed.length <= max) return trimmed;
  const cut = trimmed.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 60 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

function ProjectTile({ project, priority = false }: { project: Project; priority?: boolean }) {
  const host = hostFromUrl(project.appUrl);

  return (
    <article className="flex h-full min-w-0 flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-panel">
        <Image
          src={project.previewImage}
          alt={`${project.name} preview`}
          fill
          priority={priority}
          quality={90}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="mt-4 flex min-w-0 flex-1 flex-col">
        <h3 className="font-[family-name:var(--font-heading)] text-[1.05rem] font-semibold tracking-[-0.02em] sm:text-[1.1rem]">
          {project.name}
        </h3>
        <p className="mt-2 text-[14px] leading-[1.5] text-muted-foreground sm:text-[15px]">
          {project.proofLine ?? project.tagline}
        </p>
        {project.testimonial ? (
          <p className="mt-3 text-[13px] leading-[1.45] text-muted-foreground">
            <span className="text-foreground/85">&ldquo;{shortQuote(project.testimonial.quote)}&rdquo;</span>
            <span className="mt-1 block text-[12px]">{project.testimonial.attribution}</span>
          </p>
        ) : null}
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
          {project.appUrl ? (
            <a
              href={project.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link break-all sm:break-normal"
            >
              {host ?? "Live site"}
            </a>
          ) : null}
          <Link href={`/work/${project.id}`} className="link">
            Case study
          </Link>
        </p>
      </div>
    </article>
  );
}

export function Work({
  id = "work",
  label = "Proof",
  projects = featuredProjects,
  className,
  showStory = false,
}: WorkProps) {
  return (
    <SectionFrame id={id} label={label} className={cn(className, "lg:pt-16")}>
      {showStory ? (
        <>
          <Reveal>
            <h2 className="t-title max-w-[26rem] text-[clamp(1.2rem,2.6vw,1.5rem)]">
              {workIntro.heading}
            </h2>
            <p className="mt-2 max-w-[30rem] text-[14px] leading-[1.5] text-muted-foreground sm:text-[15px]">
              {workIntro.lede}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-8 sm:mt-7 md:grid-cols-2 md:gap-8 lg:gap-10">
            {projects.slice(0, 2).map((project, index) => (
              <Reveal key={project.id} delay={index * 60}>
                <ProjectTile project={project} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        </>
      ) : (
        <div>
          {projects.map((project, index) => {
            const hasLiveUrl = Boolean(project.appUrl);
            const host = hostFromUrl(project.appUrl);

            return (
              <Reveal key={project.id} delay={index * 80}>
                <article
                  className={cn(
                    "grid gap-6 lg:grid-cols-12 lg:gap-10",
                    index > 0 && "mt-16 border-t border-border pt-12 md:mt-24 md:pt-16",
                  )}
                >
                  <div className="min-w-0 lg:col-span-7">
                    <h2 className="t-display text-[clamp(2.1rem,7vw,4.25rem)]">{project.name}</h2>
                    <p className="mt-3 text-[14px] text-muted-foreground md:mt-4">{project.tagline}</p>
                    <p className="mt-5 max-w-[32rem] text-[17px] leading-[1.5] md:mt-9 md:text-[19px]">
                      {project.description}
                    </p>
                    {project.action ? (
                      <div className="mt-6 max-w-[32rem] border-t border-border pt-5 md:mt-9 md:pt-6">
                        <p className="text-[15px] font-medium">{project.action.title}</p>
                        <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">
                          {project.action.body}
                        </p>
                      </div>
                    ) : null}
                    <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px] md:mt-9">
                      {hasLiveUrl ? (
                        <a
                          href={project.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link break-all sm:break-normal"
                        >
                          {host ?? "Live site"}
                        </a>
                      ) : null}
                      {featuredProjects.some((item) => item.id === project.id) ? (
                        <Link href={`/work/${project.id}`} className="link">
                          Case study
                        </Link>
                      ) : null}
                    </p>
                  </div>
                  <div className="order-first min-w-0 lg:order-none lg:col-span-5">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-panel">
                      <Image
                        src={project.previewImage}
                        alt={`${project.name} preview`}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  {project.testimonial ? (
                    <blockquote className="max-w-[32rem] border-t border-border pt-5 md:pt-6 lg:col-span-7">
                      <p className="text-[17px] leading-[1.55]">
                        &ldquo;{project.testimonial.quote}&rdquo;
                      </p>
                      <footer className="mt-3 text-[14px] text-muted-foreground">
                        {project.testimonial.attribution}
                      </footer>
                    </blockquote>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      )}
    </SectionFrame>
  );
}
