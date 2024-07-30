// Apparition text-hero
export const revealHeroText = () => {
  const span = document.querySelector("h1 span");
  setTimeout(() => {
    span.classList.remove("opacity-0");
    span.classList.add("animate-reveal");
  }, 1000);
};

// Scroll icons
export const scrollIcons = () => {
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
};

// hover effect

export const hoverEffect = () => {
  const burger = document.querySelector(".burger");
  // const cursor = document.querySelector(".cursor");
  // const burgerHover = document.querySelector(".burgerHover");
  const lines = document.querySelectorAll(".line");

  burger.addEventListener("mouseover", () => {
    // cursor.classList.add("hidden");
    // burgerHover.classList.add("burger-hover");
    lines.forEach((line) => {
      line.classList.add("scale");
    });
  });
  burger.addEventListener("mouseout", () => {
    // cursor.classList.remove("hidden");
    // burgerHover.classList.remove("burger-hover");
    lines.forEach((line) => {
      line.classList.remove("scale");
    });
  });
};
