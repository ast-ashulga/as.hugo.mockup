# Repository Guidelines

This repository contains a Hugo Blox–based landing page (Hugo + Tailwind CSS v4). Use pnpm for Node tooling and Hugo Extended for builds. Treat `public/` and `resources/` as generated artifacts.

## Project Structure & Module Organization
- `content/`: Markdown content (blog posts in `content/blog/[slug]/index.md`).
- `assets/`: Images and client assets (`assets/media/*`, Tailwind input).
- `config/_default/`: Site configuration (`hugo.yaml`, `params.yaml`, `menus.yaml`).
- `hugo-blox/blox/`: Custom/community blox (HTML partials + CSS mounted via modules).
- `public/`, `resources/`: Build output/cache — do not edit.

## Build, Test, and Development Commands
- `pnpm dev`: Run local server with live reload (`hugo server --disableFastRender`).
- `pnpm build`: Production build to `public/` (`hugo --minify`).
- `hugo mod get -u`: Update Hugo module dependencies.
- Optional: `pnpm dlx pagefind --source public` to (re)index search after build.

## Coding Style & Naming Conventions
- Indentation: 2 spaces for YAML/HTML/Markdown.
- Filenames: kebab-case for content and media (e.g., `my-post`, `hero-image.jpg`).
- Content: Use page bundles (`content/blog/my-post/index.md` + colocated assets).
- Front matter: YAML with `title`, `date`, `summary`, `tags`, as needed.
- Tailwind: Use utility classes in templates/partials; do not edit generated CSS.

## Testing Guidelines
- No unit tests; validate by running `pnpm build` and reviewing console warnings (`--printI18nWarnings --printPathWarnings` in CI).
- Manually verify key pages render and links work; run Pagefind indexing if search is enabled.

## Commit & Pull Request Guidelines
- Commits: Imperative mood, concise subject, optional scope (e.g., `feat(content): add analytics post`).
- PRs: Include purpose, screenshots (before/after) for visual changes, and links to issues. Describe config changes (`config/_default/*`).

## Security & Configuration Tips
- Set production `baseURL` in `config/_default/hugo.yaml` or via build flag `-b`.
- Do not commit secrets; use GitHub Actions/Netlify environment variables.
- Prefer `pnpm` (see `package.json`); Node ≥ 20, Hugo Extended ≥ 0.150.1.

## Agent-Specific Instructions
- Do not edit `public/` or `resources/` directly.
- Place new images in `assets/media/`; reference via content front matter or templates.
- When adding blox, place HTML in `hugo-blox/blox/community/` and let mounts wire it.
