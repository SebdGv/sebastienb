const cursor = document.querySelector(".cursor");
let cursorX = 0;
let cursorY = 0;

window.addEventListener("mousemove", (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  updateCursor();
});

window.addEventListener("scroll", updateCursor);

export function updateCursor() {
  cursor.style.top = cursorY + window.scrollY + "px";
  cursor.style.left = cursorX + window.scrollX + "px";
}

// cursor survol carousel
// Function to handle cursor interaction with carousel images
export function techCursor(cursorElement) {
  // Select all carousel images
  const carouselImages = document.querySelectorAll(".carouselImage");

  // Add event listeners to each image
  carouselImages.forEach((image) => {
    const text = image.getAttribute("data-content");

    // Handle mouseover event
    image.addEventListener("mouseover", () => {
      const activeSlide = image.closest(".slick-active");
      if (activeSlide) {
        cursorElement.classList.add("activeCursor");
        cursorElement.textContent = text;
      }
    });

    // Handle mouseleave event
    image.addEventListener("mouseleave", () => {
      const activeSlide = image.closest(".slick-active");
      if (activeSlide) {
        cursorElement.classList.remove("activeCursor");
        cursorElement.textContent = "";
      }
    });
  });
}
techCursor(cursor);
