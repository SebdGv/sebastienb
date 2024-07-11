function toggleMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("menu");
  const lines = document.querySelectorAll(".line");
  const html = document.querySelector(".html");

  burger.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("translate-y-full");

  lines[0].classList.toggle("transform");
  lines[0].classList.toggle("translate-y-1.5");
  lines[0].classList.toggle("rotate-45");

  lines[2].classList.toggle("transform");
  lines[2].classList.toggle("-translate-y-1.5");
  lines[2].classList.toggle("-rotate-45");

  html.classList.toggle("overflow-hidden");
}

// Cursor
const cursor = document.querySelector(".cursor");
let cursorX = 0;
let cursorY = 0;

window.addEventListener("mousemove", (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  updateCursor();
});

window.addEventListener("scroll", updateCursor);

function updateCursor() {
  cursor.style.top = cursorY + window.scrollY + "px";
  cursor.style.left = cursorX + window.scrollX + "px";
}

//==================================================================================================
// Gestion animation in&out content
//==================================================================================================

// Appartition text-hero avec animation mot par mot

// document.addEventListener("DOMContentLoaded", () => {
//   const heroText = document.getElementById("hero-text");
//   if (heroText) {
//     const words = heroText.innerText.split(" ");
//     heroText.innerHTML = words
//       .map(
//         (word, index) =>
//           `<span class="inline-block opacity-0 animate-fadeInBounce" style="animation-delay: ${
//             index * 0.1
//           }s;">${word} </span>`
//       )
//       .join(" ");
//   }
// });

// Apparition text-hero avec animation lettre par lettre

document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.getElementById("hero-text");
  if (heroText) {
    const words = heroText.innerText.split(" ");
    heroText.innerHTML = words
      .map(
        (word, wordIndex) =>
          `<span class="inline-block">
          ${word
            .split("")
            .map(
              (letter, letterIndex) =>
                `<span class="inline-block opacity-0 animate-fadeInBounce" style="animation-delay: ${
                  wordIndex * 0.1 + letterIndex * 0.03
                }s;">${letter}</span>`
            )
            .join("")}
          </span>`
      )
      .join(
        '<span class="inline-block opacity-0" style="width: 0.5em;"></span>'
      );
  }
});

// Scroll icons

document.addEventListener("DOMContentLoaded", () => {
  const iconContainer = document.querySelector(".containIcon");
  const icons = iconContainer.innerHTML;

  // Dupliquer les icônes jusqu'à ce qu'elles remplissent la largeur de la fenêtre
  const repeatTimes =
    Math.ceil(window.innerWidth / iconContainer.clientWidth) * 2;
  for (let i = 0; i < repeatTimes; i++) {
    const clone = document.createElement("div");
    clone.innerHTML = icons;
    iconContainer.appendChild(clone);
  }

  // Ajouter un clone supplémentaire pour une transition plus fluide
  const extraClone = document.createElement("div");
  extraClone.innerHTML = icons;
  iconContainer.appendChild(extraClone);
});
