import classes from "./card.module.css";
import Link from "next/link";
function Card(props) {
  const { title, image } = props.item;
  return (
    <Link href={`/${title}`}>
      <a>
        <div className={classes.card}>
          <h1>{title}</h1>
        </div>
      </a>
    </Link>
  );
}

export default Card;
