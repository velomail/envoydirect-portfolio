"use client";

import { contactFollowUps, projectTypes, systemInterests } from "@/lib/site-config";
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
  const { projectType, setProjectType, systemInterest, setSystemInterest } =
    useProjectType();
  const showSystemInterest = contactFollowUps[projectType].showSystemInterest;

  return (
    <div className="space-y-6">
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

      {showSystemInterest ? (
        <div>
          <p
            id={`${id}-system`}
            className="text-[13px] font-medium text-muted-foreground"
          >
            Which system?
          </p>
          <div
            className="mt-3 border-t border-border"
            role="group"
            aria-labelledby={`${id}-system`}
          >
            {systemInterests.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => setSystemInterest(interest)}
                className={cn(
                  "block w-full border-b border-border py-2.5 text-left text-[15px] transition-colors",
                  systemInterest === interest
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-pressed={systemInterest === interest}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
