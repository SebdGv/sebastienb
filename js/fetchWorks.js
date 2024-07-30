export async function fetchWorks() {
  try {
    const response = await fetch("./data/works.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching works:", error);
    return [];
  }
}
