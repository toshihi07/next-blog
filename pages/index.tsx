import Head from "next/head";
import styles from "../styles/Index.module.css";
import Layout from '../layouts/layout'
import BlogList from '../components/main/blog-list'
import type { GetStaticProps } from "next";
import {BlogData} from './type'
import {Props} from './type'




export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogDatas: Array<BlogData> = [
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "001",
      author: "author001",
    },
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "002",
      author: "author002",
    },
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "003",
      author: "author003",
    },
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "002",
      author: "author002",
    },
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "002",
      author: "author002",
    },
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "002",
      author: "author002",
    },
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "002",
      author: "author002",
    },
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "002",
      author: "author002",
    },
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "002",
      author: "author002",
    },
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "002",
      author: "author002",
    },
    {
      img:
        "https://images.unsplash.com/photo-1457301547464-91995555cd25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "002",
      author: "author002",
    },
  ]
  return {
      props: {blogDatas: blogDatas}
  }
}


const Index = ({blogDatas}): JSX.Element => {
  return (
    <>
      <Head>
        <title>landing sample</title>
      </Head>
      <Layout>
        <BlogList blogDatas={blogDatas}/>
    </Layout>
    </>
  );
};

export default Index;
