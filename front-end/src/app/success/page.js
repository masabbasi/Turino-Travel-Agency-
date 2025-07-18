import styles from "@app/success/Success.module.css";
import Link from "next/link";

function Success() {
  return (
    <div className={styles.successContainer}>
      <p>خرید با موفقیت انجام شد.</p>
      <Link href="/profile/my-tours">مشاهده لیست تورهای خریداری شده!</Link>
    </div>
  );
}

export default Success;
