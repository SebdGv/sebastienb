// SCROLL ANIMATION
import ScrollTrigger from "../node_modules/gsap/ScrollTrigger.js";
import gsap from "../node_modules/gsap/index.js";
// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const cardsContainer = document.querySelector(".works-container");
const cards = document.querySelector(".cards");
const title = document.querySelector(".works h2");
const about = document.querySelector(".about");
const aboutImg = document.querySelector(".about-img img");

export function scrollAnimation() {
  function getScrollAmount() {
    const totalWidth = cards.scrollWidth;
    const viewportWidth = window.innerWidth;
    return -(totalWidth - viewportWidth + viewportWidth / 2);
  }
  if (window.matchMedia("(min-width: 1024px)").matches) {
    // Créer une timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainer,
        start: "top top",
        end: "+=3000px",
        scrub: 1,
        pin: ".works",
        invalidateOnRefresh: true,
      },
    });

    tl.to(cards, {
      x: getScrollAmount,
      duration: 1,
      ease: "none",
    });
    // change background color
    tl.to(
      cardsContainer,
      {
        backgroundColor: "#000",
        duration: 0.85,
        ease: "none",
      },
      "-=0.9"
    );
    // change title color
    tl.to(
      title,
      {
        color: "#fff",
        duration: 1,
        ease: "none",
      },
      "-=0.9"
    );
  }
  gsap.to(aboutImg, {
    scrollTrigger: {
      trigger: aboutImg,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
    },
    y: -100,
    duration: 1,
    ease: "none",
  });
}
