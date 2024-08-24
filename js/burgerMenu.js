export function toggleMenu() {
  const menu = document.querySelector(".menu");
  const menuContent = document.querySelector(".menu-content");
  const html = document.querySelector("html");
  const lines = document.querySelectorAll(".line");
  const homeLink = document.querySelector(".homeLink");
  const links = menu.querySelectorAll("a");
  const allLinks = [...links, homeLink];

  menu.classList.toggle("open-menu");
  html.classList.toggle("overflow-hidden");
  menuContent.classList.toggle("animate");

  lines.forEach((line) => {
    line.classList.toggle("open");
  });

  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open-menu");
      html.classList.remove("overflow-hidden");
      menuContent.classList.remove("animate");
      lines.forEach((line) => {
        line.classList.remove("open");
      });
    });
  });
}
