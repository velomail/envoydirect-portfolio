import { cn } from "@/lib/utils";

type SectionFrameProps = {
  id?: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionFrame({ id, label, children, className }: SectionFrameProps) {
  return (
    <section
      id={id}
      className={cn("page-wrap scroll-mt-6 pt-12 md:pt-16 lg:pt-32", className)}
    >
      <div className="border-t border-border pt-4 md:pt-6">
        {label ? (
          <p className="text-[13px] font-medium text-muted-foreground">{label}</p>
        ) : null}
        <div className={label ? "mt-8 md:mt-14" : undefined}>{children}</div>
      </div>
    </section>
  );
}
