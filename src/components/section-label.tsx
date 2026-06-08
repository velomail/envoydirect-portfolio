import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  centered,
}: {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
        centered && "justify-center",
        className,
      )}
    >
      <span className="h-px w-6 bg-border" aria-hidden="true" />
      {children}
    </div>
  );
}
