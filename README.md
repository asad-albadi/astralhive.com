# Astral Hive — Website

The official website for Astral Hive Solutions. Built with **Bun + Vite + React + TypeScript**, deployed to **GitHub Pages** on a custom domain.

## Stack

- [Bun](https://bun.sh) — package manager / runtime
- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [lucide-react](https://lucide.dev) — icons
- Plain CSS with custom properties (`src/index.css`) — no UI framework

## Develop

```bash
bun install
bun run dev        # local dev server
bun run build      # type-check + production build -> dist/
bun run preview    # preview the production build
```

## Project structure

```
index.html              # entry HTML + SEO/OG meta
src/
  main.tsx              # React bootstrap
  App.tsx               # page composition
  index.css             # design system + all styles
  data.ts               # services, highlights, projects, links (edit content here)
  hooks/useReveal.ts    # scroll-reveal animations
  components/           # Nav, Hero, Services, Projects, About, Contact, Footer, Logo
public/
  CNAME                 # custom domain (astralhive.net)
  favicon.png, icons/   # site icons
```

To add or edit a project / service, edit `src/data.ts` — no component changes needed.

## Deploy

GitHub Pages serves the `prod` branch. The deploy script builds and publishes `dist/`:

```bash
./deploy.sh "your commit message"
```

It uses a git worktree to push the build output to `prod`, keeping the `CNAME`
file so the custom domain stays mapped.
