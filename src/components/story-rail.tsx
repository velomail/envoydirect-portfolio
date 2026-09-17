"use client";

import { homeSectionIds, storyChapters } from "@/lib/site-config";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function StoryRail() {
  const active = useActiveSection(homeSectionIds);

  return (
    <nav
      aria-label="Page story"
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 2xl:block"
    >
      <ol className="pointer-events-auto space-y-3">
        {storyChapters.map((chapter) => {
          const isActive = active === chapter.id;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                className={cn(
                  "group flex items-baseline gap-3 text-[12px] transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="t-num text-[11px]">{chapter.num}</span>
                <span
                  className={cn(
                    "max-w-0 overflow-hidden tracking-[0.08em] uppercase transition-all duration-300 group-hover:max-w-[6rem]",
                    isActive && "max-w-[6rem]",
                  )}
                >
                  {chapter.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
