// Optimized Performance Animations
document.addEventListener('DOMContentLoaded', function() {
  // Throttled scroll handler for better performance
  let ticking = false;
  let lastScrollY = window.scrollY;

  // Intersection Observer for scroll animations - optimized
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px 0px -10px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with fade-in-section class
  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
  });

  // Optimized smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Optimized hover effects using CSS transitions instead of JS
  // (hover-lift class handles this via CSS for better performance)

  // Simplified parallax effect - only for essential elements
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  if (parallaxElements.length > 0) {
    function updateParallax() {
      if (!ticking) {
        requestAnimationFrame(function() {
          const scrolled = window.scrollY;
          const rate = scrolled * -0.3; // Reduced rate for better performance

          parallaxElements.forEach(el => {
            el.style.transform = `translateY(${rate}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', updateParallax, { passive: true });
  }

  // Preload critical images - using the imported image paths
  // Images are now handled by Astro's asset optimization
});

// Passive event listeners for better scroll performance
window.addEventListener('scroll', function() {
  // Minimal scroll handling for performance
}, { passive: true });