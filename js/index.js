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

window.addEventListener("load", function () {
  viewSlide(".visual__img");
});
function viewSlide(className, slideNo = -1) {
  let imgArray = document.querySelectorAll(className);
  if (slideNo >= 0) {
    //初回以外は現在のスライドを消す
    imgArray[slideNo].style.opacity = 0;
  }
  slideNo++;
  if (slideNo >= imgArray.length) {
    slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
  }
  imgArray[slideNo].style.opacity = 1;
  setTimeout(function () {
    viewSlide(className, slideNo);
  }, 4000);
}

const fade = document.querySelectorAll(".fade");
for (let i = fade.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("fadeon");
        observer.unobserve(entries[j].target);
      }
    }
  });
  observer.observe(fade[i]);
}

//swiper.jsのもの
const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: 1.05, // 表示したいスライドの数に応じて適切に変更する
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
