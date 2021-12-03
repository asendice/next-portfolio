import CardGrid from "../home-page/card-grid";
import classes from "./hero.module.css"



function Hero(props) {
  return (
    <section className={classes.hero}>
      {/* <h1>Dylan Travis</h1> */}
      <CardGrid items={props.items} />
    </section>
  );
}

export default Hero;
