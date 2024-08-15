export function toggleMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("menu");
  const html = document.querySelector("html");

  burger.classList.toggle("open");
  menu.classList.toggle("hidden");
  html.classList.toggle("overflow-hidden");
}
