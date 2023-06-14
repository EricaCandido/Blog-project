import styles from "./footer.module.scss";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.wrapper}>
        <ul className={styles.socialMedia}>
          <h3>Social media</h3>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsFacebook />
          </li>
          <li>
            <a href="https://www.linkedin.com/in/erica-candido-8085a4259/">
              <BsLinkedin />
            </a>
          </li>
        </ul>
        <ul className={styles.company}>
          <h3>Company</h3>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Contacts</Link>
          </li>

          <li>
            <Link href="/">News</Link>
          </li>
        </ul>

        <ul className={styles.cities}>
          <h3>Eventi da non perdere</h3>
          <li>
            <Link href="/events">Shania Twain</Link>
          </li>
          <li>
            <Link href="/events">Queen Of Me Tour</Link>
          </li>
          <li>
            <Link href="/events">Hamilton (Touring)</Link>
          </li>
        </ul>
      </div>
      <p>Created by Erica Candido</p>
    </div>
  );
};

export default Footer;
