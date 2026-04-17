// app/blog/page.tsx
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Blog — FREMN",
  description: "Insights on clinic automation, AI front desks, and the future of healthcare operations.",
};

// ── Types ─────────────────────────────────────────────────────────────────────
export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author_name: string;
  tag: string | null;
  published_at: string;
  read_time_minutes: number | null;
};

// ── Supabase ──────────────────────────────────────────────────────────────────
async function getPosts(): Promise<BlogPost[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, slug, title, excerpt, author_name, tag, published_at, read_time_minutes")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }

  return data ?? [];
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .blog-root {
          min-height: 100vh;
          background: #0B0E17;
          font-family: 'DM Sans', sans-serif;
          color: #F0F4FF;
          position: relative;
          overflow-x: hidden;
        }

        .blog-glow-top {
          position: fixed; top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 500px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(30,107,255,0.07) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .blog-glow-right {
          position: fixed; top: 40%; right: -200px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(91,192,235,0.04) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        /* ── Nav ── */
        .blog-nav {
          position: sticky; top: 0; z-index: 50;
          padding: 0 40px; height: 64px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(11,14,23,0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .blog-nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 800;
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; text-decoration: none;
        }
        .blog-nav-link {
          font-size: 13px; color: #6B7A99;
          text-decoration: none; transition: color 0.2s;
        }
        .blog-nav-link:hover { color: #5BC0EB; }

        /* ── Page header ── */
        .blog-header {
          padding: 80px 40px 0;
          max-width: 1200px; margin: 0 auto;
          position: relative; z-index: 1;
        }
        .blog-header-eyebrow {
          font-size: 11px; font-weight: 500;
          color: #5BC0EB; letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 14px;
        }
        .blog-header-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.03em; color: #F0F4FF;
          margin-bottom: 16px;
        }
        .blog-header-title span {
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .blog-header-sub {
          font-size: 16px; color: #6B7A99;
          max-width: 480px; line-height: 1.65; margin-bottom: 60px;
        }
        .blog-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent);
          margin-bottom: 60px;
        }

        /* ── Content ── */
        .blog-content {
          max-width: 1200px; margin: 0 auto;
          padding: 0 40px 120px;
          position: relative; z-index: 1;
        }

        /* ── Section labels ── */
        .section-label {
          font-size: 10.5px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .section-label.blue { color: #5BC0EB; }
        .section-label.blue::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(91,192,235,0.15);
        }
        .section-label.muted { color: #6B7A99; }
        .section-label.muted::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(255,255,255,0.05);
        }

        /* ── Featured card ── */
        .featured-card {
          background: rgba(26,31,43,0.5);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 48px 52px;
          text-decoration: none; color: inherit;
          display: flex; flex-direction: column; gap: 18px;
          margin-bottom: 64px;
          transition: border-color 0.3s, box-shadow 0.3s;
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
          position: relative; overflow: hidden;
        }
        .featured-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #1E6BFF, #5BC0EB);
          opacity: 0; transition: opacity 0.3s;
        }
        .featured-card:hover {
          border-color: rgba(30,107,255,0.2);
          box-shadow: 0 32px 80px rgba(0,0,0,0.5);
        }
        .featured-card:hover::before { opacity: 1; }

        .post-tag {
          display: inline-flex; align-items: center;
          background: rgba(30,107,255,0.1);
          border: 1px solid rgba(30,107,255,0.2);
          color: #5BC0EB;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 100px; width: fit-content;
        }
        .featured-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 800; line-height: 1.15;
          letter-spacing: -0.025em; color: #F0F4FF;
          max-width: 680px;
        }
        .featured-excerpt {
          font-size: 15px; color: #6B7A99;
          line-height: 1.7; max-width: 600px;
        }
        .post-meta {
          display: flex; align-items: center; gap: 8px; padding-top: 4px;
        }
        .author-initial {
          width: 28px; height: 28px; border-radius: 50%;
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; color: white; flex-shrink: 0;
        }
        .post-meta-text { font-size: 12.5px; color: #6B7A99; }
        .post-meta-text strong { color: #A0AABB; font-weight: 500; }
        .post-meta-dot { color: rgba(107,122,153,0.35); }
        .featured-arrow {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 500; color: #1E6BFF;
          margin-top: 4px; transition: gap 0.2s;
        }
        .featured-card:hover .featured-arrow { gap: 10px; }

        /* ── Grid cards ── */
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .post-card {
          background: rgba(26,31,43,0.45);
          border: 1px solid rgba(255,255,255,0.055);
          border-radius: 16px;
          padding: 28px 28px 24px;
          text-decoration: none; color: inherit;
          display: flex; flex-direction: column; gap: 12px;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          position: relative; overflow: hidden;
        }
        .post-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, #1E6BFF, #5BC0EB);
          opacity: 0; transition: opacity 0.25s;
        }
        .post-card:hover {
          transform: translateY(-4px);
          border-color: rgba(30,107,255,0.18);
          box-shadow: 0 20px 48px rgba(0,0,0,0.4);
        }
        .post-card:hover::before { opacity: 1; }
        .post-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 16px; font-weight: 700;
          line-height: 1.3; letter-spacing: -0.015em; color: #F0F4FF;
        }
        .post-card-excerpt {
          font-size: 13px; color: #6B7A99; line-height: 1.65; flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .post-card-meta {
          display: flex; align-items: center; gap: 8px;
          padding-top: 12px; margin-top: auto;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* ── Empty state ── */
        .empty-state {
          text-align: center; padding: 80px 20px; color: #6B7A99;
        }
        .empty-state-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 700; color: #A0AABB; margin-bottom: 8px;
        }

        /* ── Footer ── */
        .blog-footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 32px 40px;
          display: flex; align-items: center; justify-content: space-between;
          max-width: 1200px; margin: 0 auto;
          font-size: 13px; color: #6B7A99;
          position: relative; z-index: 1;
        }
        .blog-footer a { color: #6B7A99; text-decoration: none; transition: color 0.2s; }
        .blog-footer a:hover { color: #5BC0EB; }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .blog-header   { animation: fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) both; }
        .featured-card { animation: fadeUp 0.55s 0.1s cubic-bezier(0.16,1,0.3,1) both; }
        .posts-grid    { animation: fadeUp 0.55s 0.2s cubic-bezier(0.16,1,0.3,1) both; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .posts-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-header, .blog-content { padding-left: 24px; padding-right: 24px; }
          .blog-nav { padding: 0 24px; }
          .featured-card { padding: 36px 32px; }
        }
        @media (max-width: 600px) {
          .posts-grid { grid-template-columns: 1fr; }
          .blog-header { padding-top: 52px; }
          .blog-footer { flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>

      <div className="blog-root">
        <div className="blog-glow-top" />
        <div className="blog-glow-right" />

        <nav className="blog-nav">
          <Image src="/logo.png" alt="Fremn Logo" width={30} height={30} className="rounded"/>
          <Link href="/" className="blog-nav-logo">FREMN</Link>
          <Link href="/#contact" className="blog-nav-link">Request Demo →</Link>
        </nav>

        <header className="blog-header">
          <p className="blog-header-eyebrow">From the team</p>
          <h1 className="blog-header-title">
            Insights on <span>clinic</span><br />automation
          </h1>
          <p className="blog-header-sub">
            Deep dives into AI front desks, appointment workflows, and how modern clinics are reclaiming their time.
          </p>
          <div className="blog-divider" />
        </header>

        <main className="blog-content">
          {posts.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-title">No posts yet</div>
              <p>Check back soon — we are writing something good.</p>
            </div>
          ) : (
            <>
              {featured && (
                <>
                  <p className="section-label blue">Featured</p>
                  <Link href={`/blog/${featured.slug}`} className="featured-card">
                    {featured.tag && <span className="post-tag">{featured.tag}</span>}
                    <h2 className="featured-title">{featured.title}</h2>
                    <p className="featured-excerpt">{featured.excerpt}</p>
                    <div className="post-meta">
                      <div className="author-initial">{featured.author_name.charAt(0)}</div>
                      <div className="post-meta-text">
                        <strong>{featured.author_name}</strong>
                        <span className="post-meta-dot"> · </span>
                        {formatDate(featured.published_at)}
                        {featured.read_time_minutes && (
                          <><span className="post-meta-dot"> · </span>{featured.read_time_minutes} min read</>
                        )}
                      </div>
                    </div>
                    <span className="featured-arrow">
                      Read article
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="#1E6BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Link>
                </>
              )}

              {rest.length > 0 && (
                <>
                  <p className="section-label muted">All posts</p>
                  <div className="posts-grid">
                    {rest.map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`} className="post-card">
                        {post.tag && <span className="post-tag">{post.tag}</span>}
                        <h3 className="post-card-title">{post.title}</h3>
                        <p className="post-card-excerpt">{post.excerpt}</p>
                        <div className="post-card-meta">
                          <div className="author-initial">{post.author_name.charAt(0)}</div>
                          <span className="post-meta-text">
                            <strong>{post.author_name}</strong>
                            <span className="post-meta-dot"> · </span>
                            {formatDate(post.published_at)}
                            {post.read_time_minutes && (
                              <><span className="post-meta-dot"> · </span>{post.read_time_minutes} min</>
                            )}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </main>

        <footer className="blog-footer">
          <span>© {new Date().getFullYear()} FREMN. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/#contact">Request Demo</Link>
            <a href="mailto:contact@fremn.com">contact@fremn.com</a>
          </div>
        </footer>
      </div>
    </>
  );
}