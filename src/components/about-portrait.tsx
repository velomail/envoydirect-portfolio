import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type AboutPortraitProps = {
  className?: string;
  priority?: boolean;
};

export function AboutPortrait({ className, priority = false }: AboutPortraitProps) {
  return (
    <figure className={cn("w-full overflow-hidden border border-border bg-panel text-left", className)}>
      <div className="relative aspect-[4/5] w-full bg-panel">
        <Image
          src="/jesse-portrait.png"
          alt="Portrait of Jesse, founder of Envoy Direct"
          fill
          quality={90}
          className="object-cover object-[center_25%]"
          sizes="(max-width: 767px) 100vw, 256px"
          priority={priority}
        />
      </div>
      <figcaption className="border-t border-border px-5 py-4">
        <p className="text-sm font-medium">Jesse — Founder</p>
        <p className="text-xs text-muted-foreground">
          {siteConfig.name} · {siteConfig.locationShort}
        </p>
      </figcaption>
    </figure>
  );
}
