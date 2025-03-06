
var swiper = new Swiper(".mySwiper", {
    loop: true, 
        autoplay: {
            delay: 4000,
            disableOnInteraction: false, 
        },
    direction: "vertical",
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});
