"use client";

import Image from "next/image";

import styles from "@app/not-found.module.css";

function notFound() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/404.webp"
          width={1000}
          height={1000}
          alt="404 - not found"
        />
      </div>
      <div className={styles.buttonContainer}>
        <p>صفحه مورد نظر یافت نشد!</p>
        <button>بازگشت به صفحه اصلی</button>
      </div>
    </div>
  );
}

export default notFound;
