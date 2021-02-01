import Head from "next/head";
import styles from "../styles/Index.module.css";
import Layout from "../layouts/layout";
import BlogList from "../components/main/blog-list";
import type { GetStaticProps } from "next";
import { BlogData } from "./type";
import { Props } from "./type";
import { getSortedPostsData } from "../lib/posts";
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

export default Index;
