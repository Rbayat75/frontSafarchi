$(document).ready(function () {
  $("#eng").click(function () {
    $("#eng-icon").toggleClass("icon-rotate");
    $("#dropdown-eng").toggleClass("show-dropdown");
  });
  $("#profile").click(function () {
    $("#dropdown-profile").toggleClass("show-dropdown");
  });
  $(".menu-bar").click(function () {
    $(".menu-bar-hamberger").toggleClass("show-dropdown");
  });
});
