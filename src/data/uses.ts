import type { UseGroup } from "@/types/use-item";

export const useGroups: UseGroup[] = [
  {
    id: "hardware",
    label: "Hardware",
    items: [
      {
        name: "MacBook",
        description: "Primary machine for development and daily work.",
        badge: "Daily driver",
        favorite: true,
      },
      {
        name: "Built-in display",
        description: "Usually working directly from the laptop screen.",
      },
      {
        name: "Mechanical keyboard",
        description: "External keyboard when I want a better typing setup.",
      },
    ],
  },
  {
    id: "editor-terminal",
    label: "Editor & terminal",
    items: [
      {
        name: "Neovim",
        description:
          "My main editor for coding, navigation, and fast iteration.",
        badge: "Primary editor",
        favorite: true,
      },
      {
        name: "Alacritty",
        description: "Fast terminal for everyday development work.",
        badge: "Terminal",
      },
      {
        name: "Firefox",
        description: "My default browser for browsing, testing, and research.",
      },
      {
        name: "macOS",
        description: "My daily operating system.",
        badge: "OS",
        favorite: true,
      },
    ],
  },
];
