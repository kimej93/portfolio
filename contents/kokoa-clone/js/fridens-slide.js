$(function () {
  $(".friends-screen_channel-header").click(function () {
    if ($(this).hasClass("active")) {
      $(this).next().slideUp();
      $(this).removeClass("active");
    } else {
      $(this).next().slideDown();
      $(this).addClass("active");
    }
  });
});

$(function () {
  $(".friends-screen_fridens-header").click(function () {
    $($(this)).next().fadeToggle("fast");
  });
});
