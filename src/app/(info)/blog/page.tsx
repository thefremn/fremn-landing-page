import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

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
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-[64px]">
          <Link href="/" aria-label="FREMN — home">
            <Image src="/logo.png" alt="FREMN" width={160} height={40} className="h-8 w-auto" priority />
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
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-sans font-semibold text-[13px] text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors duration-150"
            >
              Book Now!
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Page header ── */}
      <header className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-12">
        <p className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-[#2563eb] mb-4">
          From the team
        </p>
        <h1 className="font-sans font-extrabold text-4xl md:text-5xl text-[#111827] leading-[1.1] tracking-[-0.02em] mb-4">
          Insights on <span className="text-[#2563eb]">clinic automation</span>
        </h1>
        <p className="font-sans text-[16px] text-[#6b7280] max-w-lg leading-[1.65]">
          Deep dives into AI front desks, appointment workflows, and how modern clinics are reclaiming their time.
        </p>
        <div className="mt-10 h-px bg-[#e5e7eb]" />
      </header>

      {/* ── Content ── */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pb-24">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-sans font-semibold text-[18px] text-[#111827] mb-2">No posts yet</p>
            <p className="font-sans text-[14px] text-[#6b7280]">Check back soon — we are writing something good.</p>
          </div>
        ) : (
          <>
            {/* Featured */}
            {featured && (
              <div className="mb-14">
                <p className="font-sans text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#2563eb] mb-5 flex items-center gap-2">
                  Featured
                  <span className="flex-1 h-px bg-[#dbeafe]" />
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group relative block rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-10 md:p-12 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(37,99,235,0.12)] hover:border-[#bfdbfe]"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  {featured.tag && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full font-sans text-[11px] font-semibold tracking-[0.06em] uppercase text-[#2563eb] bg-[#eff6ff] border border-[#dbeafe] mb-4">
                      {featured.tag}
                    </span>
                  )}
                  <h2 className="font-sans font-bold text-[22px] md:text-[32px] text-[#111827] leading-[1.2] tracking-[-0.02em] mb-3 max-w-2xl">
                    {featured.title}
                  </h2>
                  <p className="font-sans text-[15px] text-[#6b7280] leading-[1.7] max-w-xl mb-6">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                      <span className="font-sans font-bold text-[11px] text-white">{featured.author_name.charAt(0)}</span>
                    </div>
                    <span className="font-sans text-[13px] text-[#6b7280]">
                      <span className="font-semibold text-[#374151]">{featured.author_name}</span>
                      {" · "}
                      {formatDate(featured.published_at)}
                      {featured.read_time_minutes && <>{" · "}{featured.read_time_minutes} min read</>}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-5 font-sans text-[13px] font-semibold text-[#2563eb] transition-all duration-150 group-hover:gap-3">
                    Read article
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </div>
            )}

            {/* All posts grid */}
            {rest.length > 0 && (
              <>
                <p className="font-sans text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#9ca3af] mb-5 flex items-center gap-2">
                  All posts
                  <span className="flex-1 h-px bg-[#e5e7eb]" />
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group relative flex flex-col rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] hover:border-[#bfdbfe]"
                    >
                      <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                      {post.tag && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-sans text-[10px] font-semibold tracking-[0.06em] uppercase text-[#2563eb] bg-[#eff6ff] border border-[#dbeafe] mb-3 w-fit">
                          {post.tag}
                        </span>
                      )}
                      <h3 className="font-sans font-bold text-[15px] text-[#111827] leading-[1.35] tracking-[-0.01em] mb-2">
                        {post.title}
                      </h3>
                      <p className="font-sans text-[13px] text-[#6b7280] leading-[1.65] flex-1 line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2.5 pt-4 border-t border-[#f3f4f6] mt-auto">
                        <div className="w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                          <span className="font-sans font-bold text-[10px] text-white">{post.author_name.charAt(0)}</span>
                        </div>
                        <span className="font-sans text-[12px] text-[#6b7280]">
                          <span className="font-semibold text-[#374151]">{post.author_name}</span>
                          {" · "}
                          {formatDate(post.published_at)}
                          {post.read_time_minutes && <>{" · "}{post.read_time_minutes} min</>}
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

      {/* ── Footer ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pb-10">
        <div className="flex items-center justify-between flex-wrap gap-3 pt-8 border-t border-[#e5e7eb]">
          <span className="font-sans text-[12.5px] text-[#9ca3af]">
            © {new Date().getFullYear()} FREMN Technologies LLP. All rights reserved.
          </span>
          <div className="flex gap-5">
            <Link href="/#contact" className="font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">
              Book Now!
            </Link>
            <a href="mailto:contact@fremn.com" className="font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">
              contact@fremn.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
