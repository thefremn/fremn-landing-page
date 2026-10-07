# FREMN — Design System Documentation

## 1. Brand Identity

- **Brand Name:** FREMN
- **Full Entity:** FREMN Technologies LLP
- **Tagline:** "Never miss another patient call." / "AI Front Desk for Dental Clinics"
- **Logo:** `logo.png` — combination mark, clean wordmark. Used at `h-8` (navbar) and `h-9` (footer).
- **Primary Market:** Indian dental clinics and outpatient practices
- **Founders:** Chinton Dutta, Amar Kumar Thakur, Sheikh Sami Akhtar, Krishti Poddar
- **Meta theme color:** `#2563eb` (blue)

---

## 2. Color Palette

| Role                  | Value                                                                 |
|-----------------------|-----------------------------------------------------------------------|
| Primary Blue          | `#2563eb` (Tailwind blue-600)                                         |
| Primary Blue Dark     | `#1d4ed8` (hover states, Tailwind blue-700)                           |
| Primary Blue Light    | `#60a5fa` (Tailwind blue-400, used in gradients and accents)          |
| Background (global)   | `#ffffff` white                                                       |
| Background (alt)      | `#f9fafb` very light gray — used for features section                 |
| Hero / Footer BG      | Radial gradient: `rgba(96,165,250,0.22)` → `rgba(147,197,253,0.1)` → white |
| Card Background       | `#ffffff` with subtle shadow and `#e5e7eb` border                     |
| Text Primary          | `#111827` (near-black, Tailwind gray-900)                             |
| Text Secondary        | `#6b7280` (Tailwind gray-500)                                         |
| Text Muted            | `#9ca3af` (Tailwind gray-400)                                         |
| Accent Green          | `#22c55e` / `#16a34a` — live indicators, success, active badges       |
| Accent Amber          | `#f59e0b` — overdue/warning states                                    |
| Border / Divider      | `#e5e7eb` (Tailwind gray-200)                                         |
| Border Light          | `#f3f4f6` — subtle inner dividers                                     |
| Badge BG (blue)       | `#eff6ff` background with `#2563eb` text, `#dbeafe` border            |
| Badge BG (green)      | `#dcfce7` background with `#166534` text                              |
| CTA Button            | BG `#2563eb` → hover `#1d4ed8`, text `#ffffff`                        |
| CTA Shadow            | `0 8px 32px rgba(37,99,235,0.35)` → hover `rgba(37,99,235,0.45)`     |

---

## 3. Typography

| Element              | Family                        | Weight  | Size (approx)    | Notes                                      |
|----------------------|-------------------------------|---------|------------------|--------------------------------------------|
| Hero H1              | `font-sans` (Geist / Inter)   | 800     | 42–72px          | Mixed-color: plain + `#2563eb` span        |
| Section H2           | `font-sans`                   | 700     | 30–40px          | Centered, tracking `-0.02em`               |
| Feature H3           | `font-sans`                   | 700     | 19px             | Left-aligned inside cards                  |
| Body Copy            | `font-sans`                   | 400     | 14–17px          | `#6b7280` on white bg                      |
| Nav Links            | `font-sans`                   | 500     | 14–15px          | No underline, `#374151`                    |
| Button Labels        | `font-sans`                   | 600     | 13–15px          | Rounded pill                               |
| Section Labels       | `font-sans`                   | 600     | 10–11px          | ALL CAPS, letter-spacing `0.1–0.12em`, `#2563eb` |
| Badge / Tag text     | `font-sans`                   | 500–600 | 10–12px          | Pill-shaped, sentence or uppercase         |
| Footer text          | `font-sans`                   | 400     | 12–13px          | `#9ca3af`                                  |

**Font Stack:** Geist (Next.js default), fallback to system sans-serif.
**Line heights:** 1.1–1.2 for headings, 1.65–1.75 for body text.
**Letter spacing:** `-0.02em` to `-0.03em` on headings; `0.1–0.14em` on uppercase labels.

---

## 4. Layout & Spacing

- **Max content width:** `max-w-6xl` (~1152px), centered
- **Horizontal padding:** `px-6 md:px-12 lg:px-24`
- **Section vertical padding:** `py-20 md:py-28` (80–112px)
- **Grid system:** CSS Grid and Flexbox; 2-col or 4-col on desktop, 1-col on mobile
- **Card padding:** `p-6` (24px), large cards `p-8 md:p-10`
- **Gap between grid items:** `gap-4` to `gap-6`
- **Border radius:**
  - Cards: `rounded-2xl` (16px)
  - Buttons: `rounded-full` (pill)
  - Avatars: `rounded-full`
  - Small badges: `rounded-full`
  - Inner UI elements: `rounded-xl` (12px) or `rounded-lg` (8px)
- **Shadows:**
  - Cards: `0 4px 24px rgba(0,0,0,0.08)` soft
  - Cards (hover): `0 12px 40px rgba(37,99,235,0.12)` blue-tinted
  - Elevated elements: `0 32px 80px rgba(0,0,0,0.22)`

---

## 5. Navigation (Header)

- **Position:** Sticky top, full-width, `z-50`
- **Background:** `bg-white/90 backdrop-blur-md`
- **Border:** `border-b border-[#f3f4f6]`
- **Height:** `h-[68px]`
- **Layout:** Logo left | Nav links center (desktop only) | CTA button right
- **Nav links:** Features, How It Works, Compare, Pricing, FAQ, Blog
- **CTA:** "Book Now!" — `#2563eb` blue pill button
- **Mobile:** Hamburger icon → slide-down menu with all nav links + CTA
- **Inner pages (about/blog/legal etc.):** Logo left | "← Home" ghost link + "Book Now!" right

---

## 6. Hero Section

- **Background:** Radial blue gradient on white — `radial-gradient(ellipse 100% 65% at 50% 100%, rgba(96,165,250,0.22)...)` layered with `linear-gradient(180deg, #ffffff, #f0f7ff)`
- **Layout:** Centered text, `border-radius: 24px` on the section container
- **Top badge:** Small pill — pulsing green dot + "AI Front Desk for Dental Clinics" — white bg, `border-[#e5e7eb]`, shadow
- **H1:** "Never miss another / patient call." — "patient call." in `#2563eb`
- **Subheading:** 17–19px `#6b7280`, max-width ~640px
- **CTA Button:** Large blue pill "Book Now!" with arrow icon + glow shadow
- **Trusted-by strip:** Small clinic name pills in a CSS marquee with fade masks on edges
- **Animation:** Staggered `hero-fade-up` keyframe animation (0.05s to 0.44s delay per element)

---

## 7. Social Proof Strip

- **Label:** All-caps small text — "Trusted by dental clinics across India"
- **Layout:** Single-row infinite marquee, left-to-right scroll
- **Item style:** White/70 pill with `border-[#e5e7eb]`, small blue avatar circle (initials), clinic name
- **Animation:** `animate-marquee` CSS infinite scroll, dual-set for seamless loop
- **Fade masks:** `linear-gradient` overlays on left and right edges

---

## 8. Feature Cards (Features Section)

- **Section background:** `#f9fafb`
- **Section header:** Centered label + H2 + subtitle; fades up on scroll entry
- **Layout:** 2×2 grid on desktop, single column on mobile; cards stagger in on scroll
- **Card style:** White bg, `rounded-2xl`, soft shadow, blue accent bar on top edge (visible on hover only)
- **Hover effect:** `translateY(-6px)`, deeper blue-tinted shadow, `border-[#bfdbfe]`, accent bar fades in
- **Inner UI mockups:** Realistic mini dashboard data (patient names, amounts, status badges, pulsing indicators)
- **Count-up numbers:** Revenue, call count, and queue stats animate from 0 using `requestAnimationFrame` on IntersectionObserver trigger

### Feature cards:
1. **Automated Payment Collection** — overdue/paid patient list, payment method grid (UPI, Visa, RuPay…)
2. **WhatsApp Appointment Booking** — stat tiles (revenue recovered, calls answered, missed calls: 0), booking confirmation banner
3. **24/7 Missed Call Recovery** — patient queue list, "Messaging now" green indicator, handled count
4. **Recall & Re-activation Campaigns** — campaign list with status dots, "Book Now!" button inside card

---

## 9. How It Works Section

- **Background:** White with `border-t border-[#e5e7eb]`
- **Layout:** Section header → 4-step grid → phone mockup + bullet points
- **4 steps:** Connected by dashed horizontal line (desktop). Step icon in colored rounded square, step number, title, description.
  - 01 Patient Calls — `PhoneCall` Lucide icon, gray
  - 02 FREMN Replies — `MessageSquare` Lucide icon, green
  - 03 Slot Confirmed — `CalendarCheck` Lucide icon, blue
  - 04 Auto Reminder — `Clock` Lucide icon, purple
- **Step animation:** Staggered fade-up (120ms apart) on IntersectionObserver trigger
- **Phone mockup:** WhatsApp conversation simulation with animated messages appearing in sequence on trigger
- **Bullet points:** 3 items (60-second response, Works around the clock, No staff involvement) each with blue icon in `#eff6ff` tile
- **CTA:** "See it live →" blue pill button

---

## 10. Comparison Table

- **Background:** White
- **Layout:** Full-width table inside `max-w-5xl`; sticky first column on mobile with horizontal scroll
- **Scroll hint:** "Swipe to compare" label visible on mobile only
- **Header row:** FREMN column in solid `#2563eb` card (rounded top), competitor columns in plain text
- **FREMN column:** `#eff6ff` background with `#1d4ed8` borders; checkmarks in `#2563eb`
- **Competitor cells:** Gray dashes or qualifier text `#9ca3af`
- **Row hover:** Feature label transitions from `#6b7280` to `#111827`
- **Scroll reveal:** Header, table, and CTA fade up in sequence on scroll entry

---

## 11. Pricing Calculator

- **Background:** White (or light gray section)
- **Layout:** Two-panel — left controls + right price display — on desktop; stacked on mobile
- **Sliders:** Custom range input with gradient filled track and `#2563eb` bordered thumb with shadow
- **Feature toggles:** Pill buttons — selected = `#1e3a8a` dark bg + white text; unselected = white + `#e5e7eb` border
- **Price display:** Large bold `₹` amount with "per month" label; calculated live from slider inputs
- **Savings chip:** Green pill showing vs. traditional receptionist cost
- **CTA:** "Book Now!" blue pill button

---

## 12. FAQ Section

- **Background:** White, `max-w-3xl` centered
- **Scroll reveal:** Header fades up, then each question staggered (50ms apart) on IntersectionObserver trigger
- **Accordion:** Divider-style — `1px solid rgba(13,27,62,0.08)` borders between items
- **Question row:** Number (01–08) in muted blue + question text + `+` icon that rotates to `×` when open
- **Answer transition:** `max-height: 0 → 400px` with `cubic-bezier(0.4, 0, 0.2, 1)` — no instant pop
- **Color change on open:** Number and icon shift to `#1B4FD8`, question text shifts to `#111827`
- **Bottom:** "Still have questions?" + mailto link

---

## 13. Contact / Booking Form

- **Layout:** Full inline section (not modal), two-column on desktop — left info panel + right form
- **Left panel:** Heading, subtext, 3 benefit bullet rows, founder avatars
- **Right panel:** Form with specialty dropdown (dental specialties only), name, email, phone, clinic name, message
- **Input style:** `rounded-xl`, `border-[#e5e7eb]`, focus ring `ring-[#2563eb]`, `text-[14px]`
- **Specialty dropdown:** General Dentistry, Orthodontics, Dental Implants, Pediatric Dentistry, Oral Surgery, Endodontics, Periodontics, Prosthodontics, Cosmetic Dentistry, Other
- **Submit button:** Full-width blue pill "Book Now!"
- **Background:** White/blue gradient (same pattern as hero/footer)

---

## 14. Footer

- **Background:** `radial-gradient(ellipse 100% 65% at 50% 100%, rgba(96,165,250,0.22)...) + linear-gradient(180deg, #ffffff, #f0f7ff)` — same pattern as hero
- **Layout:** 3-column grid — brand column (2fr) + Product links (1fr) + Company links (1fr)
- **Brand column:** `logo.png`, tagline, entity + location line, phone number, social icons
- **Social icons:** LinkedIn (custom SVG), Instagram (custom SVG), X (Lucide `X`), Email (Lucide `Mail`) — all in `w-8 h-8 rounded-lg` bordered tiles
- **Product links:** Features, Integrations, How We Compare, Testimonials, FAQ, Blog
- **Company links:** Book Now!, About, Team, Careers, Contact Us
- **Bottom bar:** `border-t border-[#e5e7eb]` | Copyright left | Privacy Policy, Terms & Conditions, DPDP Compliance right
- **Link color:** `#6b7280` → hover `#111827`

---

## 15. Inner Page Layouts (About / Team / Careers / Blog / Legal)

- **Navbar:** Sticky white, same pattern — Logo left | "← Home" ghost link + "Book Now!" right
- **Background:** Same white/blue radial gradient as footer/hero
- **Header area:** Eyebrow label (blue uppercase) + H1 + subtitle + horizontal rule
- **Content area:** `max-w-6xl` with `px-6 md:px-12 lg:px-24`, `pb-24`
- **Footer bar:** Minimal — copyright left, 2–3 relevant links right, `border-t border-[#e5e7eb]`

### Specific pages:
- **About:** Prose layout, `max-w-2xl` content column, 4 text sections (The Problem, Our Approach, What We Believe, Where We're Going)
- **Team:** 2×4 founder card grid + mission strip two-column card with stat numbers in `#2563eb`
- **Careers:** Why/How side-by-side cards + role card grid (hover lift + accent bar) + speculative strip
- **Blog index:** Featured post large card + all posts 3-col grid; blue pill tags; author avatar in `#2563eb`
- **Blog post:** Sticky white navbar with "← Home" + "← All posts" | `max-w-4xl` prose | ReadProgressBar | CTA strip
- **Legal pages:** 2-column layout — sticky sidebar (Back to Home, section nav, related links) + main prose; shared `LegalLayout` component

---

## 16. Card Hover Pattern (reused across site)

Applied consistently to: feature cards, founder cards, role cards, blog cards.

```
group relative rounded-2xl bg-white border border-[#e5e7eb]
shadow-[0_2px_12px_rgba(0,0,0,0.06)]
transition-all duration-200
hover:-translate-y-1.5
hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)]
hover:border-[#bfdbfe]
overflow-hidden
```

Blue accent bar (top edge):
```
absolute inset-x-0 top-0 h-[2px] rounded-t-2xl
bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb]
opacity-0 group-hover:opacity-100 transition-opacity duration-200
```

---

## 17. Micro UI Patterns

| Pattern              | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| Live badge           | Pulsing green dot (`animate-pulse`) + "Messaging now" label                |
| Status badges        | Rounded pill: green=Active/Paid, amber=Overdue, gray=Queued/Pending        |
| Avatar circle        | `w-7–10 h-7–10 rounded-full bg-[#dbeafe]` with initials in `#2563eb`      |
| Blue icon tile       | `w-10 h-10 rounded-xl bg-[#eff6ff] border border-[#dbeafe]` with SVG       |
| Section eyebrow      | `text-[10–11px] font-semibold tracking-[0.12em] uppercase text-[#2563eb]`  |
| Horizontal rule      | `flex-1 h-px bg-[#dbeafe]` — used after eyebrow labels                     |
| Marquee logos        | CSS `animate-marquee` infinite scroll, dual-set for seamless loop           |
| Read progress bar    | Fixed top bar: `bg-[#e5e7eb]` track, `linear-gradient(#2563eb, #60a5fa)` fill |

---

## 18. Animations & Motion

- **Page load (hero):** Staggered `hero-fade-up` keyframe — `opacity 0→1` + `translateY(20px→0)`, 0.05s to 0.44s delays
- **Scroll reveal:** IntersectionObserver on `threshold: 0.1–0.2` → `opacity` + `translateY` CSS transition, one-shot (observer disconnects after firing)
- **Stagger pattern:** `transition-delay: i * 0.05–0.12s` on grid children using index
- **Count-up numbers:** `requestAnimationFrame` ease-out cubic, 1400–1800ms duration, fires on IntersectionObserver trigger
- **FAQ accordion:** `max-height: 0 → 400px`, `cubic-bezier(0.4, 0, 0.2, 1)`, 350ms
- **FAQ icon:** `transform: rotate(0→45deg)`, 250ms ease
- **Marquee:** CSS `@keyframes` infinite scroll, `animate-marquee` utility class
- **Live badge:** `animate-pulse` on green dot
- **Card hover:** `transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s`
- **Accent bar:** `opacity 0→1`, 200ms on group hover
- **CTA hover:** Background darkens `#1d4ed8`, shadow deepens

---

## 19. Responsive Breakpoints

| Breakpoint | Width      | Key behaviors                                             |
|------------|------------|-----------------------------------------------------------|
| Mobile     | < 640px    | Single column, stacked layout, hamburger nav              |
| Tablet     | 640–768px  | 2-col grids where applicable                              |
| Desktop    | 768–1024px | Full multi-column layout, side-by-side sections           |
| Wide       | > 1024px   | `max-w-6xl` container centered, full px-24 padding        |

---

## 20. SEO & Crawlability

- **Sitemap:** `/sitemap.xml` generated via `src/app/sitemap.ts` (Next.js App Router). Includes static pages + dynamic blog posts from Supabase.
- **robots.txt:** `public/robots.txt` — allows all major crawlers and AI bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot). Disallows `/api/` and `/_next/`.
- **llms.txt:** `llms.txt` at project root — machine-readable product summary for LLM indexing.
- **Metadata:** `metadataBase: new URL("https://fremn.com")` set in root layout. `themeColor` via `export const viewport: Viewport`.
- **Open Graph / Twitter cards:** Defined per page via Next.js `metadata` exports.
- **DPDP Compliance:** Dedicated page at `/dpdp-compliance` covering India's Digital Personal Data Protection Act.
