import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { featuredProjects, siteConfig } from "@/lib/site-config";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.id === slug);

  if (!project) {
    return { title: "Case study" };
  }

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}/work/${project.id}` },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <article className="page-wrap pb-14 pt-10 md:pb-28 md:pt-32">
          <div className="border-t border-border pt-4 md:pt-6">
            <p className="text-[13px] font-medium text-muted-foreground">Case study</p>
            <div className="mt-8 md:mt-14">
              <h1 className="t-display text-[clamp(2.35rem,9vw,5.5rem)]">
                {project.name}
              </h1>
              <p className="mt-3 text-[14px] text-muted-foreground md:mt-4">{project.tagline}</p>
              <p className="mt-6 max-w-[32rem] text-[17px] leading-[1.5] md:mt-9 md:text-[19px]">{project.description}</p>
              <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px] md:mt-9">
                {project.appUrl ? (
                  <a
                    href={project.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Visit the site
                  </a>
                ) : null}
                {project.relatedService ? (
                  <a href={project.relatedService.href} className="link">
                    {project.relatedService.label}
                  </a>
                ) : null}
              </p>

              {project.action ? (
                <div
                  id="on-the-site"
                  className="mt-10 max-w-[32rem] scroll-mt-8 border-t border-border pt-6 md:mt-14 md:pt-8"
                >
                  <p className="t-label text-muted-foreground">On the site</p>
                  <h2 className="t-title mt-3 text-[clamp(1.45rem,4.5vw,2.25rem)] md:mt-4">
                    {project.action.title}
                  </h2>
                  <p className="mt-4 text-[17px] leading-[1.6] text-muted-foreground">
                    {project.action.body}
                  </p>
                </div>
              ) : null}

              <figure className="mt-10 border border-border bg-panel md:mt-14">
                <div className="relative aspect-[16/9] bg-panel">
                  <Image
                    src={project.previewImage}
                    alt={`${project.name} website`}
                    fill
                    quality={90}
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 1120px"
                    priority
                  />
                </div>
              </figure>

              <div
                className="mt-10 grid gap-8 border-t border-border pt-8 md:mt-16 md:grid-cols-3"
              >
                <div>
                  <p className="t-label text-muted-foreground">Need</p>
                  <p className="mt-3 text-[15px] leading-[1.55] text-muted-foreground">
                    {project.caseStudy.problem}
                  </p>
                </div>
                <div>
                  <p className="t-label text-muted-foreground">Build</p>
                  <p className="mt-3 text-[15px] leading-[1.55] text-muted-foreground">
                    {project.caseStudy.approach}
                  </p>
                </div>
                <div>
                  <p className="t-label text-muted-foreground">Result</p>
                  <p className="mt-3 text-[15px] leading-[1.55] text-muted-foreground">
                    {project.caseStudy.result}
                  </p>
                </div>
              </div>

              <p className="mt-10 text-[13px] text-muted-foreground">
                Built on {project.stackLine}
              </p>

              {project.testimonial ? (
                <blockquote className="mt-10 max-w-[36rem] border-t border-border pt-6 md:mt-14 md:pt-8">
                  <p className="t-title text-[clamp(1.45rem,4.5vw,2.25rem)] leading-[1.25]">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-5 text-[14px] text-muted-foreground">
                    {project.testimonial.attribution}
                  </footer>
                </blockquote>
              ) : null}

              <div className="mt-12 grid gap-8 border-t border-border pt-8 md:mt-16 md:grid-cols-2 md:gap-10 md:pt-10">
                <div className="max-w-[26rem]">
                  <p className="text-[15px] font-medium">Like what you see?</p>
                  <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">
                    I take on a small number of local business projects at a time. Tell me what you
                    need and I&apos;ll reply within 48 hours.
                  </p>
                  <Link href="/#contact" className="link mt-3 inline-block text-[14px]">
                    Get a quote
                  </Link>
                </div>
                <div className="max-w-[26rem]">
                  <p className="text-[15px] font-medium">More work</p>
                  <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">
                    Websites and booking sites for Orillia and Simcoe County.
                  </p>
                  <Link href="/#work" className="link mt-3 inline-block text-[14px]">
                    Back to work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </PageShell>
  );
}
