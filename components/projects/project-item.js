import Button from "../ui/button";
import classes from "./project-item.module.css";
import Link from "next/link";
import Image from "next/image";

function ProjectItem(props) {
  const { name, images, skills, description, gitHub, live } = props.project;

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <li className={classes.container}>
      <Link href={`/projects/${name}`}>
        <a className={classes.item}>
          <div>
            <Image loader={myLoader} width={350} src={images[0]} height={250} />
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
        </a>
      </Link>
    </li>
  );
}

export default ProjectItem;
