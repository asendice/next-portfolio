import { Fragment } from "react";
import { getAllProjects } from "../../helpers/api-util";
import Projects from "../../components/projects/projects";

function ProjectsPage(props) {
  const { techSkills, projects } = props;

  return (
    <Fragment>
      <Projects skills={techSkills} projects={projects} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  console.log(projects, "projects")
  const skills = [
    "HTML",
    "CSS",
    "Sass",
    "React",
    "React-Native",
    "NextJs",
    "Redux",
    "Node",
    "MongoDB",
    "Express",
  ];
  return {
    props: {
      projects: projects,
      techSkills: skills,
    },
  };
}

export default ProjectsPage;
