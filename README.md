# cast-pub

A bilingual tech blog (Japanese / English) powered by React.

## Resources

- Live Demo: https://www.kkoisland.com/cast-pub
- Slides: TBD

## Features

- Bilingual support (Japanese / English) via React Intl
- English articles auto-generated from Japanese by Claude
- Dark mode support
- Article list with category filtering (mock data for now)

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Intl
- Biome (formatter & linter)
- GitHub Actions (CI/CD)
- GitHub Pages

## Local Development

```bash
git clone https://github.com/kkoisland/cast-pub.git
cd cast-pub
pnpm i
pnpm dev
```

Open http://localhost:5173/

## Project Structure

```
src/
  App.tsx          — routing + i18n provider
  main.tsx         — entry point
  index.css        — global styles (Tailwind + dark mode)
  types.ts         — shared types (Article, ArticleContent, Locale)
  categories.ts    — article category constants (slug + ja/en labels)
  mockArticles.ts  — mock article data
  i18n/
    ja.ts          — Japanese messages
    en.ts          — English messages
  pages/           — page components (added per phase)
    ArticleList.tsx — article list with category filtering
```

## Deploy

Deployed to GitHub Pages via GitHub Actions.
Push to `main` triggers auto build & deploy.

Settings → Pages → Source: GitHub Actions
