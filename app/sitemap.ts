import type { MetadataRoute } from "next";
import { work } from "@/content/work";

const site = "https://benjaminsackey.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site, priority: 1 },
    { url: `${site}/about` },
    { url: `${site}/resume` },
    { url: `${site}/contact` },
    ...work.map((w) => ({ url: `${site}/work/${w.slug}` })),
  ];
}
