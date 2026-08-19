# brandonharding.dev

Personal site for Brandon Harding — Senior Full Stack Software Engineer. Built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Site map

- `/` — Hero, Toddly, Billing Agent, experience, contact
- `/work` — All case studies
- `/work/[slug]` — Toddly, billing agent, Storybook Studio, and selected client work

Copy lives in `src/content/`. Drop real screenshots into `public/images/toddly/`, `public/images/billing-agent/`, or `public/images/storybook/` and wire `src` on the matching project image in `src/content/projects.ts`.

## Deploy on Vercel

1. Import this repository in [Vercel](https://vercel.com/new).
2. Framework preset: Next.js. Build command: `next build`. Output: default (do not use `output: "export"`).
3. Assign **www.brandonharding.dev** as the primary domain. Redirect the apex (`brandonharding.dev`) to `www`.
4. Point the domain DNS to Vercel (A/CNAME as shown in the dashboard).

The site is statically generated. There is no database, auth, or contact form — email uses `mailto:`.
