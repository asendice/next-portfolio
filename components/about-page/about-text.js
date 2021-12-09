import classes from "./about-text.module.css";
import Button from "../ui/button";
import Socials from "../socials/socials";

function AboutText(props) {
  const { text } = props;

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <p>{text}</p>
      </div>
      <div className={classes.actions}>
        <Button link="/projects">View My Projects </Button>
        <Socials />
      </div>
    </section>
  );
}

export default AboutText;
