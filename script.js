import { toggleMenu } from "./js/burgerMenu.js";
import { initializeModal } from "./js/modal.js";
import { displayProjects } from "./js/projectLoader.js";
import gsap from "./node_modules/gsap/index.js";
import ScrollTrigger from "./node_modules/gsap/ScrollTrigger.js";

// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const cardsContainer = document.querySelector(".works-container");
const cards = document.querySelector(".cards");
const title = document.querySelector(".works h2");
const burger = document.querySelector(".burger");

// OPEN MENU
burger.addEventListener("click", () => {
  toggleMenu();
});

document.addEventListener("DOMContentLoaded", async () => {
  await displayProjects();
  initializeModal();
});

// SCROLL ANIMATION

function getScrollAmount() {
  const totalWidth = cards.scrollWidth;
  const viewportWidth = window.innerWidth;
  return -(totalWidth - viewportWidth + viewportWidth / 2);
}
if (window.matchMedia("(min-width: 1024px)").matches) {
  // Créer une timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: cardsContainer,
      start: "top top",
      end: "+=3000px",
      scrub: 1,
      pin: ".works",
      invalidateOnRefresh: true,
    },
  });

  tl.to(cards, {
    x: getScrollAmount,
    duration: 1,
    ease: "none",
  });

  tl.to(
    cardsContainer,
    {
      backgroundColor: "#000",
      duration: 1,
      ease: "none",
    },
    "-=0.9"
  );
  tl.to(
    title,
    {
      color: "#fff",
      duration: 1,
      ease: "none",
    },
    "-=0.9"
  );
}
