# Hugo Landing Page Theme - Project Context

## Project Overview

This is a Hugo-based landing page theme built with **Hugo Blox Builder** and **Tailwind CSS v4**. It's a static site generator project using the Landing Page template with a block-based page building system that allows for easy creation of startup websites, marketing websites, and landing pages.

### Key Technologies
- Hugo v0.150.1 (static site generator)
- Hugo Blox Builder (modular block system)
- Tailwind CSS v4 + Preact for interactive components
- pnpm v10.14.0 (package manager)
- Go 1.19+ (for Hugo modules)
- Node.js (required for development)

## Building and Running

### Local Development
```bash
# Install dependencies
pnpm install

# Start development server with live reload
pnpm dev
# Equivalent: hugo server --disableFastRender

# Build production site
pnpm build
# Equivalent: hugo --minify
```

### Go Module Management
```bash
# Update Hugo modules
hugo mod get -u

# Verify module dependencies
hugo mod graph

# Clean module cache
hugo mod clean
```

### Production Build (Netlify)
The full production build includes Pagefind indexing:
```bash
pnpm install
hugo --gc --minify -b $URL --logLevel debug
pnpm dlx pagefind --source 'public'
```

## Architecture

### Hugo Blox System
The site uses a **block-based page builder** where pages are composed of reusable "blox" (blocks):

- **Blox Location**: `hugo-blox/blox/` directory contains custom blocks
  - `hugo-blox/blox/all-access/`: Premium Tailwind blox (upload here)
  - `hugo-blox/blox/community/`: Custom/community blox (upload here)

- **Blox Mount System** (`config/_default/module.yaml`):
  - Community blox → `layouts/_partials/blox/community/`
  - All-access blox → `layouts/_partials/blox/`
  - CSS files → `assets/dist/community/blox/`

### Configuration Structure
Hugo uses a split configuration system in `config/_default/`:

- `hugo.yaml`: Core Hugo settings, pagination, taxonomies, output formats
- `params.yaml`: Site appearance, SEO, header/footer, analytics
- `module.yaml`: Hugo module imports and mount points
- `menus.yaml`: Navigation menu configuration
- `languages.yaml`: Multilingual settings

### Content Organization
```
content/
├── authors/           # Author profiles (build: never by default)
├── blog/             # Blog posts with date-title-summary view
│   └── [post]/       # Individual post directories
│       └── index.md  # Post content + frontmatter
├── privacy.md        # Privacy policy
└── terms.md          # Terms of service
```

**Blog Post Cascade Settings** (`hugo.yaml`):
- Comments enabled, reading time shown, related posts displayed
- Editable pages with date updated tracking
- Breadcrumb navigation optional

### Hugo Modules
The project imports two Hugo Blox Builder modules:
1. `blox-plugin-netlify`: Netlify deployment optimizations
2. `blox-tailwind`: Tailwind CSS integration with Hugo

## Development Conventions

### Adding Blog Posts
Create new directory in `content/blog/[post-name]/` with `index.md`:
```yaml
---
title: "Post Title"
date: 2024-01-01
# Additional frontmatter as needed
---
Content here
```

### Adding Custom Blox
1. Create HTML template in `hugo-blox/blox/community/` or `hugo-blox/blox/all-access/`
2. Blox automatically mount to `layouts/_partials/blox/` via module.yaml
3. Reference in page frontmatter with block syntax (see Hugo Blox docs)

### Modifying Site Appearance
- **Theme/Colors**: Edit `appearance` section in `config/_default/params.yaml`
- **Navigation**: Edit `config/_default/menus.yaml`
- **Logo**: Place in `assets/media/` and reference in `params.yaml` navbar config

## Build Environment

### Netlify Configuration
- **Hugo Version**: 0.150.1 (set in `netlify.toml` and `hugoblox.yaml`)
- **Node Version**: 22
- **Go Version**: 1.21.5
- **Publish Directory**: `public`

**Build Contexts**:
- `production`: Full build with `HUGO_ENV=production`
- `deploy-preview`: Includes future-dated content (`--buildFuture`)
- `branch-deploy`: Standard build for branch deployments

### Important Build Flags
- `--gc`: Cleanup cache after build
- `--minify`: Minify HTML/CSS/JS output
- `--logLevel debug`: Verbose logging for troubleshooting
- `--printI18nWarnings`: Show internationalization warnings
- `--printPathWarnings`: Show path resolution warnings

## Key Gotchas

1. **Package Manager**: This project uses `pnpm`, not `npm` or `yarn`
2. **Hugo Modules**: Changes to `module.yaml` require `hugo mod get -u` to update
3. **Blox Auto-Mount**: Custom blox placed in correct folders are automatically available
4. **Author Profiles**: Set to `build: never` by default - remove this in `content/authors/_index.md` to publish
5. **Image Processing**: Hugo uses `lanczos` filter at 90% quality (see `hugo.yaml` imaging config)

## Deployment

Site is configured for Netlify deployment with:
- Hugo cache resources plugin for faster builds
- Pagefind search indexing post-build
- Environment-specific build commands
- Automatic preview deployments

The base URL should be configured in `config/_default/hugo.yaml` for production, or passed via `-b` flag during build.