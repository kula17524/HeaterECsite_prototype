window.onload = (e) => {
  $(".slide").slick({
    dots: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });
};

// リンクボタンで商品紹介ページに遷移
$(".bar-first-li").click(function () {
  window.location.href = "index.html";
});
