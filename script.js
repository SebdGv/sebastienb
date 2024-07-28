import { revealHeroText, scrollIcons } from "/sebastienb/js/animations.js";
import { initCarousel } from "/sebastienb/js/carousel.js";
import { initObservers } from "/sebastienb/js/intersectionObservers.js";
import { toggleMenu } from "/sebastienb/js/menu.js";

document.addEventListener("DOMContentLoaded", () => {
  revealHeroText();
  scrollIcons();
  initObservers();
  initCarousel();

  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    toggleMenu();
  });

  document.querySelectorAll("#menu a").forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});
