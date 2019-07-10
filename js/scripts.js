$(function() {
  var header = $(".navbar");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
      header.removeClass("header").addClass("header-scroll");
    } else {
      header.removeClass("header-scroll").addClass("header");
    }
  });
});
