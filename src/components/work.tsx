import Link from "next/link";
import { ProjectShot } from "@/components/project-shot";
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

export function Work({
  id = "work",
  label = "Work",
  projects = featuredProjects,
  className,
  showStory = false,
}: WorkProps) {
  const Heading = showStory ? "h3" : "h2";
  return (
    <SectionFrame id={id} label={label} className={className}>
      {showStory ? (
        <Reveal>
          <h2 className="t-title max-w-[32rem] text-[2rem] md:text-[2.5rem]">{workIntro.heading}</h2>
          <p className="mt-5 max-w-[32rem] text-[17px] leading-[1.6] text-muted-foreground">
            {workIntro.lede}
          </p>
        </Reveal>
      ) : null}
      <div className={showStory ? "mt-16 md:mt-20" : undefined}>
        {projects.map((project, index) => {
          const hasLiveUrl = Boolean(project.appUrl);
          const host = project.appUrl
            ? project.appUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
            : null;

          return (
            <Reveal key={project.id} delay={index * 80}>
              <article
                className={cn(
                  "grid gap-10 md:grid-cols-12 md:gap-10",
                  index > 0 && "mt-24 border-t border-border pt-16 md:mt-32 md:pt-20",
                )}
              >
                <div className="md:col-span-7">
                  <Heading className="t-display text-[3.25rem] sm:text-[4rem] md:text-[5.5rem]">
                    {project.name}
                  </Heading>
                  <p className="mt-4 text-[14px] text-muted-foreground">{project.tagline}</p>
                  <p className="mt-9 max-w-[32rem] text-[19px] leading-[1.5]">
                    {project.description}
                  </p>
                  {project.action ? (
                    <div className="mt-9 max-w-[32rem] border-t border-border pt-6">
                      <p className="text-[15px] font-medium">{project.action.title}</p>
                      <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">
                        {project.action.body}
                      </p>
                    </div>
                  ) : null}
                  <p className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
                    {hasLiveUrl ? (
                      <a
                        href={project.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
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
                <div className="md:col-span-5">
                  <ProjectShot
                    src={project.previewImage}
                    alt={`${project.name} preview`}
                    priority={index === 0}
                  />
                </div>
                {project.testimonial ? (
                  <blockquote className="max-w-[32rem] border-t border-border pt-6 md:col-span-7">
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
      {showStory ? (
        <p className="mt-16 text-[15px] md:mt-20">
          <a href="#process" className="link">
            Next — how a project runs
          </a>
        </p>
      ) : null}
    </SectionFrame>
  );
}
