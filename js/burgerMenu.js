export function toggleMenu() {
  const menu = document.querySelector(".menu");
  const menuContent = document.querySelector(".menu-content");
  const html = document.querySelector("html");
  const lines = document.querySelectorAll(".line");
  const homeLink = document.querySelector(".homeLink");
  const links = menu.querySelectorAll("a");
  const allLinks = [...links, homeLink];

  // Vérifier si le menu est déjà ouvert ou non
  const isOpen = menu.classList.contains("open-menu");

  if (isOpen) {
    // Si le menu est déjà ouvert, ajouter la classe "closing"
    // Attendre la fin de l'animation pour retirer les classes
    setTimeout(() => {
      menu.classList.remove("open-menu");
    }, 700); // Ajouter un délai de 300ms

    // Supprimer les autres classes
    html.classList.remove("overflow-hidden");
    menuContent.classList.remove("animate");
    lines.forEach((line) => {
      line.classList.remove("open");
    });
  } else {
    // Ouvrir le menu
    menu.classList.add("open-menu");
    html.classList.add("overflow-hidden");
    menuContent.classList.add("animate");
    lines.forEach((line) => {
      line.classList.add("open");
    });
  }

  // Gérer le clic sur chaque lien du menu
  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Attendre la fin de l'animation pour retirer les classes
      setTimeout(() => {
        menu.classList.remove("open-menu");
      }, 700);

      // Supprimer les autres classes
      html.classList.remove("overflow-hidden");
      menuContent.classList.remove("animate");
      lines.forEach((line) => {
        line.classList.remove("open");
      });
    });
  });
}
