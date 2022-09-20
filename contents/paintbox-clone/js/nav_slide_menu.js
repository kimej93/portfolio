$(function () {
  $(".sub-menu").hide();
  $(".mo-menu-list").hide();

  $(".main-menu").click(function () {
    if ($(this).hasClass("active")) {
      $(this).next().slideUp();
      $(this).removeClass("active");
      $(this).children("span").removeClass("minus");
    } else {
      $("nav > div").find(".active").next().slideUp();
      $("nav > div").find(".active").removeClass("active");
      $(this).next().slideDown();
      $(this).addClass("active");
      $(this).children("span").addClass("minus");
    }
  });

  $(".mo-menu").click(function () {
    $(".mo-menu-list").fadeIn();
  });

  $(".close-btn").click(function () {
    $(".mo-menu-list").fadeOut();
  });
});
