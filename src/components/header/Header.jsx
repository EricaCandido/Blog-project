import styles from "./header.module.scss";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [visibility, setVisibility] = useState(false);
  const onHandleClick = () => {
    setVisibility(!visibility);
    console.log(visibility);
  };
  return (
    <div className={styles.header}>
      <BiMenuAltLeft className={styles.hambMenu} onClick={onHandleClick} />
      {
        <ul className={visibility ? styles.show : styles.hambMenuContent}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/event">Events</Link>
          </li>
        </ul>
      }
      <ul className={styles.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/event">Events</Link>
        </li>
      </ul>
      <Link href="/" className={styles.logo}>
        <h1>soundVibes.</h1>
      </Link>
    </div>
  );
};

export default Header;
