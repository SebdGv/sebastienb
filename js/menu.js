export function toggleMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("menu");
  const html = document.querySelector("html");

  burger.classList.toggle("open");
  menu.classList.toggle("opacity-0");
  html.classList.toggle("overflow-hidden");
}
