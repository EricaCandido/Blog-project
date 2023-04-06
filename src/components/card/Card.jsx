import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.scss";

const Card = (props) => {
  const { post } = props;
  return (
    <Link href={"/blog/" + post?.slug || "/event/" + post?.id}>
      <div className={styles.Card}>
        {" "}
        <Image src={post?.image} width={400} height={300} alt={post?.title} />
        <div className={styles.text}>
          <h3>{post.title}</h3>
          <p>{post?.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
