import classes from "./card.module.css";
import Link from "next/link";
function Card(props) {
  const { title, image, color } = props.item;
  return (
    <Link href={`/${title}`}>
      <a>
        <div className={classes.card} style={{backgroundColor: color}}>
          <h1>{title}</h1>
        </div>
      </a>
    </Link>
  );
}

export default Card;
