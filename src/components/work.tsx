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

function FeaturedCase({ project }: { project: Project }) {
  const hasLiveUrl = Boolean(project.appUrl);
  const host = project.appUrl
    ? project.appUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
    : null;

  return (
    <article className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div className="min-w-0 lg:col-span-7">
        <h3 className="t-display text-[clamp(1.85rem,6vw,3.25rem)]">{project.name}</h3>
        <p className="mt-3 text-[14px] text-muted-foreground">{project.tagline}</p>
        <p className="mt-4 max-w-[32rem] text-[17px] leading-[1.5]">{project.description}</p>
        {project.action ? (
          <div className="mt-5 max-w-[32rem] border-t border-border pt-4">
            <p className="text-[15px] font-medium">{project.action.title}</p>
            <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">
              {project.action.body}
            </p>
          </div>
        ) : null}
        <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
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
          <Link href={`/work/${project.id}`} className="link">
            Case study
          </Link>
        </p>
      </div>
      <div className="order-first min-w-0 lg:order-none lg:col-span-5">
        <ProjectShot src={project.previewImage} alt={`${project.name} preview`} priority />
      </div>
      {project.testimonial ? (
        <blockquote className="max-w-[32rem] border-t border-border pt-5 lg:col-span-7">
          <p className="text-[17px] leading-[1.55]">&ldquo;{project.testimonial.quote}&rdquo;</p>
          <footer className="mt-3 text-[14px] text-muted-foreground">
            {project.testimonial.attribution}
          </footer>
        </blockquote>
      ) : null}
    </article>
  );
}

function CompactCase({ project }: { project: Project }) {
  const hasLiveUrl = Boolean(project.appUrl);
  const host = project.appUrl
    ? project.appUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
    : null;

  return (
    <article className="mt-10 grid gap-5 border-t border-border pt-8 md:mt-12 md:grid-cols-[minmax(0,8rem)_minmax(0,1fr)] md:gap-8 md:pt-10 lg:mt-14">
      <div className="min-w-0 max-w-[10rem] md:max-w-none">
        <ProjectShot src={project.previewImage} alt={`${project.name} preview`} />
      </div>
      <div className="min-w-0">
        <h3 className="text-[1.25rem] font-medium tracking-[-0.02em]">{project.name}</h3>
        <p className="mt-2 max-w-[36rem] text-[15px] leading-[1.55] text-muted-foreground">
          Booking-first site — large type, calm pages, and a clear way to book on the phone.
        </p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
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
  label = "Work",
  projects = featuredProjects,
  className,
  showStory = false,
}: WorkProps) {
  const [featured, ...rest] = projects;
  const secondary = rest[0];

  return (
    <SectionFrame id={id} label={label} className={cn(className, "lg:pt-20")}>
      {showStory && featured ? (
        <>
          <Reveal>
            <h2 className="t-title max-w-[32rem] text-[clamp(1.5rem,4vw,2rem)]">{workIntro.heading}</h2>
            <p className="mt-3 max-w-[32rem] text-[17px] leading-[1.6] text-muted-foreground">
              {workIntro.lede}
            </p>
          </Reveal>
          <div className="mt-8 md:mt-10">
            <Reveal>
              <FeaturedCase project={featured} />
            </Reveal>
            {secondary ? (
              <Reveal delay={60}>
                <CompactCase project={secondary} />
              </Reveal>
            ) : null}
          </div>
        </>
      ) : (
        <div>
          {projects.map((project, index) => {
            const hasLiveUrl = Boolean(project.appUrl);
            const host = project.appUrl
              ? project.appUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
              : null;

            return (
              <Reveal key={project.id} delay={index * 80}>
                <article
                  className={cn(
                    "grid gap-6 lg:grid-cols-12 lg:gap-10",
                    index > 0 && "mt-16 border-t border-border pt-12 md:mt-24 md:pt-16",
                  )}
                >
                  <div className="min-w-0 lg:col-span-7">
                    <h2 className="t-display text-[clamp(2.35rem,9vw,5.5rem)]">{project.name}</h2>
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
                    <ProjectShot
                      src={project.previewImage}
                      alt={`${project.name} preview`}
                      priority={index === 0}
                    />
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
