// cursor.js

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
