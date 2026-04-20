// app/robots.ts
// Next.js App Router generates /robots.txt automatically from this file.
// No need for a static public/robots.txt when using this approach.

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      { userAgent: "GPTBot",          allow: "/" },
      { userAgent: "ChatGPT-User",    allow: "/" },
      { userAgent: "OAI-SearchBot",   allow: "/" },
      { userAgent: "ClaudeBot",       allow: "/" },
      { userAgent: "anthropic-ai",    allow: "/" },
      { userAgent: "PerplexityBot",   allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot",           allow: "/" },
      { userAgent: "FacebookBot",     allow: "/" },
      { userAgent: "Applebot",        allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bingbot",         allow: "/" },
    ],
    sitemap: "https://fremn.com/sitemap.xml",
  };
}