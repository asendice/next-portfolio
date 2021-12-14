import Button from "../ui/button";
import classes from "./project-item.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

function ProjectItem(props) {
  const { name, images, skills, excerpt, gitHub, live } = props.project;

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <Image
          loading="eager"
          priority={true}
          loader={myLoader}
          width={500}
          src={images[0]}
          height={300}
        />
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
        <Link href={`/projects/${name}`}>
          <a className={classes.learnMore}>
            Learn More
            <span>
              <BsArrowRight />
            </span>
          </a>
        </Link>
        <div className={classes.btns}>
          <Button link={gitHub}>GitHub</Button>
          {live && <Button link={live}>Live Demo</Button>}
        </div>
      </div>
    </li>
  );
}

export default ProjectItem;
