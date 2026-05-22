# FREMN — Design System & Technical Spec

> Pure design + tech document. All page copy, section content, and feature text lives in `content.md`.

---

## 1. Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | **Next.js 16** App Router | TypeScript strict mode |
| Styling | **Tailwind CSS v4** | CSS variables via `@theme` |
| Components | **shadcn/ui** | Extend, don't override |
| Icons | **lucide-react** | Consistent stroke weight |
| Animations | **Framer Motion** | Page transitions + scroll reveals |
| Forms | **React Hook Form + Zod** | Validation on client + server |
| Fonts | **next/font/google** | Zero layout shift |
| Images | **next/image** | All screenshots go through this |

### Font Loading (next/font)
```ts
// app/fonts.ts
import { Instrument_Serif, DM_Sans } from 'next/font/google'

export const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
})

export const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
})
```

---

## 2. Visual Identity

### 2.1 Tone
**Refined clinical-tech.** Dark hero sections project authority and modernity. Light body sections feel clean and clinical. The contrast between the two is intentional — it mirrors the duality of FREMN: powerful AI under the hood, simple experience on the surface.

Pattern: **dark hero → light body → dark footer.** Every section transitions deliberately.

### 2.2 Color Tokens

Define in `app/globals.css` under `@theme`:

```css
@theme {
  --color-primary:          #1B4FD8;
  --color-primary-light:    #4D9FFF;
  --color-primary-glow:     rgba(27, 79, 216, 0.35);

  --color-bg-dark:          #0A1628;
  --color-bg-dark-mid:      #141414;
  --color-bg-dark-end:      #0D2152;
  --color-bg-body:          #F7F8FA;
  --color-bg-card:          #FFFFFF;
  --color-bg-card-tint-a:   #F5F8FF;  /* billing cards */
  --color-bg-card-tint-b:   #F8FAFF;  /* dashboard cards */

  --color-border:           #E8ECF2;
  --color-border-tint-a:    #DDEAFF;
  --color-border-tint-b:    #E0E8F5;

  --color-text:             #141414;
  --color-text-muted:       #666666;
  --color-text-hero:        #FFFFFF;
  --color-text-hero-muted:  rgba(255, 255, 255, 0.45);
  --color-text-hero-accent: #4D9FFF;
}
```

**Gradients (use as inline CSS or utility classes):**
```css
/* Hero / footer background */
background: linear-gradient(135deg, #0A1628 0%, #141414 50%, #0D2152 100%);

/* Buttons / step badges */
background: linear-gradient(135deg, #1B4FD8, #4D9FFF);

/* Accent bar (3px top + bottom stripe) */
background: linear-gradient(to right, #1B4FD8, #4D9FFF);

/* Step divider */
background: linear-gradient(to right, #1B4FD8, transparent);
opacity: 0.25;
```

### 2.3 Typography

| Role | Font | Tailwind class |
|------|------|----------------|
| Hero H1, section headings, step titles, stat numbers | `Instrument Serif` | `font-serif` |
| Everything else — nav, body, buttons, captions, labels | `DM Sans` | `font-sans` |

**Type scale:**
| Element | Size |
|---------|------|
| Hero H1 | `text-5xl md:text-6xl lg:text-7xl` |
| Section H2 | `text-3xl md:text-4xl` |
| Step / card title H3 | `text-xl md:text-2xl` |
| Body | `text-sm md:text-base` |
| Caption / eyebrow label | `text-xs` |

**Italic emphasis (hero headline):**
```tsx
<h1 className="font-serif text-6xl text-white leading-tight">
  Never miss a patient{' '}
  <em className="italic text-[#4D9FFF]">again.</em>
</h1>
```

### 2.4 Motion Principles

| Moment | Behaviour |
|--------|-----------|
| Hero load | Staggered fade-up: label → H1 → sub → CTA → stats (80ms steps) |
| Section enter | `whileInView` fade-up, `once: true`, threshold `0.15` |
| Feature cards | Staggered `whileInView`, 60ms delay per card |
| Stat counters | Count-up on first `inView` trigger |
| CTA buttons | `whileHover: { scale: 1.02 }` + box-shadow transition |
| Nav on scroll | Backdrop blur + border appear after 40px scroll |
| Screenshot frames | Subtle float `translateY` ±8px, 4s ease infinite |
| Marquee | CSS `@keyframes` infinite scroll, no JS |

Wrap all Framer Motion variants in a `useReducedMotion()` check — render static fallback if `true`.

---

## 3. Layout System

### 3.1 Page Shell
```
<AccentBar />                    ← 3px gradient stripe
<nav sticky />
<main>
  [sections]
</main>
<footer />
<AccentBar />                    ← 3px gradient stripe
```

### 3.2 Section Wrapper
```tsx
// Every section uses this wrapper
<section className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
  <div className="max-w-6xl mx-auto">
    {/* content */}
  </div>
</section>

// Dark variant
<section className="bg-gradient-to-br from-[#0A1628] via-[#141414] to-[#0D2152] px-6 ...">
```

### 3.3 Grid Patterns
| Context | Class |
|---------|-------|
| 2-col feature cards | `grid grid-cols-1 sm:grid-cols-2 gap-3` |
| 3-col pipeline | `grid grid-cols-1 md:grid-cols-3 gap-8` |
| 4-col integrations | `grid grid-cols-2 md:grid-cols-4 gap-6` |
| Hero split | `grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 items-center` |

---

## 4. Component Patterns

### 4.1 AccentBar
```tsx
// components/AccentBar.tsx
export function AccentBar() {
  return <div className="h-[3px] w-full bg-gradient-to-r from-[#1B4FD8] to-[#4D9FFF]" />
}
```

### 4.2 Primary Button
```tsx
className="
  bg-gradient-to-r from-[#1B4FD8] to-[#4D9FFF]
  text-white font-sans font-semibold text-sm
  px-7 py-3 rounded-lg cursor-pointer
  transition-all duration-150
  hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(27,79,216,0.4)]
  active:scale-[0.99]
  focus-visible:ring-2 focus-visible:ring-[#4D9FFF] focus-visible:outline-none
"
```

### 4.3 Ghost Button
```tsx
className="
  border border-white/20 text-white/80 font-sans font-medium text-sm
  px-7 py-3 rounded-lg cursor-pointer
  transition-all duration-150
  hover:border-white/50 hover:text-white
  focus-visible:ring-2 focus-visible:ring-[#4D9FFF] focus-visible:outline-none
"
```

### 4.4 Feature Card
```tsx
// components/FeatureCard.tsx
// variant: 'default' | 'billing' | 'dashboard'
const variants = {
  default:   'bg-white border-[#E8ECF2]',
  billing:   'bg-[#F5F8FF] border-[#DDEAFF]',
  dashboard: 'bg-[#F8FAFF] border-[#E0E8F5]',
}

className={`border rounded-xl p-4 transition-shadow duration-200
  hover:shadow-[0_4px_16px_rgba(27,79,216,0.1)]
  ${variants[variant]}`}
```

### 4.5 Step Badge
```tsx
// components/StepHeader.tsx
<div className="
  w-[30px] h-[30px] rounded-full flex-shrink-0
  flex items-center justify-center
  bg-gradient-to-br from-[#1B4FD8] to-[#4D9FFF]
  shadow-[0_2px_12px_rgba(27,79,216,0.35)]
  text-white text-xs font-semibold font-sans
">
  {n}
</div>
```

### 4.6 Step Divider
```tsx
<div className="h-px mb-4 bg-gradient-to-r from-[#1B4FD8] to-transparent opacity-25" />
```

### 4.7 Eyebrow Label
```tsx
<p className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[#4D9FFF] mb-4">
  {label}
</p>
```

### 4.8 Marquee
```tsx
// components/Marquee.tsx
// Pure CSS @keyframes — no JS dependency
// Renders two duplicate tracks for seamless loop
// Props: reverse?: boolean, speed?: number (default 28s)
```

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

### 4.9 StatCounter
```tsx
// components/StatCounter.tsx
// Framer Motion: useInView + animate from 0 → target
// Fires once on first viewport entry
// Props: target: number | string, label: string, suffix?: string
```

### 4.10 Logo Mark
```tsx
// Matches brochure exactly
<div className="
  w-[42px] h-[42px] rounded-[10px] flex-shrink-0
  bg-gradient-to-br from-[#1B4FD8] to-[#4D9FFF]
  flex items-center justify-center
  font-serif text-[22px] text-white
">
  F
</div>
```

---

## 5. Screenshot & Image System

### 5.1 Asset Structure
```
/public
  /screenshots
    /web
      dashboard-overview.png
      appointments-view.png
      patient-profile.png
      revenue-report.png
    /mobile
      whatsapp-booking-flow.png
      whatsapp-reminder.png
      whatsapp-payment.png
      app-home.png
      app-appointments.png
```

### 5.2 All Screenshots via next/image
```tsx
import Image from 'next/image'

<Image
  src="/screenshots/web/dashboard-overview.png"
  alt="FREMN appointments dashboard showing today's schedule"
  width={1200}
  height={750}
  className="rounded-2xl shadow-2xl"
  priority   // only for hero / above-fold
/>
```

Use `placeholder="blur"` with `blurDataURL` for all non-priority images.

### 5.3 PhoneFrame Component
```tsx
// components/PhoneFrame.tsx
// Pure CSS phone chrome — rounded corners, notch, home indicator
// Aspect ratio: 390 × 844 (iPhone 14 proportions)
// Screenshots must be cropped/sized to this ratio before import
// Usage: wraps mobile screenshots in feature steps + hero

<PhoneFrame>
  <Image
    src="/screenshots/mobile/whatsapp-booking-flow.png"
    alt="WhatsApp booking conversation in FREMN"
    fill
    className="object-cover"
  />
</PhoneFrame>
```

Dimensions: max-width `280px` on mobile, `320px` on `md+`.

### 5.4 BrowserFrame Component
```tsx
// components/BrowserFrame.tsx
// Top bar: 3 dot buttons (red/yellow/green) + fake URL bar showing "app.fremn.in"
// Screenshot fills the viewport area below the chrome bar
// Usage: wraps web/dashboard screenshots

<BrowserFrame>
  <Image
    src="/screenshots/web/revenue-report.png"
    alt="FREMN revenue and no-show recovery dashboard"
    width={1200}
    height={750}
    className="w-full"
  />
</BrowserFrame>
```

### 5.5 Float Animation (Hero)
```tsx
// Wrap frames in this for the hero
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
>
  <PhoneFrame>...</PhoneFrame>
</motion.div>

// Second screenshot, offset phase
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
>
  <BrowserFrame>...</BrowserFrame>
</motion.div>
```

### 5.6 Screenshot Placement per Section

| Section | Frame | Asset |
|---------|-------|-------|
| Hero — primary | `PhoneFrame` | `mobile/whatsapp-booking-flow.png` |
| Hero — secondary (overlap/stack) | `BrowserFrame` | `web/dashboard-overview.png` |
| Step 2 (WhatsApp booking) | `PhoneFrame` | `mobile/whatsapp-booking-flow.png` |
| Step 3 (Reminders) | `PhoneFrame` | `mobile/whatsapp-reminder.png` |
| Step 5 (Payments) | `PhoneFrame` | `mobile/whatsapp-payment.png` |
| Step 6 (Dashboard) | `BrowserFrame` | `web/revenue-report.png` |
| Product overview | `BrowserFrame` | `web/dashboard-overview.png` |

> Until real screenshots exist: use a solid `bg-[#E8ECF2]` placeholder div at the correct aspect ratio inside each frame. Never use external placeholder image services.

---

## 6. Navigation

```
[AccentBar]
<nav>
  Left:   LogoMark + "FREMN" wordmark + sub-label
  Center: nav links
  Right:  [Book a Demo] primary button
</nav>
```

Scroll state (add after 40px scroll):
```tsx
className="border-b border-white/10 backdrop-blur-md bg-[#0A1628]/80"
```

Mobile (`< md`): hamburger icon → full-screen overlay with dark background + centered nav links.

---

## 7. Responsive Behaviour

| Breakpoint | Width | Key changes |
|------------|-------|-------------|
| base | 0px | Single col, stacked hero, `text-4xl` H1 |
| `sm` | 640px | 2-col feature cards |
| `md` | 768px | Desktop nav, side-by-side hero, 3-col pipeline |
| `lg` | 1024px | Full layout, larger type scale |
| `xl` | 1280px | Max content width cap (`max-w-6xl`) |

Screenshot frames on mobile:
- `PhoneFrame`: max-width `260px`, centred below hero text
- `BrowserFrame`: full-width of container, `rounded-xl overflow-hidden`

All interactive tap targets: minimum `44 × 44px`.

---

## 8. Accessibility

| Rule | Implementation |
|------|---------------|
| Image alt text | Descriptive, not filename-based |
| Heading hierarchy | One `<h1>`, logical `<h2>` → `<h3>` nesting |
| Focus rings | `focus-visible:ring-2 focus-visible:ring-[#4D9FFF]` on all interactive elements |
| Colour contrast | All text passes WCAG AA on both dark + light backgrounds |
| Reduced motion | All Framer Motion variants check `useReducedMotion()` — static fallback |
| Semantic HTML | `<nav>`, `<main>`, `<section>`, `<footer>`, `<button>` used correctly |

---

## 9. File Structure

```
app/
  layout.tsx          ← font vars, metadata, AccentBar
  page.tsx            ← section imports only, no content
  globals.css         ← @theme tokens, base resets, keyframes
  fonts.ts            ← Instrument Serif + DM Sans config

components/
  ui/                 ← shadcn primitives (untouched)
  AccentBar.tsx
  PhoneFrame.tsx
  BrowserFrame.tsx
  StatCounter.tsx
  Marquee.tsx
  FeatureCard.tsx
  StepHeader.tsx
  SectionLabel.tsx
  LogoMark.tsx
  NavBar.tsx

public/
  screenshots/
    web/
    mobile/
```

---

## 10. Screenshot Asset Checklist

**P0 — Required before hero can be built**
- [ ] `mobile/whatsapp-booking-flow.png` — WhatsApp chat showing booking conversation
- [ ] `web/dashboard-overview.png` — Main FREMN dashboard, appointments visible

**P1 — Required for feature sections**
- [ ] `mobile/whatsapp-reminder.png` — Reminder message in WhatsApp
- [ ] `mobile/whatsapp-payment.png` — UPI payment link in WhatsApp chat
- [ ] `web/revenue-report.png` — Revenue / no-show recovery report
- [ ] `web/appointments-view.png` — Today's appointments list

**P2 — Nice to have**
- [ ] `web/patient-profile.png` — Single patient detail view
- [ ] `mobile/app-home.png` — FREMN app home screen
- [ ] `mobile/app-appointments.png` — App appointments screen

**Screenshot specs:**
- Web: `1200 × 750px` minimum, PNG, no browser chrome (frame is added in code)
- Mobile: `390 × 844px` minimum, PNG, no phone chrome (frame is added in code)
- All screenshots: real UI only, no placeholder content visible

---

*design.md covers design system and technical spec only. See `content.md` for all copy, feature descriptions, and page text.*
