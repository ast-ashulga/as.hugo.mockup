# HugoBlox Agent Team

This directory contains specialized Qwen-code agent descriptions for building complete HugoBlox sites. Each agent has specific expertise and works collaboratively to deliver production-ready static sites.

## Agent Team Structure

### 🎯 project-coordinator
**Role:** Project orchestration and quality assurance
**Use When:** Starting new site projects, coordinating multi-agent workflows, managing deliverables
**Expertise:**
- Multi-agent task delegation
- Project timeline management
- Quality assurance and testing
- Documentation and handoffs
- Dependency management

### 🏗️ hugoblox-expert
**Role:** HugoBlox framework specialist
**Use When:** Hugo configuration, custom blocks, technical implementation
**Expertise:**
- HugoBlox framework and block system
- Go templates and Hugo configuration
- Theme development
- Module management
- Technical troubleshooting

### ✍️ content-specialist
**Role:** Content creation and organization
**Use When:** Writing page content, creating use cases, structuring markdown
**Expertise:**
- Hugo content organization
- Markdown and frontmatter
- Content strategy
- SEO-optimized writing
- Taxonomies and sections

### 🎨 design-system-specialist
**Role:** Design implementation and styling
**Use When:** Implementing designs, configuring Tailwind, creating design systems
**Expertise:**
- Tailwind CSS v4
- Responsive design
- Design tokens and systems
- Custom CSS/SCSS
- Accessibility (WCAG 2.1 AA)

### 🔍 seo-specialist
**Role:** Search engine optimization
**Use When:** Optimizing for search, implementing structured data, performance tuning
**Expertise:**
- On-page and technical SEO
- Core Web Vitals optimization
- Structured data (Schema.org)
- Meta tags and sitemaps
- Analytics integration

### 🧩 component-architect
**Role:** Component design and implementation
**Use When:** Creating custom blocks, building navigation, developing reusable components
**Expertise:**
- HugoBlox block system
- Navigation components
- Interactive elements (Preact/JS)
- Component accessibility
- Reusable UI patterns

## Team Collaboration Patterns

### Pattern 1: New Site Setup
```
project-coordinator → hugoblox-expert → design-system-specialist
```
1. **project-coordinator** analyzes requirements and creates project plan
2. **hugoblox-expert** sets up Hugo site structure and configuration
3. **design-system-specialist** implements design tokens and Tailwind config

### Pattern 2: Page Development
```
content-specialist + component-architect → design-system-specialist → seo-specialist
```
1. **content-specialist** creates page content with frontmatter
2. **component-architect** implements required components
3. **design-system-specialist** applies styling
4. **seo-specialist** optimizes for search

### Pattern 3: Custom Block Creation
```
component-architect + design-system-specialist → hugoblox-expert
```
1. **component-architect** designs component structure
2. **design-system-specialist** defines styling approach
3. **hugoblox-expert** implements as HugoBlox block

### Pattern 4: Complete Site Delivery
```
project-coordinator orchestrates:
├── hugoblox-expert (foundation)
├── content-specialist (pages)
├── component-architect (components)
├── design-system-specialist (styling)
└── seo-specialist (optimization)
```

## Agent Selection Guide

| Task | Primary Agent | Supporting Agents |
|------|---------------|-------------------|
| Start new project | project-coordinator | All agents |
| Configure Hugo | hugoblox-expert | - |
| Write page content | content-specialist | seo-specialist |
| Design custom block | component-architect | design-system-specialist, hugoblox-expert |
| Implement design | design-system-specialist | - |
| Create navigation | component-architect | hugoblox-expert |
| Optimize SEO | seo-specialist | content-specialist |
| Build complete site | project-coordinator | All agents |
| Add new page | content-specialist | component-architect, seo-specialist |
| Style components | design-system-specialist | component-architect |
| Debug Hugo issue | hugoblox-expert | project-coordinator |

## Setu Geo Spatial Project Agents

For completing the Setu Geo Spatial portfolio site, the agent workflow is:

### Phase 1: Foundation (Week 1)
- **project-coordinator**: Create project plan and task breakdown
- **hugoblox-expert**: Set up Hugo site, configure modules
- **design-system-specialist**: Implement design system from `design_system.md`

### Phase 2: Components (Week 2)
- **component-architect**: Build navigation from `components/navigation.md`
- **component-architect**: Create custom blocks per `00_ALL_COMPONENTS_SPEC.md`
- **design-system-specialist**: Style all components

### Phase 3: Content (Week 3)
- **content-specialist**: Implement pages from `pages/` directory
- **content-specialist**: Create use case pages from `use_cases/` directory
- **seo-specialist**: Add meta tags and structured data

### Phase 4: SEO & QA (Week 4)
- **seo-specialist**: Optimize per `seo/seo_strategy_and_metadata.md`
- **project-coordinator**: Conduct quality assurance
- **hugoblox-expert**: Production build and deployment

## Agent Communication

### Requesting Agent Collaboration
```
@agent-name "specific task with context"
```

### Example: Multi-Agent Task
```
@project-coordinator "Complete Setu Geo Spatial site from portfolio_content"

Project coordinator will:
1. Analyze all specifications in portfolio_content/
2. Break down into agent-specific tasks
3. Delegate to specialized agents
4. Coordinate handoffs
5. Validate deliverables
6. Ensure quality standards
```

### Example: Single Agent Task
```
@content-specialist "Create home page content from pages/home_page.md"
@design-system-specialist "Implement design system from design/design_system.md"
@seo-specialist "Optimize SEO using seo/seo_strategy_and_metadata.md"
```

## Quality Standards

All agents follow these quality standards:

### Code Quality
- Clean, readable, well-documented code
- Follow Hugo and HugoBlox best practices
- Accessible (WCAG 2.1 AA)
- Responsive (mobile-first)
- Performance-optimized

### Content Quality
- SEO-optimized
- Well-structured with proper frontmatter
- Engaging and clear writing
- Proper metadata

### Design Quality
- Consistent with design system
- Responsive across breakpoints
- Accessible color contrast
- Professional aesthetic

### Technical Quality
- Builds without errors
- Cross-browser compatible
- Fast page load (Lighthouse > 90)
- Valid HTML/CSS

## Documentation

Each agent maintains documentation for their deliverables:

- **hugoblox-expert**: Technical configuration, module setup
- **content-specialist**: Content inventory, frontmatter templates
- **design-system-specialist**: Design tokens, color palettes, typography
- **component-architect**: Component library, usage examples
- **seo-specialist**: SEO strategy, keyword mapping, structured data
- **project-coordinator**: Project plan, decisions, handoffs

## Getting Started

### For a New Project:
1. Start with `@project-coordinator "Create HugoBlox site for [project name]"`
2. Provide specifications and requirements
3. Let coordinator delegate to specialized agents
4. Review deliverables at each milestone

### For Specific Tasks:
1. Identify the agent with matching expertise
2. Use `@agent-name "specific task description"`
3. Provide relevant specifications or context
4. Review delivered work

## Files and Locations

Agent descriptions are stored in:
```
.qwen/agents/
├── README.md (this file)
├── project-coordinator.md
├── hugoblox-expert.md
├── content-specialist.md
├── design-system-specialist.md
├── seo-specialist.md
└── component-architect.md
```

## Agent Auto-Activation

Agents auto-activate based on file patterns and keywords:

- **hugoblox-expert**: `hugo-blox/blox/**`, `config/_default/*.yaml`
- **content-specialist**: `content/**/*.md`
- **design-system-specialist**: `assets/scss/**`, `tailwind.config.js`
- **seo-specialist**: `config/_default/params.yaml` (marketing section)
- **component-architect**: `hugo-blox/blox/**/*.html`, `layouts/partials/**`

## Support and Issues

For agent-related questions or issues:
1. Check agent description file for capabilities
2. Review this README for collaboration patterns
3. Use `@project-coordinator` for complex multi-agent tasks
4. Document decisions and learnings

---

**Last Updated:** 2025-10-22
**Version:** 1.0.0
**Maintained By:** Qwen-code team configuration
