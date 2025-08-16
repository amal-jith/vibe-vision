$(document).ready(function() {
      $('.mySwiper .swiper-slide a').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });


// Smooth scroll to top when image is clicked
document.getElementById("backToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // smooth animation
    });
});
