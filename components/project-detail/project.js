import ProjectImages from "./project-images";
import ProjectMain from "./project-main";
import ProjectText from "./project-text";
import classes from "./project.module.css";

function Project(props) {
  const { name, images, skills, description, live, gitHub } = props.project;
  console.log(props);

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <ProjectImages images={images} />
        <ProjectMain name={name} skills={skills} live={live} gitHub={gitHub} />
      </div>
      <ProjectText text={description} />
    </div>
  );
}

export default Project;
