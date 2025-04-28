export function initializeHoverMenu() {
  const menuLinks = document.querySelectorAll(".menu-content a");

  menuLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      const imgSrc = link.getAttribute("data-img-src");
      const img = document.createElement("img");
      img.src = imgSrc;
      img.classList.add("hover-img");
      img.alt = "preview section Image";

      document.body.appendChild(img);

      const moveImage = (event) => {
        img.style.position = "absolute";
        img.style.left = `${event.pageX + 10}px`;
        img.style.top = `${event.pageY + 10}px`;
      };

      document.addEventListener("mousemove", moveImage);

      link.addEventListener("mouseout", () => {
        img.remove();
        document.removeEventListener("mousemove", moveImage);
      });
    });
  });
}
