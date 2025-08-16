//// static/js/swiper-init.js
//
//var swiper = new Swiper(".mySwiper", {
//  slidesPerColumn: 2,
//  slidesPerView: 4,
//  spaceBetween: 10,
//  speed: 5000,
//  loop: true,
//  autoplay: {
//    delay: 0,
//    disableOnInteraction: false,
//  },
//  breakpoints: {
//    // Show 1 slide on screens up to 480px
//    480: {
//      slidesPerView: 1,
//      slidesPerColumn: 1,
//    },
//    // Show 2 slides on screens from 768px up to 1023px
//    768: {
//      slidesPerView: 2,
//      slidesPerColumn: 2,
//    },
//    // Show 4 slides on screens from 1024px and up
//    1024: {
//      slidesPerView: 4,
//      slidesPerColumn: 2,
//    }
//  }
//});


// static/js/swiper-init.js

//var swiper = new Swiper(".mySwiper", {
//  slidesPerColumn: 2,
//  slidesPerView: 4, // Use a fixed number, not 'auto'
//  spaceBetween: 10,
//  speed: 2000,
//  loop: true,
//  autoplay: {
//    delay: 0,
//    disableOnInteraction: false,
//  },
//  breakpoints: {
//    480: {
//      slidesPerView: 1,
//      slidesPerColumn: 1,
//    },
//    768: {
//      slidesPerView: 2,
//      slidesPerColumn: 2,
//    },
//    1024: {
//      slidesPerView: 4,
//      slidesPerColumn: 2,
//    }
//  }
//});




// This is your new Swiper instance for reverse scrolling
//var swiperReverse = new Swiper(".mySwiper-reverse", {
//  slidesPerColumn: 2,
//  slidesPerView: 4,
//  spaceBetween: 10,
//  speed: 2000,
//  loop: true,
//  autoplay: {
//    delay: 0,
//    disableOnInteraction: false,
//    reverseDirection: true, // This property makes the scroll go in reverse
//  },
//  breakpoints: {
//    480: {
//      slidesPerView: 1,
//      slidesPerColumn: 1,
//    },
//    768: {
//      slidesPerView: 2,
//      slidesPerColumn: 2,
//    },
//    1024: {
//      slidesPerView: 4,
//      slidesPerColumn: 2,
//    }
//  }
//});


const swiper1 = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

const swiper2 = new Swiper('.mySwiper-reverse', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  }
});
