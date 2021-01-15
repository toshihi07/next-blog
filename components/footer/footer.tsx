import Link from "next/link";
import styles from "./footer.module.scss";

const ITEMS = [
  { href: "/", label: "利用規約" },
  { href: "/", label: "プライバシーポリシー" },
  { href: "/", label: "特定商取引法に基づく表記" },
];

export function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <ul className={styles.links} >
        {ITEMS.map(({ href, label }) => (
          <li key={label} className={styles.link}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;

[].map((val) => val)