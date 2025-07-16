import api from "@services/config";
import Image from "next/image";
import styles from "@app/[tourId]/TourDetail.module.css";
import { calculateTourDuration } from "@utils/calculateTourDuration";
import TourDetailUserTick from "@icon/TourDetailUserTick";
import TourDetailMap from "@icon/TourDetailMap";
import TourDetailMedalStar from "@icon/TourDetailMedalStar";
import Routing from "@icon/Routing";
import Calendar from "@icon/Calendar";
import Bus from "@icon/Bus";
import Profile2User from "@icon/Profile2User";
import Security from "@icon/Security";
import { dateToJalaali } from "@utils/jalaali";
import ReserveButton from "src/components/element/ReserveButton";

async function TourDetail({ params }) {
  const data = await api.get(`/tour/${params.tourId}`);

  const {
    id,
    image,
    title,
    startDate,
    endDate,
    price,
    origin,
    availableSeats,
  } = data;

  const { days, nights } = calculateTourDuration(startDate, endDate);

  return (
    <div className={styles.tourDetailContainer}>
      <div className={styles.tourDetailImg}>
        <Image src={`${image}`} width={1000} height={1000} alt={`${title}`} />
      </div>
      <div className={styles.tourDetailTitle}>
        <div className={styles.tourDetailTitleMain}>
          <h1>{title}</h1>
          <p>
            {days && `${days} روز `}
            {days && nights && "و "}
            {nights && `${nights} شب`}
          </p>
        </div>
        <div className={styles.tourTitleDetail}>
          <p>
            <TourDetailUserTick />
            تورلیدر از مبدا
          </p>
          <p>
            <TourDetailMap />
            برنامه سفر
          </p>
          <p>
            <TourDetailMedalStar />
            تضمین کیفیت
          </p>
        </div>
      </div>
      <div className={styles.tourDetailservices}>
        <div className={styles.tourDetailservicesUItem}>
          <div className={styles.tourDetailservicesUItemTitle}>
            <Routing />
            مبدا
          </div>
          <div className={styles.tourDetailservicesUItemCurrentTitle}>
            {origin.name}
          </div>
        </div>
        <div className={styles.tourDetailservicesUItem}>
          <div className={styles.tourDetailservicesUItemTitle}>
            <Calendar /> تاریخ رفت
          </div>
          <div className={styles.tourDetailservicesUItemCurrentTitle}>
            {dateToJalaali(startDate)}
          </div>
        </div>
        <div className={styles.tourDetailservicesUItem}>
          <div className={styles.tourDetailservicesUItemTitle}>
            <Calendar />
            تاریخ برگشت
          </div>
          <div className={styles.tourDetailservicesUItemCurrentTitle}>
            {" "}
            {dateToJalaali(endDate)}
          </div>
        </div>
        <div className={styles.tourDetailservicesUItem}>
          <div className={styles.tourDetailservicesUItemTitle}>
            <Bus />
            حمل و نقل
          </div>
          <div className={styles.tourDetailservicesUItemCurrentTitle}>
            اتوبوس
          </div>
        </div>
        <div className={styles.tourDetailservicesUItem}>
          <div className={styles.tourDetailservicesUItemTitle}>
            <Profile2User />
            ظرفیت
          </div>
          <div className={styles.tourDetailservicesUItemCurrentTitle}>
            {availableSeats}
          </div>
        </div>
        <div className={styles.tourDetailservicesUItem}>
          <div className={styles.tourDetailservicesUItemTitle}>
            <Security />
            بیمه
          </div>
          <div className={styles.tourDetailservicesUItemCurrentTitle}>
            بیمه 50 هزار دیناری
          </div>
        </div>
      </div>
      <div className={styles.tourDetailReserve}>
        <ReserveButton id={id} />
        <div className={styles.tourDetailReservePice}>
          <span>{price}</span>
          تومان
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
