// Fonction pour charger les données JSON
export async function loadProjects() {
  try {
    const response = await fetch("./data/projects.json");
    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

// Fonction pour générer les cartes
export function createCard(project) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.setProperty("--bg", `url('${project.previewImage}')`);

  const viewProjectContainer = document.createElement("div");
  viewProjectContainer.className = "view-project-container";

  const viewProject = document.createElement("p");
  viewProject.className = "view-project";
  viewProject.textContent = "";

  viewProjectContainer.appendChild(viewProject);
  card.appendChild(viewProjectContainer);

  card.addEventListener("mouseenter", () => {
    viewProject.textContent = project.title;
  });

  card.addEventListener("mouseleave", () => {
    viewProject.textContent = "";
  });

  return card;
}

// Fonction pour afficher les cartes dans le DOM
export async function displayProjects() {
  const projects = await loadProjects();
  const cardsContainer = document.querySelector(".cards");
  if (projects.length === 0) {
    // Vérifie si le tableau de projets est vide et affiche un message si nécessaire
    const message = document.createElement("p");
    message.textContent = "No projects found.";
    cardsContainer.appendChild(message);
  } else {
    projects.forEach((project, index) => {
      const card = createCard(project);
      card.classList.add(`card${index + 1}`); // Ajouter une classe unique par carte
      cardsContainer.appendChild(card);
    });
  }
}
