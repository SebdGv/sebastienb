let modalInterval;
const html = document.querySelector("html");

// Fonction pour ouvrir la modale
export function openModal(work) {
  const modalBackground = document.getElementById("modalBackground");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalTechno = document.getElementById("modalTechno");
  const modalLink = document.getElementById("modalLink");

  const modalImages = work.modalImages; // Récupérer les images de la modale
  if (modalImages.length === 0) {
    console.error("No modal images found");
    return;
  }
  let currentImageIndex = 0;

  function updateModalImage() {
    modalImage.src = modalImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % modalImages.length;
  }

  // Mettre à jour le contenu de la modale
  modalTitle.textContent = work.title;
  modalDescription.textContent = work.description;
  modalTechno.textContent = work.techno;
  modalLink.href = work.link;

  // Afficher la modale et empêcher le défilement de la page
  modalBackground.classList.remove("hidden");
  html.classList.add("overflow-hidden");
  updateModalImage();
  modalInterval = setInterval(updateModalImage, 3000);
}

// Fonction pour fermer la modale
function closeModal() {
  const modalBackground = document.getElementById("modalBackground");
  modalBackground.classList.add("hidden");
  html.classList.remove("overflow-hidden");
  clearInterval(modalInterval);
}

document.getElementById("closeModal").addEventListener("click", () => {
  closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// click out =  close modal
document.getElementById("modalBackground").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});
