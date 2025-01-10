import styles from "./Cards.module.css";
import CardItem from "./CardItem";
import { cardData } from "../cardData";

function Cards() {
  return (
    <section className={styles.container}>
      {cardData.map((item) => (
        <CardItem key={item.title} item={item} />
      ))}
    </section>
  );
}

export default Cards;
