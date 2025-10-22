# HugoBlox SDK Agent - Usage Guide

## Overview

A specialized sub-agent for working with Hugo Blox Builder SDK that automatically leverages Context7 MCP tools for official documentation lookup and best practices.

## Activation

### Automatic Activation
The agent auto-activates when working with:
- Files in `hugo-blox/blox/**`
- Configuration files in `config/_default/*.yaml`
- Content files in `content/**/*.md`
- Keywords: "blox", "block", "hugo blox", "page builder"

### Manual Activation
```bash
/hugoblox [your query]
```

## Key Features

### 1. Official Documentation Integration
- **Context7 Library**: `/websites/hugoblox`
- **182 Code Snippets** from official docs
- **Trust Score**: 7.5/10
- **Auto-queries** official docs for best practices

### 2. Specialized Capabilities

**Block System**:
- Creating custom blocks in `hugo-blox/blox/community/`
- Configuring block layouts and designs
- Block composition for landing pages

**Configuration Management**:
- `params.yaml` - Appearance, SEO, header/footer
- `hugo.yaml` - Core settings, taxonomies
- `module.yaml` - Hugo module imports and mounts
- `menus.yaml` - Navigation configuration

**Design System**:
- Background configurations (color, gradient, image, video)
- Spacing and padding control
- Custom CSS/SCSS integration
- Tailwind CSS customization

**Content Organization**:
- Blog post structure and frontmatter
- Page features (commenting, sharing, breadcrumbs)
- SEO and metadata configuration

### 3. Development Workflows

**Local Development**:
```bash
pnpm dev          # Start dev server
pnpm build        # Production build
```

**Module Management**:
```bash
hugo mod get -u   # Update modules
hugo mod graph    # Verify dependencies
hugo mod clean    # Clean cache
```

## Usage Examples

### Example 1: Creating a New Landing Page Section
```bash
/hugoblox create a hero section with gradient background and call-to-action buttons
```

**Agent Response**:
1. Queries Context7 for official gradient background patterns
2. Provides complete YAML configuration
3. Explains block structure and design options
4. Shows button configuration best practices

### Example 2: Customizing Navigation
```bash
/hugoblox how do I add a logo and CTA button to the navbar?
```

**Agent Response**:
1. Retrieves official navbar configuration from Context7
2. Shows complete `params.yaml` header section
3. Explains logo placement in `assets/media/`
4. Provides button configuration options

### Example 3: Adding Custom Block
```bash
/hugoblox create a testimonial block with image and quote
```

**Agent Response**:
1. Queries Context7 for custom block creation patterns
2. Provides HTML template structure
3. Shows mount configuration in `module.yaml`
4. Explains frontmatter usage

### Example 4: Blog Configuration
```bash
/hugoblox configure blog posts with comments and related content
```

**Agent Response**:
1. Retrieves cascade configuration from Context7
2. Shows `hugo.yaml` cascade setup
3. Explains comment provider options
4. Provides frontmatter examples

## Best Practices

### 1. Always Consult Official Docs
The agent automatically queries Context7 before providing recommendations to ensure alignment with official Hugo Blox patterns.

### 2. Follow Project Structure
- Custom blocks → `hugo-blox/blox/community/`
- Custom CSS → `assets/css/custom.css` (Tailwind) or `assets/scss/custom.scss` (Bootstrap)
- Images → `assets/media/`
- Content → `content/[section]/`

### 3. Configuration Hierarchy
1. **hugo.yaml** - Core Hugo settings
2. **params.yaml** - Site-wide appearance and features
3. **Page frontmatter** - Page-specific settings
4. **Block design** - Section-level styling

### 4. Development Workflow
1. Query agent for official patterns
2. Implement configuration/code
3. Test locally with `pnpm dev`
4. Verify with `hugo mod graph`
5. Deploy with production build

## Integration with SuperClaude Framework

### Mode Coordination
- **Brainstorm Mode** → Helps discover block composition strategies
- **Task Management** → Tracks multi-step block creation workflows
- **Token Efficiency** → Provides concise configuration snippets

### MCP Server Integration
- **Context7** → Official Hugo Blox documentation (primary)
- **Sequential** → Complex architecture analysis
- **Serena** → Project memory and session persistence

### Agent Collaboration
The HugoBlox agent works seamlessly with other SuperClaude agents:
- Frontend agents for custom component styling
- Design agents for visual composition
- Performance agents for optimization

## Common Tasks

### Creating Landing Page
```bash
/hugoblox create a landing page with hero, features, and contact sections
```

### Customizing Theme
```bash
/hugoblox change site color theme to custom gradient
```

### Adding Features
```bash
/hugoblox enable search, comments, and analytics
```

### Deployment Configuration
```bash
/hugoblox configure Netlify deployment with Pagefind indexing
```

### Custom Block Development
```bash
/hugoblox create a pricing table block with three tiers
```

## Official Documentation Sources

The agent has access to these official resources via Context7:

- **Root**: https://hugoblox.com
- **Page Builder**: https://docs.hugoblox.com/getting-started/page-builder/
- **Customization**: https://docs.hugoblox.com/getting-started/customize/
- **Installation**: https://docs.hugoblox.com/getting-started/install-hugo/
- **Reference**: https://docs.hugoblox.com/reference/

## Troubleshooting

### Issue: Agent doesn't activate automatically
**Solution**: Use manual activation with `/hugoblox` command

### Issue: Recommendations don't match official docs
**Solution**: The agent always queries Context7 first - if there's a mismatch, please report

### Issue: Custom blocks not working
**Solution**: Agent will verify mount configuration in `module.yaml` and provide debugging steps

### Issue: Styling changes not applied
**Solution**: Agent will guide through Tailwind recompilation process

## Performance Optimization

The agent optimizes performance by:
1. **Caching** Context7 documentation queries
2. **Batching** multiple configuration examples
3. **Targeting** specific documentation sections
4. **Reusing** patterns across similar tasks

## Quality Assurance

Every agent response includes:
- ✅ Official documentation reference
- ✅ Complete, working code examples
- ✅ Explanation of configuration options
- ✅ Best practices and gotchas
- ✅ Testing and verification steps

---

**Status**: Agent active and ready to assist with all Hugo Blox SDK tasks.

**Last Updated**: 2025-10-21
**Context7 Library**: `/websites/hugoblox` (182 snippets, Trust Score 7.5)
