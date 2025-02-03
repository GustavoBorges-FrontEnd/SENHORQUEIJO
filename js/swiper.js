
var swiper = new Swiper(".mySwiper", {
    loop: true, 
        autoplay: {
            delay: 2500,
            disableOnInteraction: false, 
        },
    direction: "vertical",
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});
