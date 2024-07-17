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

// cursol survol carousel
const techCursor = () => {
  const carouselImages = document.querySelectorAll(".carouselImage");
  console.log(carouselImages);
  carouselImages.forEach((image) => {
    const text = image.getAttribute("data-text");
    image.addEventListener("mouseover", () => {
      cursor.classList.add("activeCursor");
      cursor.textContent = text;
    });
    image.addEventListener("mouseleave", () => {
      cursor.classList.remove("activeCursor");
      cursor.textContent = "";
    });
  });
};
techCursor();
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
    Math.ceil(window.innerWidth / iconContainer.clientWidth) * 4;
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

// Apparition des éléments au scroll

document.addEventListener("scroll", () => {
  const burgerLines = document.querySelectorAll(".line");

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollValue >= 0.23) {
    aboutTitle.classList.remove("translate-x-[-1500px]");
  }
  if (scrollValue >= 0.27) {
    aboutText.classList.remove("translate-x-[-1200px]");
  }
  if (scrollValue >= 0.82) {
    body.classList.remove("bg-white");
    body.classList.add("bg-black", "text-white");
    menu.classList.remove("bg-white");
    menu.classList.add("bg-black", "text-white");
    contactBtn.classList.add("bg-white", "text-black");
    contactBtn.classList.remove("text-white");

    burgerLines.forEach((line) => {
      line.classList.add("bg-white");
    });
  } else {
    body.classList.remove("bg-black", "text-white");
    body.classList.add("bg-white");
    menu.classList.remove("bg-black", "text-white");
    menu.classList.add("bg-white");
    contactBtn.classList.add("bg-black", "text-white");
    contactBtn.classList.remove("bg-white", "text-black");
    burgerLines.forEach((line) => {
      line.classList.remove("bg-white");
    });
  }
});

// Caroussel slick
$(document).ready(function () {
  $(".fade").slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    adaptiveHeight: true,
    slidesToShow: 1, // Nombre de slides à montrer
    slidesToScroll: 1, // Nombre de slides à défiler
    centerMode: true, // Active le mode centré
    centerPadding: "60px", // Ajuste l'espace autour des slides centrales
    variableWidth: true,
    appendDots: $(".dots"),
    focusOnSelect: true,
    mobileFirst: true,
    swipe: true,
  });
});
