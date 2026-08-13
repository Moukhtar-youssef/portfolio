import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function createMetadata({
  title,
  description,
  pathname = "/",
}: {
  title?: string;
  description?: string;
  pathname?: string;
} = {}): Metadata {
  const baseTitle = siteConfig.fullName;
  const pageTitle = title
    ? `${title} | ${baseTitle}`
    : `${baseTitle} | ${siteConfig.role}`;
  const pageDescription = description ?? siteConfig.heroDescription;
  const url = `https://your-domain.com${pathname}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL("https://your-domain.com"),
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: baseTitle,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}
