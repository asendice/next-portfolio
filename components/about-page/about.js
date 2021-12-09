import AboutImage from "../../components/about-page/about-image";
import AboutText from "../../components/about-page/about-text";
import classes from "./about.module.css";

function About(props) {
  const { text } = props;
  return (
    <section className={classes.section}>
      <AboutImage />
      <AboutText text={text} />
    </section>
  );
}

export default About;
