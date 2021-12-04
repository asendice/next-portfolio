import Button from "../ui/button";
import classes from "./project-item.module.css"

function ProjectItem(props) {
  const { name, images, skills, description, gitHub, live } = props.project;
  return (
    <li className={classes.item}>
      <div>
        <img src={images[0]} />
        <p>{name}</p>
        <p>ESCPERT</p>
      </div>
      <div>
        <Button link={gitHub}>GitHub</Button>
        {live && <Button link={live}>Live Demo</Button>}
      </div>
    </li>
  );
}

export default ProjectItem;
