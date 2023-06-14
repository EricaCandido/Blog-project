import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.scss";

const Card = (props) => {
  const { post } = props;
  return (
    <Link
      href={
        "/blog/" + post?.slug
        // || "/event/" + post?.id
      }
    >
      <div className={styles.Card}>
        {post?.image && (
          <Image
            className={styles.cardImage}
            src={post?.image}
            width={100}
            height={350}
            alt={post?.title}
          />
        )}

        <h3>{post?.title}</h3>
        <p>{post?.date}</p>
      </div>
    </Link>
  );
};

export default Card;
