import styles from "@module/TourCard.module.css";
import Image from "next/image";
import Link from "next/link";

function TourCard({ id, image, title, price }) {
  return (
    <div className={styles.tourContainer}>
      <Link href={`/${id}`}>
        <div className={styles.tourImg}>
          <Image src={`${image}`} width={1000} height={1000} alt={`${title}`} />
        </div>
        <div className={styles.tourDetail}>
          <h3>{title}</h3>
          <p>بیه توضیحات...</p>
        </div>
      </Link>
      <div className={styles.tourReserve}>
        <Link href={`/reserve/${id}`}>
          <button>رزرو</button>
        </Link>
        <div className={styles.tourReservePrice}>
          <span>{price}</span> تومان
        </div>
      </div>
    </div>
  );
}

export default TourCard;
