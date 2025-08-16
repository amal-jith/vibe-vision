    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3, // Number of slides per view in a row
      slidesPerColumn: 2, // The number of rows
      spaceBetween: 10, // Space between slides
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // You can add breakpoints for responsive design
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
          slidesPerColumn: 1,
        }
      }
    });