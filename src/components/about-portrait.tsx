import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type AboutPortraitProps = {
  className?: string;
  priority?: boolean;
};

export function AboutPortrait({ className, priority = false }: AboutPortraitProps) {
  return (
    <figure
      className={cn(
        "mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl bg-secondary text-left ring-1 ring-border/50",
        className,
      )}
    >
      <div className="relative aspect-[4/5] w-full bg-secondary">
        <Image
          src="/jesse-portrait.png"
          alt="Portrait of Jesse, founder of Envoy Direct"
          fill
          className="object-cover object-[center_25%]"
          sizes="(max-width: 1280px) 280px, 320px"
          priority={priority}
        />
      </div>
      <figcaption className="flex items-center justify-between gap-2 border-t border-border px-5 py-4">
        <div>
          <p className="text-sm font-medium text-foreground">Jesse — Founder</p>
          <p className="text-xs text-muted-foreground">
            {siteConfig.name} · {siteConfig.locationShort}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-success" />
          Available
        </span>
      </figcaption>
    </figure>
  );
}
