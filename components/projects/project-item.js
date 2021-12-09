import Button from "../ui/button";
import classes from "./project-item.module.css";
import Link from "next/link";
import Image from "next/image";

function ProjectItem(props) {
  const { name, images, skills, excerpt, gitHub, live } = props.project;

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <li className={classes.item}>
      <div className={classes.left}>
        <div className={classes.image}>
          <Image loader={myLoader} width={380} src={images[0]} height={220} />
        </div>
        <div className={classes.text}>
          <Link href={`/projects/${name}`}>
            <h1>{name}</h1>
          </Link>
          <p>{excerpt}</p>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>
                <p className={classes.skills}>{skill}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.btns}>
        <Button link={`/projects/${name}`}> Learn More </Button>
        <Button link={gitHub}>GitHub</Button>
        {live && <Button link={live}>Live Demo</Button>}
      </div>
    </li>
  );
}

export default ProjectItem;
