import { fetchWorks } from "./fetchWorks.js";
import { openModal } from "./modal.js";

export async function initCarousel() {
  try {
    const data = await fetchWorks();
    const carousel = document.getElementById("carousel");

    if (!carousel) {
      console.error("Carousel element not found");
      return;
    }

    // Fonction pour charger les images
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const imagePromises = data.map((work) => loadImage(work.previewImage));
    await Promise.all(imagePromises);

    data.forEach((work) => {
      const workItem = document.createElement("div");
      workItem.classList.add("flex", "justify-center");

      const workImage = document.createElement("img");
      workImage.src = work.previewImage;
      workImage.alt = work.altText;

      workImage.classList.add("carouselImage");
      workImage.classList.add("cursor-pointer");

      // Passer l'objet work à openModal
      workImage.addEventListener("click", () => {
        openModal(work);
      });

      workItem.appendChild(workImage);
      carousel.appendChild(workItem);
    });

    $(carousel).slick({
      dots: true,
      infinite: true,
      speed: 300,
      cssEase: "linear",
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
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
