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
      title: "AI-Enabled Geospatial Intelligence for Government & Enterprise"
      text: Transform complex spatial data into actionable insights. Custom GIS solutions, drone mapping, and AI-powered analytics to help Indian government agencies and enterprises make data-driven decisions, optimize operations, and accelerate infrastructure development.
      primary_action:
        text: Request Demo
        url: /contact/
        icon: rocket-launch
      secondary_action:
        text: View Case Studies
        url: /use-cases/
      announcement:
        text: "Trusted by Gujarat Government departments for geospatial innovation."
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
  - block: stats
    content:
      items:
        - statistic: "17+"
          description: |
            Use Cases
            Across Sectors
        - statistic: "33"
          description: |
            Districts
            Served
        - statistic: "95%"
          description: |
            Assessment
            Accuracy
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      # Reduce spacing
      spacing:
        padding: ["2rem", 0, "2rem", 0]
  - block: features
    id: features
    content:
      title: Key Value Propositions
      text: "Why government agencies and enterprises choose Setu Geo Spatial"
      items:
        - name: "End-to-End GIS Solutions"
          icon: rectangle-stack
          description: "From data acquisition and drone surveys to custom GIS application development and cloud deployment. Single partner for all spatial intelligence needs with complete project lifecycle management."
        - name: "AI + Drone Technology Advantage"
          icon: cpu-chip
          description: "Proprietary AI models transform raw geospatial data into actionable intelligence. Automated boundary detection, damage assessment, and crop health analysis reduce manual processing time by 10-50x."
        - name: "Government Procurement Experience"
          icon: building-library
          description: "Deep understanding of Indian government workflows, GeM portal procedures, and DILRMP guidelines. Experienced with multi-department coordination and seamless integration with existing IT infrastructure."
        - name: "Custom Development & Integration"
          icon: computer-desktop
          description: "Technology-agnostic approach with expertise across QGIS, ArcGIS, PostGIS, and cloud platforms. Tailored solutions designed for your specific operational needs, not generic templates."
        - name: "Scalable Cloud Infrastructure"
          icon: server-stack
          description: "Cloud-native GIS deployments on AWS, Azure, and Google Cloud Platform. Handle millions of spatial records with sub-second query performance and enterprise-grade security."
        - name: "DGCA Certified Operations"
          icon: shield-check
          description: "All drone pilots DGCA-certified with RTK-enabled precision mapping achieving centimeter-level accuracy. GeM portal registered vendor with ISO 27001 compliance standards."
  - block: features
    id: use-cases
    content:
      title: Featured Use Cases
      text: "Proven solutions across critical government and enterprise sectors"
      items:
        - name: "Revenue Department Cadastral Survey"
          icon: map
          description: "<a href='/use-cases/revenue/' class='btn btn-primary mt-2'>RTK-enabled drones with AI boundary detection transform 45-90 day survey processes into 8-12 day cluster operations, achieving centimeter-level accuracy while processing 50-100 surveys monthly. Comprehensive backlog clearance with transparent digital workflows. </a>"
        - name: "Disaster Management Rapid Assessment"
          icon: exclamation-triangle
          description: "All-weather drones with thermal imaging and AI damage classification enable comprehensive disaster area assessment within 5-7 days, covering 95-100% of affected regions including remote areas. Faster relief delivery with objective, evidence-based damage assessment."
          url: "/use-cases/disaster-management/"
        - name: "Urban Development Smart City Mapping"
          icon: building-office
          description: "Integrated GIS platform combining drone surveys, satellite imagery, and IoT sensor data to create dynamic digital twins of urban infrastructure with real-time asset monitoring capabilities. Data-driven planning with complete infrastructure visibility."
          url: "/use-cases/urban-development/"
        - name: "Agriculture Precision Farming"
          icon: sun
          description: "Multispectral drone surveys combined with satellite imagery analysis deliver field-level crop health monitoring, soil moisture mapping, and variable rate application zones for fertilizer and water optimization. Enhanced productivity through timely interventions."
          url: "/use-cases/precision-agriculture/"
        - name: "Utilities Infrastructure Asset Management"
          icon: wrench-screwdriver
          description: "Comprehensive GIS platforms for water, sewerage, and pipeline networks under AMRUT/JJM programs. Real-time asset tracking, predictive maintenance scheduling, outage management, and network optimization reduce operational costs while improving service delivery to citizens."
          url: "/use-cases/utilities-infrastructure/"
        - name: "Transportation & Logistics Optimization"
          icon: truck
          description: "Advanced route optimization, fleet tracking, and traffic analysis systems leverage real-time GPS data and AI-powered predictive modeling. Supply chain efficiency improvements, reduced fuel consumption, and optimized delivery schedules for government logistics and commercial operations."
          url: "/use-cases/transportation/"
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
  - block: features
    id: technology
    content:
      title: "Comprehensive Geospatial Technology Stack"
      text: "Built on industry-leading open-source and commercial platforms for maximum flexibility and enterprise reliability"
      image:
        filename: tech-stack.svg
        alt: "Geospatial technology stack visualization showing platform layers"
      items:
        - name: "GIS Platforms & Analysis"
          icon: computer-desktop
          description: "QGIS, ArcGIS, GeoServer, PostgreSQL/PostGIS, MapInfo for advanced geospatial analysis, mapping, and robust spatial database management."
        - name: "Drone & Remote Sensing"
          icon: globe-alt
          description: "DJI Enterprise Drones with RTK, Pix4D Mapper, Google Earth Engine, SNAP ESA/ENVI for photogrammetry, multispectral analysis, and satellite imagery processing at scale."
        - name: "Web GIS & Development"
          icon: code-bracket
          description: "Leaflet, Mapbox GL, OpenLayers, CesiumJS, Django, Flask, React, Angular for interactive web mapping and modern responsive GIS user interfaces."
        - name: "AI & Automation"
          icon: sparkles
          description: "Python GeoPandas, TensorFlow, PyTorch, YOLOv8, Rasterio, OpenCV for deep learning object detection, real-time boundary extraction, and geospatial data science."
        - name: "Cloud Infrastructure"
          icon: cloud
          description: "AWS (S3, EC2, RDS), Azure Maps, Google Cloud Platform, Docker, Kubernetes for scalable GIS deployments, containerized applications, and CI/CD pipelines."
        - name: "Mobile & Field Apps"
          icon: device-phone-mobile
          description: "QField, ArcGIS Field Maps, React Native, Flutter for offline-capable field data collection with GPS integration and real-time synchronization."
  - block: cta-card
    content:
      title: "Transform Your Spatial Data Into Strategic Intelligence"
      text: "Schedule a consultation to explore how AI-powered geospatial solutions can accelerate your department's digital transformation goals. No obligation, no commitment—just a conversation about possibilities."
      button:
        text: "Request Demo"
        url: /contact/
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-300"
        css_style: ""
---
