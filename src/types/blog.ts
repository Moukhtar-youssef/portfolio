export interface BlogFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  visible?: boolean;
}
