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
      className={cn("page-wrap scroll-mt-6 pt-12 md:pt-16 lg:pt-24", className)}
    >
      <div className="border-t border-border pt-4 md:pt-5">
        {label ? <p className="t-label">{label}</p> : null}
        <div className={label ? "mt-6 md:mt-8" : undefined}>{children}</div>
      </div>
    </section>
  );
}
