import type { MetadataRoute } from "next";

const routes = ["", "/services", "/pricing", "/gallery", "/reviews", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://jmtvmounting.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : .8
  }));
}
