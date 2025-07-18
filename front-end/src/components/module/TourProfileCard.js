"use client";
import { checkTourStatus } from "@helper/checkTourStatus";
import { tourNameFromEnToFa } from "@helper/tourNameFromEnToFa";
import SunFog from "@icon/SunFog";
import styles from "@module/TourProfileCard.module.css";
import { dateToJalaali } from "@utils/jalaali";

function TourProfileCard({
  id,
  startDate,
  endDate,
  title,
  fleetVehicle,
  origin,
  destination,
  price,
}) {
  const { status, style } = checkTourStatus(startDate, endDate);

  return (
    <div className={styles.tourCardContainer}>
      <div className={`${styles.tourStatus} ${styles[style] || ""}`}>
        {status}
      </div>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <SunFog />
          {title}
        </div>
        <div className={styles.headerFleetVehicle}>سفر با {fleetVehicle}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyGo}>
          <div className={styles.bodyGoTitle}>
            {tourNameFromEnToFa(origin.id)}
            {` به `}
            {tourNameFromEnToFa(destination.id)}
          </div>
          <div className={styles.bodyGoDate}> {dateToJalaali(startDate)}</div>
        </div>
        <div className={styles.bodyBack}>
          <div className={styles.bodyBackTitle}>تاریخ برگشت:</div>
          <div className={styles.bodyBackDate}> {dateToJalaali(endDate)}</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerTourId}>
          شماره تور:
          <span> {` TR${id.slice(0, 6)}`}</span>
        </div>
        <div className={styles.footerTourPrice}>
          مبلغ پرداخت شده: <span>{price.toLocaleString("fa-IR")}</span>{" "}
          {` تومان`}
        </div>
      </div>
    </div>
  );
}

export default TourProfileCard;
