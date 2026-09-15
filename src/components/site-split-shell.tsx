import { cn } from "@/lib/utils";

export const splitPanelClass =
  "flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-14 xl:min-h-[calc(100svh-5.5rem)] xl:py-10";

type SiteSplitShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function SiteSplitShell({ children, className }: SiteSplitShellProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1600px] border-border xl:border-x", className)}>
      {children}
    </div>
  );
}

type SplitAsideCtaProps = {
  title?: string;
  body?: string;
};

export function SplitAsideCta({
  title = "Ready to talk?",
  body = "Tell me what you need and I'll reply within 48 hours with honest next steps.",
}: SplitAsideCtaProps) {
  return (
    <aside
      className="hidden flex-col justify-center bg-secondary/30 px-8 py-14 xl:flex xl:min-h-[calc(100svh-5.5rem)] xl:border-l xl:border-border"
    >
      <p className="font-serif text-3xl font-medium tracking-tight">{title}</p>
      <p className="mt-4 max-w-sm text-pretty text-muted-foreground">{body}</p>
      <a
        href="/#contact"
        className="mt-8 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
      >
        Get a quote
      </a>
    </aside>
  );
}
