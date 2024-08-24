import { loadProjects } from "../js/projectLoader.js";

export async function initializeModal() {
  const projects = await loadProjects();
  const cards = document.querySelectorAll(".card");
  const modal = document.querySelector(".modal");
  const html = document.querySelector("html");

  // Fonction pour générer le contenu de la modale
  function createModalContent(project) {
    // création des elements HTML
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalImageContainer = document.createElement("div");
    modalImageContainer.classList.add("modal-image-container");

    const modalImg = document.createElement("img");
    modalImg.classList.add("modal-img");
    modalImg.src = project.modalImages[0];
    modalImg.alt = project.altText;

    const modalText = document.createElement("div");
    modalText.classList.add("modal-text");

    const closeIcon = document.createElement("span");
    closeIcon.classList.add("close-modal");
    closeIcon.innerHTML = "&times;";

    const modalTitle = document.createElement("h2");
    modalTitle.textContent = project.title;

    const modalParagraph = document.createElement("p");
    modalParagraph.textContent = project.description;

    const modalButton = document.createElement("button");
    modalButton.classList.add("modal-btn");

    const modalLink = document.createElement("a");
    modalLink.href = project.link;
    modalLink.target = "_blank";
    modalLink.textContent = "View project";

    modalButton.appendChild(modalLink);
    modalText.appendChild(closeIcon);
    modalText.appendChild(modalTitle);
    modalText.appendChild(modalParagraph);
    modalText.appendChild(modalButton);
    modalImageContainer.appendChild(modalImg);
    modalContent.appendChild(modalImageContainer);
    modalContent.appendChild(modalText);
    modalContainer.appendChild(modalContent);

    modal.innerHTML = ""; // Vider le contenu précédent de la modale
    modal.appendChild(modalContainer);

    closeIcon.addEventListener("click", closeModal);
    modalImg.addEventListener("click", () => {
      clearInterval(interval);
      currentImageIndex = (currentImageIndex + 1) % project.modalImages.length;
      modalImg.src = project.modalImages[currentImageIndex];
    });

    // Interval pour changer d'image toutes les 3 secondes
    interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % project.modalImages.length;
      modalImg.src = project.modalImages[currentImageIndex];
    }, 3000);
  }

  // Fonction pour ouvrir la modale
  function openModal(project) {
    createModalContent(project);
    modal.classList.remove("hidden");
    modal.classList.add("show");
    html.style.overflow = "hidden";
  }

  // Fonction pour fermer la modale
  function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hidden");
    html.style.overflow = "auto";
    clearInterval(interval);
  }

  let interval;
  let currentImageIndex = 0;

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const project = projects[index];
      openModal(project);
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
}
