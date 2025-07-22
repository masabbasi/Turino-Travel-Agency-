"use client";

import Link from "next/link";

import styles from "@app/success/Success.module.css";

function Success() {
  return (
    <div className={styles.successContainer}>
      <p>خرید با موفقیت انجام شد.</p>
      <Link href="/profile/my-tours">مشاهده لیست تورهای خریداری شده!</Link>
    </div>
  );
}

export default Success;
