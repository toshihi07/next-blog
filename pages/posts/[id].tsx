import React from "react";
import Layout from "../../layouts/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utileStyles from "../../styles/utils.module.scss";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  // getStaticProps を、getPostData を呼び出すときに await を使用するように書き換える必要がある
  const postData = await getPostData(params.id);
  console.log(postData);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utileStyles.headingXl}>{postData.title}</h1>
        <div className={utileStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
