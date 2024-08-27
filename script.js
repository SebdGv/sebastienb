import { toggleMenu } from "./js/burgerMenu.js";
import { initializeModal } from "./js/modal.js";
import { displayProjects } from "./js/projectLoader.js";
import { scrollAnimation } from "./js/scrollAnimation.js";

const burger = document.querySelector(".burger");

// OPEN MENU
burger.addEventListener("click", () => {
  toggleMenu();
});

document.addEventListener("DOMContentLoaded", async () => {
  await displayProjects();
  initializeModal();
  scrollAnimation();
});
