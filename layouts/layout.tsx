
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { NextSeo } from "next-seo";
import {selectUser,login,logout} from '../slice/userSlice'
import {auth} from '../features/firebase'
import type { LayoutProps } from "./types";
import styles from './layout.module.scss'


import Header from '../components/header/header'
import Footer from '../components/footer/footer'


const Layout: React.FC = ({page, children}: LayoutProps)=> {
    //reduxのstoreの中のuserをローカル変数に代入することで、userを使えるようにする。
    const user = useSelector(selectUser);
    // useDispatchでdispatchを作っておく
    const dispatch = useDispatch();

    useEffect(() => {
      //onAuthStateChangedはfirebaseが提供する関数。userの変化を監視する。
      const unSub = auth.onAuthStateChanged((authUser)=>{
        if (authUser) {
          dispatch(login({
            uid: authUser.uid,
            photoUrl: "",
            email: authUser.email,
            displayName: authUser.displayName,
            isLogin: true
          }
          ))
        } else {
          dispatch(logout());
        }
      });
    }, [dispatch])

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

