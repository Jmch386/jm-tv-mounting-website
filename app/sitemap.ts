import type { MetadataRoute } from "next";
import { localSeoCities } from "@/lib/content";

const routes = ["", "/services", "/pricing", "/gallery", "/reviews", "/contact"];
const cityRoutes = localSeoCities.map((city) => `/tv-mounting/${city.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...cityRoutes].map((route) => ({
    url: `https://jmtvmounting.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : .8
  }));
}
