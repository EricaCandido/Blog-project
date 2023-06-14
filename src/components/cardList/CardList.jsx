import styles from "./cardList.module.scss";

import Card from "../card/Card";

const CardList = (props) => {
  const { data } = props;
  return (
    <div className={styles.CardList}>
      {data.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
};

export default CardList;
