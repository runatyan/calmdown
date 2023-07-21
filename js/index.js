//swiper.jsのもの
const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: 1.05, // 表示したいスライドの数に応じて適切に変更する
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// バーガーボタン
const burgerBtn = document.querySelector(".burgerbtn");
const burgerBtnTop = document.querySelector(".bordertop");
const burgerBtnMiddle = document.querySelector(".bordermiddle");
const burgerBtnBottom = document.querySelector(".borderbottom");
const spMenu = document.querySelector(".spmenu");

burgerBtn.addEventListener("click", () => {
  // メニュー開閉
  spMenu.classList.toggle("spmenu__visible");
  burgerBtnTop.classList.toggle("bordertop__open");
  burgerBtnMiddle.classList.toggle("bordermiddle__open");
  burgerBtnBottom.classList.toggle("borderbottom__open");
});
