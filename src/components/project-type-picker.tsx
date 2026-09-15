"use client";

import { projectTypes } from "@/lib/site-config";
import { useProjectType } from "@/components/project-type-context";
import { cn } from "@/lib/utils";

type ProjectTypePickerProps = {
  id?: string;
  label?: string;
  align?: "center" | "start";
  size?: "default" | "large";
};

export function ProjectTypePicker({
  id = "project-type",
  label = "What are you looking for?",
  align = "center",
  size = "default",
}: ProjectTypePickerProps) {
  const large = size === "large";
  const { projectType, setProjectType } = useProjectType();

  return (
    <div className={cn(large ? "space-y-6" : "space-y-3")}>
      <p
        id={id}
        className={cn(
          large
            ? "font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
            : "text-sm font-medium text-foreground",
          align === "center" && "text-center",
        )}
      >
        {label}
      </p>
      <div
        className={cn(
          "flex flex-wrap",
          large ? "gap-3" : "gap-2",
          align === "center" ? "justify-center" : "justify-start",
        )}
        role="group"
        aria-labelledby={id}
      >
        {projectTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setProjectType(type)}
            className={cn(
              "rounded-full border transition-colors",
              large ? "px-5 py-3 text-base" : "px-3.5 py-1.5 text-sm",
              projectType === type
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
