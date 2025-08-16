// In your script.js file

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    const corporateCard = document.querySelector('.corporate-event');
    const socialCard = document.querySelector('.social-event');

    // Create a ScrollTrigger for the Corporate Events card
    ScrollTrigger.create({
        trigger: corporateCard,
        start: "top center", // Trigger when the top of the card hits the center of the viewport
        end: "bottom center", // The highlight effect ends when the bottom of the card leaves the center
        // toggleActions: "play none none reverse", // Optional: Control when the animation plays

        onEnter: () => corporateCard.classList.add('is-highlighted'),
        onLeave: () => corporateCard.classList.remove('is-highlighted'),
        onEnterBack: () => corporateCard.classList.add('is-highlighted'),
        onLeaveBack: () => corporateCard.classList.remove('is-highlighted')
    });

    // Create a ScrollTrigger for the Social Events card
    ScrollTrigger.create({
        trigger: socialCard,
        start: "top center",
        end: "bottom center",

        onEnter: () => socialCard.classList.add('is-highlighted'),
        onLeave: () => socialCard.classList.remove('is-highlighted'),
        onEnterBack: () => socialCard.classList.add('is-highlighted'),
        onLeaveBack: () => socialCard.classList.remove('is-highlighted')
    });
});