// app/sitemap.ts
// Next.js App Router generates /sitemap.xml automatically from this file.
// Blog post URLs are pulled live from Supabase so new posts appear instantly.

import { createClient } from "@supabase/supabase-js";
import type { MetadataRoute } from "next";

const BASE_URL = "https://fremn.com";

async function getBlogSlugs(): Promise<{ slug: string; published_at: string | null }[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug, published_at")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data.map((p) => ({ slug: p.slug, published_at: p.published_at ?? null }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogSlugs();

  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/careers`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/team`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/dpdp-compliance`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // ── Blog post pages ──────────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.published_at ? new Date(post.published_at) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}