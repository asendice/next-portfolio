export async function getAllProjects(){
  const response = await fetch('http://localhost:3000/api/projects');
  const data = await response.json();
  return data;
}

export async function getProjectByName(name) {
  const allProjects = await getAllProjects();
  return allProjects.projects.find((project) => project.name === name);
}