"use client";

import Image from "next/image";

import styles from "@app/not-found.module.css";
import Link from "next/link";

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
        <Link href="/">
          <button>بازگشت به صفحه اصلی</button>
        </Link>
      </div>
    </div>
  );
}

export default notFound;
