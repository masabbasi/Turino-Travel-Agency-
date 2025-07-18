import styles from "@module/TourCard.module.css";
import Image from "next/image";
import Link from "next/link";
import ReserveButton from "../element/ReserveButton";

function TourCard({ id, image, title, price, options }) {
  return (
    <div className={styles.tourContainer}>
      <Link href={`/tour/${id}`}>
        <div className={styles.tourImg}>
          <Image src={`${image}`} width={1000} height={1000} alt={`${title}`} />
        </div>
        <div className={styles.tourDetail}>
          <h3>{title}</h3>
          <p className={styles.options}>
            {options.map((item, index) => (
              <span key={index}>
                <span>{item} </span>
              </span>
            ))}
          </p>
        </div>
      </Link>
      <div className={styles.tourReserve}>
        <ReserveButton id={id} />
        <div className={styles.tourReservePrice}>
          <span>{price}</span> تومان
        </div>
      </div>
    </div>
  );
}

export default TourCard;
