import PhoneOrder from "@icon/PhoneOrder";
import Search from "@module/Search";
import Slider from "@module/Slider";
import TourCard from "@module/TourCard";
import api from "@services/config";
import styles from "@template/HomePage.module.css";
import Image from "next/image";
import Link from "next/link";

async function HomePage({ searchParams }) {
  let tours = [];
  const { origin, destination, startDate } = searchParams;
  console.log("searchParams", searchParams);

  if (!!origin || !!destination || !!startDate) {
    const params = [];
    if (destination) params.push(`destinationId=${destination}`);
    if (origin) params.push(`originId=${origin}`);
    if (startDate) params.push(`startDate=${startDate}`);
    const url = `/tour${params.length ? `?${params.join("&")}` : ""}`;
    tours = await api.get(url);
  } else {
    tours = await api.get("/tour");
  }

  return (
    <>
      <p className={styles.topText}>
        <span>تورینو </span>
        <span>برگزار کننده بهترین تور های داخلی و خارجی</span>
      </p>
      <div>
        <Search />
      </div>
      <div className={styles.tours}>
        <h2>همه تور ها</h2>
        <div className={styles.toursContainer}>
          {tours.length ? (
            <>
              {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} />
              ))}
            </>
          ) : (
            <div className={styles.notFound}>
              <p>توری با نیاز شما یافت نشد!</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.phoneOrder}>
        <div className={styles.phoneOrderTop}>
          <div className={styles.phoneOrderTopText}>
            <p>
              خرید تلفنی از <span> تورینو</span>
            </p>
            <p>به هرکجا که میخواهید!</p>
          </div>
          <div className={styles.phoneOrderTopImg}>
            <Image
              src="/images/man-talking.webp"
              width={1500}
              height={350}
              alt="Header Picture"
            />
          </div>
        </div>
        <div className={styles.phoneOrderButtom}>
          <div className={styles.phoneOrderButtomTel}>
            <PhoneOrder /> <span>021-1840</span>
          </div>
          <div className={styles.phoneOrderButtomMore}>
            <Link href="#">اطلاعات بیشتر</Link>
          </div>
        </div>
      </div>

      <Slider />

      <div className={styles.featuresContainer}>
        <div className={styles.featuresItem}>
          <Image
            src="/images/feature-1.webp"
            width={1500}
            height={350}
            alt="feature-1"
          />
          <div className={styles.featuresItemDetail}>
            <p>بصرفه ترین قیمت</p>
            <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
          </div>
        </div>
        <div className={styles.featuresItem}>
          <Image
            src="/images/feature-2.webp"
            width={1500}
            height={350}
            alt="feature-2"
          />
          <div className={styles.featuresItemDetail}>
            <p>پشتیبانی</p>
            <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
          </div>
        </div>
        <div className={styles.featuresItem}>
          <Image
            src="/images/feature-3.webp"
            width={1500}
            height={350}
            alt="feature-3"
          />
          <div className={styles.featuresItemDetail}>
            <p>رضایت کاربران</p>
            <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
