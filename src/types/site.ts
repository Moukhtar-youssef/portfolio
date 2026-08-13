export type AvailabilityMode =
  | "available-now"
  | "freelance-only"
  | "part-time"
  | "full-time"
  | "unavailable";

export interface SiteIdentity {
  firstName: string;
  lastName: string;
  fullName: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  heroHeading: string;
  heroDescription: string;
  heroPrimaryCta: {
    label: string;
    href: string;
  };
  heroSecondaryCta: {
    label: string;
    href: string;
  };
  availability: AvailabilityMode[];
  tagline: string;
}
