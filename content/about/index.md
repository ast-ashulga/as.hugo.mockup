---
title: About Us
date: 2024-01-01
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: About Setu Geo Spatial
      text: Innovating the Future of Geospatial Technology Solutions
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
  - block: features
    content:
      title: Our Story
      text: |
        Setu Geo Spatial Software Technologies is at the forefront of geospatial innovation, 
        providing cutting-edge solutions that bridge the gap between geographic data and 
        actionable insights. Founded with a vision to democratize geospatial technology, 
        we're committed to making spatial analysis accessible and impactful for organizations worldwide.
        
        Our team of experts combines decades of experience in GIS, remote sensing, and spatial 
        analytics to deliver solutions that transform how businesses understand their world.
      items:
        - name: "Our Mission"
          icon: user-bolt
          description: |
            To empower organizations with advanced geospatial technologies that enable 
            smarter decision-making, enhanced operational efficiency, and sustainable growth.
        - name: "Our Vision"
          icon: sparkles
          description: |
            To be the leading provider of innovative geospatial solutions that 
            address global challenges and create positive impact across industries.
        - name: "Our Values"
          icon: heart
          description: |
            - Innovation: Continuously pushing the boundaries of geospatial technology
            - Excellence: Delivering exceptional value and quality in all our solutions
            - Integrity: Building trust through transparent and ethical practices
            - Sustainability: Contributing to a more sustainable future through responsible technology
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
  - block: features
    id: team
    content:
      title: Meet Our Team
      text: "Our experts bring diverse skills to deliver exceptional geospatial solutions"
      items:
        - name: "Dr. Anil Sharma"
          icon: user-circle
          description: |
            **Role:** Chief Technology Officer
            PhD in Geospatial Engineering with 15+ years in remote sensing and spatial analytics.
        - name: "Priya Patel"
          icon: user-circle
          description: |
            **Role:** Head of Solutions
            Geographic Information Systems expert with expertise in spatial modeling and data visualization.
        - name: "Michael Chen"
          icon: user-circle
          description: |
            **Role:** Lead Developer
            Full-stack developer specializing in geospatial web applications and cloud infrastructure.
    design:
      css_class: ""
  - block: cta-card
    content:
      title: Learn More About Our Capabilities
      text: "Discover how our geospatial expertise can drive your organization forward."
      button:
        text: "View Our Services"
        url: "/services/"
    design:
      card:
        css_class: "bg-primary-300"
---