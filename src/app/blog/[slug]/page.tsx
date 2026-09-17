import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogBody } from "@/components/blog-body";
import { PageShell } from "@/components/page-shell";
import {
  formatPostDate,
  getAllPosts,
  getPost,
  getRelatedPosts,
} from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Blog" };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: [...post.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: `${post.date}T12:00:00-04:00`,
      authors: [siteConfig.founder],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post);
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.founder,
      url: siteConfig.links.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: url,
    keywords: post.keywords.join(", "),
    inLanguage: "en-CA",
  };

  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="page-wrap pb-20 pt-20 md:pb-28 md:pt-32">
          <div className="border-t border-border pt-5 md:pt-6">
            <p className="text-[13px] font-medium text-muted-foreground">
              <a href="/blog" className="transition-colors hover:text-foreground">
                Blog
              </a>
              <span aria-hidden="true"> · </span>
              {post.topic}
              <span aria-hidden="true"> · </span>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </p>
            <h1 className="t-title mt-10 max-w-[40rem] text-[2.5rem] md:mt-14 md:text-[3.25rem]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-[36rem] text-[17px] leading-[1.6] text-muted-foreground">
              {post.description}
            </p>

            <BlogBody blocks={post.body} />

            <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
              <div className="max-w-[26rem]">
                <p className="text-[15px] font-medium">Want this on your site?</p>
                <p className="mt-2 text-[15px] leading-[1.55] text-muted-foreground">
                  I build the page, the button, and the inbox for local businesses in Orillia and
                  Simcoe County.
                </p>
                <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
                  <a href="/#contact" className="link">
                    Get a quote
                  </a>
                  <a href={post.serviceHref} className="link">
                    Services
                  </a>
                  {post.workHref ? (
                    <a href={post.workHref} className="link">
                      {post.workLabel ?? "See an example"}
                    </a>
                  ) : null}
                </p>
              </div>
              <div className="max-w-[26rem]">
                <p className="text-[15px] font-medium">Keep reading</p>
                <ul className="mt-3 space-y-2 text-[15px]">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <a href={`/blog/${item.slug}`} className="link">
                        {item.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="/blog" className="link">
                      All posts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>
    </PageShell>
  );
}
