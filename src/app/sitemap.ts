import type { MetadataRoute } from "next";
import { programs } from "@/lib/programs";

const siteUrl = "https://aiyouthacademy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const programRoutes: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${siteUrl}/programs/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/coming-soon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...programRoutes,
  ];
}
