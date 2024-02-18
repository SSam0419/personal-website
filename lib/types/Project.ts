import { ReactNode } from "react";

export type Project = {
  projectName: string;
  techStacks: string[];
  githubLink?: string;
  demoLink?: string;
  image: string;
  description: ReactNode;
  projectType: "Side Project" | "Internship";
};
