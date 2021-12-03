import { Fragment, useState } from "react";
import classes from "./projects.module.css";
import Filter from "./filter";
import ProjectList from "./project-list";

function Projects() {
  return (
    <section className={classes.projects}>
      <Filter />
      <ProjectList />
    </section>
  );
}

export default Projects;
