import Image from "next/image";
import Link from "next/link";
import styles from "./eventCard.module.scss";

const EventCard = (props) => {
  const { event } = props;
  return (
    // <Link
    //   href={
    //     // "/blog/" + post?.slug ||

    //     "/event/" + event.id
    //   }
    // >
    <div className={styles.eventCard}>
      <img
        className={styles.eventImage}
        src={event?.images[0].url}
        alt="concert_image"
      />

      <h2 className={styles.eventTitle}>{event?.name}</h2>

      <p>
        {`${
          event?.dates?.start?.localDate
        } alle ${event?.dates?.start?.localTime.slice(0, 5)}`}
      </p>

      <a className={styles.ticketBuy} href={event?.url}>
        Compra il biglietto
      </a>
    </div>
    // </Link>
  );
};

export default EventCard;
