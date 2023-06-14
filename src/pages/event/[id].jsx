import Layout from "@/components/layout";

import { getAllIds, getNewPostData } from "@/utils/funcs";

export default function NewPost(props) {
  const { title, reactions, body } = props.newPostData;
  console.log(newPostData);
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{body}</p>
      <div>{reactions}❤️</div>
    </Layout>
  );
}

export const getStaticPaths = () => {
  const paths = getAllIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const newPostData = getNewPostData(params.id);

  console.log(newPostData);
  return {
    props: {
      newPostData,
    },
  };
};
