import { allSeoKeywords } from "@/lib/seoKeywords";

const defaultSiteUrl = "https://maklot.vercel.app";

function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configuredUrl) return defaultSiteUrl;

  const urlWithProtocol = /^[a-z][a-z\d+.-]*:\/\//i.test(configuredUrl)
    ? configuredUrl
    : `https://${configuredUrl}`;

  try {
    const parsedUrl = new URL(urlWithProtocol);
    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return defaultSiteUrl;
    }
    return parsedUrl.toString().replace(/\/$/, "");
  } catch {
    return defaultSiteUrl;
  }
}

export const siteConfig = {
  name: "Maklot Studio",
  legalName: "Maklot Studio",
  url: getSiteUrl(),
  title: "Software Development Agency in Bangladesh | Maklot Studio",
  description:
    "Custom software, web apps, SaaS, APIs, and MVPs for businesses in Bangladesh and product teams worldwide. Built by Maklot Studio.",
  ogDescription:
    "Maklot Studio builds custom software, web apps, SaaS products, APIs, and MVPs for teams in Bangladesh and around the world.",
  areaServed: ["Bangladesh", "Worldwide"] as const,
  sameAs: ["https://www.facebook.com/profile.php?id=61597102700509"] as const,
  /**
   * Social preview image in /public (Open Graph, Twitter, JSON-LD).
   * Bump `ogImageVersion` after replacing the file to bust Discord/slack caches.
   */
  ogImagePath: "/assets/OGImage.png",
  ogImageVersion: "3",
  locale: "en_US",
  keywords: allSeoKeywords,
} as const;

export const facebookDmHref = "https://m.me/61597102700509" as const;
export const discoveryMeetingHref = facebookDmHref;

export const siteServices = [
  {
    name: "Web Application Development",
    href: "/services/web-app-development",
    description:
      "Planning and building fast, scalable web apps with clean architecture, strong UX, and production-ready deployment.",
  },
  {
    name: "SaaS Development",
    href: "/services/saas-development",
    description:
      "Startup-ready SaaS platforms with authentication, onboarding, subscriptions, and room to grow after launch.",
  },
  {
    name: "MVP Development",
    href: "/services/mvp-development",
    description:
      "Focused MVP builds that help founders validate product direction quickly without overbuilding the first version.",
  },
  {
    name: "Backend Engineering",
    href: "/services/backend-development",
    description:
      "Scalable backend systems with clear data flow, maintainable services, and strong foundations for growth.",
  },
  {
    name: "API Development",
    href: "/services/api-development",
    description:
      "Reliable APIs for product integrations, platform extensions, and internal automation across connected systems.",
  },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function ogImageUrl() {
  const path = `${siteConfig.ogImagePath}?v=${siteConfig.ogImageVersion}`;
  return absoluteUrl(path);
}

export const ogImageMetadata = {
  url: ogImageUrl(),
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} brand preview`,
  type: "image/png" as const,
};
