import { formatPostDate, getAllPosts } from "@/lib/blog";
import { SectionFrame } from "@/components/section-frame";

export function BlogIndex() {
  const posts = getAllPosts();

  return (
    <SectionFrame id="blog" label="Blog">
      <h1 className="t-title text-[2.5rem] md:text-[3.25rem]">Notes on sites that bring in work.</h1>
      <p className="mt-6 max-w-[32rem] text-[17px] leading-[1.6] text-muted-foreground">
        Quote forms, booking pages, and the plain parts of a local business website — written for
        owners in Orillia and Simcoe County, not for a software pitch.
      </p>

      <ul className="mt-14 border-t border-border">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-border py-8">
            <p className="text-[13px] text-muted-foreground">
              {post.topic}
              <span aria-hidden="true"> · </span>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </p>
            <h2 className="t-title mt-3 max-w-[36rem] text-[1.75rem] md:text-[2.25rem]">
              <a href={`/blog/${post.slug}`} className="transition-colors hover:text-accent">
                {post.title}
              </a>
            </h2>
            <p className="mt-3 max-w-[36rem] text-[15px] leading-[1.55] text-muted-foreground">
              {post.description}
            </p>
            <p className="mt-4 text-[14px]">
              <a href={`/blog/${post.slug}`} className="link">
                Read
              </a>
            </p>
          </li>
        ))}
      </ul>
    </SectionFrame>
  );
}
