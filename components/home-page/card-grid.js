import Card from './card';
import classes from "./card-grid.module.css"

function CardGrid(props) {
  const { items } = props;
  return (
    <ul className={classes.container}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default CardGrid;
