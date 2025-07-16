import styles from "@app/success/Success.module.css";
import Link from "next/link";

function Success() {
  return (
    <div className={styles.successContainer}>
      <p>خرید موفق بود</p>
      <Link href="/dashboard">رفتن به داشبورد</Link>
    </div>
  );
}

export default Success;
