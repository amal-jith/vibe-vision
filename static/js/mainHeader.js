//document.addEventListener("DOMContentLoaded", function () {
//    const topBar = document.querySelector('.top-bar');
//    const navbar = document.querySelector('#main-navbar');
//
//    window.addEventListener('scroll', function () {
//        if (window.scrollY > 0) {
//            navbar.classList.add("navbar-scrolled", "compact-navbar");
//            gsap.to(topBar, {
//                height: 0,
//                paddingTop: 0,
//                paddingBottom: 0,
//                opacity: 0,
//                duration: 0.3,
//                ease: "power1.inOut"
//            });
//        } else {
//            navbar.classList.remove("navbar-scrolled", "compact-navbar");
//            gsap.to(topBar, {
//                height: "2.5rem",
//                paddingTop: "0.25rem",
//                paddingBottom: "0.25rem",
//                opacity: 1,
//                duration: 0.3,
//                ease: "power1.inOut"
//            });
//        }
//    });
//});


document.addEventListener("DOMContentLoaded", function () {
    const topBar = document.querySelector('.top-bar');
    const navbar = document.querySelector('#main-navbar');
    const logo = document.querySelector('.v-logo');
    const navItems = document.querySelectorAll('.nav-item');

    // ===========================
    // PAGE LOAD ANIMATION
    // ===========================
    const headerTL = gsap.timeline({ defaults: { ease: "power2.out" } });

    headerTL
        .from(topBar, { y: -50, opacity: 0, duration: 0.6 })
        .from(logo, { x: -50, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(navItems, { y: -20, opacity: 0, duration: 0.4, stagger: 0.1 }, "-=0.2");

    // ===========================
    // SCROLL BEHAVIOR
    // ===========================
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add("navbar-scrolled", "compact-navbar");
            gsap.to(topBar, {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power1.inOut"
            });
        } else {
            navbar.classList.remove("navbar-scrolled", "compact-navbar");
            gsap.to(topBar, {
                height: "2.5rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                opacity: 1,
                duration: 0.3,
                ease: "power1.inOut"
            });
        }
    });
});
