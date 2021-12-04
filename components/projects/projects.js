import { useState } from "react";
import classes from "./projects.module.css";
import Filter from "./filter";
import ProjectList from "./project-list";

function Projects(props) {
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { projects } = props.projects;

  console.log(projects, "projects");

  function updateFilters(filter) {
    if (!filters.includes(filter)) {
      setFilters((currentFilters) => [...currentFilters, filter]);
    }

    if (filters.includes(filter)) {
      const filteredFitlers = filters.filter((item) => item !== filter);
      setFilters(filteredFitlers);
    }
  }

  function filterProjects() {
    const searchResults = projects.filter((project) => {
      if (
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.skills.includes(searchTerm.toLowerCase())
      ) {
        return project;
      }
    });
    return searchResults;
  }

  const { skills } = props;
  return (
    <section className={classes.projects}>
      <Filter
        skills={skills}
        updateFilters={updateFilters}
        filters={filters}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        projects={filterProjects()}
      />
      <ProjectList projects={projects} />
    </section>
  );
}

export default Projects;
