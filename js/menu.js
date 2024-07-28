export const toggleMenu = () => {
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("menu");
  const lines = document.querySelectorAll(".line");
  const html = document.querySelector(".html");

  burger.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("translate-y-full");

  lines[0].classList.toggle("transform");
  lines[0].classList.toggle("translate-y-1");
  lines[0].classList.toggle("rotate-45");

  lines[2].classList.toggle("transform");
  lines[2].classList.toggle("-translate-y-1");
  lines[2].classList.toggle("-rotate-45");
};
