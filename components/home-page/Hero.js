import CardGrid from "../home-page/card-grid";
import Socials from "../socials/socials";
import classes from "./hero.module.css"



function Hero(props) {
  return (
    <section className={classes.hero}>
      <h1>Dylan Travis</h1>
      <CardGrid items={props.items} />
      <Socials />
    </section>
  );
}

export default Hero;
