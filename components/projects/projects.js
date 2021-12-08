import { useState } from "react";
import classes from "./projects.module.css";
import Filter from "./filter";
import ProjectList from "./project-list";

function Projects(props) {
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { projects } = props.projects;

  function updateFilters(filter) {
    if (!filters.includes(filter)) {
      setFilters((currentFilters) => [...currentFilters, filter]);
    }

    if (filters.includes(filter)) {
      const filteredFitlers = filters.filter((item) => item !== filter);
      setFilters(filteredFitlers);
    }
  }

  function filterSearchProjects() {
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

  function filterProjects() {
    const filteredProjects = projects.filter((project) => {
      const doesInclude = filters.every((elmement) =>
        project.skills.includes(elmement)
      );
      return doesInclude;
    });
    return filteredProjects;
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
        projects={filterSearchProjects()}
      />
      <ProjectList
        projects={filters.length === 0 ? projects : filterProjects()}
        filters={filters}
      />
    </section>
  );
}

export default Projects;
