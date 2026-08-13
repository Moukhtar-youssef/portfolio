export interface UseItem {
  name: string;
  description: string;
  badge?: string;
  favorite?: boolean;
}

export interface UseGroup {
  id: string;
  label: string;
  items: UseItem[];
}
