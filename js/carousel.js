import { techCursor } from "./cursor.js";
import { fetchWorks } from "./fetchWorks.js";

export async function initCarousel() {
  const data = await fetchWorks();
  const carousel = document.getElementById("carousel");

  data.forEach((work) => {
    const workItem = document.createElement("div");
    workItem.classList.add("flex", "justify-center");

    const workLink = document.createElement("a");
    workLink.href = work.link;
    workLink.target = "_blank";
    workLink.classList.add("links");

    const workImage = document.createElement("img");
    workImage.src = work.image;
    workImage.alt = work.altText;
    workImage.dataset.content = work.dataContent;
    workImage.classList.add("carouselImage");

    workLink.appendChild(workImage);
    workItem.appendChild(workLink);
    carousel.appendChild(workItem);
  });

  // Initialize Slick Carousel
  $(carousel)
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
  techCursor(document.querySelector(".cursor"));
}
