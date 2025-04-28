export function splashScreen() {
  const splash = document.getElementById("splash-screen");
  if (splash) {
    window.addEventListener("load", () => {
      const html = document.querySelector("html");
      html.classList.add("overflow-hidden");
      setTimeout(() => {
        splash.addEventListener("transitionend", () => {
          html.classList.remove("overflow-hidden");
        });
        splash.classList.add("hidden");
      }, 1800); // 1.8 seconds
    });
  }
}
