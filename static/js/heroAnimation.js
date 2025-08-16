// In your script.js file

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  // =======================================================
  // Page Load Animation for Hero Section
  // =======================================================
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroButton = document.querySelector('.book-btn');

  if (heroTitle && heroSubtitle && heroButton) {
    gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power2.out"
        }
      })
      .from(heroTitle, {
        opacity: 0,
        y: 50,
      })
      .from(heroSubtitle, {
        opacity: 0,
        y: 50,
      }, "-=0.5") // Animate the subtitle 0.5 seconds before the previous animation ends
      .from(heroButton, {
        opacity: 0,
        y: 50,
      }, "-=0.5"); // Animate the button 0.5 seconds before the previous animation ends
  }

  // Your existing header and card scroll animations can go here
  // ...
});