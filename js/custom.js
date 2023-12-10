(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").delay(500).slideUp("slow"); // set duration in brackets
  });

  // NAVBAR
  $(".navbar").headroom();

  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(".slick-slideshow").slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: true,
    dots: true,
  });

  $(".slick-testimonial").slick({
    arrows: false,
    dots: true,
  });
})(window.jQuery);

$(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
  if (!$(this).next().hasClass("show")) {
    $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass("show");

  $(this)
    .parents("li.nav-item.dropdown.show")
    .on("hidden.bs.dropdown", function (e) {
      $(".dropdown-submenu .show").removeClass("show");
    });

  return false;
});

document.getElementById("showToastBtn").addEventListener("click", function () {
  // Şartı kontrol et (örneğin, bir değişkenin değeri)
  var condition = true; // Bu örnekte her zaman true
  if (condition) {
    // Metni göster
    document.getElementById("hiddenText").style.display = "block";
  } else {
    // Şart sağlanmazsa metni gizle
    document.getElementById("hiddenText").style.display = "none";
  }
});

document.getElementById("showToastBtn").addEventListener("click", function () {
  $('#statusSuccessModal').modal('show');
})



