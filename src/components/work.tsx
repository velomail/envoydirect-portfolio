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

function PrimaryProof({ project }: { project: Project }) {
  const host = hostFromUrl(project.appUrl);

  return (
    <article className="grid gap-5 sm:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] sm:gap-6 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)]">
      <div className="relative aspect-[16/10] overflow-hidden border border-border bg-panel">
        <Image
          src={project.previewImage}
          alt={`${project.name} preview`}
          fill
          priority
          quality={90}
          sizes="(min-width: 768px) 192px, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="min-w-0 self-center">
        <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em]">{project.name}</h3>
        <p className="mt-2 max-w-[34rem] text-[15px] leading-[1.55] text-muted-foreground">
          Homeowners request a quote on their phone — every lead lands in one inbox.
        </p>
        {project.testimonial ? (
          <p className="mt-3 max-w-[34rem] text-[14px] leading-[1.5] text-muted-foreground">
            <span className="text-foreground">&ldquo;{project.testimonial.quote}&rdquo;</span>
            <span className="mt-1 block">{project.testimonial.attribution}</span>
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

function QuietProof({ project }: { project: Project }) {
  const host = hostFromUrl(project.appUrl);

  return (
    <article className="mt-5 border-t border-border pt-5 text-[15px] leading-[1.55] text-muted-foreground">
      <p>
        <span className="font-medium text-foreground">{project.name}</span>
        <span aria-hidden="true"> — </span>
        Booking on the page, large type, calm for people who aren&apos;t comfortable with tech.
      </p>
      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
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
  const [featured, ...rest] = projects;
  const secondary = rest[0];

  return (
    <SectionFrame id={id} label={label} className={cn(className, "lg:pt-20")}>
      {showStory && featured ? (
        <>
          <Reveal>
            <h2 className="t-title max-w-[28rem] text-[clamp(1.45rem,3.8vw,1.9rem)]">
              {workIntro.heading}
            </h2>
            <p className="mt-3 max-w-[32rem] text-[16px] leading-[1.55] text-muted-foreground">
              {workIntro.lede}
            </p>
          </Reveal>
          <div className="mt-7 md:mt-8">
            <Reveal>
              <PrimaryProof project={featured} />
            </Reveal>
            {secondary ? (
              <Reveal delay={60}>
                <QuietProof project={secondary} />
              </Reveal>
            ) : null}
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
                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-panel">
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
