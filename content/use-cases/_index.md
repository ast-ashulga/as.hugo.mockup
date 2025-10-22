---
title: Use Cases
date: 2024-01-01
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: Our Success Stories
      text: "Real-world geospatial solutions delivering measurable impact"
    design:
      css_class: "dark"
      background:
        color: "navy"
        image:
          filename: bg-triangles.svg
          filters:
            brightness: 0.5
          size: cover
          position: center
  - block: collection
    id: use-cases
    content:
      title: Use Cases Across Sectors
      text: "15+ proven geospatial solutions for government and enterprise"
      filters:
        folders:
          - use-cases
        exclude_featured: false
      sort_by: 'Date'
      sort_ascending: false
      count: 20
    design:
      view: article-grid
      columns: 3
      fill_image: true
  - block: cta-card
    content:
      title: "Ready to Implement Geospatial Intelligence for Your Organization?"
      text: "These use cases demonstrate what's possible with custom geospatial solutions. Schedule a consultation to discover how we can adapt these proven approaches to your specific operational challenges and deliver measurable results."
      button:
        text: "Discuss Your Use Case"
        url: /contact/
    design:
      card:
        css_class: "bg-primary-300"
---