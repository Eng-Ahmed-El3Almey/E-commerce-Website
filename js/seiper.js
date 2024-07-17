// Slide Side Bar
var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickabale: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});
// Slide Sale Silde
var swiper = new Swiper(".sale_sec", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickabale: true,
  },
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev" 
  },
  loop: true,
});
