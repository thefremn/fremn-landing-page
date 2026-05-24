import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReadProgressBar from "@/components/custom/read-progress-bar";

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
    .select(
      "id, slug, title, excerpt, author_name, author_bio, tag, published_at, read_time_minutes, body_html"
    )
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

  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .prose {
          font-family: var(--font-sans, 'Inter', sans-serif);
          font-size: 17px; line-height: 1.8; color: #374151;
        }
        .prose h2 {
          font-family: var(--font-sans, 'Inter', sans-serif);
          font-size: clamp(20px, 2.5vw, 26px); font-weight: 700;
          color: #111827; margin: 48px 0 14px;
          letter-spacing: -0.02em; line-height: 1.25;
        }
        .prose h3 {
          font-family: var(--font-sans, 'Inter', sans-serif);
          font-size: 19px; font-weight: 700;
          color: #111827; margin: 36px 0 10px; letter-spacing: -0.01em;
        }
        .prose p  { margin-bottom: 22px; }
        .prose strong { color: #111827; font-weight: 600; }
        .prose em { font-style: italic; color: #6b7280; }
        .prose a  { color: #2563eb; text-decoration: underline; text-underline-offset: 3px; }
        .prose a:hover { color: #1d4ed8; }
        .prose ul, .prose ol { margin: 0 0 22px 24px; }
        .prose li { margin-bottom: 8px; }
        .prose blockquote {
          border-left: 3px solid #2563eb; margin: 36px 0;
          padding: 14px 22px;
          background: #eff6ff;
          border-radius: 0 10px 10px 0;
          font-style: italic; color: #4b5563;
        }
        .prose blockquote p { margin: 0; }
        .prose code {
          font-family: 'Courier New', monospace; font-size: 14px;
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          padding: 2px 7px; border-radius: 5px; color: #2563eb;
        }
        .prose pre {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 12px; padding: 22px;
          overflow-x: auto; margin-bottom: 26px;
        }
        .prose pre code {
          background: none; border: none; padding: 0;
          font-size: 14px; color: #374151;
        }
        .prose hr {
          border: none; border-top: 1px solid #e5e7eb; margin: 44px 0;
        }

        @keyframes postFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .post-hero-anim { animation: postFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .post-body-anim { animation: postFadeUp 0.5s 0.1s cubic-bezier(0.16,1,0.3,1) both; }

        @media (max-width: 640px) {
          .prose { font-size: 16px; }
          .post-cta-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <ReadProgressBar />

      <div
        className="min-h-screen font-sans"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(96,165,250,0.18) 0%, rgba(147,197,253,0.08) 45%, transparent 70%), " +
            "linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)",
        }}
      >
        {/* ── Navbar ── */}
        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#f3f4f6]">
          <div className="max-w-4xl mx-auto px-6 md:px-10 flex items-center justify-between h-[64px]">
            <Link href="/" aria-label="FREMN — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="FREMN" className="h-8 w-auto" />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-1.5 font-sans text-[13px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M11 7H3M6 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-1.5 font-sans text-[13px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M11 7H3M6 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                All posts
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Post hero ── */}
        <div className="post-hero-anim max-w-4xl mx-auto px-6 md:px-10 pt-14 pb-0">
          {post.tag && (
            <span className="inline-flex items-center px-3 py-1 rounded-full font-sans text-[11px] font-semibold tracking-[0.06em] uppercase text-[#2563eb] bg-[#eff6ff] border border-[#dbeafe] mb-5">
              {post.tag}
            </span>
          )}
          <h1 className="font-sans font-extrabold text-[28px] md:text-[46px] text-[#111827] leading-[1.1] tracking-[-0.025em] mb-5">
            {post.title}
          </h1>
          <p className="font-sans text-[17px] md:text-[19px] text-[#6b7280] leading-[1.65] italic mb-8 max-w-2xl">
            {post.excerpt}
          </p>

          {/* Author row */}
          <div className="flex items-center justify-between flex-wrap gap-4 py-5 border-t border-b border-[#e5e7eb] mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                <span className="font-sans font-bold text-[15px] text-white">{post.author_name.charAt(0)}</span>
              </div>
              <div>
                <div className="font-sans font-semibold text-[14px] text-[#111827]">{post.author_name}</div>
                {post.author_bio && (
                  <div className="font-sans text-[12.5px] text-[#9ca3af]">{post.author_bio}</div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 font-sans text-[13px] text-[#9ca3af]">
              <span>{formatDate(post.published_at)}</span>
              {post.read_time_minutes && (
                <>
                  <span className="text-[#d1d5db]">·</span>
                  <span>{post.read_time_minutes} min read</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Article body ── */}
        <article className="post-body-anim max-w-4xl mx-auto px-6 md:px-10 pb-16">
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.body_html }} />
        </article>

        {/* ── CTA strip ── */}
        <div className="max-w-4xl mx-auto px-6 md:px-10 pb-16">
          <div className="post-cta-inner flex items-center justify-between gap-6 rounded-2xl bg-white border border-[#dbeafe] shadow-[0_4px_24px_rgba(37,99,235,0.1)] px-8 py-8">
            <div>
              <h3 className="font-sans font-bold text-[18px] text-[#111827] mb-1.5">See FREMN in action</h3>
              <p className="font-sans text-[14px] text-[#6b7280]">
                Get a personalised pilot for your clinic — no commitment needed.
              </p>
            </div>
            <Link
              href="/#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-[14px] text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.45)] transition-all duration-200"
            >
              Book Now!
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Footer bar ── */}
        <div className="max-w-4xl mx-auto px-6 md:px-10 pb-10">
          <div className="flex items-center justify-between flex-wrap gap-3 pt-6 border-t border-[#e5e7eb]">
            <span className="font-sans text-[12.5px] text-[#9ca3af]">
              © {currentYear} FREMN Technologies LLP. All rights reserved.
            </span>
            <div className="flex gap-5">
              <Link href="/blog" className="font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">
                Blog
              </Link>
              <a href="mailto:contact@fremn.com" className="font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">
                contact@fremn.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
