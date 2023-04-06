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
        <p>{date}</p>
        <Image src={image} width={400} height={300} alt={title} />{" "}
        <h1>{title}</h1>
        <div>{body}</div>
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
