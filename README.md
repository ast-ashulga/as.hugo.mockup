# Setu Geo Spatial Software Technologies - Company Website

Marketing website for **Setu Geo Spatial Software Technologies** (SGS), a GIS software development company providing AI-enabled geospatial intelligence solutions for Indian government agencies and enterprises.

## Project Status

🚧 **Under Construction** - Portfolio website for a brand new company that has not yet been established.

**Critical Context:**

- **Setu Geo Spatial is a NEW company** - Currently in formation stage, not yet officially established
- **No existing solutions or projects** - The company has not created or delivered any solutions yet
- **Portfolio site purpose** - This website is required to present the new company to potential clients and establish market presence
- **Marketing focus** - Site showcases planned service offerings and capabilities to attract initial clients

**Website Goal:** Create professional marketing presence for a startup GIS company entering the Indian government and enterprise geospatial services market.

## About Setu Geo Spatial

**Full Name:** Setu Geo Spatial Software Technologies

**Short Name:** Setu Geo Spatial

**Abbreviation:** SGS

**Mission:** Transform raw spatial data into actionable insights for government and enterprise through custom GIS solutions, AI-powered analytics, and professional drone operations.

**Target Market:**

- Indian Government Departments (Revenue, Disaster Management, Urban Development)
- Municipal Corporations and Smart City Projects
- Infrastructure Developers and Utility Companies
- Enterprise Geospatial Solutions

**Planned Core Services:**

1. Custom GIS Software Development
2. Geospatial Data Services
3. Remote Sensing & Image Analysis
4. Spatial Analytics & Decision Intelligence
5. GIS for Government & Infrastructure
6. Cloud, AI & Automation
7. Training, Consulting & Support

## Technical Stack

Built with [Hugo Blox Builder](https://hugoblox.com) - a modern static site generator using:

- **Hugo** v0.150.1 (Static Site Generator)
- **Hugo Blox Builder** (Block-based page system)
- **Tailwind CSS** v4 (Styling)
- **Preact** (Interactive components)
- **pnpm** v10.14.0 (Package manager)
- **Go** 1.19+ (Hugo modules)

## Getting Started

### Prerequisites

- Hugo Extended v0.150.1+
- Go 1.19+
- Node.js 22+
- pnpm 10.14.0+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd as.hugo.mockup

# Install dependencies
pnpm install

# Update Hugo modules
hugo mod get -u
```

### Development

```bash
# Start development server with live reload
pnpm dev

# Access site at http://localhost:1313
```

### Build

```bash
# Production build
pnpm build

# Output directory: public/
```

## Project Structure

```text
.
├── config/_default/          # Hugo configuration files
│   ├── hugo.yaml            # Core Hugo settings
│   ├── params.yaml          # Site parameters, SEO, branding
│   ├── menus.yaml           # Navigation configuration
│   └── module.yaml          # Hugo module imports
├── content/                 # Website content
│   ├── _index.md           # Homepage (hero, stats, features)
│   ├── about/              # Company overview
│   ├── services/           # Service offerings
│   ├── use-cases/          # Implementation examples
│   ├── contact/            # Contact form
│   └── blog/               # Blog posts
├── hugo-blox/blox/         # Custom Hugo Blox components
│   ├── all-access/         # Premium blox
│   └── community/          # Custom/community blox
├── assets/                 # Static assets (images, CSS, JS)
├── layouts/                # Hugo templates and partials
└── public/                 # Build output (generated)
```

## Content Management

### Site Configuration

- **Branding**: Edit `config/_default/params.yaml` for logo, company name, SEO
- **Navigation**: Edit `config/_default/menus.yaml` for menu items
- **Theme/Colors**: Modify `appearance` section in `params.yaml`

### Adding Content

**New Blog Post:**

```bash
# Create directory and index file
mkdir -p content/blog/post-name
touch content/blog/post-name/index.md
```

**New Use Case:**

```bash
mkdir -p content/use-cases/case-name
touch content/use-cases/case-name/index.md
```

**Custom Blox:**

1. Add HTML template to `hugo-blox/blox/community/` or `hugo-blox/blox/all-access/`
2. Reference in page frontmatter using block syntax
3. Blox automatically mount via `config/_default/module.yaml`

## Deployment

### Netlify (Configured)

Site is configured for automatic Netlify deployment:

```bash
# Production build command
hugo --gc --minify -b $URL --logLevel debug
pnpm dlx pagefind --source 'public'
```

**Build Settings:**

- Hugo Version: 0.150.1
- Node Version: 22
- Go Version: 1.21.5
- Publish Directory: `public`

### Manual Deployment

```bash
# Build for production
pnpm build

# Deploy the public/ directory to your hosting provider
```

## Key Features

✨ **Block-Based Page Builder** - Compose pages with reusable Hugo Blox components
🎨 **Tailwind CSS v4** - Modern utility-first styling
📱 **Responsive Design** - Mobile-first approach
🔍 **SEO Optimized** - Structured data, meta tags, sitemap
⚡ **Fast Performance** - Static site generation for speed
🔧 **Customizable** - Modular architecture for easy customization

## Documentation

- **Claude Code Reference**: See [CLAUDE.md](./CLAUDE.md) for AI assistant guidance
- **Hugo Blox Docs**: [docs.hugoblox.com](https://docs.hugoblox.com/)
- **Hugo Documentation**: [gohugo.io/documentation](https://gohugo.io/documentation/)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Company Reference

For comprehensive service portfolio and use case details, see `company_setu_geo_spatial.md` (project reference document).

## Contributing

This is a private company website project. For development guidelines and conventions, refer to [CLAUDE.md](./CLAUDE.md).

## License

© 2024 Setu Geo Spatial Software Technologies. All rights reserved.

---

**Built with** [Hugo Blox Builder](https://hugoblox.com) | **Powered by** [Hugo](https://gohugo.io)
