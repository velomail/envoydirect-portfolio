import type { ReactNode } from "react";
import type { BlogBlock } from "@/lib/blog";

function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const href = match[2];
    const external = href.startsWith("http");
    nodes.push(
      <a
        key={`${href}-${match.index}`}
        href={href}
        className="link"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}

export function BlogBody({ blocks }: { blocks: readonly BlogBlock[] }) {
  return (
    <div className="mt-8 max-w-[40rem] md:mt-12">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        if (block.type === "h2") {
          return (
            <h2 key={key} className="t-title mt-10 text-[clamp(1.45rem,4.5vw,2.25rem)] md:mt-14">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={key} className="mt-6 list-disc space-y-2 pl-5 text-[17px] leading-[1.6] text-muted-foreground">
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={key} className="mt-6 text-[17px] leading-[1.6] text-muted-foreground">
            <RichText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
