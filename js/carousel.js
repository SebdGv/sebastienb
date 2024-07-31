import { fetchWorks } from "./fetchWorks.js"; // Assure-toi d'importer cette fonction
import { openModal } from "./modal.js";

export async function initCarousel() {
  try {
    const data = await fetchWorks();
    const carousel = document.getElementById("carousel");

    if (!carousel) {
      console.error("Carousel element not found");
      return;
    }

    data.forEach((work) => {
      const workItem = document.createElement("div");
      workItem.classList.add("flex", "justify-center");

      const workImage = document.createElement("img");
      workImage.src = work.image;
      workImage.alt = work.altText;
      workImage.dataset.content = work.dataContent;
      workImage.classList.add("carouselImage");
      workImage.classList.add("cursor-pointer");
      workImage.dataset.link = work.link;
      workImage.dataset.title = work.title;
      workImage.dataset.description = work.description;

      // Ajouter l'événement de clic pour ouvrir la modale
      workImage.addEventListener("click", (event) => {
        openModal(workImage);
      });

      workItem.appendChild(workImage); // Ajouter l'image directement à workItem
      carousel.appendChild(workItem); // Ajouter workItem au carousel
    });

    // Initialize Slick Carousel
    $(carousel).slick({
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
      arrows: true,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
    });
  } catch (error) {
    console.error(error);
  }
}
