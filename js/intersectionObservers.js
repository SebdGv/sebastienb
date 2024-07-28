// Function to observe an element and apply animation class when it intersects
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

// Function for background change observer
const observeBackgroundChange = (id, options) => {
  const element = document.getElementById(id);
  if (!element) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(
          `Element: ${entry.target.id}, isIntersecting: ${entry.isIntersecting}`
        );
        document.body.classList.remove("bg-white", "text-black");
        document.body.classList.add("bg-black", "text-white");
        const menu = document.getElementById("menu");
        menu.classList.remove("bg-white", "text-black");
        menu.classList.add("bg-black", "text-white");
        const contactBtn = document.getElementById("contactBtn");
        contactBtn.classList.add("bg-white", "text-black");
        contactBtn.classList.remove("text-white");
        const burgerLines = document.querySelectorAll(".line");
        burgerLines.forEach((line) => {
          line.classList.add("bg-white");
        });
      } else {
        console.log(
          `Element: ${entry.target.id}, isIntersecting: ${entry.isIntersecting}`
        );
        document.body.classList.remove("bg-black", "text-white");
        document.body.classList.add("bg-white", "text-black");
        const menu = document.getElementById("menu");
        menu.classList.remove("bg-black", "text-white");
        menu.classList.add("bg-white", "text-black");
        const contactBtn = document.getElementById("contactBtn");
        contactBtn.classList.remove("bg-white", "text-black");
        contactBtn.classList.add("bg-black", "text-white");
        const burgerLines = document.querySelectorAll(".line");
        burgerLines.forEach((line) => {
          line.classList.remove("bg-white");
        });
      }
    });
  }, options);

  observer.observe(element);
};

export const initObservers = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  observeElement("aboutTitle", "animate-fadeInRight", options);
  observeElement("aboutText", "animate-fadeInRight", options);
  observeBackgroundChange("contactBtn", options);
  observeElement("carouselBg", "opacity-1", options);
};
