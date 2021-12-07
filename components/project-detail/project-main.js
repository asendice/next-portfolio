import Button from "../ui/button";
import classes from "./project-main.module.css";

function ProjectMain(props) {
  const { name, skills, live, gitHub } = props;


  return (
    <div className={classes.container}>
      <h1>{name}</h1>
      <ul className={classes.list}>
        {skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </ul>
      <div className={classes.btns}>
        <Button link={gitHub}>GitHub</Button>
        {live && <Button link={live}>Live Demo</Button>}
      </div>
    </div>
  );
}

export default ProjectMain;
