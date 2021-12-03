import { useState } from "react";
import classes from "./projects.module.css";
import Filter from "./filter";
import ProjectList from "./project-list";

function Projects(props) {
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function updateFilters(filter) {
    if (!filters.includes(filter)) {
      setFilters((currentFilters) => [...currentFilters, filter]);
    }

    if (filters.includes(filter)) {
      const filteredFitlers = filters.filter((item) => item !== filter);
      setFilters(filteredFitlers);
    }
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
      />
      <ProjectList />
    </section>
  );
}

export default Projects;
