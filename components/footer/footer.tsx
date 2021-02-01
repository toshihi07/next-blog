import Link from "next/link";
import styles from "./footer.module.scss";


export function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <p>created by 2021/02</p>
      <p>blog data from markDown</p>
    </footer>
  );
}

export default Footer;

