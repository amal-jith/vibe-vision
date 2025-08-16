$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        loop: false, /* Changed from true to false */
        margin: 20, /* Added margin between items */
        nav: true,
        dots: true,
        responsive:{
            0:{
                items:1,
                stagePadding: 50 /* Padding for mobile view to show partial next/prev card */
            },
            768:{
                items:2,
                stagePadding: 100
            },
            1024:{
                items:2
            }
        }
    });
});


