---
title: 'Home'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: Setu Geo Spatial Software Technologies
      text: Transforming Geographic Data into Actionable Intelligence for Smarter Decisions
      primary_action:
        text: Explore Our Solutions
        url: /services/
        icon: rocket-launch
      secondary_action:
        text: View Case Studies
        url: /use-cases/
      announcement:
        text: "Trusted by leading organizations for geospatial innovation."
        link:
          text: "Learn how"
          url: "/about/"
    design:
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      background:
        color: "navy"
        image:
          # Add your image background to `assets/media/` and reference the filename here
          filename: bg-triangles.svg
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: false
  - block: stats
    content:
      items:
        - statistic: "100+"
          description: |
            Projects Completed  
            Globally
        - statistic: "15+"
          description: |
            Years of  
            Experience
        - statistic: "20+"
          description: |
            Industries  
            Served
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      # Reduce spacing
      spacing:
        padding: ["2rem", 0, "2rem", 0]
  - block: features
    id: features
    content:
      title: Our Core Capabilities
      text: "Advanced geospatial solutions for complex challenges"
      items:
        - name: "GIS Development & Integration"
          icon: computer-desktop
          description: "Custom Geographic Information Systems tailored to your specific operational requirements."
        - name: "Remote Sensing & Analysis"
          icon: globe-alt
          description: "Advanced satellite and drone imagery processing for environmental and urban monitoring."
        - name: "Spatial Analytics & Modeling"
          icon: chart-bar
          description: "Deep spatial analysis to extract insights and predict trends from geographic data."
        - name: "Web Mapping Solutions"
          icon: map
          description: "Interactive online platforms for sharing and analyzing spatial information."
        - name: "Real-time Monitoring"
          icon: arrows-circular
          description: "Dynamic tracking and alerting for critical spatial events and changes."
        - name: "Predictive Modeling"
          icon: sparkles
          description: "AI-powered models for forecasting geographic and environmental patterns."
  - block: features
    id: solutions
    content:
      title: Transform Your Spatial Data
      text: "Our geospatial solutions help you extract value from complex geographic information."
      items:
        - name: "View Our Services"
          icon: check
          description: |
            Turn raw spatial data into actionable intelligence
            Make data-driven decisions with confidence
            Optimize operations with location-based insights
        - name: "See Our Work"
          icon: bolt
          description: |
            15+ years of geospatial technology experience
            Solutions across 20+ industries
            Cutting-edge tools and methodologies
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
  - block: testimonials
    content:
      title: "Trusted by Industry Leaders"
      text: "See what our clients say about our geospatial solutions"
      items:
        - name: "Dr. Michael Roberts"
          role: "Director of Urban Planning, City of Austin"
          # Upload image to `assets/media/` and reference the filename here
          image: "testimonial-1.jpg"
          text: "Setu Geo Spatial's smart city platform transformed how we plan infrastructure. Their geospatial analytics provided the insights we needed to optimize our urban development."
        - name: "Sarah Johnson"
          role: "Environmental Manager, Green Resources Inc."
          # Upload image to `assets/media/` and reference the filename here
          image: "testimonial-2.jpg"
          text: "The forest fire risk assessment system developed by Setu Geo Spatial has dramatically improved our prevention capabilities, helping us protect natural resources more effectively."
    design:
      spacing:
        # Reduce bottom spacing so the testimonial appears vertically centered between sections
        padding: ["6rem", 0, "3rem", 0]
  - block: cta-card
    content:
      title: Ready to Transform Your Spatial Data?
      text: "Contact us today to discuss how our geospatial expertise can solve your specific business challenges."
      button:
        text: "Get in Touch"
        url: /contact/
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-300"
        css_style: ""
---
