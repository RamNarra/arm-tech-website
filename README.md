# ARM Tech website

Marketing site for **ARM Tech** and its product **ARM Flow**: an AI workflow automation platform that lets Indian small businesses describe a recurring task in plain English, approve the plan, and run it across Google Sheets, Gmail and WhatsApp.

Content comes from the ARM Flow Venture Report and idea-pitch case study (A.Y. 2026-27). Estimates and projections are labelled as such on the page.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Motion, Lucide. Design language follows the JSJ INFOTECH site: light canvas, midnight ink sections, logo-derived gradient, aurora and grid backgrounds, glass and spotlight cards.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # lint + typecheck + production build
```

Copy lives in `src/content/site.ts`. The interactive prototype demo is `src/components/PrototypeDemo.tsx` (sample data only).

## Deploy

Vercel, framework preset Next.js, no environment variables.
