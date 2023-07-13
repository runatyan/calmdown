//swiper.jsのもの
let swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: 1.05, // 表示したいスライドの数に応じて適切に変更する
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
