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
