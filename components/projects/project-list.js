import ProjectItem from "./project-item";
import classes from "./project-list.module.css";

function ProjectList(props) {
  const { projects } = props;

  return (
    <ul className={classes.list}>
      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </ul>
  );
}

export default ProjectList;
