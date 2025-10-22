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
      title: "Turning Earth Observation Into Real Business Outcomes"
      text: Setu Geo Spatial Software Technologies delivers end-to-end geospatial intelligence solutions for Indian government agencies and enterprises. We combine advanced GIS platforms, AI-driven automation, and professional drone operations to solve complex spatial challenges.
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
      title: Company Overview
      text: |
        **"We believe spatial data should drive smarter decisions across government and enterprise."**

        Our mission is to democratize access to geospatial intelligence by delivering custom GIS solutions that transform raw spatial data into actionable insights. We help organizations leverage location intelligence for improved planning, operational efficiency, and evidence-based decision-making.

        Founded with a focus on addressing India's unique geospatial challenges, Setu Geo Spatial emerged from recognition that government departments and enterprises needed more than off-the-shelf GIS tools—they required customized spatial intelligence platforms built specifically for Indian operational contexts, regulatory frameworks, and integration requirements.

        Our name "Setu" (Sanskrit for "bridge") reflects our role: bridging advanced geospatial technology with practical government and enterprise applications. Based in Gujarat, we bring deep understanding of Indian government procurement processes, compliance requirements, and multi-department coordination challenges.
      items:
        - name: "Our Mission"
          icon: flag
          description: |
            Transform raw spatial data into actionable insights that drive smarter decisions across government and enterprise. Democratize access to geospatial intelligence through custom solutions designed for Indian operational contexts.
        - name: "Our Vision"
          icon: sparkles
          description: |
            Building India's spatial intelligence infrastructure, one department at a time. A future where every government department and enterprise has seamless access to real-time geospatial intelligence for smart governance and data-driven operations.
        - name: "Our Approach"
          icon: arrow-path
          description: |
            End-to-end service delivery from data acquisition through deployment. Technology-agnostic solutions that prioritize client control and long-term maintainability. Single partner accountability for complete solution delivery.
    design:
      css_class: "features-inline-header bg-gray-100 dark:bg-gray-900"
  - block: features
    id: capabilities
    content:
      title: Why Choose Setu Geo Spatial
      text: "What sets us apart in the geospatial intelligence market"
      items:
        - name: "End-to-End Service Delivery"
          icon: arrow-path
          description: |
            Complete geospatial project lifecycle management from data acquisition and drone operations through custom GIS application development, cloud deployment, training, and ongoing support. Single partner accountability for entire solution delivery.
        - name: "AI + Drone Technology Leadership"
          icon: sparkles
          description: |
            Proprietary AI models trained on Indian infrastructure patterns. YOLOv8-based object detection, RTK-enabled drone operations achieving centimeter-level accuracy, automated change detection algorithms. Process data 10-50x faster than manual methods.
        - name: "Government Procurement Experience"
          icon: building-office
          description: |
            Deep understanding of GeM portal procedures, DILRMP guidelines, and multi-department coordination. Solutions designed for seamless integration with BhuNaksha land records, GSDMA SEOC dashboards, and government IT infrastructure.
        - name: "Technology Agnostic Approach"
          icon: puzzle-piece
          description: |
            No vendor lock-in. Expertise across QGIS, PostgreSQL/PostGIS, ArcGIS, Pix4D, AWS, Azure, and Google Cloud. Right tool for each job with focus on long-term maintainability and client control over technology stack.
        - name: "Scalable Cloud Infrastructure"
          icon: cloud
          description: |
            Enterprise-grade cloud GIS deployments handling millions of spatial records. Sub-second query response, auto-scaling during peak demand, multi-region backup, 99.9% uptime targets. Government-grade security with role-based access control and audit trails.
        - name: "Quality & Compliance Standards"
          icon: shield-check
          description: |
            DGCA-certified drone pilots with 500+ flight hours. GeM portal registered vendor. ISO 27001 information security standards compliance. OGC standards implementation for data interoperability. DILRMP and e-Governance standards alignment.
    design:
      css_class: "features-inline-header"
  - block: cta-card
    content:
      title: "Let's Discuss Your Geospatial Challenges"
      text: "Every organization's spatial data needs are unique. Schedule a consultation to explore how our end-to-end GIS solutions can address your specific operational requirements and strategic goals."
      button:
        text: "Schedule Consultation"
        url: "/contact/"
    design:
      card:
        css_class: "bg-primary-300"
---