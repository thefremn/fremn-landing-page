// app/blog/[slug]/page.tsx
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
// ── Types ─────────────────────────────────────────────────────────────────────
type FullPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author_name: string;
  author_bio: string | null;
  tag: string | null;
  published_at: string;
  read_time_minutes: number | null;
  body_html: string;
};

// ── Data fetching ─────────────────────────────────────────────────────────────
async function getPost(slug: string): Promise<FullPost | null> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, slug, title, excerpt, author_name, author_bio, tag, published_at, read_time_minutes, body_html")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !data) return null;
  return data as FullPost;
}

// ── Dynamic metadata ──────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found — FREMN" };
  return {
    title: `${post.title} — FREMN Blog`,
    description: post.excerpt,
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .post-root {
          min-height: 100vh;
          background: #0B0E17;
          font-family: 'DM Sans', sans-serif;
          color: #F0F4FF;
          position: relative; overflow-x: hidden;
        }

        .post-glow {
          position: fixed; top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 500px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(30,107,255,0.06) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        /* ── Nav ── */
        .post-nav {
          position: sticky; top: 0; z-index: 50;
          padding: 0 40px; height: 64px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(11,14,23,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .post-nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 800;
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; text-decoration: none;
        }
        .post-nav-back {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; color: #6B7A99;
          text-decoration: none; transition: color 0.2s;
        }
        .post-nav-back:hover { color: #5BC0EB; }

        /* ── Progress bar ── */
        .read-progress {
          position: fixed; top: 64px; left: 0; right: 0;
          height: 2px; z-index: 49;
          background: rgba(255,255,255,0.04);
        }
        .read-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #1E6BFF, #5BC0EB);
          width: 0%; transition: width 0.1s linear;
        }

        /* ── Hero ── */
        .post-hero {
          max-width: 760px; margin: 0 auto;
          padding: 72px 40px 0;
          position: relative; z-index: 1;
          animation: fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) both;
        }
        .post-tag {
          display: inline-flex; align-items: center;
          background: rgba(30,107,255,0.1);
          border: 1px solid rgba(30,107,255,0.2);
          color: #5BC0EB;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 100px;
          margin-bottom: 20px;
        }
        .post-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 5vw, 52px);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.03em; color: #F0F4FF;
          margin-bottom: 20px;
        }
        .post-excerpt {
          font-size: 18px; color: #8090AE;
          line-height: 1.65; font-weight: 300;
          margin-bottom: 36px;
          font-family: 'Lora', serif; font-style: italic;
        }

        /* ── Author row ── */
        .author-row {
          display: flex; align-items: center; gap: 12px;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          margin-bottom: 56px;
        }
        .author-initial {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; font-weight: 700; color: white; flex-shrink: 0;
        }
        .author-info { flex: 1; }
        .author-name { font-size: 14px; font-weight: 500; color: #D0D8EE; }
        .author-bio  { font-size: 12.5px; color: #6B7A99; margin-top: 2px; }
        .post-stats {
          display: flex; align-items: center; gap: 12px;
          font-size: 12.5px; color: #6B7A99; flex-shrink: 0;
        }
        .post-stats-sep { color: rgba(107,122,153,0.3); }

        /* ── Body ── */
        .post-body {
          max-width: 760px; margin: 0 auto;
          padding: 0 40px 80px;
          position: relative; z-index: 1;
          animation: fadeUp 0.55s 0.1s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* Prose styles */
        .prose {
          font-family: 'Lora', serif;
          font-size: 18px; line-height: 1.8; color: #B0BDDA;
        }
        .prose h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 2.5vw, 26px); font-weight: 700;
          color: #F0F4FF; margin: 52px 0 16px;
          letter-spacing: -0.02em; line-height: 1.2;
        }
        .prose h3 {
          font-family: 'Syne', sans-serif;
          font-size: 19px; font-weight: 700;
          color: #D0D8EE; margin: 36px 0 12px; letter-spacing: -0.01em;
        }
        .prose p { margin-bottom: 24px; }
        .prose strong { color: #D0D8EE; font-weight: 600; }
        .prose em { font-style: italic; color: #8090AE; }
        .prose a { color: #5BC0EB; text-decoration: underline; text-underline-offset: 3px; }
        .prose a:hover { color: #1E6BFF; }
        .prose ul, .prose ol { margin: 0 0 24px 24px; }
        .prose li { margin-bottom: 8px; }
        .prose blockquote {
          border-left: 3px solid #1E6BFF; margin: 36px 0;
          padding: 16px 24px;
          background: rgba(30,107,255,0.05);
          border-radius: 0 12px 12px 0;
          font-style: italic; color: #8090AE;
        }
        .prose blockquote p { margin: 0; }
        .prose code {
          font-family: 'Courier New', monospace; font-size: 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 2px 7px; border-radius: 5px; color: #5BC0EB;
        }
        .prose pre {
          background: rgba(10,10,15,0.8);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 24px;
          overflow-x: auto; margin-bottom: 28px;
        }
        .prose pre code {
          background: none; border: none; padding: 0;
          font-size: 14px; color: #A0BCDD;
        }
        .prose hr {
          border: none; border-top: 1px solid rgba(255,255,255,0.07); margin: 48px 0;
        }

        /* ── CTA strip ── */
        .post-cta {
          max-width: 760px; margin: 0 auto 80px;
          padding: 0 40px; position: relative; z-index: 1;
        }
        .post-cta-inner {
          background: rgba(26,31,43,0.6);
          border: 1px solid rgba(30,107,255,0.15);
          border-radius: 20px; padding: 36px 40px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          box-shadow: 0 0 60px rgba(30,107,255,0.08);
        }
        .post-cta-text h3 {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 700; color: #F0F4FF; margin-bottom: 6px;
        }
        .post-cta-text p { font-size: 14px; color: #6B7A99; }
        .post-cta-btn {
          flex-shrink: 0; padding: 12px 24px;
          background: linear-gradient(135deg, #1E6BFF, #0F52BA);
          color: white; font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500; border-radius: 10px;
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
          box-shadow: 0 0 28px rgba(30,107,255,0.3);
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .post-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 40px rgba(30,107,255,0.5);
        }

        /* ── Footer ── */
        .post-footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 32px 40px;
          display: flex; align-items: center; justify-content: space-between;
          max-width: 1200px; margin: 0 auto;
          font-size: 13px; color: #6B7A99;
          position: relative; z-index: 1;
        }
        .post-footer a { color: #6B7A99; text-decoration: none; transition: color 0.2s; }
        .post-footer a:hover { color: #5BC0EB; }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .post-nav { padding: 0 20px; }
          .post-hero { padding: 48px 20px 0; }
          .post-body { padding: 0 20px 60px; }
          .post-cta  { padding: 0 20px; }
          .post-cta-inner { flex-direction: column; align-items: flex-start; }
          .post-stats { gap: 8px; }
          .post-footer { flex-direction: column; gap: 12px; text-align: center; }
          .prose { font-size: 17px; }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            var el = document.getElementById('rpbar');
            if (!el) return;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            el.style.width = Math.min(100, (window.scrollY / docHeight) * 100) + '%';
          });
        `
      }} />

      <div className="post-root">
        <div className="post-glow" />

        <nav className="post-nav">
            <Image src="/logo.png" alt="Fremn Logo" width={30} height={30} className="rounded"/>
          <Link href="/" className="post-nav-logo">FREMN</Link>
          <Link href="/blog" className="post-nav-back">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M6 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All posts
          </Link>
        </nav>

        <div className="read-progress">
          <div className="read-progress-bar" id="rpbar" />
        </div>

        <div className="post-hero">
          {post.tag && <span className="post-tag">{post.tag}</span>}
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>

          <div className="author-row">
            <div className="author-initial">{post.author_name.charAt(0)}</div>
            <div className="author-info">
              <div className="author-name">{post.author_name}</div>
              {post.author_bio && <div className="author-bio">{post.author_bio}</div>}
            </div>
            <div className="post-stats">
              <span>{formatDate(post.published_at)}</span>
              {post.read_time_minutes && (
                <>
                  <span className="post-stats-sep">·</span>
                  <span>{post.read_time_minutes} min read</span>
                </>
              )}
            </div>
          </div>
        </div>

        <article className="post-body">
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.body_html }} />
        </article>

        <div className="post-cta">
          <div className="post-cta-inner">
            <div className="post-cta-text">
              <h3>See FREMN in action</h3>
              <p>Get a personalised pilot demo for your clinic — no commitment needed.</p>
            </div>
            <Link href="/#contact" className="post-cta-btn">
              Request Demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        <footer className="post-footer">
          <span>© {new Date().getFullYear()} FREMN. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/blog">Blog</Link>
            <a href="mailto:contact@fremn.com">contact@fremn.com</a>
          </div>
        </footer>
      </div>
    </>
  );
}