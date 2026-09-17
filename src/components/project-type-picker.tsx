"use client";

import { projectTypes } from "@/lib/site-config";
import { useProjectType } from "@/components/project-type-context";
import { cn } from "@/lib/utils";

type ProjectTypePickerProps = {
  id?: string;
  label?: string;
};

export function ProjectTypePicker({
  id = "project-type",
  label = "What are you looking for?",
}: ProjectTypePickerProps) {
  const { projectType, setProjectType } = useProjectType();

  return (
    <div>
      <p id={id} className="text-[13px] font-medium text-muted-foreground">
        {label}
      </p>
      <div className="mt-3 border-t border-border" role="group" aria-labelledby={id}>
        {projectTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setProjectType(type)}
            className={cn(
              "block w-full border-b border-border py-2.5 text-left text-[15px] transition-colors",
              projectType === type
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-pressed={projectType === type}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
