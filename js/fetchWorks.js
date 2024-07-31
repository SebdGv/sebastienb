export async function fetchWorks() {
  try {
    const response = await fetch("./data/works.json"); // Fetch JSON
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Gérer erreur HTTP
    }
    const data = await response.json(); // Extraire JSON
    return data; // Retourner données
  } catch (error) {
    console.error("Error fetching works:", error); // Afficher erreur
    return [];
  }
}
