import classes from "./project-text.module.css";

function ProjectText(props) {
  const { text } = props;
  return (
    <div className={classes.container}>
      <p>
        {text}
      </p>
    </div>
  )
}

export default ProjectText;