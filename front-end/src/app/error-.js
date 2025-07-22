"use client";

import Image from "next/image";

import styles from "@app/not-found.module.css";
import Link from "next/link";

function Error() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/Error-Lamp-Robot.webp"
          width={1000}
          height={1000}
          alt="404 - not found"
        />
      </div>
      <div className={styles.buttonContainer}>
        <p>اتصال با سرور برقرار نیست!</p>
        <p>لطفا بعدا دوباره امتحان کنید.</p>
        <Link href="/">
          <button>بازگشت به صفحه اصلی</button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
