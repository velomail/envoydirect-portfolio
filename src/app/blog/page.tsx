import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { BlogIndex } from "@/components/blog-index";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical writing on quote forms, website booking, and local business websites in Orillia and Simcoe County.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description:
      "Quote forms, booking pages, and websites that bring in work for local businesses.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    url: `${siteConfig.url}/blog`,
    description:
      "Practical writing on quote forms, website booking, and local business websites in Orillia and Simcoe County.",
    blogPost: getAllPosts().map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.date,
      description: post.description,
    })),
  };

  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BlogIndex />
      </main>
    </PageShell>
  );
}
