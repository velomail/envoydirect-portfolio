import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SiteSplitShell, SplitAsideCta } from "@/components/site-split-shell";
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

  const isGunning = project.id === "gunning-grounds";

  return (
    <>
      <SiteNav />
      <SiteSplitShell>
        <main id="main-content" tabIndex={-1} className="xl:grid xl:grid-cols-2 xl:divide-x xl:divide-border">
          <article className="px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 xl:max-w-none">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Case study
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
              {project.status}
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.appUrl ? (
              <a
                href={project.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Visit live site
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : null}
            {project.relatedService ? (
              <a
                href={project.relatedService.href}
                className="inline-flex rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {project.relatedService.label}
              </a>
            ) : null}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-3xl border border-dashed border-border bg-secondary/60">
              <div className="flex aspect-[16/9] items-center justify-center px-6 text-center">
                <p className="text-sm text-muted-foreground">Before: previous site (photo to add)</p>
              </div>
              <figcaption className="border-t border-dashed border-border px-4 py-3 text-xs text-muted-foreground">
                Before: previous site
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative aspect-[16/9] bg-secondary">
                <Image
                  src={project.previewImage}
                  alt={`After: redesigned ${project.name} site`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
                After: redesigned site
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
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
            <div id={isGunning ? "quote-flow" : undefined} className="scroll-mt-24">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Result
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.caseStudy.result}
              </p>
            </div>
          </div>

          <p className="mt-10 text-xs text-muted-foreground">Built on {project.stackLine}</p>

          {project.testimonial ? (
            <blockquote className="mt-14 rounded-3xl border border-border bg-card px-6 py-8 sm:px-8">
              <p className="font-serif text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-5 text-sm text-muted-foreground">
                — {project.testimonial.attribution}
              </footer>
            </blockquote>
          ) : null}

          <div className="mt-12">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Get a quote
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          </article>
          <SplitAsideCta
            title="Like what you see?"
            body="I take on a small number of local business projects at a time. Tell me what you need and I'll reply within 48 hours."
          />
        </main>
      </SiteSplitShell>
      <SiteFooter />
    </>
  );
}
