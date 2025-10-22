---
title: Contact Us
date: 2024-01-01
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: Get in Touch
      text: "Reach out to our team for geospatial solutions and expert consultation"
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
      title: Contact Information
      text: "We're here to answer your questions and discuss your geospatial project needs"
      items:
        - name: "Email"
          icon: envelope
          description: "[info@setugeospatial.com](mailto:info@setugeospatial.com)"
        - name: "Phone"
          icon: phone
          description: "[+1 (555) 123-4567](tel:+15551234567)"
        - name: "Office"
          icon: map-pin
          description: "123 Innovation Drive, Tech City, TC 10001"
        - name: "Business Hours"
          icon: clock
          description: "Monday-Friday: 9:00 AM - 6:00 PM"
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
  - block: markdown
    content:
      title: Send us a message
      text: "Fill out the form below and our team will get back to you within 24 hours"
    design:
      css_class: ""
  - block: cta-card
    content:
      title: Need Immediate Assistance?
      text: "Call our business development team for urgent inquiries"
      button:
        text: "Call Now"
        url: "tel:+15551234567"
    design:
      card:
        css_class: "bg-primary-300"
---