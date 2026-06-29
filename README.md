# cast-pub

A bilingual tech blog (Japanese / English) powered by React.

## Resources

- Live Demo: https://www.kkoisland.com/cast-pub
- Slides: TBD

## Features

- Bilingual support (Japanese / English) via React Intl, switchable from a dropdown in the Header (persisted in localStorage)
- English articles auto-generated from Japanese by Claude
- Dark mode support
- Article list with category filtering (mock data for now)
- Article detail page with a per-article language override (`/articles/:id/ja` or `/en`), independent of the site-wide language setting

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
  App.tsx          — routing + Layout (Header/Outlet/Footer)
  main.tsx         — entry point
  index.css        — global styles (Tailwind + dark mode)
  types.ts         — shared types (Article, ArticleContent, Locale)
  categories.ts    — article category constants (slug + ja/en labels)
  mockArticles.ts  — mock article data
  i18n/
    index.tsx      — LocaleContext + IntlProvider wrapper (localStorage-backed)
    ja.ts          — Japanese messages
    en.ts          — English messages
  components/
    Header.tsx     — site name + language dropdown
    Footer.tsx     — copyright + site name link
    SiteName.tsx   — gradient-text "cast-pub" link to the top page
  pages/           — page components (added per phase)
    ArticleList.tsx   — article list with category filtering (top page)
    ArticleDetail.tsx — article detail with a per-article language toggle
```

## Deploy

Deployed to GitHub Pages via GitHub Actions.
Push to `main` triggers auto build & deploy.

Settings → Pages → Source: GitHub Actions
