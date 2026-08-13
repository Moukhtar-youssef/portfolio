import type { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Modern interfaces and product-focused UI systems.",
    items: [
      {
        name: "React",
        description: "Component architecture and app UX",
        level: "primary",
        percent: 92,
        color: "lime",
      },
      {
        name: "Next.js",
        description: "App Router, SEO, performance",
        level: "primary",
        percent: 90,
        color: "cyan",
      },
      {
        name: "Svelte",
        description: "Lean interfaces and fast iteration",
        level: "strong",
        percent: 78,
        color: "orange",
      },
      {
        name: "SolidJS",
        description: "Fine-grained reactivity",
        level: "working",
        percent: 65,
        color: "violet",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs, services, data flows, and scalable systems.",
    items: [
      {
        name: "Go",
        description: "APIs, CLIs, services",
        level: "primary",
        percent: 94,
        color: "emerald",
      },
      {
        name: "Node.js",
        description: "Web backends and integrations",
        level: "strong",
        percent: 84,
        color: "amber",
      },
      {
        name: "Gin",
        description: "Fast API development in Go",
        level: "strong",
        percent: 82,
        color: "lime",
      },
      {
        name: "Echo",
        description: "Clean Go service architecture",
        level: "working",
        percent: 74,
        color: "blue",
      },
    ],
  },
  {
    id: "systems",
    title: "Systems",
    description: "Infra, data, and tools that support production delivery.",
    items: [
      {
        name: "PostgreSQL",
        description: "Relational data modeling",
        level: "strong",
        percent: 85,
        color: "sky",
      },
      {
        name: "Docker",
        description: "Containers and environments",
        level: "strong",
        percent: 81,
        color: "indigo",
      },
      {
        name: "gRPC",
        description: "Service-to-service communication",
        level: "working",
        percent: 67,
        color: "pink",
      },
      {
        name: "MinIO",
        description: "Object storage workflows",
        level: "working",
        percent: 63,
        color: "teal",
      },
    ],
  },
];
