# Setup & Installation

← **[Back to README](./README.md)**

---

## Prerequisites

- **Node.js** 20+ — [nodejs.org](https://nodejs.org)
- **npm** 10+ (bundled with Node), or pnpm / yarn / bun
- A **Supabase** project — [supabase.com](https://supabase.com)

---

## 1. Clone the Repository

```bash
git clone https://github.com/thefremn/fremn-landing-page.git
cd fremn-landing-page
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local   # if an example file exists, otherwise create it manually
```

Open `.env.local` and fill in the values:

```env
# Supabase — find these in your Supabase project dashboard → Settings → API
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-public-key>

# Solvia widget (optional — removes the support widget if omitted)
NEXT_PUBLIC_SOLVIA_ORG_ID=<your-solvia-org-id>
```

> `NEXT_PUBLIC_` variables are exposed to the browser. Never put secret keys in these.
> The Supabase service-role key (if needed for server-only operations) should be stored as `SUPABASE_SERVICE_ROLE_KEY` without the `NEXT_PUBLIC_` prefix.

---

## 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads on save.

---

## 5. Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Starts Next.js dev server with HMR |
| Build | `npm run build` | Production build with type-check |
| Start | `npm run start` | Serves the production build locally |
| Lint | `npm run lint` | Runs ESLint across the project |

---

## 6. Project-Specific Notes

### Tailwind CSS v4

This project uses **Tailwind v4**, which has a different config structure than v3. There is no `tailwind.config.js` — all configuration lives in `src/app/globals.css` using `@theme` blocks. Refer to the [Tailwind v4 docs](https://tailwindcss.com/docs) if adding custom tokens.

### React Compiler

`next.config.ts` enables the experimental React Compiler (`reactCompiler: true`). This optimises re-renders automatically — avoid adding manual `useMemo`/`useCallback` unless profiling shows a real need.

### Path Aliases

`@/*` resolves to `src/*`. Use this in all imports:

```ts
import { cn } from "@/lib/utils";
import Navbar from "@/components/custom/navbar";
```

### shadcn/ui Components

Add new shadcn components with:

```bash
npx shadcn@latest add <component-name>
```

Components are installed into `src/components/ui/`.

### Supabase SSR

- Browser-side client: `src/lib/client.ts`
- Server-side client (Server Components, Route Handlers): `src/lib/server.ts`
- Auth middleware (session refresh + redirect): `src/lib/middleware.ts`

Always use `getUser()` on the server rather than `getSession()` — `getSession()` reads from the cookie without validating the JWT against Supabase servers.

---

## 7. Deployment (Vercel)

1. Push your branch to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Add all `NEXT_PUBLIC_*` environment variables in the Vercel project settings.
4. Deploy — Vercel detects Next.js automatically, no build config needed.

The `main` branch deploys to production. The `Development-Instance` branch is used for staging/feature work.
