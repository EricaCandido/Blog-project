import Header from "../header";
import Footer from "../footer";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Header />
      <section>{children}</section>

      <Footer />
    </div>
  );
};

export default Layout;
