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
    <li className={classes.item}>
      <div className={classes.left}>
        <div className={classes.image}>
          <Image loader={myLoader} width={350} src={images[0]} height={220} />
        </div>
        <div className={classes.text}>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className={classes.btns}>
        <Button link={gitHub}>GitHub</Button>
        {live && <Button link={live}>Live Demo</Button>}
      </div>
    </li>
  );

  // return (
  //   <li className={classes.item}>
  //     <Link href={`/projects/${name}`}>
  //       <a>
  //         <div>
  //           <Image loader={myLoader} width={350} src={images[0]} height={250} />
  //           <h1>{name}</h1>
  //         </div>
  //         <div className={classes.text}>
  //           <ul>
  //             {skills.map((skill) => (
  //               <li key={skill}>{skill}</li>
  //             ))}
  //           </ul>
  //         </div>
  //       </a>
  //     </Link>
  //     <div className={classes.btns}>
  //       <Button link={gitHub}>GitHub</Button>
  //       {live && <Button link={live}>Live Demo</Button>}
  //     </div>
  //   </li>
  // );
}

export default ProjectItem;
