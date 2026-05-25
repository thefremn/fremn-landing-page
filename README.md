# FREMN — AI Receptionist for Outpatient Healthcare

A Next.js 16 marketing landing page for FREMN, an AI-powered WhatsApp receptionist that recovers missed calls and books clinic appointments automatically.

→ **[Setup & Installation](./SETUP.md)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui · Radix UI · Base UI |
| Icons | Lucide React · Tabler Icons |
| Animation | Framer Motion |
| Backend | Supabase (Auth + Database, SSR-optimized) |
| Analytics | Vercel Analytics + Speed Insights |
| Font | Inter (Google Fonts, variable) |
| Deployment | Vercel |

---

## Project Structure

```
fremn-ai-receptionist/
├── public/                         # Static assets
│   └── logo.png
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout — metadata, JSON-LD schemas, analytics
│   │   ├── page.tsx                # Home page — composes all landing sections
│   │   ├── fonts.ts                # Inter font config
│   │   ├── globals.css             # Tailwind v4 + OKLCH color tokens
│   │   ├── sitemap.ts
│   │   ├── robot.ts
│   │   ├── (info)/                 # Route group (no URL prefix)
│   │   │   ├── about/page.tsx
│   │   │   ├── blog/page.tsx
│   │   │   ├── blog/[slug]/page.tsx
│   │   │   ├── careers/page.tsx
│   │   │   └── team/page.tsx
│   │   └── (legal)/                # Route group (no URL prefix)
│   │       ├── terms-of-service/page.tsx
│   │       ├── privacy-policy/page.tsx
│   │       └── dpdp-compliance/page.tsx
│   ├── sections/                   # Landing page sections (see below)
│   ├── components/
│   │   ├── ui/                     # shadcn primitives (50+ components)
│   │   └── custom/                 # Project-specific components
│   │       ├── navbar.tsx
│   │       ├── footer.tsx
│   │       ├── AnnouncementBanner.tsx
│   │       ├── AccentBar.tsx
│   │       ├── read-progress-bar.tsx
│   │       └── legal-format.tsx
│   ├── lib/
│   │   ├── utils.ts                # cn() — clsx + tailwind-merge
│   │   ├── client.ts               # Supabase browser client
│   │   ├── server.ts               # Supabase server client (SSR + cookies)
│   │   └── middleware.ts           # Auth middleware — redirects unauthenticated users
│   ├── hooks/
│   │   └── use-mobile.ts           # useIsMobile() — true when viewport < 768px
│   └── styles/
│       └── token.css               # CSS design tokens
├── SETUP.md                        # Local development setup guide
├── next.config.ts                  # React Compiler enabled
├── tsconfig.json
├── postcss.config.mjs
└── components.json                 # shadcn/ui config
```

---

## Landing Page Sections

Sections are composed in order inside `src/app/page.tsx`:

| Order | Component | Section Directory | Description |
|---|---|---|---|
| 1 | `AnnouncementBanner` | `components/custom` | Top banner |
| 2 | `Navbar` | `components/custom` | Navigation |
| 3 | `HeroSection` | `sections/hero` | Hero + trust bar + hero calculator |
| 4 | `Features` | `sections/features` | Feature cards, multi-channel UI, integrations |
| 5 | `HowItWorks` | `sections/howItWorks` | Step-by-step process + pipeline visual |
| 6 | `Testimonials` | `sections/impact` | Customer testimonials, stats, infographics |
| 7 | `Pipeline` | `sections/howItWorks` | "What You Get" — 3-feature cards + live transcript mockup |
| 8 | `ComparisonTable` | `sections/comparison` | FREMN vs. alternatives |
| 9 | `Calculator` | `sections/pricing` | Missed-revenue calculator |
| 10 | `FAQ` | `sections/faq` | Frequently asked questions |
| 11 | `ContactSection` | `sections/contact` | Lead capture form |
| 12 | `Footer` | `components/custom` | Footer |

---

## SEO & Structured Data

Four JSON-LD schemas are embedded in `src/app/layout.tsx`:

- **SoftwareApplication** — product details and ratings
- **Organization** — company info and founders
- **ItemList** — four core services
- **FAQPage** — ten Q&A pairs

Meta includes Open Graph tags, Twitter card, and a canonical base URL of `https://fremn.com`.

---

## Auth

Supabase Auth is enforced by middleware in `src/lib/middleware.ts`. All routes except `/login` and `/auth/*` require an active session and redirect unauthenticated visitors to `/auth/login`.

---

## Environment Variables

See [SETUP.md](./SETUP.md) for the full list of required variables.
