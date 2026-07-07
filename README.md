# AI Youth Academy

AI Youth Academy teaches students ages 6–18 how to build with Artificial Intelligence through coding, creativity, entrepreneurship, websites, games, apps, and real-world projects. Coming soon to Jordan Ranch / Fulshear, TX.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

Repository: [github.com/Dr-Opara/aiyouthacademy](https://github.com/Dr-Opara/aiyouthacademy)

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `src/app` — routes: homepage, `/coming-soon`, `/programs/[slug]`, `/student-portal`, `/instructor-portal`
- `src/components` — reusable UI sections (Navigation, HeroSection, ProgramTracks, PortalShell, etc.)
- `src/lib/programs.ts` — shared program/track data used across the homepage and program detail pages

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run the production build
npm run lint     # lint the project
```

## Deployment

The site deploys to [Vercel](https://vercel.com). Production: [aiyouthacademy.vercel.app](https://aiyouthacademy.vercel.app) (custom domain `aiyouthacademy.com` / `www.aiyouthacademy.com` pending DNS setup).
