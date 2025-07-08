import Header from "@layout/Header";
import Footer from "@layout/Footer";
import styles from "@layout/Layout.module.css";
import Image from "next/image";

function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Header />
      </div>
      <div className={styles.topImage}>
        <Image
          src="/images/topImage.webp"
          width={1500}
          height={350}
          alt="Header Picture"
        />
      </div>
      <div className={styles.container}>
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
