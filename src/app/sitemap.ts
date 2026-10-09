import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,           lastModified: now, changeFrequency: "weekly",  priority: 1 },
    { url: `${base}/about`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/products`,   lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/services`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`,   lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/tech-hub`,   lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/contact`,    lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/tech-hub/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...projectPages, ...postPages];
}
