import Image from "next/image";

import HomePage from "@template/HomePage";

import styles from "@app/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.topImage}>
        <Image
          src="/images/topImage.webp"
          width={1500}
          height={350}
          alt="Header Picture"
        />
      </div>
      <HomePage />
    </>
  );
}
