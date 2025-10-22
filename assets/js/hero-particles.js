/**
 * Hero Particles System
 * Creates floating geometric shapes in hero sections
 */

(function() {
  'use strict';

  function createParticles() {
    // Find all hero sections
    const heroSections = document.querySelectorAll('.hero, [class*="hero"]');

    heroSections.forEach((hero) => {
      // Check if particles already exist
      if (hero.querySelector('.hero-particles')) {
        return;
      }

      // Create particles container
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'hero-particles';

      // Particle configurations
      const particleConfigs = [
        { size: 'sm', shape: 'circle' },
        { size: 'md', shape: 'square' },
        { size: 'lg', shape: 'circle' },
        { size: 'md', shape: 'triangle' },
        { size: 'sm', shape: 'square' },
        { size: 'xl', shape: 'circle' },
        { size: 'md', shape: 'circle' },
        { size: 'lg', shape: 'square' }
      ];

      // Create particles
      particleConfigs.forEach((config) => {
        const particle = document.createElement('div');
        particle.className = `particle particle-${config.size} ${config.shape}`;
        particlesContainer.appendChild(particle);
      });

      // Insert particles container at the beginning of hero (behind content)
      hero.insertBefore(particlesContainer, hero.firstChild);
    });
  }

  // Scroll-triggered reveal animation
  function initScrollReveal() {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe hero sections
    const heroSections = document.querySelectorAll('.hero, [class*="hero"]');
    heroSections.forEach(section => {
      section.classList.add('reveal-on-scroll');
      observer.observe(section);
    });

    // Observe feature sections
    const featureSections = document.querySelectorAll('.features, [class*="features"]');
    featureSections.forEach(section => {
      section.classList.add('reveal-on-scroll');
      observer.observe(section);
    });
  }

  // Parallax scroll effect for hero backgrounds
  function initParallaxScroll() {
    let ticking = false;
    const heroSections = document.querySelectorAll('.hero, [class*="hero"]');

    function updateParallax() {
      const scrollY = window.pageYOffset || window.scrollY;

      heroSections.forEach((hero) => {
        const heroTop = hero.offsetTop;
        const heroHeight = hero.offsetHeight;

        // Only apply parallax if hero is in viewport
        if (scrollY < heroTop + heroHeight) {
          const parallaxSpeed = 0.5;
          const yPos = -(scrollY - heroTop) * parallaxSpeed;

          const bgImage = hero.querySelector('.background-image');
          if (bgImage) {
            bgImage.style.transform = `translateY(${yPos}px)`;
          }

          // Also parallax the particles slightly
          const particles = hero.querySelector('.hero-particles');
          if (particles) {
            particles.style.transform = `translateY(${yPos * 0.3}px)`;
          }
        }
      });

      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });

    // Initial call
    updateParallax();
  }

  // Initialize all effects when DOM is ready
  function init() {
    createParticles();
    initScrollReveal();
    initParallaxScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
