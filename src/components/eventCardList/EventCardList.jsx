import styles from "./eventCardList.module.scss";
import EventCard from "../eventCard";

const EventCardList = (props) => {
  const { data } = props;
  return (
    <div className={styles.EventCardList}>
      <h1 className={styles.title}>Eventi in programma</h1>
      {data.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventCardList;
