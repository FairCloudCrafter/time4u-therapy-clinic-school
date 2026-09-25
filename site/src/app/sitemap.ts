import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/business";

export const dynamic = "force-static";

const routes = ["", "services", "benefits", "about", "credentials", "faq", "school", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route ? `${siteUrl}/${route}/` : `${siteUrl}/`,
    changeFrequency: "monthly",
    priority: route ? 0.7 : 1,
  }));
}
