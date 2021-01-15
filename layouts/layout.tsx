
import React from 'react'
import { NextSeo } from "next-seo";
import type { LayoutProps } from "./types";
import styles from './layout.module.scss'


import Header from '../components/header/header'
import Footer from '../components/footer/footer'


const Layout = ({page, children}: LayoutProps)=> {
  return (
    <>
      <NextSeo
        title={`Landing page - ${page}`}
      />
      <Header />
      
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;

