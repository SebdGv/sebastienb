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
  if (burger) {
    burger.addEventListener("click", () => {
      toggleMenu();
    });
  } else {
    console.error("Burger element not found");
  }

  const menuLinks = document.querySelectorAll("#menu");
  if (menuLinks.length > 0) {
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        console.log("Menu link clicked");
        toggleMenu();
      });
    });
  } else {
    console.error("Menu links not found");
  }
});

// Disable zoom on mobile devices(IOS)
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});
