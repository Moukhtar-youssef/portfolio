export type ProjectStatus =
  | "featured"
  | "open-source"
  | "client-work"
  | "in-progress"
  | "hidden";

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  summary: string;
  year: string;
  status: ProjectStatus[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  visible?: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}
