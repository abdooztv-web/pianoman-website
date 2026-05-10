import { MetadataRoute } from "next";
import { posts } from "@/app/blog/posts";

const BASE = "https://pianoman-eg.com";

function hreflang(url: string, arUrl?: string) {
  return {
    languages: {
      en: url,
      ar: arUrl ?? url,
      "x-default": url,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: hreflang(`${BASE}/blog/${post.slug}`),
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: hreflang(BASE, `${BASE}/ar`),
    },
    {
      url: `${BASE}/ar`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: hreflang(BASE, `${BASE}/ar`),
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: hreflang(`${BASE}/blog`),
    },
    ...blogUrls,
  ];
}
