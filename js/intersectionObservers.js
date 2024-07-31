// Observer un élément et appliquer une animation
const observeElement = (id, animationClass, options) => {
  const element = document.getElementById(id);
  if (!element) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.classList.remove("opacity-0", "translate-x-[-500px]");
        element.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(element);
};

// Observer le changement de fond d'écran
const observeBackgroundChange = (id, options) => {
  const element = document.getElementById(id);
  if (!element) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Changer fond et texte
        document.body.classList.remove("bg-white", "text-black");
        document.body.classList.add("bg-black", "text-white");

        // Changer menu + modaleBg
        const menu = document.getElementById("menu");
        menu.classList.remove("bg-white", "text-black");
        menu.classList.add("bg-black", "text-white");
        modal.classList.remove("bg-white", "text-black");
        modal.classList.add("bg-black", "text-white");

        // Changer bouton contact
        const contactBtn = document.getElementById("contactBtn");
        contactBtn.classList.add("bg-white", "text-black");
        contactBtn.classList.remove("text-white");

        // Changer lignes burger menu
        const burgerLines = document.querySelectorAll(".line");
        burgerLines.forEach((line) => {
          line.classList.add("bg-white");
        });
      } else {
        // Rétablir fond et texte
        document.body.classList.remove("bg-black", "text-white");
        document.body.classList.add("bg-white", "text-black");

        // Rétablir menu + modaleBg
        const menu = document.getElementById("menu");
        menu.classList.remove("bg-black", "text-white");
        menu.classList.add("bg-white", "text-black");
        modal.classList.remove("bg-black", "text-white");
        modal.classList.add("bg-white", "text-black");

        // Rétablir bouton contact
        const contactBtn = document.getElementById("contactBtn");
        contactBtn.classList.remove("bg-white", "text-black");
        contactBtn.classList.add("bg-black", "text-white");

        // Rétablir lignes burger menu
        const burgerLines = document.querySelectorAll(".line");
        burgerLines.forEach((line) => {
          line.classList.remove("bg-white");
        });
      }
    });
  }, options);

  observer.observe(element);
};

// Initialiser les observateurs
export const initObservers = () => {
  const options = {
    root: null, // Fenêtre
    rootMargin: "0px", // Pas de marge
    threshold: 0.1, // 10% visible
  };

  // Observateurs pour les éléments
  observeElement("aboutTitle", "animate-fadeInRight", options);
  observeElement("aboutText", "animate-fadeInRight", options);
  observeBackgroundChange("contactBtn", options);
  observeElement("carouselBg", "opacity-1", options);
};
