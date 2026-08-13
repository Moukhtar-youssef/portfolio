export type SkillLevel = "primary" | "strong" | "working" | "learning";

export interface SkillItem {
  name: string;
  description: string;
  level: SkillLevel;
  percent: number;
  color: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
}
