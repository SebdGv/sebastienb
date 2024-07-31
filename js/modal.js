// modal.js

// Function to open the modal
function openModal(imageElement) {
  const modalBackground = document.getElementById("modalBackground");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLink = document.getElementById("modalLink");

  modalImage.src = imageElement.src;
  modalTitle.textContent = imageElement.dataset.title;
  modalDescription.textContent = imageElement.dataset.description;
  modalLink.href = imageElement.dataset.link;

  modalBackground.classList.remove("hidden");
}

// Function to close the modal
function closeModal() {
  const modalBackground = document.getElementById("modalBackground");
  modalBackground.classList.add("hidden");
}

// Event listener for closing the modal
document.getElementById("closeModal").addEventListener("click", () => {
  closeModal();
});

// Close the modal when clicking outside of the content
document.getElementById("modalBackground").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});

// Export the openModal function for use in other scripts
export { openModal };
