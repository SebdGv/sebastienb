import { revealHeroText, scrollIcons } from "./js/animations.js";
import { initCarousel } from "./js/carousel.js";
import { initObservers } from "./js/intersectionObservers.js";
import { toggleMenu } from "./js/menu.js";

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

// Disable zoom on mobile devices(IOS)
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});
// Set the initial scale to 1.0
document
  .querySelector("meta[name=viewport]")
  .setAttribute("content", "initial-scale=1.0");
