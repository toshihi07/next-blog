import Head from "next/head";
import styles from "../styles/Index.module.css";
import Layout from "../layouts/layout";
import BlogList from "../components/main/blog-list";
import SsrBlogItem from "../components/main/ssr-blog-list";
import type { GetStaticProps, GetServerSideProps } from "next";
import type { Props,ServerSideProps} from "./type";
import { getSortedPostsData } from "../lib/ssg/posts";
import { getAllPostDatas } from "../lib/ssr/posts";
import utilsStyles from "../styles/utils.module.scss";

import Link from "next/link";
import Date from "../components/date";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogDatas = await getSortedPostsData();
  console.log(blogDatas);
  return {
    props: {
      blogDatas,
    },
  };
};

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//     const postDatas = await getAllPostDatas();
//     console.log(postDatas)
//     return {
//       props: {
//         postDatas
//       }
//   }
// }

const Index = ({ blogDatas }): JSX.Element => {
  console.log(blogDatas);
  return (
    <>
      <Head>
        <title>next-blog</title>
      </Head>
      <Layout>
        <BlogList blogDatas={blogDatas} />
      </Layout>
    </>
  );
};

const SsrIndex = ({ blogDatas }: getStaticProps): JSX.Element => {
  console.log(blogDatas);
  return (
    <>
      <Head>
        <title>next-blog</title>
      </Head>
      <Layout>
        <BlogList blogDatas={blogDatas} />
      </Layout>
    </>
  );
};


export default SsrIndex
