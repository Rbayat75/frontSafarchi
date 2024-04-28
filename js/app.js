$(document).ready(function () {
  const close_accordion = document.getElementById("close-accordion");

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

  document.querySelectorAll(".thumbnail").forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelectorAll(".thumbnail").forEach((innerItem) => {
        innerItem.classList.remove("active");
      });
      item.classList.add("active");
      document.getElementById("main-img").src = item.src;
    });
  });

  $("#accordion-custom1").click(function () {
    $("#main-accordion1").toggleClass("show");
    $("#icon-accordion1").toggleClass("icon-rotate");
  });

  $("#close-accordion1").click(function () {
    $("#main-accordion1").toggleClass("show");
    $("#icon-accordion1").toggleClass("icon-rotate");
  });

  $("#accordion-custom2").click(function () {
    $("#main-accordion2").toggleClass("show");
    $("#icon-accordion2").toggleClass("icon-rotate");
  });

  $("#close-accordion2").click(function () {
    $("#main-accordion2").toggleClass("show");
    $("#icon-accordion2").toggleClass("icon-rotate");
  });

  $("#accordion-custom3").click(function () {
    $("#main-accordion3").toggleClass("show");
    $("#icon-accordion3").toggleClass("icon-rotate");
  });

  $("#close-accordion3").click(function () {
    $("#main-accordion3").toggleClass("show");
    $("#icon-accordion3").toggleClass("icon-rotate");
  });

  $("#accordion-custom4").click(function () {
    $("#main-accordion4").toggleClass("show");
    $("#icon-accordion4").toggleClass("icon-rotate");
  });

  $("#close-accordion4").click(function () {
    $("#main-accordion4").toggleClass("show");
    $("#icon-accordion4").toggleClass("icon-rotate");
  });

  $("#accordion-custom5").click(function () {
    $("#main-accordion5").toggleClass("show");
    $("#icon-accordion5").toggleClass("icon-rotate");
  });

  $("#close-accordion5").click(function () {
    $("#main-accordion5").toggleClass("show");
    $("#icon-accordion5").toggleClass("icon-rotate");
  });
});
