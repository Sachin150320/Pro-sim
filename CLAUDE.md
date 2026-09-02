@AGENTS.md

# ProSIM Website (`my-next-app`)

Marketing/corporate website for **ProSIM** (Bangalore-based CAE / FEA / CFD / detailed-engineering
services company). Static, content-driven site — no backend, no database, no auth.

## Stack

- **Next.js 16.3.3** (App Router) — `next dev` regenerates `AGENTS.md`; commit it with your changes.
- **React 19**, **TypeScript** (strict).
- **Tailwind CSS v4** (via `@tailwindcss/postcss`) + hand-written per-component CSS.
- **lucide-react** for icons.
- **Static export**: `next.config.ts` sets `output: "export"` and `images.unoptimized: true`.
  Build output lands in `out/`. No server components with dynamic runtime behavior, no
  route handlers, no `next/image` optimization, no middleware.

## Commands

```bash
npm run dev      # local dev server (http://localhost:3000)
npm run build    # static export to out/
npm run lint     # eslint (flat config, next core-web-vitals + typescript)
```

Deployment: `install.cmd` in the parent `PROSIM/` folder handles server install; the built
`out/` folder is what gets served.

## Layout

```
app/
  layout.tsx              Root layout: fonts (Geist, Geist Mono, DM Sans), <Header/> + <Footer/>, site metadata
  page.tsx                Home page — composes section components
  globals.css             Tailwind directives + large blocks of global/component CSS (header, footer, etc.)
  <route-folder>/page.tsx  One folder per page; page.tsx is a thin wrapper that renders one component
  Components/
    <Feature>/<Feature>.tsx + <Feature>.css   Most components: folder with matching .css
    <Name>.tsx / <Name>.jsx                   Some home-page sections live flat in Components/
```

## Conventions

- **Page pattern**: route `page.tsx` files are near-empty wrappers — real markup/logic lives in
  `app/Components/<Feature>/<Feature>.tsx`. Put new page content in a component, not in `page.tsx`.
- **Styling**: component-scoped `.css` files imported into the component (plain class names, not
  CSS Modules). Global/shared styles and most of the header/footer styling sit in `app/globals.css`.
  Tailwind utility classes are used sparingly alongside these.
- **Imports**: use the `@/*` alias (maps to project root), e.g. `@/app/Components/Header/Header`.
- **Client components**: add `"use client"` for anything with state/effects (Header, ContactSection,
  ScrollAnimation). Default to server components otherwise.
- **Images**: plain `<img>` tags (not `next/image`) pointing at `/assets/images/...` under `public/`.
- Mixed `.tsx`/`.jsx` in `Components/` — prefer `.tsx` for new files.
- Route folder names are freeform (mixed casing, `&` and spaces in some names). Match the existing
  `href` strings in `app/Components/Header/Header.tsx` when linking.

## Known gaps (don't assume these work)

- `Header.tsx` links to `/contact-us`, but there is no `app/contact-us/` route.
- `app/Piping-&-pipeline-engineering-services/` has only a `NuclearPower/` subfolder, no `page.tsx`.
- `ContactSection` form only sets local `submitted` state — it does not send anywhere.
- Many nav links in `Header.tsx` point to `#` (Industries, Projects, Events, Careers).
