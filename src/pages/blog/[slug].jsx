import Image from "next/image";
import Layout from "@/components/layout";

import styles from "../../styles/slug.module.scss";

//posts utils
import { getAllSlugs, getPostData } from "@/utils/funcs";

export default function Post(props) {
  const { image, title, date, body } = props.postData;
  return (
    <Layout>
      <div className={styles.slug}>
        <Image
          className={styles.slugImage}
          src={image}
          width={300}
          height={450}
          alt={title}
        />
        <div className={styles.textWrapper}>
          <h1>{title}</h1>
          <div>{body}</div>
          <p>
            <b>{date}</b>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};
