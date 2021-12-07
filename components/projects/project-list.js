import ProjectItem from "./project-item";
import classes from "./project-list.module.css";

function ProjectList(props) {
  const { projects, filters } = props;

  if(projects.length === 0){
    return (
      <div className={classes.noresult}>
        No results matched "{filters.map(filter => <p>{filter}</p>)}"
      </div>
    )
  }

  return (
    <ul className={classes.list}>
      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </ul>
  );
}

export default ProjectList;
