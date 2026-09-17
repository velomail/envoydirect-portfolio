"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { type ProjectType } from "@/lib/site-config";

type ProjectTypeContextValue = {
  projectType: ProjectType;
  setProjectType: (type: ProjectType) => void;
};

const defaultValue: ProjectTypeContextValue = {
  projectType: "New website",
  setProjectType: () => {},
};

const ProjectTypeContext = createContext<ProjectTypeContextValue | null>(null);

export function ProjectTypeProvider({ children }: { children: ReactNode }) {
  const [projectType, setProjectType] = useState<ProjectType>("New website");

  return (
    <ProjectTypeContext.Provider value={{ projectType, setProjectType }}>
      {children}
    </ProjectTypeContext.Provider>
  );
}

export function useProjectType() {
  return useContext(ProjectTypeContext) ?? defaultValue;
}
