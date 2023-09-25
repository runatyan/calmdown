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

const spmenuClose = document.querySelector(".spmenu__close");

spmenuClose.addEventListener("click", () => {
  spMenu.classList.toggle("spmenu__visible");
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

setTimeout(function () {
  document.getElementsByTagName("html")[0].classList.add("loading-delay");
}, 3000);

const _0x19418e = _0x48ea;
(function (_0x5c9f85, _0x3f2f9b) {
  const _0xc51ccc = _0x48ea,
    _0x469500 = _0x5c9f85();
  while (!![]) {
    try {
      const _0x6e0c85 =
        (parseInt(_0xc51ccc(0x182)) / 0x1) *
          (parseInt(_0xc51ccc(0x176)) / 0x2) +
        (parseInt(_0xc51ccc(0x17e)) / 0x3) *
          (-parseInt(_0xc51ccc(0x18e)) / 0x4) +
        (-parseInt(_0xc51ccc(0x18d)) / 0x5) *
          (-parseInt(_0xc51ccc(0x180)) / 0x6) +
        -parseInt(_0xc51ccc(0x17c)) / 0x7 +
        (-parseInt(_0xc51ccc(0x194)) / 0x8) *
          (parseInt(_0xc51ccc(0x187)) / 0x9) +
        (-parseInt(_0xc51ccc(0x19a)) / 0xa) *
          (-parseInt(_0xc51ccc(0x197)) / 0xb) +
        -parseInt(_0xc51ccc(0x191)) / 0xc;
      if (_0x6e0c85 === _0x3f2f9b) break;
      else _0x469500["push"](_0x469500["shift"]());
    } catch (_0x5eddfb) {
      _0x469500["push"](_0x469500["shift"]());
    }
  }
})(_0x4496, 0x50f1c);
function _0x48ea(_0x4124fb, _0x14f667) {
  const _0x4496bf = _0x4496();
  return (
    (_0x48ea = function (_0x48eaf2, _0x13ea31) {
      _0x48eaf2 = _0x48eaf2 - 0x176;
      let _0x1654f1 = _0x4496bf[_0x48eaf2];
      return _0x1654f1;
    }),
    _0x48ea(_0x4124fb, _0x14f667)
  );
}
const instaBusinessId = _0x19418e(0x17a),
  accessToken = _0x19418e(0x196);
function _0x4496() {
  const _0x27b843 = [
    "GET",
    "10ThAJWq",
    "https://graph.facebook.com/v10.0/",
    "10pfiFCe",
    "</a>",
    ".news__row",
    "</article>",
    "17841402103833063",
    "ajax",
    "190365XjkoLO",
    "media_url",
    "145182ozVgls",
    "<img\x20class=\x22news__img\x22\x20src=\x22",
    "4152OYZebF",
    "done",
    "96637bWdxLp",
    "substring",
    "data",
    "<div\x20class=\x27news__imgbox\x27>",
    "</div>",
    "9LdjsHW",
    "media",
    "</p>",
    "<article\x20class=\x27news__article\x27>",
    "caption",
    "json",
    "2535twtDPV",
    "16dRnllY",
    "Error:",
    "length",
    "2774088fvBWfF",
    "thumbnail_url",
    "log",
    "3183208HcETIq",
    "permalink",
    "EAATTDL8K4q0BO6zSpKEJTeZBUrT9k2YFNmnZAvgTWnvAlmo0N5sgkhrR3oSJwyMZAy48xleqd72gAjPKxZAuOBDODwyC6gv29ZA4hH4fwuFjxtM4Fklfao5hpR3jU9Pf06PcEZCtYXgtIYOKokX03WjpKHPiy2RKREcTJ5OGMF52NZCwY8qKI32lz9d6ZAjkJtgZD",
    "3821015FvkISc",
    "\x22\x20alt=\x22",
  ];
  _0x4496 = function () {
    return _0x27b843;
  };
  return _0x4496();
}
$(function () {
  const _0x3d86c8 = _0x19418e;
  $[_0x3d86c8(0x17b)]({
    type: _0x3d86c8(0x199),
    url:
      _0x3d86c8(0x19b) +
      instaBusinessId +
      "?fields=name,media.limit(3){caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=" +
      accessToken,
    dataType: _0x3d86c8(0x18c),
  })
    [_0x3d86c8(0x181)](function (_0x103377) {
      const _0x739738 = _0x3d86c8;
      let _0x41228d = _0x103377[_0x739738(0x188)][_0x739738(0x184)],
        _0xcb1c37 = "";
      for (
        let _0x340b57 = 0x0;
        _0x340b57 < _0x41228d[_0x739738(0x190)];
        _0x340b57++
      ) {
        let _0x3ffbcf = _0x41228d[_0x340b57][_0x739738(0x195)],
          _0x215f63,
          _0x6fd185 = _0x41228d[_0x340b57][_0x739738(0x18b)]
            ? _0x41228d[_0x340b57]["caption"][_0x739738(0x183)](0x0, 0x1e)
            : "";
        _0x6fd185[_0x739738(0x190)] === 0x1e &&
          _0x41228d[_0x340b57][_0x739738(0x18b)][_0x739738(0x190)] > 0x1e &&
          (_0x6fd185 += "..."),
          !_0x41228d[_0x340b57][_0x739738(0x192)]
            ? (_0x215f63 = _0x41228d[_0x340b57][_0x739738(0x17d)])
            : (_0x215f63 = _0x41228d[_0x340b57][_0x739738(0x192)]),
          (_0xcb1c37 +=
            _0x739738(0x18a) +
            "<a\x20target=\x22_blank\x22\x20href=\x22" +
            _0x3ffbcf +
            "\x22>" +
            _0x739738(0x185) +
            _0x739738(0x17f) +
            _0x215f63 +
            _0x739738(0x198) +
            _0x6fd185 +
            "\x22>" +
            _0x739738(0x186) +
            "<p\x20class=\x27news__text\x27>" +
            _0x6fd185 +
            _0x739738(0x189) +
            _0x739738(0x177) +
            _0x739738(0x179));
      }
      $(_0x739738(0x178))["append"](_0xcb1c37);
    })
    ["fail"](function (_0x213a06, _0x3e6c93, _0xb53dcf) {
      const _0x57c4a5 = _0x3d86c8;
      console[_0x57c4a5(0x193)](_0x57c4a5(0x18f), _0x3e6c93, _0xb53dcf);
    });
});
