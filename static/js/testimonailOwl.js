$('.owl-carousel .testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false, // disable default dots
    responsive:{
        0:{ items:1, stagePadding: 50 },
        768:{ items:2, stagePadding: 100 },
        1024:{ items:3, stagePadding: 60 },
        1440:{ items:4, stagePadding: 80 }
    },
    onInitialized: progressBar,
    onTranslated: progressBar
});


function progressBar(event) {
    var items   = event.item.count;
    var item    = event.item.index + 1;
    var percent = (item / items) * 100;

    $(".owl-progress").css("width", percent + "%");
}