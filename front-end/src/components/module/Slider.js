"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@module/Slider.module.css";

function Slider() {
  return (
    <>
      <div className={styles.whyTorino}>
        <div className={styles.whyTorinoTop}>
          <div className={styles.whyTorinoTopTitle}>
            <div className={styles.whyTorinoTopTitleBullet}>?</div>
            <h2>
              چرا <span>تورینو</span> ؟
            </h2>
          </div>
          <div className={styles.whyTorinoTopDescription}>
            <p>تور طبیعت گردی و تاریخی </p>
            <p>
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
              طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
              تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
              گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
              فرهنگی و تاریخی را خریداری کنید.
            </p>
          </div>
        </div>
        <div className={styles.whyTorinoButtom}>
          <div className={styles.whyTorinoButtomSlider}>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              loop={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/images/tour-01.png" alt="tour-01" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/tour-02.png" alt="tour-02" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/tour-03.png" alt="tour-03" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/tour-04.png" alt="tour-04" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
