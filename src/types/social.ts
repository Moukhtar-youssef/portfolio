export type SocialPlatform = "email" | "github" | "fiverr" | "upwork";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  value: string;
  visible: boolean;
}
