"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import {
  type ProjectType,
  type SystemInterest,
} from "@/lib/site-config";

type ProjectTypeContextValue = {
  projectType: ProjectType;
  setProjectType: (type: ProjectType) => void;
  systemInterest: SystemInterest;
  setSystemInterest: (interest: SystemInterest) => void;
};

const defaultValue: ProjectTypeContextValue = {
  projectType: "Website",
  setProjectType: () => {},
  systemInterest: "Not sure which",
  setSystemInterest: () => {},
};

const ProjectTypeContext = createContext<ProjectTypeContextValue | null>(null);

export function ProjectTypeProvider({ children }: { children: ReactNode }) {
  const [projectType, setProjectType] = useState<ProjectType>("Website");
  const [systemInterest, setSystemInterest] =
    useState<SystemInterest>("Not sure which");

  return (
    <ProjectTypeContext.Provider
      value={{ projectType, setProjectType, systemInterest, setSystemInterest }}
    >
      {children}
    </ProjectTypeContext.Provider>
  );
}

export function useProjectType() {
  return useContext(ProjectTypeContext) ?? defaultValue;
}
