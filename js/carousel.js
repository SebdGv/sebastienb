import { techCursor } from "./cursor.js";

// Caroussel slick
export function initCarousel() {
  $(document).ready(function () {
    $(".fade")
      .slick({
        dots: true,
        infinite: true,
        speed: 300,
        cssEase: "linear",
        adaptiveHeight: true,
        slidesToShow: 1, // Nombre de slides à montrer
        slidesToScroll: 1, // Nombre de slides à défiler
        centerMode: true, // Active le mode centré
        centerPadding: "60px",
        variableWidth: true,
        appendDots: $(".dots"),
        focusOnSelect: true,
        arrows: true,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
      })
      .on("init", function () {
        //  techCursor après init de Slick
        techCursor();
      });
  });
}

techCursor(document.querySelector(".cursor"));
