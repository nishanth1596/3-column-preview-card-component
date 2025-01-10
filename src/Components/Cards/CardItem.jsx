import styles from "./CardItem.module.css";

function CardItem({ item }) {
  return (
    <div className={styles.cardItem} style={{ "--bg-color": item.bgColor }}>
      <img src={item.logo} alt="" className={styles.icon} />
      <h1 className={styles.heading}>{item.title}</h1>
      <p className={styles.info}>{item.info}</p>
      <a className={styles.link} href="#">
        Learn More
      </a>
    </div>
  );
}

export default CardItem;
