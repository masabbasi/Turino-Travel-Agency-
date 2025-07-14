import PhoneOrder from "@icon/PhoneOrder";
import Search from "@module/Search";
import Slider from "@module/Slider";
import TourCard from "@module/TourCard";
import styles from "@template/HomePage.module.css";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
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
          <TourCard />
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
    </>
  );
}

export default HomePage;
