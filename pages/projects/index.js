import { Fragment } from "react";
import Projects from "../../components/projects/projects";

function ProjectsPage(props) {

  const { techSkills } = props;

  return (
    <Fragment>
      <Projects skills={techSkills} />
    </Fragment>
  );
}

export async function getStaticProps() {
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
      techSkills: skills
    }
  }
}


export default ProjectsPage;
