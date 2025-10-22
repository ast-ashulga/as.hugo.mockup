# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Marketing website for Setu Geo Spatial Software Technologies** - a brand new GIS software development company focused on geospatial intelligence solutions for Indian government agencies and enterprises.

**Company Names:**
- Full: Setu Geo Spatial Software Technologies
- Short: Setu Geo Spatial
- Abbreviation: SGS

**CRITICAL CONTEXT:**
- **Setu Geo Spatial is a NEW company** - Currently in formation stage, not yet officially established
- **No existing solutions or projects** - The company has not created or delivered any solutions yet
- **Portfolio site purpose** - This website is required to present the new company to potential clients and establish market presence
- **Marketing focus** - Site showcases planned service offerings and capabilities to attract initial clients

**Project Status:** Site is under construction for a startup company entering the market. Primary goal is brand building and professional marketing presence to attract initial clients.

**Technical Stack:**
Hugo Landing Page site built with **Hugo Blox Builder** and **Tailwind CSS v4**. This is a Hugo static site generator project using the Landing Page template with block-based page building system.

**Key Technologies:**
- Hugo v0.150.1 (static site generator)
- Hugo Blox Builder (modular block system)
- Tailwind CSS v4 + Preact for interactive components
- pnpm v10.14.0 (package manager)
- Go 1.19+ (for Hugo modules)

## Development Commands

### Local Development
```bash
# Start development server with live reload
pnpm dev
# Equivalent: hugo server --disableFastRender

# Build production site
pnpm build
# Equivalent: hugo --minify
```

### Production Build (Netlify)
The full production build includes Pagefind indexing:
```bash
pnpm install
hugo --gc --minify -b $URL --logLevel debug
pnpm dlx pagefind --source 'public'
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
├── _index.md         # Homepage with hero, stats, features sections
├── about/            # Company overview, mission, vision, capabilities
├── services/         # Seven core service categories, industry solutions
├── use-cases/        # Featured implementations:
│   ├── disaster-management/
│   ├── precision-agriculture/
│   ├── urban-development/
│   └── utilities-infrastructure/
├── contact/          # Contact form and information
├── blog/             # Blog posts (date-title-summary view)
│   ├── geospatial-urban-planning/  # Relevant GIS content
│   └── [template-posts]/            # Generic template posts (can be removed)
├── authors/          # Author profiles (build: never by default)
├── privacy.md        # Privacy policy
└── terms.md          # Terms of service
```

**Site Structure Notes:**
- Homepage emphasizes AI-enabled geospatial intelligence for government & enterprise
- Services page details 7 core categories (Custom GIS, Data Services, Remote Sensing, Analytics, Government/Infrastructure, Cloud/AI, Training/Consulting)
- Use cases demonstrate specific applications (cadastral surveys, disaster assessment, smart cities, precision farming)
- Blog includes one GIS-focused post; template posts should eventually be replaced with company-specific content

**Blog Post Cascade Settings** (`hugo.yaml`):
- Comments enabled, reading time shown, related posts displayed
- Editable pages with date updated tracking
- Breadcrumb navigation optional

### Hugo Modules
The project imports two Hugo Blox Builder modules:
1. `blox-plugin-netlify`: Netlify deployment optimizations
2. `blox-tailwind`: Tailwind CSS integration with Hugo

## Working with Content

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

## Company-Specific Content Guidelines

**Brand Identity:**
- Company name: Always use "Setu Geo Spatial Software Technologies" (full) or "Setu Geo Spatial" (short form)
- Tagline emphasis: "AI-Enabled Geospatial Intelligence for Government & Enterprise"
- Geographic focus: Indian government agencies and enterprises, with Gujarat as base
- Abbreviation: SGS (use sparingly in technical contexts only)

**Content Strategy:**
- Target audience: Government departments (Revenue, Disaster Management, Urban Development) and enterprise clients
- Key differentiators: End-to-end service delivery, AI + Drone technology, government procurement experience, technology-agnostic approach
- Planned core services: 7 categories spanning GIS development, data services, remote sensing, analytics, government solutions, cloud/AI, training
- Technical credibility: Emphasize planned DGCA certification, GeM portal registration, ISO 27001 compliance, OGC standards
- Content tone: Present capabilities professionally while being honest about startup stage (avoid claiming completed projects or existing clients)

**Content Research Repository:**
- Standalone research repository: `/Users/andreyshulga/projects/experimental/anil/as.anil.setu`
- Primary content source: `/Users/andreyshulga/projects/experimental/anil/as.anil.setu/companies/Setu Geo Spatial/`
- Contains comprehensive service portfolio, use case details, and content research
- Use as primary reference for creating new content pages or expanding existing sections
- Includes detailed industry sector documentation (Urban Planning, Utilities, Transportation, Agriculture, etc.)

**Tone & Messaging:**
- Professional but approachable; avoid overly technical jargon
- Emphasize practical outcomes and business value over technology features
- Use specific metrics where possible (e.g., "10-50x faster processing", "centimeter-level accuracy")
- Government-friendly language: compliance, integration, multi-department coordination

## Deployment

Site is configured for Netlify deployment with:
- Hugo cache resources plugin for faster builds
- Pagefind search indexing post-build
- Environment-specific build commands
- Automatic preview deployments

The base URL should be configured in `config/_default/hugo.yaml` for production, or passed via `-b` flag during build.
