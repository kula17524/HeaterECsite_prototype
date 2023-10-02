// リンクボタンで商品紹介ページに遷移
$(".link-button").click(function () {
  window.location.href = "product.html";
});

// スクロールでふわっと表示
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll(
    ".scroll_up , .scroll_left , .scroll_right"
  );
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 150;
      if (
        window.innerHeight >
        scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
      ) {
        scrollAnimationElm[i].classList.add("on");
      }
    }
  };
  window.addEventListener("load", scrollAnimationFunc);
  window.addEventListener("scroll", scrollAnimationFunc);
});
