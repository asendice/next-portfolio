import Button from "../ui/button";
import classes from "./project-item.module.css";

function ProjectItem(props) {
  const { name, images, skills, description, gitHub, live } = props.project;
  return (
    <li className={classes.item}>
      <div>
        <img src={images[0]} />
      </div>
      <div className={classes.text}>
        <h1>{name}</h1>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={classes.btns}>
        <Button link={gitHub}>GitHub</Button>
        {live && <Button link={live}>Live Demo</Button>}
      </div>
    </li>
  );
}

export default ProjectItem;
